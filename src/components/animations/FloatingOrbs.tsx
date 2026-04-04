"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

interface Orb {
    id: number;
    size: number;
    x: number;
    y: number;
    duration: number;
    delay: number;
    opacity: number;
}

export function FloatingOrbs() {
    const shouldReduceMotion = useReducedMotion();

    const orbs = useMemo<Orb[]>(() => [
        { id: 0, size: 400, x: 15, y: 20, duration: 22, delay: 0, opacity: 0.07 },
        { id: 1, size: 350, x: 75, y: 60, duration: 28, delay: 2, opacity: 0.05 },
        { id: 2, size: 300, x: 50, y: 80, duration: 25, delay: 4, opacity: 0.06 },
        { id: 3, size: 250, x: 85, y: 15, duration: 20, delay: 1, opacity: 0.04 },
    ], []);

    if (shouldReduceMotion) return null;

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-[1]">
            {orbs.map((orb) => (
                <motion.div
                    key={orb.id}
                    className="absolute rounded-full"
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                        background: `radial-gradient(circle, oklch(0.25 0.03 250 / ${orb.opacity}), transparent 70%)`,
                        filter: "blur(60px)",
                        willChange: "transform",
                    }}
                    animate={{
                        x: [0, 30, -20, 15, 0],
                        y: [0, -25, 15, -10, 0],
                        scale: [1, 1.1, 0.95, 1.05, 1],
                    }}
                    transition={{
                        duration: orb.duration,
                        delay: orb.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
