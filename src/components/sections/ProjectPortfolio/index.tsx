"use client";

import type { Project } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  data: Project[];
  title: string;
  underConstructionLabel: string;
  underConstructionAriaLabel: string;
}

const ProjectPortfolio = ({ data, title }: ProjectsProps) => {
  return (
    <section
      id="portfolio"
  className="min-h-screen flex items-center justify-center bg-gray-100 border-b-4 border-black scroll-snap-align-start pb-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center">
          <span className="mt-12 block">{title}</span>
        </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-10 md:gap-y-14">
          {data?.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPortfolio;
