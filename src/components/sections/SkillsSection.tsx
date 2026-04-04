"use client";

import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import {
    StaggerChildren,
    StaggerItem,
} from "@/components/animations/StaggerChildren";
import { skills } from "@/lib/data";
import { skillCategories } from "@/lib/constants";
import type { SkillCategory } from "@/lib/data";

export function SkillsSection() {
    const categories = Object.keys(skillCategories) as SkillCategory[];

    return (
        <section id="skills" className="relative py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <FadeInWhenVisible>
                    <h2 className="text-3xl md:text-4xl font-heading tracking-tight mb-3">
                        Tech Stack
                    </h2>
                    <p className="text-sm text-muted-foreground mb-12">Tools and technologies I work with regularly.</p>
                </FadeInWhenVisible>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((category, catIndex) => {
                        const categorySkills = skills.filter(
                            (s) => s.category === category
                        );
                        if (categorySkills.length === 0) return null;

                        return (
                            <FadeInWhenVisible
                                key={category}
                                delay={catIndex * 0.1}
                                className="glass-card rounded-xl p-6"
                            >
                                <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">
                                    {skillCategories[category]}
                                </h3>
                                <StaggerChildren className="flex flex-wrap gap-2">
                                    {categorySkills.map((skill) => (
                                        <StaggerItem key={skill.name}>
                                            <div className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300">
                                                <skill.icon
                                                    size={14}
                                                    className="text-muted-foreground group-hover:text-foreground transition-colors"
                                                />
                                                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </StaggerItem>
                                    ))}
                                </StaggerChildren>
                            </FadeInWhenVisible>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
