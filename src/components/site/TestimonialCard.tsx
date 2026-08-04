import { Star } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

/** Placeholder guest reviews are used site-wide. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "The har gow are the best I've had in Dhaka — paper-thin wrappers, and the prawns actually snap.",
    name: "Nabila R.",
    role: "Guest, Dhanmondi",
  },
  {
    quote:
      "We came for dim sum and stayed for the black pepper beef. Warm room, unhurried service, real flavour.",
    name: "Tanvir A.",
    role: "Regular since 2023",
  },
  {
    quote:
      "Perfect spot for a family lunch. Everything arrived hot, the staff explained every basket to us.",
    name: "Farhana K.",
    role: "Guest",
  },
  {
    quote:
      "The tom yum has proper depth — sour, hot, fragrant. Rare to find that balance done right.",
    name: "Imran H.",
    role: "Food writer",
  },
];

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-7">
      <div className="flex gap-1 text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-5 font-display text-xl leading-relaxed">
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-6 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{item.name}</span> · {item.role}
      </figcaption>
    </figure>
  );
}
