import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";
import { projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();
    const now = new Date();

    const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${siteConfig.url}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    const projectEntries: MetadataRoute.Sitemap = projects
        .filter((project) => project.featured)
        .map((project) => ({
            url: `${siteConfig.url}/projects/${project.id}`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.9,
        }));

    return [
        {
            url: siteConfig.url,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${siteConfig.url}/contact`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteConfig.url}/privacy`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${siteConfig.url}/blog`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...projectEntries,
        ...blogEntries,
    ];
}
