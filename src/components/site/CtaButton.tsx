import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Site-wide button styles (design-system variants, no ad-hoc colors). */
export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-sans text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:brightness-110 hover:shadow-[var(--shadow-jade)]",
        outline:
          "border border-foreground/30 text-foreground hover:border-primary hover:text-primary",
        ghostCream:
          "border border-cream-foreground/25 text-cream-foreground hover:border-primary hover:text-primary",
        solidDark:
          "bg-cream-foreground text-cream hover:bg-cream-foreground/90",
      },
      size: {
        md: "h-11 px-6",
        lg: "h-13 px-8 text-base",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = VariantProps<typeof ctaVariants> & {
  children: ReactNode;
  className?: string;
};

export function CtaLink({
  to,
  children,
  variant,
  size,
  className,
}: Props & { to: string }) {
  return (
    <Link to={to} className={cn(ctaVariants({ variant, size }), className)}>
      {children}
    </Link>
  );
}

export function CtaAnchor({
  href,
  children,
  variant,
  size,
  className,
  external,
}: Props & { href: string; external?: boolean }) {
  return (
    <a
      href={href}
      className={cn(ctaVariants({ variant, size }), className)}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function CtaButton({
  children,
  variant,
  size,
  className,
  ...rest
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(ctaVariants({ variant, size }), className)} {...rest}>
      {children}
    </button>
  );
}
