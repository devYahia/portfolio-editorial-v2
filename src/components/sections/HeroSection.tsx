"use client";

import { motion, useReducedMotion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { ParticlesBackground } from "@/components/animations/ParticlesBackground";

export function HeroSection() {
    const shouldReduceMotion = useReducedMotion();

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const glowBackground = useMotionTemplate`radial-gradient(800px circle at ${springX}px ${springY}px, rgba(255, 255, 255, 0.04), transparent 80%)`;

    const handleMouseMove = (e: React.MouseEvent) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const fadeUp = (delay: number) =>
        shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: {
                    duration: 0.8,
                    delay,
                    ease: [0.22, 1, 0.36, 1] as const,
                },
            };

    return (
        <section
            id="hero"
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center overflow-hidden hero-mesh hero-grain"
        >
            <ParticlesBackground />

            {/* Interactive mouse spotlight */}
            {!shouldReduceMotion && (
                <motion.div
                    style={{ background: glowBackground }}
                    className="pointer-events-none absolute inset-0 z-[2]"
                />
            )}

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-6xl px-6 w-full py-32 md:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Photo -- right side on desktop, top on mobile */}
                    <motion.div
                        {...fadeUp(0.15)}
                        className="lg:col-span-5 lg:col-start-8 flex justify-center lg:justify-end order-1 lg:order-2"
                    >
                        <motion.div
                            className="relative w-56 h-[19rem] sm:w-72 sm:h-[24rem] lg:w-[22rem] lg:h-[30rem]"
                            animate={shouldReduceMotion ? {} : { y: [-8, 8, -8] }}
                            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                        >
                            {/* Soft glow behind photo */}
                            <div className="absolute inset-0 bg-white/[0.03] blur-3xl scale-110" />

                            {/* Sharp image frame */}
                            <div className="relative w-full h-full overflow-hidden border border-white/10 glass-card">
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-50" />
                                <Image
                                    src="/images/yahia-bw.webp"
                                    alt="Yahia Mohamed Zakaria"
                                    fill
                                    className="object-cover object-top filter grayscale contrast-110 hover:scale-[1.03] transition-transform duration-[2s] ease-out"
                                    priority
                                    sizes="(max-width: 768px) 288px, 352px"
                                />
                            </div>

                            {/* Corner accent marks */}
                            <div className="absolute -left-3 -bottom-3 w-6 h-6 border-l border-b border-white/15" />
                            <div className="absolute -right-3 -top-3 w-6 h-6 border-r border-t border-white/15" />
                        </motion.div>
                    </motion.div>

                    {/* Text content -- left side */}
                    <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">

                        {/* Name in DM Serif Display */}
                        <motion.h1
                            {...fadeUp(0.05)}
                            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.1] tracking-[-0.02em] text-foreground"
                        >
                            Yahia Mohamed{" "}
                            <span className="text-foreground/50">Zakaria</span>
                        </motion.h1>

                        {/* Role line */}
                        <motion.p
                            {...fadeUp(0.2)}
                            className="mt-5 font-mono text-xs sm:text-sm tracking-[0.15em] text-muted-foreground uppercase"
                        >
                            Backend Developer &middot; Computer Engineering Student
                        </motion.p>

                        {/* Bio line */}
                        <motion.p
                            {...fadeUp(0.35)}
                            className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0"
                        >
                            I build backends, APIs, and web applications. Currently studying
                            Computer &amp; Communications Engineering while taking on freelance
                            projects that need clean code and reliable systems.
                        </motion.p>

                        {/* CTA row */}
                        <motion.div
                            {...fadeUp(0.5)}
                            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors duration-200"
                            >
                                View Projects
                            </a>
                            <a
                                href="/blog"
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 transition-all duration-200"
                            >
                                Read Blog
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    {...fadeUp(0.7)}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                        className="text-muted-foreground/30"
                    >
                        <ArrowDown size={18} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
