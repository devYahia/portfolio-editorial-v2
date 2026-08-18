import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Award, Github } from "lucide-react";
import type { Project, ProjectCategory } from "@/lib/data";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { ProjectMediaGallery } from "@/components/projects/ProjectMediaGallery";

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  infrastructure: "Infrastructure",
  fintech: "Fintech",
  bots: "Automation",
  "full-stack": "Full-Stack",
  tools: "Tools",
};

interface NeighborProject {
  id: string;
  title: string;
  role: string;
}

interface ProjectCaseStudyProps {
  project: Project;
  prevProject: NeighborProject | null;
  nextProject: NeighborProject | null;
}

function getRealGallery(gallery: Project["gallery"]) {
  return gallery.filter(
    (item) => item.src && !item.src.includes("placeholder")
  );
}

export function ProjectCaseStudy({
  project,
  prevProject,
  nextProject,
}: ProjectCaseStudyProps) {
  const gallery = getRealGallery(project.gallery);

  return (
    <main className="relative w-full min-h-screen bg-[#09090b] text-white selection:bg-red-900/50 overflow-x-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#7f1d1d 1px, transparent 1px), linear-gradient(90deg, #7f1d1d 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] max-w-[720px] h-[420px] bg-red-700/20 rounded-full blur-[140px]" />

      <article className="relative z-10 mx-auto w-full max-w-[72rem] px-5 md:px-8 pt-28 md:pt-32 pb-24">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm mb-8 md:mb-10 group"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          <span className="font-medium uppercase tracking-[0.18em] text-xs">
            Back to work
          </span>
        </Link>

        <header className="mb-8 md:mb-10">
          <p className="text-white/40 text-[11px] font-bold tracking-[0.28em] uppercase mb-3 flex items-center gap-3">
            <span className="w-7 h-px bg-red-900/50" />
            Case Study
          </p>

          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
            <div className="min-w-0 flex-1">
              <h1 className="font-sans font-semibold text-[1.65rem] sm:text-3xl md:text-[2.125rem] lg:text-[2.35rem] leading-[1.15] tracking-tight text-white">
                {project.title}
              </h1>
            </div>

            {(project.liveUrl || project.githubUrl || project.certificateUrl) && (
              <div className="flex flex-wrap gap-2 shrink-0">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-black hover:bg-neutral-200 transition-colors"
                  >
                    {project.liveUrl.includes("t.me") ? "Open bot" : "View live"}
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : null}
                {project.certificateUrl ? (
                  <a
                    href={project.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/15 bg-[#111111]/60 px-5 text-sm font-medium text-white hover:bg-white/5 transition-colors backdrop-blur-sm"
                  >
                    <Award className="size-4" />
                    Certificate
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/15 bg-[#111111]/60 px-5 text-sm font-medium text-white hover:bg-white/5 transition-colors backdrop-blur-sm"
                  >
                    <Github className="size-4" />
                    Source
                  </a>
                ) : null}
              </div>
            )}
          </div>

          <p className="mt-3 text-[15px] md:text-base text-white/55 leading-relaxed font-light">
            {project.shortDescription}
          </p>
          {project.collaborator ? (
            <p className="mt-2 text-sm text-white/35">
              Co-built with{" "}
              <span className="text-white/55">{project.collaborator}</span>
            </p>
          ) : null}

          <dl className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 border-y border-white/10 py-4 md:py-5">
            <MetaItem label="Role" value={project.role} />
            <MetaItem
              label="Category"
              value={CATEGORY_LABELS[project.category]}
            />
            <MetaItem label="Stack" value={project.techStack.slice(0, 3).join(" · ")} />
            <MetaItem
              label="Availability"
              value={project.liveUrl ? "Live product" : "Private / local"}
            />
          </dl>
        </header>

        <FadeInWhenVisible distance={24} duration={0.5}>
          {gallery.length > 0 ? (
            <ProjectMediaGallery items={gallery} title={project.title} />
          ) : (
            <ArchitectureFrame project={project} />
          )}
        </FadeInWhenVisible>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <aside className="order-1 md:order-2 md:col-span-4">
            <div className="md:sticky md:top-28 space-y-5">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/5 bg-[#111113]/80 backdrop-blur-sm p-6">
                <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-[70px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
                <p className="relative text-[11px] font-bold tracking-[0.22em] uppercase text-white/40 mb-3">
                  Impact
                </p>
                <p className="relative text-[15px] md:text-base text-white/85 leading-relaxed font-medium">
                  {project.impact}
                </p>
              </div>

              <div className="rounded-2xl md:rounded-3xl border border-white/5 bg-[#111113]/80 backdrop-blur-sm p-6">
                <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/35 mb-4">
                  Tech stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-white/65"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="mailto:mrzak051@gmail.com"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white px-5 py-4 text-black hover:bg-neutral-200 transition-colors"
              >
                <span>
                  <span className="block text-[11px] font-bold tracking-[0.18em] uppercase text-black/50">
                    Next step
                  </span>
                  <span className="block text-sm font-semibold mt-0.5">
                    Let&apos;s talk
                  </span>
                </span>
                <ArrowUpRight className="size-5" />
              </a>
            </div>
          </aside>

          <div className="order-2 md:order-1 md:col-span-8 space-y-12 md:space-y-14">
            <FadeInWhenVisible distance={20}>
              <StorySection index="01" title="The challenge">
                {project.context}
              </StorySection>
            </FadeInWhenVisible>

            <FadeInWhenVisible distance={20}>
              <StorySection index="02" title="Architecture">
                {project.architecture}
              </StorySection>
            </FadeInWhenVisible>

            <FadeInWhenVisible distance={20}>
              <StorySection index="03" title="Challenges overcome">
                {project.challengesOvercome}
              </StorySection>
            </FadeInWhenVisible>

            <FadeInWhenVisible distance={20}>
              <StorySection index="04" title="Lessons learned">
                {project.lessonsLearned}
              </StorySection>
            </FadeInWhenVisible>

          </div>
        </div>

        {(prevProject || nextProject) && (
          <nav
            aria-label="More case studies"
            className="mt-16 md:mt-20 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {prevProject ? (
              <NeighborCard label="Previous" project={prevProject} align="start" />
            ) : (
              <div />
            )}
            {nextProject ? (
              <NeighborCard label="Next" project={nextProject} align="end" />
            ) : null}
          </nav>
        )}
      </article>
    </main>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-white/35 mb-1">
        {label}
      </dt>
      <dd className="text-sm text-white/80 font-medium leading-snug">{value}</dd>
    </div>
  );
}

function StorySection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: string;
}) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-[11px] text-white/35 tracking-widest">
          {index}
        </span>
        <span className="h-px w-12 bg-red-900/35" />
        <h2 className="font-sans font-medium text-lg md:text-xl text-white tracking-tight">
          {title}
        </h2>
      </div>
      <p className="text-[15px] md:text-base text-white/65 leading-[1.8] font-light max-w-2xl">
        {children}
      </p>
    </section>
  );
}

function ArchitectureFrame({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden rounded-2xl md:rounded-[28px] border border-white/10 bg-[#111113] h-[220px] sm:h-[260px] md:h-[300px] p-6 md:p-8">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-red-600/12 rounded-full blur-[80px] pointer-events-none translate-x-1/4 translate-y-1/4" />
      <p className="pointer-events-none absolute -right-2 bottom-0 select-none font-sans text-[6.5rem] md:text-[8rem] font-bold leading-none text-white/[0.04]">
        {project.title.slice(0, 2).toUpperCase()}
      </p>

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/40 mb-3">
            System snapshot
          </p>
          <p className="text-white font-medium text-lg md:text-xl tracking-tight">
            {project.role}
          </p>
          <p className="mt-2 text-white/50 text-sm max-w-md leading-relaxed">
            {project.shortDescription}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-black/40 border border-white/10 font-mono text-xs text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function NeighborCard({
  label,
  project,
  align,
}: {
  label: string;
  project: NeighborProject;
  align: "start" | "end";
}) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className={`group rounded-2xl border border-white/5 bg-[#111113]/70 p-5 hover:border-red-900/35 transition-colors ${
        align === "end" ? "md:text-right" : ""
      }`}
    >
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/35 mb-2">
        {label}
      </p>
      <p className="text-white font-medium group-hover:text-white/80 transition-colors">
        {project.title}
      </p>
      <p className="text-xs text-white/40 mt-1">{project.role}</p>
    </Link>
  );
}
