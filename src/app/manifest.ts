import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${siteConfig.fullName} Portfolio`,
        short_name: siteConfig.name,
        description: siteConfig.description,
        start_url: "/",
        display: "standalone",
        background_color: "#09090b",
        theme_color: "#09090b",
        lang: "en",
        icons: [
            {
                src: "/images/v2.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
