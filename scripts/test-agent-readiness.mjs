import fs from "node:fs";
import path from "node:path";

const PORT = 3456;
const BASE_URL = `http://127.0.0.1:${PORT}`;

async function fetchUrl(urlPath, headers = {}) {
  const url = new URL(urlPath, BASE_URL);
  const response = await fetch(url, { headers });
  const text = await response.text();
  return {
    status: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    text,
  };
}

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    process.exit(1);
  } else {
    console.log(`✅ PASSED: ${message}`);
  }
}

async function runStaticFileChecks() {
  console.log("\n--- Checking Static Machine-Readable Files ---");

  // 1. Check llms.txt
  const llmsTxt = fs.readFileSync(path.join(process.cwd(), "public", "llms.txt"), "utf8");
  assert(llmsTxt.includes("## When to use this"), "public/llms.txt contains '## When to use this' section");
  assert(llmsTxt.includes("mrzak051@gmail.com"), "public/llms.txt contains contact email");
  assert(llmsTxt.length > 500, `public/llms.txt has ${llmsTxt.length} characters (> 500 required)`);

  // 2. Check llms-full.txt
  const llmsFullTxt = fs.readFileSync(path.join(process.cwd(), "public", "llms-full.txt"), "utf8");
  assert(llmsFullTxt.includes("## When to use this"), "public/llms-full.txt contains '## When to use this' section");
  assert(llmsFullTxt.length > 1000, `public/llms-full.txt has ${llmsFullTxt.length} characters (> 1000 required)`);

  // 3. Check agent-instructions.txt
  const agentInstructions = fs.readFileSync(path.join(process.cwd(), "public", "agent-instructions.txt"), "utf8");
  assert(agentInstructions.includes("## When to use this"), "public/agent-instructions.txt contains '## When to use this' section");
  assert(agentInstructions.length > 500, `public/agent-instructions.txt has ${agentInstructions.length} characters (> 500 required)`);
}

async function runHttpChecks() {
  console.log("\n--- Checking HTTP Endpoints & Content Negotiation ---");

  // 1. Agent-friendly 404s (Essential, Partial -> Full)
  const res404Html = await fetchUrl("/nonexistent-agent-test-path");
  assert(res404Html.status === 404, "GET /nonexistent returns HTTP 404 for HTML");

  const res404Md = await fetchUrl("/nonexistent-agent-test-path", { Accept: "text/markdown" });
  assert(res404Md.status === 404, "GET /nonexistent with Accept: text/markdown returns HTTP 404");
  assert(
    res404Md.headers["content-type"]?.includes("text/markdown"),
    "404 markdown response has Content-Type: text/markdown"
  );
  assert(
    res404Md.headers["vary"]?.toLowerCase().includes("accept"),
    "404 markdown response includes Vary: Accept"
  );
  assert(
    res404Md.text.includes("/sitemap.xml") && res404Md.text.includes("/llms.txt"),
    "404 markdown body contains recovery links (sitemap, llms.txt)"
  );

  const res404DotMd = await fetchUrl("/nonexistent-agent-test-path.md");
  assert(res404DotMd.status === 404, "GET /nonexistent.md returns HTTP 404");
  assert(
    res404DotMd.headers["content-type"]?.includes("text/markdown"),
    "GET /nonexistent.md response has Content-Type: text/markdown"
  );

  // 2. Markdown content negotiation (acceptmarkdown.com) (Essential, Failed -> Full)
  const resHomeMd = await fetchUrl("/", { Accept: "text/markdown" });
  assert(resHomeMd.status === 200, "GET / with Accept: text/markdown returns 200 OK");
  assert(
    resHomeMd.headers["content-type"]?.includes("text/markdown"),
    "GET / with Accept: text/markdown returns Content-Type: text/markdown"
  );
  assert(
    resHomeMd.headers["vary"]?.toLowerCase().includes("accept"),
    "GET / with Accept: text/markdown returns Vary: Accept"
  );
  assert(
    resHomeMd.text.includes("Yahia Mohamed Zakaria Youssef"),
    "Markdown representation contains full candidate name"
  );

  const resHomeHtml = await fetchUrl("/", { Accept: "text/html" });
  assert(resHomeHtml.status === 200, "GET / with Accept: text/html returns 200 OK");
  assert(
    resHomeHtml.headers["vary"]?.toLowerCase().includes("accept"),
    "GET / with Accept: text/html returns Vary: Accept"
  );

  const res406 = await fetchUrl("/", { Accept: "application/pdf" });
  assert(res406.status === 406, "GET / with Accept: application/pdf returns 406 Not Acceptable");
  assert(
    res406.headers["vary"]?.toLowerCase().includes("accept"),
    "406 response includes Vary: Accept"
  );

  // q-value precedence test
  const resQMd = await fetchUrl("/", { Accept: "text/markdown;q=0.9, text/html;q=0.5" });
  assert(
    resQMd.headers["content-type"]?.includes("text/markdown"),
    "Higher q for text/markdown returns markdown"
  );

  const resQHtml = await fetchUrl("/", { Accept: "text/markdown;q=0.3, text/html;q=0.8" });
  assert(
    resQHtml.headers["content-type"]?.includes("text/html"),
    "Higher q for text/html returns HTML"
  );

  // .md URL aliases
  const resAboutMd = await fetchUrl("/about.md");
  assert(resAboutMd.status === 200, "GET /about.md returns 200 OK");
  assert(
    resAboutMd.headers["content-type"]?.includes("text/markdown"),
    "GET /about.md returns Content-Type: text/markdown"
  );
  assert(resAboutMd.text.includes("Menoufia University"), "About markdown contains university background");

  const resContactMd = await fetchUrl("/contact.md");
  assert(resContactMd.status === 200, "GET /contact.md returns 200 OK");
  assert(resContactMd.text.includes("mrzak051@gmail.com"), "Contact markdown contains email");

  const resPrivacyMd = await fetchUrl("/privacy.md");
  assert(resPrivacyMd.status === 200, "GET /privacy.md returns 200 OK");
  assert(resPrivacyMd.text.includes("Privacy Policy"), "Privacy markdown contains Privacy Policy");

  const resBlogMd = await fetchUrl("/blog/building-astra.md");
  assert(resBlogMd.status === 200, "GET /blog/building-astra.md returns 200 OK");
  assert(resBlogMd.text.includes("Stars Converter") || resBlogMd.text.includes("ASTRA"), "Blog markdown contains content");

  // 3. Trust anchor pages (Recommended, Partial -> Full)
  const resAbout = await fetchUrl("/about");
  assert(resAbout.status === 200, "GET /about returns 200 OK");
  assert(resAbout.text.length > 500, `GET /about body length is ${resAbout.text.length} chars (> 500 required)`);

  const resContact = await fetchUrl("/contact");
  assert(resContact.status === 200, "GET /contact returns 200 OK");
  assert(resContact.text.length > 500, `GET /contact body length is ${resContact.text.length} chars (> 500 required)`);

  const resPrivacy = await fetchUrl("/privacy");
  assert(resPrivacy.status === 200, "GET /privacy returns 200 OK");
  assert(resPrivacy.text.length > 500, `GET /privacy body length is ${resPrivacy.text.length} chars (> 500 required)`);

  // Sitemap & Robots
  const resSitemap = await fetchUrl("/sitemap.xml");
  assert(resSitemap.status === 200, "GET /sitemap.xml returns 200 OK");
  assert(resSitemap.text.includes("/about"), "Sitemap includes /about");
  assert(resSitemap.text.includes("/contact"), "Sitemap includes /contact");
  assert(resSitemap.text.includes("/privacy"), "Sitemap includes /privacy");

  const resRobots = await fetchUrl("/robots.txt");
  assert(resRobots.status === 200, "GET /robots.txt returns 200 OK");
  assert(resRobots.text.includes("/agent-instructions.txt"), "Robots.txt allows /agent-instructions.txt");

  console.log("\n✨ ALL AGENT READINESS VERIFICATIONS PASSED SUCCESSFULLY! ✨\n");
}

async function main() {
  await runStaticFileChecks();
  await runHttpChecks();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
