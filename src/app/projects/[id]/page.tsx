import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/constants";

interface Props {
  params: Promise<{ id: string }>;
}

function getProjectOgImage(project: (typeof projects)[number]) {
  const image = project.gallery.find(
    (item) => item.src && !item.src.includes("placeholder")
  )?.src;

  return image ? `${siteConfig.url}${image}` : `${siteConfig.url}/opengraph-image`;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) return { title: "Project Not Found" };

  const ogImage = getProjectOgImage(project);
  const description = `${project.shortDescription} Built by ${siteConfig.fullName}. Role: ${project.role}. Stack: ${project.techStack.slice(0, 6).join(", ")}.`;

  return {
    title: `${project.title} Case Study`,
    description,
    keywords: [
      project.title,
      ...project.techStack,
      siteConfig.fullName,
      "case study",
      "software engineer portfolio",
    ],
    alternates: {
      canonical: `/projects/${id}`,
    },
    openGraph: {
      title: `${project.title} | Case Study by ${siteConfig.fullName}`,
      description,
      type: "article",
      url: `${siteConfig.url}/projects/${id}`,
      images: [{ url: ogImage, alt: `${project.title} case study preview` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study`,
      description,
      creator: "@YahiaSWE",
      images: [ogImage],
    },
  };
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { id } = await params;
  const projectIndex = projects.findIndex((item) => item.id === id);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const ogImage = project.gallery.find(
    (item) => item.src && !item.src.includes("placeholder")
  )?.src;

  const prevProject =
    projectIndex > 0
      ? {
          id: projects[projectIndex - 1].id,
          title: projects[projectIndex - 1].title,
          role: projects[projectIndex - 1].role,
        }
      : null;

  const nextProject =
    projectIndex < projects.length - 1
      ? {
          id: projects[projectIndex + 1].id,
          title: projects[projectIndex + 1].title,
          role: projects[projectIndex + 1].role,
        }
      : null;

  return (
    <>
      <JsonLd
        type="project"
        project={{
          id: project.id,
          title: project.title,
          description: project.shortDescription,
          role: project.role,
          techStack: project.techStack,
          image: ogImage,
          url: `${siteConfig.url}/projects/${project.id}`,
          liveUrl: project.liveUrl,
          githubUrl: project.githubUrl,
        }}
      />
      <ScrollProgress className="bg-red-900/70" />
      <Navbar />
      <ProjectCaseStudy
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
      <Footer />
    </>
  );
}
