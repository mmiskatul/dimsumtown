import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Bike, CheckCircle2, Phone } from "lucide-react";
import { site } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { CtaAnchor, CtaButton } from "@/components/site/CtaButton";
import { Field, Input, Select, Textarea } from "@/components/site/FormControls";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Reservations & Order Now | Dim Sum Town Dhanmondi" },
      {
        name: "description",
        content:
          "Reserve a table at Dim Sum Town Dhanmondi or order delivery. Book by date, time and party size, or call us directly.",
      },
      { property: "og:title", content: "Reservations & Order Now | Dim Sum Town" },
      {
        property: "og:description",
        content: "Book a table in Dhanmondi or order dim sum for delivery.",
      },
    ],
  }),
  component: OrderPage,
});

function OrderPage() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  // Mock submit — no backend wired up yet.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      toast.success("Reservation request received", {
        description: "We'll call to confirm within 30 minutes.",
      });
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Reservations & delivery"
        title="Book a table, or bring us home"
        subtitle="Tables are held for 15 minutes past the booking time. For parties of 10 or more, please call."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Reserve a table</h2>

            {done ? (
              <div className="mt-8 rounded-lg border border-primary/40 bg-card p-8 text-center">
                <CheckCircle2 className="mx-auto size-8 text-primary" />
                <h3 className="mt-4 text-2xl">Request sent</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you — our team will ring you shortly to confirm the booking.
                </p>
                <CtaButton
                  variant="outline"
                  className="mt-6"
                  onClick={() => setDone(false)}
                >
                  Make another booking
                </CtaButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full name" htmlFor="name">
                  <Input id="name" name="name" required placeholder="Your name" />
                </Field>
                <Field label="Phone" htmlFor="phone">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+880…"
                  />
                </Field>
                <Field label="Date" htmlFor="date">
                  <Input id="date" name="date" type="date" required />
                </Field>
                <Field label="Time" htmlFor="time">
                  <Input id="time" name="time" type="time" required />
                </Field>
                <Field label="Party size" htmlFor="party">
                  <Select id="party" name="party" defaultValue="2">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? "guest" : "guests"}
                      </option>
                    ))}
                    <option value="10+">10+ guests</option>
                  </Select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Special requests" htmlFor="notes">
                    <Textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      placeholder="Allergies, celebrations, seating preference…"
                    />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <CtaButton type="submit" disabled={submitting} className="w-full sm:w-auto">
                    {submitting ? "Sending…" : "Request Reservation"}
                  </CtaButton>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-lg border border-border bg-card p-8">
              <h2 className="text-2xl sm:text-3xl">Order now</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Fastest way to eat with us at home — call the restaurant directly, or order
                through a delivery partner.
              </p>
              <CtaAnchor href={site.phoneHref} className="mt-6 w-full">
                <Phone className="size-4" /> Call {site.phoneDisplay}
              </CtaAnchor>

              <p className="eyebrow mt-10">Delivery partners</p>
              <div className="mt-4 space-y-3">
                {["Delivery Partner One", "Delivery Partner Two"].map((partner) => (
                  <a
                    key={partner}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toast("Coming soon", {
                        description: `${partner} link will be added shortly.`,
                      });
                    }}
                    className="flex items-center justify-between rounded-lg border border-border px-5 py-4 text-sm transition-colors hover:border-primary hover:text-primary"
                  >
                    <span className="flex items-center gap-2">
                      <Bike className="size-4" /> {partner}
                    </span>
                    <span className="text-xs text-muted-foreground">Placeholder</span>
                  </a>
                ))}
              </div>

              <p className="mt-8 text-xs text-muted-foreground">
                Delivery available daily, {site.hours}.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
