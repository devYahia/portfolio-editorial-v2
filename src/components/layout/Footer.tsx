import Link from "next/link";
import { socialLinks } from "@/lib/data";
import { siteConfig } from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/50 bg-background/50">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo + tagline */}
                    <div className="text-center md:text-left">
                        <Link
                            href="/"
                            className="font-mono text-lg font-bold tracking-tight text-foreground"
                        >
                            {siteConfig.name}
                            <span className="text-foreground/30">.</span>
                        </Link>
                        <p className="mt-1 text-xs text-muted-foreground">
                            Backend development & web applications
                        </p>
                    </div>

                </div>

                {/* Divider */}
                <div className="line-accent my-6" />

                {/* Copyright */}
                <p className="text-center text-xs text-muted-foreground/60">
                    &copy; {currentYear} {siteConfig.fullName}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
