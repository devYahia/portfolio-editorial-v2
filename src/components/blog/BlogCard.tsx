import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPostMeta }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <article className="glass-card rounded-xl p-6 h-full flex flex-col">
                {/* Tags */}
                {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground/70 bg-white/[0.03] border border-white/[0.06] rounded-md uppercase tracking-wider"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground group-hover:text-gradient transition-all mb-2">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground/60">
                    <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readingTime}
                    </span>
                </div>
            </article>
        </Link>
    );
}
