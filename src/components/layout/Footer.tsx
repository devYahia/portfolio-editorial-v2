import Link from "next/link";
import { socialLinks, projects } from "@/lib/data";
import { siteConfig } from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

    return (
        <footer className="border-t border-border/50 bg-background/50">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                            Explore
                        </p>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#why-partner" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <a
                                    href={siteConfig.links.resume}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="line-accent my-6" />

                <p className="text-center text-xs text-muted-foreground/60">
                    &copy; {currentYear} {siteConfig.fullName}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
