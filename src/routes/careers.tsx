import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Clock3, MapPin } from "lucide-react";
import interiorImage from "@/assets/interior.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaButton } from "@/components/site/CtaButton";
import { Field, Input, Select, Textarea } from "@/components/site/FormControls";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Dim Sum Town Dhanmondi" },
      {
        name: "description",
        content:
          "Join the team at Dim Sum Town Dhanmondi. Open roles for chefs, servers and delivery riders — apply in a couple of minutes.",
      },
      { property: "og:title", content: "Careers | Dim Sum Town Dhanmondi" },
      {
        property: "og:description",
        content: "Open roles in our Dhanmondi kitchen and dining room.",
      },
    ],
  }),
  component: CareersPage,
});

const roles = [
  {
    title: "Dim Sum Chef",
    type: "Full-time",
    location: "Dhanmondi kitchen",
    body: "Hand-folding and steaming across service. Experience with Cantonese dim sum preferred; we'll train the right hands.",
  },
  {
    title: "Server",
    type: "Full-time / Part-time",
    location: "Dining room, Level 5",
    body: "Warm, unhurried floor service. Comfortable guiding guests through the menu in Bangla and English.",
  },
  {
    title: "Delivery Rider",
    type: "Shift-based",
    location: "Dhanmondi & nearby",
    body: "Own bike preferred, fuel allowance provided. Evening shifts available.",
  },
];

function CareersPage() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Mock submit — replace with a real ATS or inbox when available.
    window.setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Application received", {
        description: "If it's a fit, we'll reach out to arrange a trial shift.",
      });
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join our team"
        subtitle="Steady shifts, a kitchen that teaches, and a floor team that actually likes each other."
      />

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <img
              src={interiorImage}
              alt="Dining room where our team works (placeholder image)"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full rounded-lg object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Why here</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              We hire for care, then teach the craft
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Everyone on the pass started somewhere. Our senior chefs run hands-on
              training in dumpling technique and wok work, and we promote from within
              first. Fair rosters, shared tips, staff meals every shift.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section cream>
        <Reveal>
          <SectionHeading eyebrow="Now hiring" title="Open positions" />
        </Reveal>
        <div className="mt-12 space-y-4">
          {roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.06}>
              <article className="rounded-lg border border-cream-foreground/12 p-7 transition-colors hover:border-primary/60">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
                  <h3 className="min-w-0 text-2xl">{role.title}</h3>
                  <span className="shrink-0 rounded-full border border-cream-foreground/20 px-3 py-1 text-xs">
                    {role.type}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed opacity-70">{role.body}</p>
                <div className="mt-4 flex flex-wrap gap-5 text-xs opacity-60">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5" /> {role.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="size-3.5" /> Rolling applications
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <SectionHeading
              eyebrow="Apply"
              title="Tell us about yourself"
              subtitle="No CV template needed — a few honest lines will do."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
              <Field label="Full name" htmlFor="a-name">
                <Input id="a-name" name="name" required placeholder="Your name" />
              </Field>
              <Field label="Phone" htmlFor="a-phone">
                <Input id="a-phone" name="phone" type="tel" required placeholder="+880…" />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Role" htmlFor="a-role">
                  <Select id="a-role" name="role" defaultValue={roles[0]?.title}>
                    {roles.map((r) => (
                      <option key={r.title} value={r.title}>
                        {r.title}
                      </option>
                    ))}
                  </Select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Experience" htmlFor="a-exp">
                  <Textarea
                    id="a-exp"
                    name="experience"
                    rows={5}
                    required
                    placeholder="Where you've worked, what you're good at, when you can start."
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <CtaButton type="submit" disabled={sending} className="w-full sm:w-auto">
                  {sending ? "Sending…" : "Submit Application"}
                </CtaButton>
              </div>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
