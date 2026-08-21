import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Clock,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Shield,
  Twitter,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Yahia Zakaria | Backend Engineering & Consulting",
  description:
    "Get in touch with Yahia Mohamed Zakaria Youssef (devYahia) for backend software engineering roles, system architecture consulting, and production deployments.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Yahia Zakaria | Backend Engineering & Consulting",
    description:
      "Get in touch with Yahia Mohamed Zakaria Youssef for backend roles, system architecture consulting, and production deployments.",
    url: `${siteConfig.url}/contact`,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Yahia Zakaria | Backend Engineering & Consulting",
    description:
      "Get in touch with Yahia Mohamed Zakaria Youssef for backend roles, system architecture consulting, and production deployments.",
    creator: "@YahiaSWE",
    images: ["/opengraph-image"],
  },
};

const channels = [
  {
    name: "Primary Email",
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
    icon: Mail,
    badge: "Direct & Fast",
    description: "Best for job inquiries, project proposals, and detailed technical discussions.",
  },
  {
    name: "GitHub",
    value: "github.com/devYahia",
    href: siteConfig.links.github,
    icon: Github,
    badge: "Code & Contributions",
    description: "Explore open-source repositories, case study prototypes, and commit history.",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/yahia-zakaria-911149265",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    badge: "Professional Network",
    description: "Connect for corporate networking, recommendations, and verified career credentials.",
  },
  {
    name: "X (Twitter)",
    value: "@YahiaSWE",
    href: siteConfig.links.twitter,
    icon: Twitter,
    badge: "Short Updates & DMs",
    description: "Follow for real-time engineering thoughts, tech releases, and direct messaging.",
  },
  {
    name: "Telegram Product",
    value: "@stars_converterbot",
    href: "https://t.me/stars_converterbot",
    icon: MessageSquare,
    badge: "Live Bot & Commerce",
    description: "Interact with the live production Telegram commerce platform built by Yahia.",
  },
];

const guidelines = [
  {
    title: "Full-Time & Contract Roles",
    text: "Open to remote backend software engineering roles (Python, Node.js, TypeScript, Go). Please include team size, tech stack, and role responsibilities.",
  },
  {
    title: "System Architecture Consulting",
    text: "Available for payment pipeline reviews, Docker infrastructure design, Telegram bot/Mini App development, and database performance tuning.",
  },
  {
    title: "Response Time Guarantee",
    text: "I typically reply to all direct email inquiries within 24 hours on business days. Direct email is the highest priority channel.",
  },
  {
    title: "Timezone & Availability",
    text: "Operating out of Egypt (UTC+2 / EET), which offers comfortable overlap with European (CET/GMT), Middle Eastern (GST), and Eastern US working hours.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd type="website" />
      <Navbar />
      <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-red-900/50 pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          {/* Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
              <Send className="w-3.5 h-3.5" />
              <span>Direct Communication Channel</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Let&apos;s Build Something <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-zinc-200">
                Resilient & Scalable
              </span>
            </h1>

            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
              Whether you are hiring for a backend engineering role, exploring architecture consulting, or looking to build a high-performance system, I am ready to collaborate.
            </p>
          </div>

          {/* Contact Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {channels.map((ch) => {
              const Icon = ch.icon;
              return (
                <a
                  key={ch.name}
                  href={ch.href}
                  target={ch.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={ch.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-500/40 hover:bg-zinc-900/80 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-200 group-hover:text-red-400 group-hover:border-red-500/30 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">
                        {ch.badge}
                      </span>
                    </div>

                    <h2 className="text-base font-semibold text-zinc-100 group-hover:text-white mb-1">
                      {ch.name}
                    </h2>
                    <p className="text-xs font-mono text-red-400/90 truncate mb-3">
                      {ch.value}
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {ch.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 group-hover:text-zinc-300">
                    <span>Connect &rarr;</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </a>
              );
            })}

            {/* Quick Status Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-950/20 via-zinc-900/40 to-zinc-900/60 border border-red-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                    Current Availability
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Open for Opportunities
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Currently accepting contract work, freelance projects, and full-time remote backend software engineering roles.
                </p>
              </div>

              <div className="space-y-2 text-xs text-zinc-400 border-t border-zinc-800 pt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Egypt (Remote Global)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>UTC+2 (Eastern European Time)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Engagement Guidelines */}
          <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 mb-12">
            <h2 className="text-xl font-bold tracking-tight text-white mb-6 flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-red-500" />
              Engagement & Inquiry Guidelines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guidelines.map((g) => (
                <div key={g.title} className="space-y-1.5">
                  <h3 className="text-sm font-semibold text-zinc-200">
                    {g.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {g.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center space-y-4">
            <h2 className="text-xl font-bold text-white">
              Ready to discuss an engineering challenge?
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              Drop an email directly to <span className="text-zinc-200 font-mono">{siteConfig.links.email}</span> with your project goals or team needs.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
              >
                <Mail className="w-4 h-4" />
                Send Email to {siteConfig.links.email}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
