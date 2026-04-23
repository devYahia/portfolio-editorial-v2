"use client";

import { useState, useCallback } from "react";
import { LanguageToggle } from "./LanguageToggle";

interface BlogPostClientProps {
    slug: string;
    hasArabic: boolean;
    englishRendered: React.ReactNode;
    arabicRendered: React.ReactNode | null;
}

export function BlogPostClient({
    slug,
    hasArabic,
    englishRendered,
    arabicRendered,
}: BlogPostClientProps) {
    const [lang, setLang] = useState<"en" | "ar">("en");

    const handleLanguageChange = useCallback((_content: string, newLang: string) => {
        setLang(newLang as "en" | "ar");
    }, []);

    const isArabic = lang === "ar" && arabicRendered !== null;

    return (
        <>
            {hasArabic && (
                <div className="flex justify-end mb-6">
                    <LanguageToggle
                        slug={slug}
                        onLanguageChange={handleLanguageChange}
                    />
                </div>
            )}
            <div
                className={`prose-custom transition-all duration-300 ${
                    isArabic ? "article-ar" : ""
                }`}
                dir={isArabic ? "rtl" : "ltr"}
            >
                {isArabic ? arabicRendered : englishRendered}
            </div>
        </>
    );
}
