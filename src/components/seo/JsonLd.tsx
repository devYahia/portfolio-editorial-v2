import { siteConfig } from "@/lib/constants";
import { projects } from "@/lib/data";

interface JsonLdArticle {
    title: string;
    description: string;
    datePublished: string;
    url: string;
    image?: string;
    tags?: string[];
}

interface JsonLdProject {
    id: string;
    title: string;
    description: string;
    role: string;
    techStack: string[];
    image?: string;
    url: string;
    liveUrl?: string;
    githubUrl?: string;
}

interface JsonLdProps {
    type?: "website" | "article" | "project" | "blog";
    article?: JsonLdArticle;
    project?: JsonLdProject;
}

function absoluteUrl(path: string) {
    if (path.startsWith("http")) return path;
    return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function JsonLd({ type = "website", article, project }: JsonLdProps) {
    const personId = `${siteConfig.url}/#person`;
    const websiteId = `${siteConfig.url}/#website`;

    const personSchema = {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.fullName,
        alternateName: siteConfig.alternateName,
        givenName: "Yahia",
        additionalName: "Mohamed Zakaria",
        familyName: "Youssef",
        jobTitle: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        email: siteConfig.links.email,
        image: absoluteUrl("/images/v2.png"),
        nationality: siteConfig.location.country,
        sameAs: [
            siteConfig.links.github,
            siteConfig.links.linkedin,
            siteConfig.links.twitter,
        ],
        knowsAbout: siteConfig.expertise,
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Menoufia University",
            department: "Communication and Computer Engineering",
        },
        hasOccupation: {
            "@type": "Occupation",
            name: "Backend Software Engineer",
            occupationLocation: {
                "@type": "Country",
                name: siteConfig.location.country,
            },
            skills: siteConfig.expertise.join(", "),
        },
    };

    const featuredProjects = projects.filter((item) => item.featured);

    const projectListSchema = {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#projects`,
        name: "Selected Production Projects",
        description: "Case studies of production software built by Yahia Zakaria",
        numberOfItems: featuredProjects.length,
        itemListElement: featuredProjects.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.title,
            url: absoluteUrl(`/projects/${item.id}`),
            description: item.shortDescription,
        })),
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": websiteId,
                url: siteConfig.url,
                name: siteConfig.name,
                description: siteConfig.description,
                publisher: { "@id": personId },
                author: { "@id": personId },
                inLanguage: siteConfig.locale,
                potentialAction: {
                    "@type": "SearchAction",
                    target: `${siteConfig.url}/#projects`,
                    "query-input": "required name=search_term_string",
                },
            },
            {
                "@type": "ProfilePage",
                "@id": `${siteConfig.url}/#profilepage`,
                url: siteConfig.url,
                name: `${siteConfig.fullName} - Backend Software Engineer Portfolio`,
                isPartOf: { "@id": websiteId },
                mainEntity: { "@id": personId },
                about: { "@id": personId },
                description: siteConfig.description,
                inLanguage: siteConfig.locale,
            },
            personSchema,
            projectListSchema,
        ],
    };

    const blogSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Blog",
                "@id": `${siteConfig.url}/blog#blog`,
                url: `${siteConfig.url}/blog`,
                name: `${siteConfig.name} Blog`,
                description: `Technical articles and project deep-dives by ${siteConfig.fullName}.`,
                author: { "@id": personId },
                publisher: { "@id": personId },
                inLanguage: siteConfig.locale,
            },
            personSchema,
        ],
    };

    const articleSchema = article
        ? {
              "@context": "https://schema.org",
              "@graph": [
                  {
                      "@type": "Article",
                      headline: article.title,
                      description: article.description,
                      datePublished: article.datePublished,
                      url: article.url,
                      image: article.image ? absoluteUrl(article.image) : absoluteUrl("/opengraph-image"),
                      author: { "@id": personId },
                      publisher: { "@id": personId },
                      mainEntityOfPage: {
                          "@type": "WebPage",
                          "@id": article.url,
                      },
                      keywords: article.tags?.join(", "),
                      inLanguage: siteConfig.locale,
                  },
                  personSchema,
              ],
          }
        : null;

    const projectSchema = project
        ? {
              "@context": "https://schema.org",
              "@graph": [
                  {
                      "@type": "BreadcrumbList",
                      itemListElement: [
                          {
                              "@type": "ListItem",
                              position: 1,
                              name: "Home",
                              item: siteConfig.url,
                          },
                          {
                              "@type": "ListItem",
                              position: 2,
                              name: "Projects",
                              item: `${siteConfig.url}/#projects`,
                          },
                          {
                              "@type": "ListItem",
                              position: 3,
                              name: project.title,
                              item: project.url,
                          },
                      ],
                  },
                  {
                      "@type": "SoftwareSourceCode",
                      name: project.title,
                      description: project.description,
                      url: project.url,
                      image: project.image ? absoluteUrl(project.image) : undefined,
                      programmingLanguage: project.techStack,
                      author: {
                          "@type": "Person",
                          name: siteConfig.fullName,
                          url: siteConfig.url,
                          jobTitle: project.role,
                      },
                      creator: { "@id": personId },
                      codeRepository: project.githubUrl,
                      applicationCategory: "DeveloperApplication",
                      operatingSystem: "Web",
                      offers: project.liveUrl
                          ? {
                                "@type": "Offer",
                                url: project.liveUrl,
                                availability: "https://schema.org/InStock",
                            }
                          : undefined,
                  },
                  personSchema,
              ],
          }
        : null;

    const schema =
        type === "article" && articleSchema
            ? articleSchema
            : type === "project" && projectSchema
              ? projectSchema
              : type === "blog"
                ? blogSchema
                : websiteSchema;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
