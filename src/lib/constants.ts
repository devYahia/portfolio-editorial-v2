// Site-wide constants and configuration

export const siteConfig = {
    name: "devYahia",
    fullName: "Yahia Mohamed Zakaria Youssef",
    title: "Backend Software Engineer & Computer Engineering Student",
    description:
        "Yahia Mohamed Zakaria Youssef -- Backend Software Engineer specializing in APIs, web applications, and scalable systems. Computer & Communications Engineering student building production-grade backends with Node.js, TypeScript, Python, and PostgreSQL.",
    url: "https://devyahia.me",
    ogImage: "/images/yahia-bw.webp",
    links: {
        github: "https://github.com/devYahia",
        linkedin: "https://www.linkedin.com/in/yahia-zakaria-911149265/",
        twitter: "https://x.com/dev_yahia",
        email: "mrzak051@gmail.com",
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
    { label: "Portfolio", href: "/" },
    { label: "Blog", href: "/blog" },
];

export const skillCategories: Record<string, string> = {
    languages: "Languages",
    backend: "Backend & Database",
    tools: "Tools & Platforms",
    blockchain: "Blockchain",
};
