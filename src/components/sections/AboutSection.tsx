"use client";

import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="relative py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <FadeInWhenVisible>
                    <h2 className="text-3xl md:text-4xl font-heading tracking-tight mb-2">
                        About Me
                    </h2>
                    <div className="w-16 h-[2px] bg-foreground/20 mb-12" />
                </FadeInWhenVisible>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Bio */}
                    <FadeInWhenVisible delay={0.1} className="lg:col-span-2">
                        <div className="glass-card rounded-xl p-8">
                            <p className="text-muted-foreground leading-relaxed text-base">
                                I&apos;m Yahia Mohamed Zakaria Youssef. I study Computer and Communications
                                Engineering, and I build backends for a living. My work focuses on
                                creating APIs, web applications, and the infrastructure that keeps
                                them running -- from database design to deployment pipelines.
                            </p>
                            <p className="mt-4 text-muted-foreground leading-relaxed text-base">
                                I care about writing code that other people can read and maintain.
                                Outside of client work, I explore financial technology and
                                experiment with new tools and frameworks to keep my skills sharp.
                            </p>
                        </div>
                    </FadeInWhenVisible>

                    {/* Info cards */}
                    <div className="space-y-4">
                        <FadeInWhenVisible delay={0.2}>
                            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
                                <GraduationCap
                                    size={20}
                                    className="text-muted-foreground mt-0.5 shrink-0"
                                />
                                <div>
                                    <p className="text-sm font-medium text-foreground">
                                        Education
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Computer & Communications Engineering
                                    </p>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={0.3}>
                            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
                                <Briefcase
                                    size={20}
                                    className="text-muted-foreground mt-0.5 shrink-0"
                                />
                                <div>
                                    <p className="text-sm font-medium text-foreground">Focus</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Backend Systems, APIs, Web Applications
                                    </p>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={0.4}>
                            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
                                <MapPin
                                    size={20}
                                    className="text-muted-foreground mt-0.5 shrink-0"
                                />
                                <div>
                                    <p className="text-sm font-medium text-foreground">
                                        Location
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Egypt
                                    </p>
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </div>
        </section>
    );
}
