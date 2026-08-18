// Site-wide constants and configuration

export const siteConfig = {
    name: "devYahia",
    fullName: "Yahia Mohamed Zakaria Youssef",
    title: "Backend-Heavy Software Engineer",
    description:
        "Yahia Mohamed Zakaria Youssef -- Software Engineer specializing in distributed architectures, data-intensive applications, and resilient cloud infrastructure using Node.js, TypeScript, Python, and PostgreSQL.",
    url: "https://devyahia.me",
    ogImage: "/images/yahia-bw.webp",
    links: {
        github: "https://github.com/devYahia",
        linkedin: "https://www.linkedin.com/in/yahia-zakaria-911149265/",
        twitter: "https://x.com/YahiaSWE",
        email: "devyahiazakaria@gmail.com",
    },
    keywords: [
        "Yahia Mohamed Zakaria Youssef",
        "Yahia Zakaria",
        "devYahia",
        "Backend Software Engineer",
        "Backend Developer",
        "Software Engineer Egypt",
        "Node.js Developer",
        "TypeScript Developer",
        "API Developer",
        "Full Stack Developer",
        "Computer Engineering",
        "freelance backend developer",
        "web developer portfolio",
    ],
};

export interface NavItem {
    label: string;
    href: string;
}

export const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#why-partner" },
    { label: "Projects", href: "/#projects" },
];

export const skillCategories: Record<string, string> = {
    languages: "Languages",
    backend: "Backend & Database",
    tools: "Tools & Platforms",
    blockchain: "Blockchain",
};
