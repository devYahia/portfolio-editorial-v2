"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInWhenVisibleProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
}

export function FadeInWhenVisible({
    children,
    className,
    delay = 0,
    duration = 0.6,
    direction = "up",
    distance = 40,
}: FadeInWhenVisibleProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const shouldReduceMotion = useReducedMotion();

    const directionOffset = {
        up: { x: 0, y: distance },
        down: { x: 0, y: -distance },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
        none: { x: 0, y: 0 },
    };

    const offset = directionOffset[direction];

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: offset.x, y: offset.y }}
            animate={
                isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, x: offset.x, y: offset.y }
            }
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1] as const,
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
