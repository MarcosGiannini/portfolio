import { Check } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import type { Pack } from "@/types/portfolio";

interface PackCardProps {
  pack: Pack;
}

export default function PackCard({ pack }: PackCardProps) {
  const highlightClasses = pack.highlighted
    ? "border-[var(--accent-cyan)] shadow-[var(--shadow-brutal),var(--glow-cyan)] md:-translate-y-3"
    : "border-[var(--border)]";

  const headerClasses = pack.highlighted
    ? "bg-[color-mix(in_srgb,var(--accent-cyan)_14%,var(--bg-elevated))]"
    : "bg-[color-mix(in_srgb,var(--bg-elevated)_78%,var(--bg-base))]";

  return (
    <Card
      as="article"
      className={`group/pack flex h-full flex-col border-4 p-0 transition-[transform,box-shadow,border-color] duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[var(--shadow-brutal),var(--glow-cyan)] ${highlightClasses}`}
    >
      <header
        className={`border-b-2 border-[color-mix(in_srgb,var(--border)_62%,transparent)] p-5 ${headerClasses}`}
      >
        <div className="mb-4 flex min-h-8 flex-wrap items-start justify-between gap-3">
          <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
            &gt; WEBSITE PACK
          </p>
          {pack.badge && (
            <Badge
              label={pack.badge}
              variant={pack.highlighted ? "cyan" : "magenta"}
            />
          )}
        </div>

        <h3 className="font-heading text-2xl font-black uppercase leading-tight text-[var(--text-primary)] transition-colors duration-200 group-hover/pack:text-[var(--accent-cyan)] sm:text-3xl">
          {pack.name}
        </h3>
        <p className="mt-4 font-mono text-3xl font-black uppercase leading-none text-[var(--accent-yellow)]">
          {pack.price}
        </p>
      </header>

      <div className="border-b-2 border-[color-mix(in_srgb,var(--border)_36%,transparent)] p-5">
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          {pack.description}
        </p>
        <div className="mt-5">
          <p className="mb-3 font-mono text-[0.68rem] font-black uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Ideal para
          </p>
          <ul className="space-y-2">
            {pack.idealFor.map((item) => (
              <li
                key={item}
                className="font-mono text-xs font-bold uppercase leading-5 tracking-[0.1em] text-[var(--accent-cyan)]"
              >
                <span className="text-[var(--text-primary)]">/</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-4 font-mono text-[0.68rem] font-black uppercase tracking-[0.18em] text-[var(--text-muted)]">
          Incluye
        </p>
        <ul className="space-y-3">
          {pack.features.map((feature) => (
            <li
              key={feature}
              className="flex gap-3 text-sm font-bold leading-6 text-[var(--text-secondary)]"
            >
              <Check
                className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-green)]"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          href={pack.ctaHref}
          size="sm"
          variant={pack.highlighted ? "primary" : "secondary"}
          className="mt-8 w-full font-mono uppercase tracking-[0.14em] hover:shadow-[var(--shadow-brutal),var(--glow-cyan)] motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.97] motion-reduce:transition-colors"
        >
          {pack.ctaLabel}
        </Button>
      </div>
    </Card>
  );
}
