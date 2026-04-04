// Site-wide constants and configuration

export const siteConfig = {
    name: "devYahia",
    fullName: "Yahia Mohamed Zakaria",
    title: "Backend Developer & Computer Engineering Student",
    description:
        "Portfolio of Yahia Mohamed Zakaria -- a Computer Engineering student who builds robust backends, deploys real systems, and writes clean code.",
    url: "https://devyahia.dev",
    ogImage: "/images/og-image.jpg",
    links: {
        github: "https://github.com/devYahia",
        linkedin: "https://www.linkedin.com/in/yahia-zakaria-911149265/",
        twitter: "https://x.com/dev_yahia",
        email: "mrzak051@gmail.com",
    },
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
