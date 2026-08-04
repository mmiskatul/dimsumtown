import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Consistent vertical rhythm + max width for every page section. */
export function Section({
  children,
  className,
  cream = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  cream?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("px-5 py-20 sm:px-8 md:py-28", cream && "section-cream", className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed opacity-75">{subtitle}</p>
      ) : null}
    </div>
  );
}
