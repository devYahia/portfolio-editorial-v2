"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Active section detection
            const sections = navItems
                .filter((item) => item.href.startsWith("#"))
                .map((item) => item.href.slice(1));

            for (const section of sections.reverse()) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileOpen(false);
        if (href.startsWith("#")) {
            const el = document.getElementById(href.slice(1));
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled ? "glass-navbar" : "bg-transparent"
            )}
        >
            <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-mono text-lg font-bold tracking-tight text-foreground hover:text-foreground/80 transition-colors"
                >
                    {siteConfig.name}
                    <span className="text-foreground/30">.</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive =
                            item.href.startsWith("#") &&
                            activeSection === item.href.slice(1);
                        return (
                            <li key={item.href}>
                                {item.href.startsWith("/") ? (
                                    <Link
                                        href={item.href}
                                        className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() => handleNavClick(item.href)}
                                        className={cn(
                                            "relative px-4 py-2 text-sm transition-colors",
                                            isActive
                                                ? "text-foreground"
                                                : "text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {item.label}
                                        {isActive && (
                                            <motion.span
                                                layoutId="activeNav"
                                                className="absolute bottom-0 left-2 right-2 h-px bg-foreground/50"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                    </button>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
                    aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                >
                    {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                        className="md:hidden overflow-hidden glass-heavy"
                    >
                        <ul className="px-6 py-4 space-y-1">
                            {navItems.map((item, i) => (
                                <motion.li
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    {item.href.startsWith("/") ? (
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMobileOpen(false)}
                                            className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border/50"
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => handleNavClick(item.href)}
                                            className="block w-full text-left py-3 text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border/50"
                                        >
                                            {item.label}
                                        </button>
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
