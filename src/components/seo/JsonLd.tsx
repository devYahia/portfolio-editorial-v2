import { siteConfig } from "@/lib/constants";

interface JsonLdProps {
    type?: "website" | "article";
    article?: {
        title: string;
        description: string;
        datePublished: string;
        url: string;
    };
}

export function JsonLd({ type = "website", article }: JsonLdProps) {
    const personSchema = {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.fullName,
        givenName: "Yahia",
        familyName: "Youssef",
        jobTitle: "Backend Software Engineer",
        description: siteConfig.description,
        url: siteConfig.url,
        email: siteConfig.links.email,
        image: `${siteConfig.url}/images/yahia-bw.webp`,
        sameAs: [
            siteConfig.links.github,
            siteConfig.links.linkedin,
            siteConfig.links.twitter,
        ],
        knowsAbout: [
            "Backend Development",
            "API Design",
            "Node.js",
            "TypeScript",
            "Python",
            "PostgreSQL",
            "Next.js",
            "Web Applications",
            "Database Design",
            "Software Engineering",
        ],
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Menoufia University",
            department: "Computer and Communications Engineering",
        },
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": `${siteConfig.url}/#website`,
                url: siteConfig.url,
                name: siteConfig.name,
                description: siteConfig.description,
                publisher: { "@id": `${siteConfig.url}/#person` },
                inLanguage: "en-US",
            },
            {
                "@type": "ProfilePage",
                "@id": `${siteConfig.url}/#profilepage`,
                url: siteConfig.url,
                name: `${siteConfig.fullName} - Backend Software Engineer Portfolio`,
                isPartOf: { "@id": `${siteConfig.url}/#website` },
                mainEntity: personSchema,
                description: siteConfig.description,
                inLanguage: "en-US",
            },
            personSchema,
        ],
    };

    const articleSchema = article
        ? {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            datePublished: article.datePublished,
            url: article.url,
            author: {
                "@type": "Person",
                name: siteConfig.fullName,
                url: siteConfig.url,
            },
            publisher: {
                "@type": "Person",
                name: siteConfig.fullName,
                url: siteConfig.url,
            },
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": article.url,
            },
            inLanguage: "en-US",
        }
        : null;

    const schema = type === "article" && articleSchema ? articleSchema : websiteSchema;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
