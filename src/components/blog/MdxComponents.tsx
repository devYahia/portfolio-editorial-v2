import Image from "next/image";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(): MDXComponents {
    return {
        h1: ({ children, ...props }) => (
            <h1
                className="text-3xl md:text-4xl font-bold tracking-tight mt-12 mb-4 text-foreground"
                {...props}
            >
                {children}
            </h1>
        ),
        h2: ({ children, ...props }) => (
            <h2
                className="text-2xl md:text-3xl font-bold tracking-tight mt-10 mb-3 text-foreground"
                {...props}
            >
                {children}
            </h2>
        ),
        h3: ({ children, ...props }) => (
            <h3
                className="text-xl md:text-2xl font-semibold tracking-tight mt-8 mb-2 text-foreground"
                {...props}
            >
                {children}
            </h3>
        ),
        p: ({ children, ...props }) => (
            <p
                className="text-base text-muted-foreground leading-relaxed mb-4"
                {...props}
            >
                {children}
            </p>
        ),
        a: ({ children, href, ...props }) => (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
                {...props}
            >
                {children}
            </a>
        ),
        ul: ({ children, ...props }) => (
            <ul className="list-disc list-inside space-y-1 mb-4 text-muted-foreground" {...props}>
                {children}
            </ul>
        ),
        ol: ({ children, ...props }) => (
            <ol className="list-decimal list-inside space-y-1 mb-4 text-muted-foreground" {...props}>
                {children}
            </ol>
        ),
        li: ({ children, ...props }) => (
            <li className="text-base leading-relaxed" {...props}>
                {children}
            </li>
        ),
        blockquote: ({ children, ...props }) => (
            <blockquote
                className="border-l-2 border-foreground/20 pl-4 my-6 italic text-muted-foreground"
                {...props}
            >
                {children}
            </blockquote>
        ),
        pre: ({ children, ...props }) => (
            <pre
                className="rounded-xl bg-surface border border-border/50 p-4 overflow-x-auto mb-6 text-sm font-mono"
                {...props}
            >
                {children}
            </pre>
        ),
        code: ({ children, className, ...props }) => {
            // Inline code (no className means inline)
            if (!className) {
                return (
                    <code
                        className="px-1.5 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.08] font-mono text-sm text-foreground"
                        {...props}
                    >
                        {children}
                    </code>
                );
            }
            // Block code (handled by pre)
            return (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        },
        hr: () => <div className="line-accent my-8" />,
        img: ({ src, alt, ...props }) => (
            <span className="block my-6 rounded-xl overflow-hidden border border-border/30">
                <Image
                    src={src || ""}
                    alt={alt || "Blog image"}
                    width={800}
                    height={450}
                    className="w-full h-auto"
                    {...props}
                />
            </span>
        ),
        table: ({ children, ...props }) => (
            <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse" {...props}>
                    {children}
                </table>
            </div>
        ),
        th: ({ children, ...props }) => (
            <th
                className="border-b border-border/50 px-4 py-2 text-left font-medium text-foreground"
                {...props}
            >
                {children}
            </th>
        ),
        td: ({ children, ...props }) => (
            <td
                className="border-b border-border/30 px-4 py-2 text-muted-foreground"
                {...props}
            >
                {children}
            </td>
        ),
    };
}
