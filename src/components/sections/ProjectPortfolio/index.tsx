"use client";

import type { Project } from "@/types/portfolio";
import ProjectCard, { type ProjectCardVariant } from "./ProjectCard";

interface ProjectsProps {
  data: Project[];
  title: string;
  underConstructionLabel: string;
  underConstructionAriaLabel: string;
}

function getProjectVariant(title: string): ProjectCardVariant {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle === "ines game") {
    return "hero";
  }

  if (normalizedTitle === "super teacher") {
    return "primary";
  }

  return "secondary";
}

const ProjectPortfolio = ({ data, title }: ProjectsProps) => {
  const projectsWithVariants = data.map((project) => ({
    project,
    variant: getProjectVariant(project.title),
  }));
  const heroProject = projectsWithVariants.find(({ variant }) => variant === "hero");
  const supportingProjects = projectsWithVariants.filter(
    ({ variant }) => variant !== "hero",
  );

  return (
    <section
      id="portfolio"
      className="relative min-h-screen border-b-4 border-[var(--border)] bg-[var(--bg-base)] py-24 text-[var(--text-primary)] scroll-snap-align-start"
    >
      <span id="projects" className="absolute top-0" aria-hidden="true" />
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <p className="mb-3 text-center font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent-cyan)]">
          &gt; PROJECTS / PRIORITY MAP
        </p>
        <h2 className="mb-12 flex items-center justify-center text-center font-heading text-4xl font-black uppercase leading-none text-[var(--text-primary)] md:text-5xl">
          <span className="block">{title}</span>
        </h2>

        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          {heroProject && (
            <ProjectCard
              project={heroProject.project}
              variant={heroProject.variant}
            />
          )}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {supportingProjects.map(({ project, variant }, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                variant={variant}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPortfolio;
