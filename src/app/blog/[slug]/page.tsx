import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostBySlugAndLang, hasArabicVersion, getAllSlugs } from "@/lib/blog";
import { useMDXComponents } from "@/components/blog/MdxComponents";
import { BlogPostClient } from "@/components/blog/BlogPostClient";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/constants";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import rehypePrettyCode from "rehype-pretty-code";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return { title: "Post Not Found" };
    }

    return {
        title: post.meta.title,
        description: post.meta.excerpt,
        alternates: {
            canonical: `/blog/${slug}`,
        },
        openGraph: {
            title: post.meta.title,
            description: post.meta.excerpt,
            type: "article",
            publishedTime: post.meta.date,
            authors: [siteConfig.fullName],
            url: `${siteConfig.url}/blog/${slug}`,
        },
    };
}

const mdxOptions = {
    mdxOptions: {
        rehypePlugins: [
            [
                rehypePrettyCode,
                {
                    theme: "github-dark-default",
                    keepBackground: true,
                },
            ],
        ],
    },
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const components = useMDXComponents();
    const hasArabic = hasArabicVersion(slug);

    // Pre-render English content
    const englishRendered = (
        <MDXRemote
            source={post.content}
            components={components}
            options={mdxOptions as Parameters<typeof MDXRemote>[0]["options"]}
        />
    );

    // Pre-render Arabic content if available
    let arabicRendered = null;
    if (hasArabic) {
        const arPost = getPostBySlugAndLang(slug, "ar");
        if (arPost) {
            arabicRendered = (
                <MDXRemote
                    source={arPost.content}
                    components={components}
                    options={mdxOptions as Parameters<typeof MDXRemote>[0]["options"]}
                />
            );
        }
    }

    return (
        <>
            <JsonLd
                type="article"
                article={{
                    title: post.meta.title,
                    description: post.meta.excerpt,
                    datePublished: post.meta.date,
                    url: `${siteConfig.url}/blog/${slug}`,
                }}
            />
            <ScrollProgress />
            <Navbar />
            <main className="min-h-screen pt-32 pb-24">
                <article className="mx-auto max-w-3xl px-6">
                    {/* Back link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft size={14} />
                        Back to Blog
                    </Link>

                    {/* Post header */}
                    <header className="mb-12">
                        {/* Tags */}
                        {post.meta.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.meta.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground/70 bg-white/[0.03] border border-white/[0.06] rounded-md uppercase tracking-wider"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
                            {post.meta.title}
                        </h1>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                                <Calendar size={14} />
                                {new Date(post.meta.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock size={14} />
                                {post.meta.readingTime}
                            </span>
                        </div>

                        <div className="line-accent mt-8" />
                    </header>

                    {/* MDX content with language toggle */}
                    <BlogPostClient
                        slug={slug}
                        hasArabic={hasArabic}
                        englishRendered={englishRendered}
                        arabicRendered={arabicRendered}
                    />
                </article>
            </main>
            <Footer />
        </>
    );
}
