import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
    SiJavascript, SiTypescript, SiPython, SiNodedotjs, SiExpress,
    SiFastapi, SiPostgresql, SiMongodb, SiRedis, SiPrisma, SiSqlalchemy,
    SiDocker, SiGit, SiSupabase, SiVercel, SiGooglecloud
} from "react-icons/si";
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    Code2,
    Database,
    Cloud,
    Link2,
    Blocks,
} from "lucide-react";

// ============================================
// TYPE DEFINITIONS
// ============================================

export type ProjectCategory = "infrastructure" | "fintech" | "bots" | "full-stack" | "tools";

export interface Project {
    id: string;
    title: string;
    role: string;
    shortDescription: string;
    
    // Storytelling fields
    context: string;
    architecture: string;
    impact: string;
    lessonsLearned: string;
    challengesOvercome: string;
    
    // Proof / Media
    gallery: {
        src: string;
        alt: string;
        caption: string;
    }[];
    
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    certificateUrl?: string;
    collaborator?: string;
    category: ProjectCategory;
    featured: boolean;
}

export type SkillCategory = "languages" | "backend" | "tools" | "blockchain";

export interface Skill {
    name: string;
    icon: LucideIcon | IconType;
    category: SkillCategory;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: LucideIcon;
}

// ============================================
// PROJECTS DATA
// ============================================

export const projects: Project[] = [
    {
        id: "real-world-ctf",
        title: "Real World CTF",
        role: "Lead Full-Stack Engineer",
        shortDescription: "Security training platform launching isolated containerized labs on-demand.",
        context: "Cybersecurity students needed a platform to practice on real vulnerabilities. However, storing heavy Docker images locally on our servers for every challenge was burning through our storage budget and making deployments a nightmare.",
        architecture: "I architected a completely decoupled deployment system. Instead of the server hosting heavy images, admins build vulnerable environments locally, push them to the GitHub Container Registry (GHCR), and simply paste the GHCR URL into the admin dashboard. The custom 'Lab Runner' backend then dynamically pulls the image from GitHub on-demand and spins it up in a strictly isolated, read-only Docker container network behind a reverse proxy.",
        impact: "Saved massive server storage costs and transformed deployment into an instant process, while creating a truly isolated, safe environment for live cybersecurity training.",
        lessonsLearned: "This was my first time working directly with a Docker Registry (GHCR) to orchestrate deployments. I learned how to completely decouple the build process from the runtime environment, allowing the server to dynamically pull and execute containers on demand instead of hoarding heavy images locally.",
        challengesOvercome: "Managing the lifecycle of dynamic containers—ensuring they don't leak resources, properly killing them after idle timeouts, and routing traffic securely via reverse proxies dynamically without reloading the entire web server.",
        gallery: [
            { src: "/images/rwctf_admin_overview.png", alt: "Admin Dashboard Overview", caption: "Centralized Admin Control & GHCR Deployment" },
            { src: "/images/rwctf_hero_section.png", alt: "Platform Landing", caption: "Immersive Landing Experience" },
            { src: "/images/rwctf_dashboard.png", alt: "Student Dashboard", caption: "Real-time Student Analytics & Progress" },
            { src: "/images/rwctf_admin_scenarios.png", alt: "Admin Deployment", caption: "GHCR Decoupled Image Deployment" }
        ],
        techStack: ["Next.js", "PostgreSQL", "Prisma", "Docker", "GHCR", "Nginx"],
        liveUrl: "https://real-world-ctf.vercel.app/",
        category: "infrastructure",
        featured: true,
    },
    {
        id: "stars-converter",
        title: "Stars Converter",
        role: "Co-founder & Backend Engineer",
        shortDescription: "Full-stack Telegram commerce SaaS — Stars, Premium, gifts, levels, leaderboard, admin ops.",
        context: "Stars Converter started as a Stars-to-USDT exchange and grew into a full Telegram-native commerce platform my co-founder Mohamed Rabie and I run in production. Users can buy and sell Stars, purchase Telegram Premium subscriptions, send gifts, and earn through referral mechanics — all inside the bot and Mini App. What began as the public ASTRA prototype is now a private, heavily extended codebase: self-hosted on our VPS via Coolify, with every critical path under our control.",
        architecture: "Architected a multi-product payment engine on FastAPI, PostgreSQL, and Redis: bidirectional Stars trading, Premium subscription fulfillment, gift purchases with wallet balance, TON Highload payouts, VIP tiers, cashback, and refund workflows. Built gamification layers — user levels, leaderboards, and referral rewards — to drive retention. Shipped a full admin control plane for transaction monitoring, user management, manual overrides, and audit trails. Docker services orchestrated through Coolify on a VPS, with strict idempotency and queue-based reconciliation across every money-moving flow.",
        impact: "855,000+ Stars processed (~$11,100 lifetime proceeds), 2,580+ completed transactions, $11,120+ total volume, and 650+ monthly active users — powering a multi-service platform, not a single-purpose bot.",
        lessonsLearned: "The hardest jump was product complexity: one payment pipeline became six product lines sharing the same wallet, ledger, and admin surface. Co-founding taught me to own infra reliability while the product expands — every new feature (Premium, gifts, levels) had to plug into the same paranoid financial core without breaking existing flows.",
        challengesOvercome: "Each new service — buy Stars, sell Stars, Premium, gifts, referrals — introduced different Telegram API flows and settlement rules. Unified them under one ledger with strict state machines. Reconciling async Telegram webhooks with TON blockchain finality while keeping admin visibility into every transaction required a queueing layer that never loses or double-processes events.",
        gallery: [
            { src: "/images/stars-converter/volume-infographic.png", alt: "Stars Converter volume stats", caption: "2,580+ completed transactions · $11,120+ total volume" },
            { src: "/images/stars-converter/bot-interface.png", alt: "Stars Converter Telegram bot", caption: "Full product menu — buy/sell Stars, Premium, gifts, leaderboard, Mini App" },
            { src: "/images/stars-converter/telegram-analytics.jpg", alt: "Telegram Stars analytics dashboard", caption: "828K+ Stars lifetime proceeds · real Telegram platform data" },
            { src: "/images/stars-converter/mini-app.jpg", alt: "Stars Converter Mini App", caption: "Telegram Mini App — multi-service commerce inside Telegram" },
            { src: "/images/stars-converter/stats-infographic.jpg", alt: "Platform growth metrics", caption: "Production metrics & user activity overview" },
        ],
        techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "TON SDK", "Telegram API", "Telegram Mini App", "Docker", "Coolify"],
        liveUrl: "https://t.me/stars_converterbot",
        collaborator: "Mohamed Rabie",
        category: "fintech",
        featured: true,
    },
    {
        id: "interna-work",
        title: "Interna Virtual",
        role: "Backend & Database Lead",
        shortDescription: "GDG Hackathon AI internship simulator — 14th of 122 teams, live on GCP.",
        context: "Built in 72 hours for the GDG (Google Developer Groups) hackathon, Interna Virtual tackles the 'need experience to get a job' paradox. We designed an AI-powered virtual internship where students face real stakeholder friction: AI mentors, code reviews, AI interviewers, adaptive personas, and production-style project workflows — not another tutorial clone.",
        architecture: "Owned the backend and database layer with FastAPI and PostgreSQL, integrating Google Gemini for mentorship, live code review, and interview simulation. Deployed the full stack on Google Cloud Platform — provisioning services, managing deployments, and operating the console end-to-end. That GCP exposure became one of the biggest technical wins: understanding cloud IAM, service configuration, and shipping under hackathon pressure.",
        impact: "Ranked 14th out of 122 teams at the GDG hackathon, with a live product at interna.work. Delivered the majority of backend commits and a working AI integration pipeline within three days — plus hands-on GCP production deployment experience.",
        lessonsLearned: "Hackathons reward ruthless scope control. The biggest personal takeaway was GCP: going from zero to a deployed cloud stack in 72 hours forced me to learn the platform by doing, not by reading docs in isolation.",
        challengesOvercome: "Gemini output is non-deterministic — built JSON-schema validation and aggressive prompt engineering so AI responses never broke the Next.js frontend. Parallelized backend API design with frontend integration while configuring GCP services under extreme time pressure.",
        gallery: [
            { src: "/images/interna-work/certificate.png", alt: "GDG Hackathon certificate", caption: "GDG Hackathon — ranked 14th of 122 competing teams" },
        ],
        techStack: ["FastAPI", "PostgreSQL", "Gemini AI", "Next.js", "GCP"],
        liveUrl: "https://interna.work",
        certificateUrl: "/certificates/interna-gdg-hackathon-certificate.pdf",
        category: "full-stack",
        featured: true,
    },
    {
        id: "first-word",
        title: "First Word",
        role: "Backend / Integration Engineer",
        shortDescription: "Graduation VR app (99/A+) — Arabic Sign Language to voice for deaf users.",
        context: "First Word was my graduation project — and one of the most meaningful builds I've shipped. The goal: help deaf users who cannot hear or speak communicate through Meta Quest 3 VR glasses. The user performs Arabic Sign Language; the headset tracks hands and renders the signs as text in front of them. When they finish what they want to say, a specific gesture tells the glasses to convert that text into spoken voice. The system also captures external speech from people around them and converts it to text they can read inside VR.",
        architecture: "I owned the speech pipeline integration layer. Built Python backend services connecting Speech-to-Text and Text-to-Speech APIs to the Unity VR runtime, minimizing round-trip latency so sign → text → voice felt responsive enough for real conversation. Bridged a web-style async API world with Unity's game-loop constraints via optimized payloads and tight handoff timing.",
        impact: "Graduated with 99/100 (A+) on the project. Delivered a working bidirectional accessibility pipeline — sign language to voice, and ambient speech to readable text — on constrained VR hardware.",
        lessonsLearned: "Accessibility tech has zero tolerance for latency. Every 200ms matters when someone is trying to hold a conversation. This project also taught me that graduation work can be portfolio-grade if you treat the integration layer as production engineering, not a demo script.",
        challengesOvercome: "Unity + cloud STT/TTS latency was the core enemy. Reduced payload sizes, optimized API call sequencing, and tuned the gesture trigger so voice output only fired after the user explicitly confirmed — preventing half-finished sentences from being spoken aloud.",
        gallery: [
            { src: "/images/first-word/vr-menu.png", alt: "First Word VR menu", caption: "VR interface — Hand Tracking + Speak, Speech to Text modes" },
            { src: "/images/first-word/grade-transcript.png", alt: "Graduation project grade", caption: "Graduation project score: 99/100 (A+)" },
        ],
        techStack: ["Python", "Unity", "Meta Quest 3", "STT/TTS APIs", "Hand Tracking"],
        category: "full-stack",
        featured: true,
    },
    {
        id: "novafab",
        title: "InnoFab",
        role: "Full-Stack Developer",
        shortDescription: "3D printing e-commerce and custom fabrication ordering pipeline.",
        context: "A 3D printing business needed a custom storefront that could handle both standard product sales and a complex pipeline for custom fabrication requests.",
        architecture: "Built a modern serverless stack using Next.js 15 App Router, Prisma, and PostgreSQL. Engineered a custom print request pipeline with role-based access control, allowing admins to track orders through a production status pipeline. Utilized Cloudflare R2 for secure, fast storage of large 3D model files and media.",
        impact: "Streamlined the business's ordering process, moving them from manual quote requests to an automated, trackable e-commerce platform.",
        lessonsLearned: "Serverless architectures (like Next.js on Vercel) are fantastic for frontend delivery but require careful connection pooling (like using PgBouncer/Prisma Accelerate) when dealing with relational databases.",
        challengesOvercome: "Handling large 3D file uploads (STLs/OBJs). Built a pre-signed URL upload architecture so clients could upload directly to Cloudflare R2, bypassing the Vercel serverless function memory and timeout limits entirely.",
        gallery: [
            { src: "/images/innofab/hero.png", alt: "InnoFab storefront", caption: "Live storefront — 3D printing e-commerce at innofab.net" },
        ],
        techStack: ["Next.js 15", "Prisma", "PostgreSQL", "Cloudflare R2"],
        githubUrl: "https://github.com/devYahia/NovaFab",
        liveUrl: "https://innofab.net",
        category: "full-stack",
        featured: true,
    },
];

// ============================================
// SKILLS DATA
// ============================================

export const skills: Skill[] = [
    { name: "JavaScript", icon: SiJavascript, category: "languages" },
    { name: "TypeScript", icon: SiTypescript, category: "languages" },
    { name: "Python", icon: SiPython, category: "languages" },
    { name: "SQL", icon: Database, category: "languages" },
    { name: "Node.js", icon: SiNodedotjs, category: "backend" },
    { name: "FastAPI", icon: SiFastapi, category: "backend" },
    { name: "Express.js", icon: SiExpress, category: "backend" },
    { name: "NestJS", icon: SiNodedotjs, category: "backend" },
    { name: "PostgreSQL", icon: SiPostgresql, category: "backend" },
    { name: "MongoDB", icon: SiMongodb, category: "backend" },
    { name: "Redis", icon: SiRedis, category: "backend" },
    { name: "Prisma", icon: SiPrisma, category: "backend" },
    { name: "Supabase", icon: SiSupabase, category: "backend" },
    { name: "Docker", icon: SiDocker, category: "tools" },
    { name: "GCP", icon: SiGooglecloud, category: "tools" },
    { name: "Git", icon: SiGit, category: "tools" },
    { name: "AWS", icon: Cloud, category: "tools" },
    { name: "Vercel", icon: SiVercel, category: "tools" },
    { name: "TON", icon: Blocks, category: "blockchain" },
];

// ============================================
// SOCIAL LINKS
// ============================================

export const socialLinks: SocialLink[] = [
    {
        platform: "GitHub",
        url: "https://github.com/devYahia",
        icon: Github,
    },
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/yahia-zakaria-911149265/",
        icon: Linkedin,
    },
    {
        platform: "X (Twitter)",
        url: "https://x.com/YahiaSWE",
        icon: Twitter,
    },
    {
        platform: "Email",
        url: "mailto:mrzak051@gmail.com",
        icon: Mail,
    },
];
