"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import {
    StaggerChildren,
    StaggerItem,
} from "@/components/animations/StaggerChildren";
import { socialLinks } from "@/lib/data";

export function ContactSection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="contact" className="relative py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <FadeInWhenVisible>
                    <div className="text-center max-w-xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-heading tracking-tight mb-4">
                            Let&apos;s Work Together
                        </h2>
                        <p className="text-muted-foreground">
                            Have a project in mind? I am open to freelance work,
                            collaborations, and interesting engineering challenges.
                        </p>
                    </div>
                </FadeInWhenVisible>

                <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    {socialLinks.map((link) => (
                        <StaggerItem key={link.platform}>
                            <motion.a
                                href={link.url}
                                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
                                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                                className="group glass-card rounded-xl p-6 flex flex-col items-center gap-3 text-center"
                            >
                                <div className="p-3 rounded-full bg-white/[0.04] border border-white/[0.06] group-hover:bg-white/[0.08] group-hover:border-white/[0.12] transition-all duration-300">
                                    <link.icon
                                        size={20}
                                        className="text-muted-foreground group-hover:text-foreground transition-colors"
                                    />
                                </div>
                                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                    {link.platform}
                                </span>
                            </motion.a>
                        </StaggerItem>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
}
