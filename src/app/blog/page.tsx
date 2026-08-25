import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Blog | Technical Articles and Project Deep-Dives",
    description: `Technical articles, fintech retrospectives, and production engineering notes by ${siteConfig.fullName}.`,
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: `Blog | ${siteConfig.fullName}`,
        description: `Technical articles and project deep-dives by ${siteConfig.fullName}.`,
        url: `${siteConfig.url}/blog`,
        type: "website",
        images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: `Blog | ${siteConfig.fullName}`,
        description: `Technical articles and project deep-dives by ${siteConfig.fullName}.`,
        creator: "@YahiaSWE",
        images: ["/opengraph-image"],
    },
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <>
            <JsonLd type="blog" />
            <ScrollProgress />
            <Navbar />
            <main className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-red-900/50 pt-32 pb-24 overflow-hidden">
                {/* Background Effects (Red Theme) */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage:
                            'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#09090b] to-transparent pointer-events-none z-[1]" />
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[min(80vw,700px)] h-[min(80vw,700px)] bg-red-600/[0.05] rounded-full blur-[100px] pointer-events-none" />
                <div className="mx-auto max-w-4xl px-6">
                    <div className="mb-12">
                        <p className="font-mono text-sm text-red-400 tracking-widest uppercase mb-3">
                            Blog
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                            Writings & Deep Dives
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
                            Technical articles, project retrospectives, and lessons learned
                            from building in Fintech and Blockchain.
                        </p>
                    </div>

                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {posts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="p-12 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 text-center">
                            <p className="text-zinc-400">
                                No posts yet. Check back soon!
                            </p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
