import { Reveal } from "./Reveal";

/** Compact page header used by every inner page (clears the fixed nav). */
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border px-5 pb-14 pt-36 sm:px-8 md:pb-20 md:pt-44">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
