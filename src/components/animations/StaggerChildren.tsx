"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggerChildrenProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    delayChildren?: number;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: (custom: { staggerDelay: number; delayChildren: number }) => ({
        opacity: 1,
        transition: {
            staggerChildren: custom.staggerDelay,
            delayChildren: custom.delayChildren,
        },
    }),
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

export function StaggerChildren({
    children,
    className,
    staggerDelay = 0.1,
    delayChildren = 0.2,
}: StaggerChildrenProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={cn(className)}>{children}</div>;
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={{ staggerDelay, delayChildren }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div variants={itemVariants} className={cn(className)}>
            {children}
        </motion.div>
    );
}
