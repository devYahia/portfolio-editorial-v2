"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import {
    StaggerChildren,
    StaggerItem,
} from "@/components/animations/StaggerChildren";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
    const shouldReduceMotion = useReducedMotion();
    const featuredProjects = projects.filter((p) => p.featured);

    return (
        <section id="projects" className="relative py-24 md:py-32">
            {/* Section background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

            <div className="relative mx-auto max-w-6xl px-6">
                <FadeInWhenVisible>
                    <h2 className="text-3xl md:text-4xl font-heading tracking-tight mb-3">
                        Selected Work
                    </h2>
                    <p className="text-muted-foreground max-w-lg mb-12">
                        Real projects I have built -- from fintech backends to
                        full-stack web applications.
                    </p>
                </FadeInWhenVisible>

                <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredProjects.map((project) => (
                        <StaggerItem key={project.id}>
                            <motion.article
                                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] as const }}
                                className="group glass-card rounded-xl p-6 h-full flex flex-col"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground group-hover:text-gradient transition-all">
                                            {project.title}
                                        </h3>
                                        <span className="inline-block mt-1 font-mono text-[10px] text-muted-foreground/60 uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`GitHub: ${project.title}`}
                                            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <Github size={16} />
                                        </a>
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Live: ${project.title}`}
                                                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                    {project.shortDescription}
                                </p>

                                {/* Tech stack */}
                                <div className="mt-4 pt-4 border-t border-border/30">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-[11px] font-mono text-muted-foreground/80 bg-white/[0.03] border border-white/[0.06] rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        </StaggerItem>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
}
