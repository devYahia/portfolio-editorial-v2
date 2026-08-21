import { NextRequest, NextResponse } from "next/server";

const PRODUCES = ["text/html", "text/markdown"];

interface AcceptEntry {
  type: string;
  q: number;
  specificity: number;
}

function parseAccept(header: string): AcceptEntry[] {
  return header
    .split(",")
    .map((raw) => {
      const parts = raw.trim().split(";").map((s) => s.trim());
      const type = parts[0].toLowerCase();
      let q = 1;
      for (const param of parts.slice(1)) {
        const [name, value] = param.split("=").map((s) => s.trim());
        if (name === "q") {
          const parsed = Number(value);
          if (!Number.isNaN(parsed)) q = Math.max(0, Math.min(1, parsed));
        }
      }
      const specificity = type === "*/*" ? 0 : type.endsWith("/*") ? 1 : 2;
      return { type, q, specificity };
    });
}

function matches(entry: AcceptEntry, candidate: string): boolean {
  if (entry.type === "*/*") return true;
  if (entry.type.endsWith("/*")) return candidate.startsWith(entry.type.slice(0, -1));
  return entry.type === candidate;
}

function preferredType(header: string | null): string | null {
  if (!header) return PRODUCES[0]; // default to text/html
  const entries = parseAccept(header);
  if (entries.length === 0) return PRODUCES[0];

  let bestType: string | null = null;
  let bestQ = -1;
  let bestPosition = Infinity;

  for (const candidate of PRODUCES) {
    let matched: AcceptEntry | null = null;
    let matchedPosition = Infinity;

    for (let idx = 0; idx < entries.length; idx++) {
      const e = entries[idx];
      if (!matches(e, candidate)) continue;
      if (
        matched === null ||
        e.specificity > matched.specificity ||
        (e.specificity === matched.specificity && idx < matchedPosition)
      ) {
        matched = e;
        matchedPosition = idx;
      }
    }

    if (matched === null) continue;
    const matchedQ: number = matched.q;
    if (matchedQ <= 0) continue; // explicit rejection

    if (matchedQ > bestQ || (matchedQ === bestQ && matchedPosition < bestPosition)) {
      bestQ = matchedQ;
      bestPosition = matchedPosition;
      bestType = candidate;
    }
  }

  return bestType;
}

function appendVaryAccept(headers: Headers): void {
  const existing = headers.get("Vary");
  if (!existing) {
    headers.set("Vary", "Accept");
    return;
  }
  const tokens = existing.split(",").map((s) => s.trim().toLowerCase());
  if (!tokens.includes("accept")) {
    headers.set("Vary", `${existing}, Accept`);
  }
}

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Explicit .md URL: always Markdown, regardless of Accept header.
  if (pathname.endsWith(".md")) {
    const rawPath = pathname.slice(0, -3) || "/";
    const url = req.nextUrl.clone();
    url.pathname = `/api/markdown${rawPath === "/" ? "" : rawPath}`;
    const rewritten = NextResponse.rewrite(url);
    appendVaryAccept(rewritten.headers);
    return rewritten;
  }

  const acceptHeader = req.headers.get("accept");
  const chosen = preferredType(acceptHeader);

  if (chosen === "text/markdown") {
    const url = req.nextUrl.clone();
    url.pathname = `/api/markdown${pathname === "/" ? "" : pathname}`;
    const rewritten = NextResponse.rewrite(url);
    appendVaryAccept(rewritten.headers);
    return rewritten;
  }

  if (chosen === null && acceptHeader) {
    return new Response(
      "Not Acceptable\n\nAvailable representations: text/html, text/markdown\n",
      {
        status: 406,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Vary": "Accept",
        },
      }
    );
  }

  const res = NextResponse.next();
  appendVaryAccept(res.headers);
  return res;
}

export const config = {
  // Exclude Next.js internals, Vercel routes, and static asset extensions (except .md)
  matcher: [
    "/((?!api/|_next/static|_next/image|_vercel|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf|xml|txt|ico|json)$).*)",
  ],
};
