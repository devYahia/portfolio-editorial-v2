// Site-wide constants and configuration

export const siteConfig = {
    name: "devYahia",
    fullName: "Yahia Mohamed Zakaria Youssef",
    alternateName: ["Yahia Zakaria", "devYahia", "Yahia Mohamed Zakaria"],
    title: "Backend-Heavy Software Engineer",
    description:
        "Yahia Mohamed Zakaria Youssef (Yahia Zakaria) is a Backend-Heavy Software Engineer from Egypt who builds production-grade systems: Telegram commerce platforms, payment pipelines, Docker-based infrastructure, FastAPI/NestJS APIs, and full-stack web applications. Open to backend engineering roles and freelance projects.",
    url: "https://www.devyahia.me",
    ogImage: "/opengraph-image",
    locale: "en_US",
    location: {
        country: "Egypt",
        region: "Middle East",
    },
    links: {
        github: "https://github.com/devYahia",
        linkedin: "https://www.linkedin.com/in/yahia-zakaria-911149265/",
        twitter: "https://x.com/YahiaSWE",
        email: "mrzak051@gmail.com",
        resume: "/Yahia-Zakaria-Resume.pdf",
    },
    keywords: [
        "Yahia Mohamed Zakaria Youssef",
        "Yahia Zakaria",
        "devYahia",
        "Backend Software Engineer",
        "Backend Developer Egypt",
        "Software Engineer Egypt",
        "Node.js Developer",
        "TypeScript Developer",
        "Python Developer",
        "FastAPI Developer",
        "NestJS Developer",
        "API Developer",
        "Full Stack Developer",
        "Telegram Bot Developer",
        "Telegram Mini App Developer",
        "TON Blockchain Developer",
        "Docker Developer",
        "PostgreSQL Developer",
        "freelance backend developer",
        "freelance software engineer Egypt",
        "portfolio backend engineer",
        "Stars Converter",
        "Real World CTF",
        "Interna Virtual",
        "hire backend engineer",
    ],
    expertise: [
        "Backend Development",
        "API Design",
        "Payment Systems",
        "Fintech",
        "Docker",
        "PostgreSQL",
        "Redis",
        "FastAPI",
        "NestJS",
        "Next.js",
        "TypeScript",
        "Python",
        "Telegram Bots",
        "TON Blockchain",
        "Cloud Infrastructure",
        "System Architecture",
    ],
};

export interface NavItem {
    label: string;
    href: string;
}

export const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/#projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export const skillCategories: Record<string, string> = {
    languages: "Languages",
    backend: "Backend & Database",
    tools: "Tools & Platforms",
    blockchain: "Blockchain",
};
