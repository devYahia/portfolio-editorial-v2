import Link from "next/link";
import { socialLinks, projects } from "@/lib/data";
import { siteConfig } from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

    return (
        <footer className="border-t border-border/50 bg-background/50">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <Link
                            href="/"
                            className="font-mono text-lg font-bold tracking-tight text-foreground"
                        >
                            {siteConfig.name}
                            <span className="text-foreground/30">.</span>
                        </Link>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            {siteConfig.title} building production APIs, payment systems, and scalable
                            infrastructure.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                                    rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                    className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.platform}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                            Case Studies
                        </p>
                        <ul className="space-y-2">
                            {featuredProjects.map((project) => (
                                <li key={project.id}>
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {project.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                            Trust & Pages
                        </p>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    About Yahia
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Contact & Hire
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Blog & Writings
                                </Link>
                            </li>
                            <li>
                                <a
                                    href={siteConfig.links.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Resume (PDF)
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                            AI & Machine Data
                        </p>
                        <ul className="space-y-2">
                            <li>
                                <a href="/llms.txt" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono text-xs">
                                    /llms.txt
                                </a>
                            </li>
                            <li>
                                <a href="/llms-full.txt" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono text-xs">
                                    /llms-full.txt
                                </a>
                            </li>
                            <li>
                                <a href="/agent-instructions.txt" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono text-xs">
                                    /agent-instructions.txt
                                </a>
                            </li>
                            <li>
                                <a href="/sitemap.xml" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono text-xs">
                                    /sitemap.xml
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="line-accent my-6" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
                    <p>
                        &copy; {currentYear} {siteConfig.fullName}. All rights reserved.
                    </p>
                    <p className="font-mono text-[11px]">
                        Accept: text/markdown &middot; RFC 9110 Ready
                    </p>
                </div>
            </div>
        </footer>
    );
}
