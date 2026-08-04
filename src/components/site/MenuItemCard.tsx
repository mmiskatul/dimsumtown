import { Flame, Leaf } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { cn } from "@/lib/utils";

/** Reusable dish card used on Home (signatures) and the Menu page. */
export function MenuItemCard({ item, className }: { item: MenuItem; className?: string }) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-soft",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-display text-4xl text-muted-foreground/40">
            {item.name.charAt(0)}
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 card-overlay" />
        <div className="absolute left-3 top-3 flex gap-1.5">
          {item.veg ? <Badge icon={<Leaf className="size-3" />} label="Veg" /> : null}
          {item.spicy ? <Badge icon={<Flame className="size-3" />} label="Spicy" /> : null}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="min-w-0 font-display text-xl leading-snug">{item.name}</h3>
          <span className="shrink-0 font-sans text-sm font-medium text-primary">
            ৳{item.price}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-background/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wide backdrop-blur">
      {icon}
      {label}
    </span>
  );
}
