import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { siteConfig } from "@/lib/constants";

interface Props {
  params: Promise<{ id: string }>;
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

  const ogImage = project.gallery.find(
    (item) => item.src && !item.src.includes("placeholder")
  )?.src;

  return {
    title: `${project.title} | Case Study`,
    description: project.shortDescription,
    alternates: {
      canonical: `/projects/${id}`,
    },
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.shortDescription,
      type: "article",
      url: `${siteConfig.url}/projects/${id}`,
      images: ogImage
        ? [{ url: ogImage, alt: project.title }]
        : undefined,
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
