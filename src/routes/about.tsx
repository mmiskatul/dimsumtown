import { createFileRoute } from "@tanstack/react-router";
import { Sprout, HandPlatter, Sparkles } from "lucide-react";
import kitchenImage from "@/assets/kitchen.jpg";
import interiorImage from "@/assets/interior.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaLink } from "@/components/site/CtaButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Dim Sum Town Dhanmondi" },
      {
        name: "description",
        content:
          "The story behind Dim Sum Town Dhanmondi — hand-folded dim sum craftsmanship met with modern Pan-Asian flavour, values and kitchen.",
      },
      { property: "og:title", content: "About Us | Dim Sum Town Dhanmondi" },
      {
        property: "og:description",
        content:
          "Traditional dim sum craftsmanship, modern Pan-Asian flavour — our story, values and kitchen.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Sprout,
    title: "Ingredients first",
    body: "Prawns and greens sourced fresh each morning; nothing sits waiting for a shortcut.",
  },
  {
    icon: HandPlatter,
    title: "Authentic technique",
    body: "Wrappers rolled, pleated and steamed by hand — the way our dim sum masters trained.",
  },
  {
    icon: Sparkles,
    title: "Modern presentation",
    body: "Classic flavour, contemporary plating. Comfortable enough for a Tuesday, dressed for a celebration.",
  },
];

const milestones = [
  { year: "2019", text: "A twelve-seat dumpling counter opens with a single steamer." },
  { year: "2021", text: "The Pan-Asian wok menu joins the dim sum service." },
  { year: "2023", text: "Dhanmondi flagship opens on Level 5, Road 2." },
  { year: "2025", text: "Weekend all-day dim sum service begins." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Two traditions, one kitchen"
        subtitle="We fold dumplings the slow way and cook the rest of the menu with the whole of Asia in mind."
      />

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <img
              src={interiorImage}
              alt="Dining room at Dim Sum Town Dhanmondi (placeholder image)"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full rounded-lg object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Brand story</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              Craft you can taste in the pleat
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Dim sum is a discipline before it's a dish. Dough rested to the minute,
                fillings seasoned by hand, baskets timed to the second. That craft is the
                spine of everything we serve.
              </p>
              <p>
                Around it we've built a Pan-Asian menu that travels: Sichuan numbing heat,
                Thai sour-sweet balance, Cantonese restraint, and the fresh, herb-forward
                edge of Southeast Asia — all cooked in one open kitchen in Dhanmondi.
              </p>
              <p>
                The room is designed for lingering. Come for a quick lunch basket or stay
                for a long table of small plates; both are the point.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section cream>
        <Reveal>
          <SectionHeading
            eyebrow="What we stand for"
            title="Our values"
            subtitle="Three commitments that decide everything from sourcing to service."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-lg border border-cream-foreground/12 bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                <v.icon className="size-6 text-primary" />
                <h3 className="mt-5 text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-70">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="eyebrow">In the kitchen</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              A pass that never stops moving
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Our dim sum team starts before opening, folding the day's baskets from
              scratch. The wok section fires to order all through service. Photography on
              this page is placeholder imagery pending our brand shoot.
            </p>
            <CtaLink to="/careers" variant="outline" className="mt-8">
              Join our team
            </CtaLink>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={kitchenImage}
              alt="Chef hand-folding dumplings (placeholder image)"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full rounded-lg object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border">
        <Reveal>
          <SectionHeading eyebrow="Milestones" title="How we got here" align="left" />
        </Reveal>
        <ol className="mt-12 space-y-0 border-l border-border">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 0.06}>
              <li className="relative py-6 pl-8">
                <span className="absolute -left-[5px] top-9 size-2.5 rounded-full bg-primary" />
                <span className="font-display text-2xl text-primary">{m.year}</span>
                <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
