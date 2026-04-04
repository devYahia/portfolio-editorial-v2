import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Blog",
    description: `Technical articles and project deep-dives by ${siteConfig.fullName}.`,
    openGraph: {
        title: `Blog | ${siteConfig.name}`,
        description: `Technical articles and project deep-dives by ${siteConfig.fullName}.`,
    },
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <>
            <ScrollProgress />
            <Navbar />
            <main className="min-h-screen pt-32 pb-24">
                <div className="mx-auto max-w-4xl px-6">
                    {/* Header */}
                    <div className="mb-12">
                        <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-3">
                            Blog
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Writings & Deep Dives
                        </h1>
                        <p className="text-muted-foreground max-w-lg">
                            Technical articles, project retrospectives, and lessons learned
                            from building in Fintech and Blockchain.
                        </p>
                    </div>

                    {/* Posts grid */}
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {posts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="glass-card rounded-xl p-12 text-center">
                            <p className="text-muted-foreground">
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
