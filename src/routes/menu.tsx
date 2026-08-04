import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Flame, Leaf, UtensilsCrossed } from "lucide-react";
import { categories, menu, type Category } from "@/data/menu";
import { MenuItemCard } from "@/components/site/MenuItemCard";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Dim Sum Town Dhanmondi" },
      {
        name: "description",
        content:
          "Browse dim sum, soups, wok classics, seafood, noodles and desserts with prices in BDT. Filter by category, spice level or vegetarian.",
      },
      { property: "og:title", content: "Menu | Dim Sum Town Dhanmondi" },
      {
        property: "og:description",
        content: "Dim sum, wok classics and Pan-Asian plates — full menu with BDT prices.",
      },
    ],
  }),
  component: MenuPage,
});

type Diet = "all" | "veg" | "spicy";

function MenuPage() {
  const [active, setActive] = useState<Category | "All">("All");
  const [diet, setDiet] = useState<Diet>("all");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menu.filter((item) => {
      if (active !== "All" && item.category !== active) return false;
      if (diet === "veg" && !item.veg) return false;
      if (diet === "spicy" && !item.spicy) return false;
      if (q && !`${item.name} ${item.description}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [active, diet, query]);

  // Group results by category so the page reads like a printed menu.
  const grouped = useMemo(
    () =>
      categories
        .map((cat) => ({ cat, items: results.filter((i) => i.category === cat) }))
        .filter((g) => g.items.length > 0),
    [results],
  );

  return (
    <>
      <PageHero
        eyebrow="The menu"
        title="Steamed, wok-fired, made to order"
        subtitle="Prices in BDT. Anything can be made milder — just ask your server."
      />

      {/* Sticky filter bar */}
      <div className="sticky top-[68px] z-30 border-b border-border bg-background/92 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-6xl px-5 py-4 sm:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative w-full lg:max-w-xs">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes…"
                aria-label="Search dishes"
                className="h-10 w-full rounded-full border border-border bg-card pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <div className="flex gap-2">
              <Chip active={diet === "all"} onClick={() => setDiet("all")}>
                <UtensilsCrossed className="size-3.5" /> All
              </Chip>
              <Chip active={diet === "veg"} onClick={() => setDiet("veg")}>
                <Leaf className="size-3.5" /> Veg
              </Chip>
              <Chip active={diet === "spicy"} onClick={() => setDiet("spicy")}>
                <Flame className="size-3.5" /> Spicy
              </Chip>
            </div>
          </div>

          <div className="-mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0">
            <Chip active={active === "All"} onClick={() => setActive("All")}>
              Everything
            </Chip>
            {categories.map((cat) => (
              <Chip key={cat} active={active === cat} onClick={() => setActive(cat)}>
                {cat}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        {grouped.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border py-24 text-center">
            <p className="font-display text-2xl">Nothing on the pass for that</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different category or clear the search.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setActive("All");
                setDiet("all");
              }}
              className="mt-6 text-sm text-primary hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          grouped.map((group) => (
            <section key={group.cat} className="mb-16 scroll-mt-44" id={slug(group.cat)}>
              <Reveal>
                <h2 className="text-2xl sm:text-3xl">{group.cat}</h2>
                <div className="mt-4 h-px w-16 bg-primary" />
              </Reveal>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, i) => (
                  <Reveal key={item.id} delay={Math.min(i * 0.04, 0.2)}>
                    <MenuItemCard item={item} className="h-full" />
                  </Reveal>
                ))}
              </div>
            </section>
          ))
        )}
      </div>

      {/* Floating order CTA */}
      <Link
        to="/order"
        className="fixed bottom-6 right-5 z-40 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-jade)] transition-transform hover:scale-105"
      >
        Order Now
      </Link>
    </>
  );
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z]+/g, "-");
}

function Chip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-xs transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-muted-foreground hover:border-primary hover:text-primary",
      )}
    >
      {children}
    </button>
  );
}
