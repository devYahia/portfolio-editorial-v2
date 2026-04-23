"use client";

import { useState } from "react";

interface LanguageToggleProps {
    slug: string;
    onLanguageChange: (content: string, lang: string) => void;
}

export function LanguageToggle({ slug: _slug, onLanguageChange }: LanguageToggleProps) {
    const [activeLang, setActiveLang] = useState<"en" | "ar">("en");

    const switchLanguage = (lang: "en" | "ar") => {
        if (lang === activeLang) return;
        setActiveLang(lang);
        onLanguageChange("", lang);
    };

    const base = "px-2.5 py-1 text-xs font-mono rounded-md transition-all duration-200";
    const active = "bg-white/[0.1] text-foreground";
    const inactive = "text-muted-foreground hover:text-foreground";

    return (
        <div className="flex items-center gap-1 rounded-lg border border-border/50 p-0.5 bg-white/[0.03]">
            <button
                onClick={() => switchLanguage("en")}
                className={[base, activeLang === "en" ? active : inactive].join(" ")}
                suppressHydrationWarning
            >
                EN
            </button>
            <button
                onClick={() => switchLanguage("ar")}
                className={[base, activeLang === "ar" ? active : inactive].join(" ")}
                suppressHydrationWarning
            >
                AR
            </button>
        </div>
    );
}

