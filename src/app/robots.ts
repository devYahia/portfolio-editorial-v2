import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

const aiCrawlers = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "anthropic-ai",
    "PerplexityBot",
    "Google-Extended",
    "Applebot-Extended",
    "cohere-ai",
    "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/detective-board", "/api/"],
            },
            ...aiCrawlers.map((userAgent) => ({
                userAgent,
                allow: ["/", "/llms.txt", "/llms-full.txt", "/agent-instructions.txt"],
                disallow: ["/detective-board", "/api/"],
            })),
        ],
        sitemap: `${siteConfig.url}/sitemap.xml`,
        host: siteConfig.url,
    };
}
