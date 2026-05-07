import type { ReactNode } from "react";

export type BadgeVariant = "cyan" | "magenta" | "yellow" | "green";

type BadgeContent =
  | {
      label: string;
      children?: never;
    }
  | {
      label?: never;
      children: ReactNode;
    };

type BadgeProps = BadgeContent & {
  variant?: BadgeVariant;
  className?: string;
};

const baseClasses =
  "inline-flex max-w-full shrink-0 items-center justify-center border-2 bg-[color-mix(in_srgb,var(--badge-accent)_14%,var(--bg-base))] px-2.5 py-1 font-mono text-xs font-bold uppercase leading-none tracking-[0.14em] text-[var(--text-primary)]";

const variantClasses: Record<BadgeVariant, string> = {
  cyan: "[--badge-accent:var(--accent-cyan)] border-[var(--accent-cyan)]",
  magenta: "[--badge-accent:var(--accent-magenta)] border-[var(--accent-magenta)]",
  yellow: "[--badge-accent:var(--accent-yellow)] border-[var(--accent-yellow)]",
  green: "[--badge-accent:var(--accent-green)] border-[var(--accent-green)]",
};

export default function Badge({
  label,
  children,
  variant = "cyan",
  className = "",
}: BadgeProps) {
  const classes = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{label ?? children}</span>;
}
