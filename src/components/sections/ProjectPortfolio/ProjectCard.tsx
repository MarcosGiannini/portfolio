import Badge, { type BadgeVariant } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import type { Project } from "@/types/portfolio";

export type ProjectCardVariant = "hero" | "primary" | "secondary";

interface ProjectCardProps {
  project: Project;
  variant?: ProjectCardVariant;
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

const variantStyles: Record<
  ProjectCardVariant,
  {
    card: string;
    header: string;
    moduleLabel: string;
    moduleLabelColor: string;
    title: string;
    block: string;
    body: string;
    stack: string;
    actions: string;
  }
> = {
  hero: {
    card: "border-[var(--accent-magenta)] shadow-[var(--shadow-brutal),var(--glow-magenta)]",
    header:
      "bg-[color-mix(in_srgb,var(--accent-magenta)_14%,var(--bg-elevated))] p-6 sm:p-8",
    moduleLabel: "> FEATURED PROJECT — EXPERIMENTAL / GAME DEV",
    moduleLabelColor: "text-[var(--accent-magenta)]",
    title: "text-3xl sm:text-5xl",
    block: "p-6 sm:p-8",
    body: "text-base leading-7 sm:text-lg sm:leading-8",
    stack: "text-sm",
    actions: "p-6 sm:p-8",
  },
  primary: {
    card: "border-[var(--accent-cyan)] shadow-[var(--shadow-brutal),var(--glow-cyan)]",
    header:
      "bg-[color-mix(in_srgb,var(--accent-cyan)_12%,var(--bg-elevated))] p-5",
    moduleLabel: "> PRODUCTION PROJECT",
    moduleLabelColor: "text-[var(--accent-cyan)]",
    title: "text-2xl sm:text-3xl",
    block: "p-5",
    body: "text-sm leading-6",
    stack: "text-xs",
    actions: "p-5",
  },
  secondary: {
    card: "",
    header: "bg-[color-mix(in_srgb,var(--bg-elevated)_78%,var(--bg-base))] p-5",
    moduleLabel: "> PROJECT / SYSTEM MODULE",
    moduleLabelColor: "text-[var(--accent-cyan)]",
    title: "text-2xl sm:text-3xl",
    block: "p-5",
    body: "text-sm leading-6",
    stack: "text-xs",
    actions: "p-5",
  },
};

export default function ProjectCard({
  project,
  variant = "secondary",
}: ProjectCardProps) {
  const status = project.badge ?? "SIN ESTADO";
  const hasDemo = Boolean(project.url?.trim());
  const hasActions = Boolean(hasDemo || project.repo);
  const styles = variantStyles[variant];

  return (
    <Card
      as="article"
      className={`flex h-full flex-col gap-0 border-4 p-0 ${styles.card}`}
    >
      <header
        className={`border-b-2 border-[color-mix(in_srgb,var(--border)_62%,transparent)] ${styles.header}`}
      >
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <p
            className={`font-mono text-xs font-black uppercase tracking-[0.2em] ${styles.moduleLabelColor}`}
          >
            {styles.moduleLabel}
          </p>
          <Badge label={status} variant={getStatusVariant(status)} />
        </div>

        <h3
          className={`font-heading font-black uppercase leading-tight text-[var(--text-primary)] ${styles.title}`}
        >
          {project.title}
        </h3>
      </header>

      <div
        className={`border-b-2 border-[color-mix(in_srgb,var(--border)_36%,transparent)] ${styles.block}`}
      >
        <p className={`text-[var(--text-secondary)] ${styles.body}`}>
          {project.desc}
        </p>
      </div>

      {project.tech && project.tech.length > 0 && (
        <div
          className={`border-b-2 border-[color-mix(in_srgb,var(--border)_36%,transparent)] ${styles.block}`}
        >
          <p className="mb-3 font-mono text-[0.68rem] font-black uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Stack
          </p>
          <ul
            className={`flex flex-wrap gap-x-2 gap-y-2 font-mono font-bold uppercase tracking-[0.12em] text-[var(--accent-green)] ${styles.stack}`}
          >
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
        <div className={`mt-auto flex flex-wrap gap-4 ${styles.actions}`}>
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
