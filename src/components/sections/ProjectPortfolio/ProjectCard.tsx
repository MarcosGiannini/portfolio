import Badge, { type BadgeVariant } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

function getStatusVariant(status: string): BadgeVariant {
  const normalizedStatus = status
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  if (normalizedStatus.includes("produccion")) {
    return "green";
  }

  if (normalizedStatus.includes("desarrollo")) {
    return "yellow";
  }

  if (normalizedStatus.includes("open")) {
    return "cyan";
  }

  return "magenta";
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const status = project.badge ?? "SIN ESTADO";
  const hasDemo = Boolean(project.url?.trim());
  const hasActions = Boolean(hasDemo || project.repo);

  return (
    <Card as="article" className="flex h-full flex-col gap-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-2xl font-bold leading-tight text-[var(--text-primary)]">
          {project.title}
        </h3>
        <Badge label={status} variant={getStatusVariant(status)} />
      </header>

      <p className="text-sm leading-6 text-[var(--text-secondary)]">
        {project.desc}
      </p>

      {project.tech && project.tech.length > 0 && (
        <ul className="flex flex-wrap gap-x-3 gap-y-2 border-t-2 border-[var(--border)] pt-4 font-mono text-xs uppercase tracking-[0.12em] text-[var(--text-secondary)]">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="before:mr-2 before:text-[var(--text-primary)] before:content-['/']"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}

      {hasActions && (
        <div className="mt-auto flex flex-wrap gap-4 pt-2">
          {hasDemo && (
            <Button href={project.url} size="sm" target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </Button>
          )}
          {project.repo && (
            <Button
              href={project.repo}
              variant="secondary"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          )}
        </div>
      )}
    </Card>
  );
}
