import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsLinkProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    disabled?: boolean;
  };

type ButtonAsButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const baseClasses =
  "inline-flex items-center justify-center gap-2 border-2 font-bold tracking-normal transition-[transform,box-shadow,background-color,color,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-[var(--border)] bg-[var(--accent-cyan)] text-[var(--bg-base)] shadow-[var(--shadow-brutal)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-brutal)] active:translate-x-1 active:translate-y-1 active:shadow-none",
  secondary:
    "border-[var(--border-accent)] bg-[var(--bg-base)] text-[var(--text-primary)] shadow-[var(--shadow-brutal)] hover:bg-[var(--bg-elevated)] active:translate-x-1 active:translate-y-1 active:shadow-none",
  ghost:
    "border-transparent bg-transparent text-[var(--text-secondary)] hover:border-[var(--border-accent)] hover:text-[var(--text-primary)] active:text-[var(--accent-cyan)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-3 text-base",
  lg: "min-h-12 px-6 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (typeof props.href === "string") {
    const { disabled, href, onClick, ...anchorProps } = props as ButtonAsLinkProps;

    return (
      <a
        href={disabled ? undefined : href}
        aria-disabled={disabled || undefined}
        className={classes}
        onClick={disabled ? undefined : onClick}
        tabIndex={disabled ? -1 : anchorProps.tabIndex}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
