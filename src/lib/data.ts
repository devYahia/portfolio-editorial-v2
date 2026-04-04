import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
    SiJavascript, SiTypescript, SiPython, SiNodedotjs, SiExpress,
    SiFastapi, SiPostgresql, SiMongodb, SiRedis, SiPrisma, SiSqlalchemy,
    SiDocker, SiGit, SiSupabase, SiVercel
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

export type ProjectCategory = "fintech" | "bots" | "full-stack" | "tools";

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string;
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
        id: "astra",
        title: "ASTRA",
        description:
            "Telegram bot for buying and selling Telegram Stars, utilizing Highload wallet architecture for high-frequency operations.",
        longDescription:
            "A full-featured Telegram Stars exchange platform built on the TON blockchain. Employs a Highload wallet architecture to handle high-frequency buying and selling operations seamlessly. Features automated escrow and real-time transaction verification.",
        techStack: ["Python", "FastAPI", "TON", "Telegram Bot API", "PostgreSQL"],
        githubUrl: "https://github.com/devYahia/ASTRA",
        liveUrl: "https://t.me/stars_converterbot",
        category: "fintech",
        featured: true,
    },
    {
        id: "partner-liquidity-bot",
        title: "Partner Liquidity Bot",
        description:
            "Investment management bot for TON liquidity pools with automated position tracking and P&L reporting.",
        longDescription:
            "A sophisticated Telegram bot for managing liquidity pool investments on the TON blockchain. Tracks partner contributions, automates position management, and generates comprehensive profit & loss reports using Python and SQLAlchemy.",
        techStack: ["Python", "SQLAlchemy", "TON SDK", "Telegram Bot API"],
        githubUrl: "https://github.com/devYahia/partner-liquidity-bot",
        category: "fintech",
        featured: true,
    },
    {
        id: "telegram-support-bot",
        title: "Telegram Support Bot",
        description:
            "Automated customer support assistant built for Telegram with ticket management and auto-responses.",
        longDescription:
            "A professional customer service bot for Telegram using Node.js. It features automated ticketing, live-agent handoff, and dynamic auto-responder flows to manage user queries efficiently.",
        techStack: ["JavaScript", "Node.js", "Telegram Bot API"],
        githubUrl: "https://github.com/devYahia/telegram-support-bot",
        category: "bots",
        featured: true,
    },
    {
        id: "eksab-solver",
        title: "Eksab Auto Solver",
        description:
            "AI-powered Playwright automation pipeline and browser extension to instantly solve trivia questions.",
        longDescription:
            "A robust automation pipeline that intercepts trivia APIs in real-time, queries Google Gemini for the answer, and automatically executes the optimal play. Avoids bot detection through customized session handling.",
        techStack: ["TypeScript", "Playwright", "Gemini AI", "Chrome Extensions"],
        githubUrl: "https://github.com/devYahia/eksab-solver",
        category: "tools",
        featured: false,
    },
    {
        id: "interna-work",
        title: "Interna.work",
        description:
            "AI-powered internship training simulator with real-time code review and mentorship sessions.",
        longDescription:
            "A full-stack application that simulates real workplace internship experiences using AI. Features include AI-powered mentorship chats, real-time collaborative code review with Gemini AI, and structured training modules with progress tracking.",
        techStack: [
            "Next.js",
            "FastAPI",
            "Gemini AI",
            "Supabase",
            "Tailwind CSS",
        ],
        githubUrl: "https://github.com/devYahia/interna-work",
        liveUrl: "https://interna.work",
        category: "full-stack",
        featured: true,
    },
    {
        id: "novafab",
        title: "InnoFab",
        description:
            "Custom manufacturing platform with role-based access, order tracking, and real-time production status.",
        longDescription:
            "A comprehensive manufacturing management platform supporting custom product orders, multi-role access control, real-time production pipeline tracking, and media storage via Cloudflare R2. Built with modern serverless architecture.",
        techStack: [
            "Next.js 15",
            "Prisma",
            "PostgreSQL",
            "Cloudflare R2",
            "Supabase Auth",
        ],
        githubUrl: "https://github.com/devYahia/novafab",
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
    { name: "PostgreSQL", icon: SiPostgresql, category: "backend" },
    { name: "MongoDB", icon: SiMongodb, category: "backend" },
    { name: "Redis", icon: SiRedis, category: "backend" },
    { name: "Prisma", icon: SiPrisma, category: "backend" },
    { name: "SQLAlchemy", icon: SiSqlalchemy, category: "backend" },
    { name: "Docker", icon: SiDocker, category: "tools" },
    { name: "Git", icon: SiGit, category: "tools" },
    { name: "Supabase", icon: SiSupabase, category: "tools" },
    { name: "Vercel", icon: SiVercel, category: "tools" },
    { name: "Coolify", icon: Cloud, category: "tools" },
    { name: "TON SDK", icon: Link2, category: "blockchain" },
    { name: "Smart Contracts", icon: Blocks, category: "blockchain" },
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
        url: "https://x.com/dev_yahia",
        icon: Twitter,
    },
    {
        platform: "Email",
        url: "mailto:mrzak051@gmail.com",
        icon: Mail,
    },
];
