import { createFileRoute } from "@tanstack/react-router";
import { Car, Navigation, Phone, TrainFront } from "lucide-react";
import { site } from "@/data/site";
import { MapEmbed } from "@/components/site/MapEmbed";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { CtaAnchor } from "@/components/site/CtaButton";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location & Hours | Dim Sum Town Dhanmondi" },
      {
        name: "description",
        content:
          "Find Dim Sum Town at Ahmad & Kazi Tower, House 35 (Level 5), Road 2, Dhanmondi, Dhaka 1209. Open 12 PM – 11 PM daily. Map, parking and directions.",
      },
      { property: "og:title", content: "Location & Hours | Dim Sum Town Dhanmondi" },
      {
        property: "og:description",
        content: "Road 2, Dhanmondi, Dhaka — open 12 PM to 11 PM every day.",
      },
    ],
  }),
  component: LocationPage,
});

const hours = [
  ["Monday", "12:00 PM – 11:00 PM"],
  ["Tuesday", "12:00 PM – 11:00 PM"],
  ["Wednesday", "12:00 PM – 11:00 PM"],
  ["Thursday", "12:00 PM – 11:00 PM"],
  ["Friday", "12:00 PM – 11:00 PM"],
  ["Saturday", "12:00 PM – 11:00 PM"],
  ["Sunday", "12:00 PM – 11:00 PM"],
];

function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Location & hours"
        title="Level 5, Road 2, Dhanmondi"
        subtitle={site.address}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <MapEmbed />
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaAnchor href={site.mapsDirections} external>
                <Navigation className="size-4" /> Get Directions
              </CtaAnchor>
              <CtaAnchor href={site.phoneHref} variant="outline">
                <Phone className="size-4" /> {site.phoneDisplay}
              </CtaAnchor>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl sm:text-3xl">Opening hours</h2>
            <table className="mt-6 w-full text-sm">
              <tbody>
                {hours.map(([day, time]) => (
                  <tr key={day} className="border-b border-border/70">
                    <th scope="row" className="py-3 text-left font-normal">
                      {day}
                    </th>
                    <td className="py-3 text-right text-muted-foreground">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs text-muted-foreground">
              Placeholder hours — kitchen last orders 30 minutes before close.
            </p>

            <div className="mt-10 space-y-5">
              <Note
                icon={<Car className="size-4 text-primary" />}
                title="Parking"
                body="Building parking is available on the ground level and basement, with valet on Thursday and Friday evenings."
              />
              <Note
                icon={<TrainFront className="size-4 text-primary" />}
                title="Getting here"
                body="A short walk from Dhanmondi Road 2 junction, near Rapa Plaza and the Satmasjid Road corridor. Take the lift to Level 5."
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Note({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-sans text-sm font-medium">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
