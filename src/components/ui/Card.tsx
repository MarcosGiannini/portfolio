import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

type CardElement = "div" | "article" | "section";

interface CardBaseProps {
  children: ReactNode;
  className?: string;
}

type CardAsLinkProps = CardBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    as?: never;
  };

type CardAsContainerProps = CardBaseProps &
  HTMLAttributes<HTMLDivElement | HTMLElement> & {
    as?: CardElement;
    href?: never;
  };

type CardProps = CardAsLinkProps | CardAsContainerProps;

const baseClasses =
  "block max-w-full border-2 border-[var(--border)] bg-[var(--bg-surface)] p-5 text-[var(--text-primary)] shadow-[var(--shadow-brutal)] transition-[transform,box-shadow,background-color] duration-200";

const interactiveClasses =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-surface)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[var(--bg-elevated)] hover:shadow-[var(--shadow-brutal)] active:translate-x-1 active:translate-y-1 active:shadow-none";

export default function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  const isClickable = typeof props.href === "string";
  const classes = [
    baseClasses,
    isClickable && interactiveClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (isClickable) {
    const { href, ...anchorProps } = props as CardAsLinkProps;

    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: Component = "div", ...containerProps } =
    props as CardAsContainerProps;

  return (
    <Component className={classes} {...containerProps}>
      {children}
    </Component>
  );
}
