import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Shield, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | devYahia",
  description:
    "Privacy policy and data transparency practices for https://www.devyahia.me by Yahia Mohamed Zakaria Youssef.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | devYahia",
    description:
      "Privacy policy and data transparency practices for https://www.devyahia.me.",
    url: `${siteConfig.url}/privacy`,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | devYahia",
    description:
      "Privacy policy and data transparency practices for https://www.devyahia.me.",
    creator: "@YahiaSWE",
    images: ["/opengraph-image"],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd type="website" />
      <Navbar />
      <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-red-900/50 pt-32 pb-24">
        <article className="mx-auto max-w-4xl px-6">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Homepage
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 border border-red-500/20 text-red-400 mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>Transparency & Data Protection</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-zinc-400 text-sm">
              Effective Date: January 1, 2026 &middot; Last Revised: August 2026
            </p>
          </div>

          {/* Privacy Guarantees Highlight */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero Tracking Cookies</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                No third-party marketing or cross-site tracking cookies are stored on your device.
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>No Data Monetization</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We never sell, trade, or distribute your personal contact information to third parties.
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Encrypted in Transit</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                All traffic is strictly encrypted using modern HTTPS and TLS standards.
              </p>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-10 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                1. Overview and Scope
              </h2>
              <p>
                This Privacy Policy describes how Yahia Mohamed Zakaria Youssef (&quot;devYahia&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) handles information across the website{" "}
                <span className="font-mono text-zinc-200">https://www.devyahia.me</span>. We value the privacy of every human visitor and automated crawler. This document details what technical information is processed when accessing the site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                2. Information We Process
              </h2>
              <p>
                <strong>Direct Correspondence:</strong> When you contact Yahia Zakaria directly via email ({siteConfig.links.email}) or professional networks (GitHub, LinkedIn, X), we receive the information you explicitly provide (such as your name, email address, company details, and project description). We use this information exclusively to communicate with you and evaluate potential collaborations.
              </p>
              <p>
                <strong>Server & Edge Logs:</strong> Like virtually all websites, when you load a page, server infrastructure (such as Vercel and Cloudflare) temporarily logs technical request data including your IP address, browser user-agent, requested URL, and timestamps. This logging is necessary to protect against DDoS attacks, enforce rate limits, and ensure system uptime.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                3. Cookies and Analytics
              </h2>
              <p>
                This portfolio website is designed to be lightweight and private. We do not use third-party analytics suites that track individual users across the web, nor do we employ behavioral advertising trackers. Any performance metrics gathered are aggregate, privacy-preserving edge metrics provided by the hosting runtime.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                4. Third-Party Infrastructure and External Links
              </h2>
              <p>
                This website is hosted on modern cloud infrastructure provided by Vercel Inc. and Cloudflare Inc. When you click external links to third-party platforms (such as GitHub, LinkedIn, Telegram, or X), your activity on those external platforms is governed by their respective privacy policies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                5. Data Retention and Security
              </h2>
              <p>
                Direct email correspondence is retained only as long as necessary to maintain active professional communications or satisfy business accounting requirements. We implement industry-standard administrative and technical safeguards to secure our systems.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                6. Your Privacy Rights
              </h2>
              <p>
                Depending on your jurisdiction (such as GDPR in Europe or applicable state privacy statutes), you may have the right to request access to, correction of, or deletion of any personal correspondence stored by us. To exercise any of these rights, please contact us directly.
              </p>
            </section>

            <section className="space-y-3 border-t border-zinc-800 pt-8">
              <h2 className="text-xl font-bold text-white tracking-tight">
                7. Contact & Privacy Inquiries
              </h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy, please reach out via email:
              </p>
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span className="font-mono text-white text-sm">
                    {siteConfig.links.email}
                  </span>
                </div>
                <a
                  href={`mailto:${siteConfig.links.email}?subject=Privacy%20Policy%20Inquiry`}
                  className="text-xs font-semibold px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors"
                >
                  Contact Privacy Lead
                </a>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
