import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Award,
  CheckCircle2,
  Code2,
  Database,
  GraduationCap,
  Layers,
  Mail,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Yahia Zakaria | Backend-Heavy Software Engineer",
  description:
    "Learn about Yahia Mohamed Zakaria Youssef (devYahia) - background, architectural principles, production systems, and engineering track record.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Yahia Zakaria | Backend-Heavy Software Engineer",
    description:
      "Background, engineering principles, and production track record of Yahia Mohamed Zakaria Youssef.",
    url: `${siteConfig.url}/about`,
    type: "profile",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Yahia Zakaria | Backend-Heavy Software Engineer",
    description:
      "Background, engineering principles, and production track record of Yahia Mohamed Zakaria Youssef.",
    creator: "@YahiaSWE",
    images: ["/opengraph-image"],
  },
};

const competencies = [
  {
    title: "Fintech & Payment Systems",
    icon: Zap,
    description:
      "Architecting idempotent multi-product ledgers, automated webhook reconciliation pipelines, Telegram Stars processing, and TON blockchain payment integrations with strict state machines.",
  },
  {
    title: "Container Infrastructure & DevOps",
    icon: Server,
    description:
      "Decoupled registry deployments via GitHub Container Registry (GHCR), dynamic Docker lab runner isolation, reverse proxies with Caddy and Nginx, and self-hosted VPS stacks using Coolify.",
  },
  {
    title: "High-Performance APIs",
    icon: Database,
    description:
      "Developing resilient RESTful APIs using FastAPI, NestJS, and Node.js. Designing optimized relational schemas in PostgreSQL and utilizing Redis for caching, rate limiting, and BullMQ queues.",
  },
  {
    title: "Full-Stack Web Delivery",
    icon: Layers,
    description:
      "Building performant, accessible web applications and Telegram Mini Apps with Next.js App Router, TypeScript, Tailwind CSS, Prisma ORM, and modern component systems.",
  },
];

const milestones = [
  {
    year: "2024 - Present",
    title: "Co-founder & Backend Engineer · Stars Converter",
    description:
      "Scaled a live Telegram-native commerce platform processing 855,000+ Stars ($11,100+ volume) across 2,580+ transactions for 650+ MAU, owning multi-product ledgers and VPS infrastructure.",
  },
  {
    year: "2024",
    title: "Lead Full-Stack Engineer · Real World CTF",
    description:
      "Engineered decoupled container deployment architecture using GHCR and dynamic Docker networks, eliminating local server storage overhead for cybersecurity student training labs.",
  },
  {
    year: "2024",
    title: "14th Place · Google Developer Groups (GDG) Hackathon",
    description:
      "Delivered Interna Virtual in 72 hours alongside a team of 4 out of 122 teams, leading FastAPI backend architecture and Google Cloud Platform deployment console operations.",
  },
  {
    year: "2024",
    title: "Graduation Project Distinction (99/100 A+)",
    description:
      "Engineered low-latency Speech-to-Text and Text-to-Speech Python backend pipelines connecting Meta Quest 3 hand tracking and sign language recognition in Unity VR.",
  },
];

const principles = [
  {
    heading: "Paranoid Financial Correctness",
    text: "When building payment flows and ledgers, every transition must be idempotent. Webhooks can arrive out of order, networks can fail mid-flight, and double-spends must be impossible.",
  },
  {
    heading: "Decoupled Infrastructure",
    text: "Heavy builds belong in container registries, not production web hosts. By decoupling build systems from runtime orchestration, systems remain lightweight, reproducible, and fast.",
  },
  {
    heading: "Simplicity Wins (KISS)",
    text: "Maintainable code solves real business bottlenecks with minimal moving parts. Avoid premature abstractions and over-engineering; prefer clear, robust implementations.",
  },
  {
    heading: "End-to-End Ownership",
    text: "A software engineer does not stop at writing endpoint code. True ownership spans database indexing, error handling, Docker configuration, deployment reliability, and user metrics.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd type="website" />
      <Navbar />
      <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-red-900/50 pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          {/* Header & Bio */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
              <Terminal className="w-3.5 h-3.5" />
              <span>Engineering Dossier &middot; devYahia</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Behind the Architecture: <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-zinc-200">
                Yahia Mohamed Zakaria Youssef
              </span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2 space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed">
                <p>
                  I am a Backend-Heavy Software Engineer based in Egypt who specializes in building production backends, payment engines, and containerized cloud systems. My engineering focus is translating complex domain requirements into reliable, maintainable software architectures.
                </p>
                <p>
                  Over the past few years, I have co-founded and operated a live Telegram commerce platform processing thousands of real transactions, engineered decoupled on-demand container execution systems for cybersecurity education, and placed in the top tier of competitive national hackathons.
                </p>
                <p>
                  I believe production backends should be built with rigorous correctness: idempotent state transitions, defensive error recovery, clean logging, and low-friction deployment pipelines.
                </p>
              </div>

              {/* Quick Profile Card */}
              <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Quick Facts
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start justify-between gap-2 pb-2 border-b border-zinc-800">
                    <span className="text-zinc-500">Location</span>
                    <span className="font-medium text-zinc-200 text-right">Egypt (UTC+2)</span>
                  </div>
                  <div className="flex items-start justify-between gap-2 pb-2 border-b border-zinc-800">
                    <span className="text-zinc-500">Education</span>
                    <span className="font-medium text-zinc-200 text-right">B.Sc. Computer Engineering</span>
                  </div>
                  <div className="flex items-start justify-between gap-2 pb-2 border-b border-zinc-800">
                    <span className="text-zinc-500">University</span>
                    <span className="font-medium text-zinc-200 text-right">Menoufia University</span>
                  </div>
                  <div className="flex items-start justify-between gap-2 pb-2 border-b border-zinc-800">
                    <span className="text-zinc-500">Core Stack</span>
                    <span className="font-medium text-zinc-200 text-right">Python, TypeScript, Go</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-zinc-500">Status</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Available for Roles
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <Link
                    href="/contact"
                    className="w-full py-2.5 px-4 rounded-xl bg-white text-black font-semibold text-center text-xs hover:bg-zinc-200 transition-colors"
                  >
                    Contact Yahia
                  </Link>
                  <a
                    href={siteConfig.links.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 text-zinc-200 font-medium text-center text-xs hover:bg-zinc-700 transition-colors"
                  >
                    View Resume (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-8 flex items-center gap-3">
              <Code2 className="w-6 h-6 text-red-500" />
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {competencies.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-500/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-red-400 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-colors mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                      {c.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Track Record & Milestones */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-red-500" />
              Track Record & Highlights
            </h2>
            <div className="space-y-4">
              {milestones.map((m) => (
                <div
                  key={m.title}
                  className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                >
                  <div className="sm:max-w-xl">
                    <span className="text-xs font-mono text-red-400 block mb-1">
                      {m.year}
                    </span>
                    <h3 className="text-base font-semibold text-zinc-100 mb-1">
                      {m.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Philosophy */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-8 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-red-500" />
              Engineering Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((p) => (
                <div
                  key={p.heading}
                  className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60"
                >
                  <div className="flex items-center gap-2 mb-2 text-zinc-200 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{p.heading}</span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400">
                <GraduationCap className="w-4 h-4 text-red-400" />
                <span>Menoufia University &middot; Faculty of Electronic Engineering</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                B.Sc. in Communication and Computer Engineering
              </h3>
              <p className="text-sm text-zinc-400 max-w-xl">
                Rigorous curriculum in computer architecture, distributed computing, operating systems, telecommunications, algorithms, and secure network design.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shrink-0"
            >
              <Mail className="w-4 h-4" />
              Start a Conversation
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
