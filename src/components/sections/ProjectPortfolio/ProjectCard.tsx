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
    <Card as="article" className="flex h-full flex-col gap-0 border-4 p-0">
      <header className="border-b-2 border-[color-mix(in_srgb,var(--border)_62%,transparent)] bg-[color-mix(in_srgb,var(--bg-elevated)_78%,var(--bg-base))] p-5">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
            &gt; PROJECT / SYSTEM MODULE
          </p>
          <Badge label={status} variant={getStatusVariant(status)} />
        </div>

        <h3 className="font-heading text-2xl font-black uppercase leading-tight text-[var(--text-primary)] sm:text-3xl">
          {project.title}
        </h3>
      </header>

      <div className="border-b-2 border-[color-mix(in_srgb,var(--border)_36%,transparent)] p-5">
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          {project.desc}
        </p>
      </div>

      {project.tech && project.tech.length > 0 && (
        <div className="border-b-2 border-[color-mix(in_srgb,var(--border)_36%,transparent)] p-5">
          <p className="mb-3 font-mono text-[0.68rem] font-black uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Stack
          </p>
          <ul className="flex flex-wrap gap-x-2 gap-y-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent-green)]">
            {project.tech.map((tech) => (
              <li key={tech}>
                <span className="text-[var(--text-primary)]">/</span>{" "}
                {tech.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      )}

      {hasActions && (
        <div className="mt-auto flex flex-wrap gap-4 p-5">
          {hasDemo && (
            <Button
              href={project.url}
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono uppercase tracking-[0.14em]"
            >
              [ View Project ]
            </Button>
          )}
          {project.repo && (
            <Button
              href={project.repo}
              variant="secondary"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono uppercase tracking-[0.14em]"
            >
              [ Open Repo ]
            </Button>
          )}
        </div>
      )}
    </Card>
  );
}
