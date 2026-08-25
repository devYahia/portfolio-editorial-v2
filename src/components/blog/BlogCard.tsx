import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPostMeta }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <article className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-500/30 transition-all h-full flex flex-col group-hover:bg-zinc-900/60">
                {/* Tags */}
                {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-800 border border-zinc-700 rounded-md uppercase tracking-wider"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-all mb-2">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-zinc-400 leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-zinc-500">
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
