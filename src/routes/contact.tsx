import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { MapEmbed } from "@/components/site/MapEmbed";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { CtaButton } from "@/components/site/CtaButton";
import { Field, Input, Textarea } from "@/components/site/FormControls";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Dim Sum Town Dhanmondi" },
      {
        name: "description",
        content:
          "Get in touch with Dim Sum Town Dhanmondi — phone, email, address and message form, plus a map of our Road 2 location.",
      },
      { property: "og:title", content: "Contact | Dim Sum Town Dhanmondi" },
      {
        property: "og:description",
        content: "Call, email or message the team at Dim Sum Town Dhanmondi.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Mock submit — no backend connected.
    window.setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent", { description: "We usually reply within a day." });
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Say hello"
        subtitle="Feedback, private dining, press or a simple question — we read everything."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Send a message</h2>
            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <Field label="Name" htmlFor="c-name">
                <Input id="c-name" name="name" required placeholder="Your name" />
              </Field>
              <Field label="Email" htmlFor="c-email">
                <Input
                  id="c-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Message" htmlFor="c-message">
                <Textarea
                  id="c-message"
                  name="message"
                  rows={6}
                  required
                  placeholder="How can we help?"
                />
              </Field>
              <CtaButton type="submit" disabled={sending} className="w-full sm:w-auto">
                {sending ? "Sending…" : "Send Message"}
              </CtaButton>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl sm:text-3xl">Direct</h2>
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={site.phoneHref} className="hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`mailto:${site.email}`} className="hover:text-primary">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{site.address}</span>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-border p-2.5 transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-border p-2.5 transition-colors hover:border-primary hover:text-primary"
              >
                <Facebook className="size-4" />
              </a>
            </div>

            <div className="mt-10">
              <MapEmbed className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-muted" />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
