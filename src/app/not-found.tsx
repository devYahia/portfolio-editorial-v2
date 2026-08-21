import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";
import { ArrowLeft, Compass, FileText, Home, Mail, ShieldAlert, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist on devyahia.me.",
  robots: {
    index: false,
    follow: true,
  },
};

const recoveryLinks = [
  {
    title: "Homepage",
    description: "Explore the main overview, featured systems, and tech stack.",
    href: "/",
    icon: Home,
  },
  {
    title: "About Yahia",
    description: "Learn about background, philosophy, and engineering track record.",
    href: "/about",
    icon: Compass,
  },
  {
    title: "Get in Touch",
    description: "Direct contact channels, availability, and engagement scopes.",
    href: "/contact",
    icon: Mail,
  },
  {
    title: "Case Studies",
    description: "Deep dive into production architectures and shipped systems.",
    href: "/#projects",
    icon: Sparkles,
  },
  {
    title: "Technical Blog",
    description: "Writings on fintech ledgers, system scaling, and engineering.",
    href: "/blog",
    icon: FileText,
  },
  {
    title: "Machine-Readable Context",
    description: "Structured markdown summary for AI agents and LLMs.",
    href: "/llms.txt",
    icon: FileText,
  },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-red-900/50 pt-32 pb-24 px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>HTTP 404 &middot; Resource Not Found</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Lost in the Architecture?
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mb-12">
            The route you requested does not exist or has moved. If you are an AI assistant or human visitor, use the verified destinations below to recover.
          </p>

          {/* Recovery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {recoveryLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 hover:bg-zinc-900/90 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-zinc-200 group-hover:text-red-400 group-hover:border-red-500/30 transition-colors mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h2 className="font-semibold text-zinc-100 group-hover:text-white text-base mb-1">
                      {item.title}
                    </h2>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 group-hover:text-red-400 mt-4 inline-flex items-center gap-1">
                    Navigate &rarr;
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Fallback actions */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-zinc-800/80">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Homepage
            </Link>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium text-sm hover:border-zinc-700 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              Report Broken Link
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
