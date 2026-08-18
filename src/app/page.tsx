import GlobalRedHero from "@/components/red-grid/GlobalRedHero";
import GlobalRedBento from "@/components/red-grid/GlobalRedBento";
import GlobalRedProjects from "@/components/red-grid/GlobalRedProjects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `${siteConfig.fullName} | Backend Software Engineer Portfolio`,
    description: siteConfig.description,
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: `${siteConfig.fullName} | Backend Software Engineer`,
        description: siteConfig.description,
        url: siteConfig.url,
        type: "website",
        images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.fullName} | Backend Software Engineer`,
        description: siteConfig.description,
        creator: "@YahiaSWE",
        images: ["/opengraph-image"],
    },
};

export default function HomePage() {
    return (
        <>
            <JsonLd type="website" />
            <Navbar />
            <main className="w-full min-h-screen bg-[#09090b] text-zinc-100 selection:bg-red-900/50">
                <GlobalRedHero />
                <GlobalRedBento />
                <GlobalRedProjects />
            </main>
            <Footer />
        </>
    );
}
