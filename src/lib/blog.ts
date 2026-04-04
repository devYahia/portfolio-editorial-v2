import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPostMeta {
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    coverImage?: string;
    published: boolean;
    slug: string;
    readingTime: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function ensureBlogDir() {
    if (!fs.existsSync(BLOG_DIR)) {
        fs.mkdirSync(BLOG_DIR, { recursive: true });
    }
}

export function getAllPosts(): BlogPostMeta[] {
    ensureBlogDir();

    const files = fs
        .readdirSync(BLOG_DIR)
        .filter((file) => file.endsWith(".mdx"));

    const posts = files
        .map((file) => {
            const slug = file.replace(/\.mdx$/, "");
            const fullPath = path.join(BLOG_DIR, file);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            if (!data.published) return null;

            return {
                title: data.title || "Untitled",
                date: data.date || new Date().toISOString(),
                excerpt: data.excerpt || "",
                tags: data.tags || [],
                coverImage: data.coverImage || undefined,
                published: data.published ?? false,
                slug,
                readingTime: readingTime(content).text,
            } as BlogPostMeta;
        })
        .filter(Boolean) as BlogPostMeta[];

    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string) {
    ensureBlogDir();

    const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        meta: {
            title: data.title || "Untitled",
            date: data.date || new Date().toISOString(),
            excerpt: data.excerpt || "",
            tags: data.tags || [],
            coverImage: data.coverImage || undefined,
            published: data.published ?? false,
            slug,
            readingTime: readingTime(content).text,
        } as BlogPostMeta,
        content,
    };
}

export function getAllSlugs(): string[] {
    ensureBlogDir();

    return fs
        .readdirSync(BLOG_DIR)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => file.replace(/\.mdx$/, ""));
}
