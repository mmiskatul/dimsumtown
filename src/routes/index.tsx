import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Instagram, Facebook } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import kitchenImage from "@/assets/kitchen.jpg";
import { signatureDishes } from "@/data/menu";
import { site } from "@/data/site";
import { CtaLink, CtaAnchor } from "@/components/site/CtaButton";
import { MenuItemCard } from "@/components/site/MenuItemCard";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { TestimonialCard, testimonials } from "@/components/site/TestimonialCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dim Sum Town Dhanmondi | Pan-Asian & Dim Sum in Dhaka" },
      {
        name: "description",
        content:
          "Hand-pleated dim sum and Pan-Asian cooking in Dhanmondi, Dhaka. Steamed to order, open 12 PM – 11 PM daily. View the menu or reserve a table.",
      },
      { property: "og:title", content: "Dim Sum Town Dhanmondi | Pan-Asian & Dim Sum in Dhaka" },
      {
        property: "og:description",
        content:
          "Hand-pleated dim sum and Pan-Asian cooking in Dhanmondi, Dhaka. Steamed to order, open 12 PM – 11 PM daily. View the menu or reserve a table.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Bamboo steamers of freshly made dim sum"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pt-32 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow"
          >
            Dhanmondi, Dhaka
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 max-w-4xl text-4xl leading-[1.05] sm:text-6xl md:text-7xl"
          >
            {site.tagline}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <CtaLink to="/menu" size="lg">
              View Menu
            </CtaLink>
            <CtaLink to="/order" variant="outline" size="lg">
              Order Now
            </CtaLink>
          </motion.div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Best sellers"
            title="Signature Dishes"
            subtitle="Seven plates our regulars order before they've opened the menu."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signatureDishes.map((dish, i) => (
            <Reveal key={dish.id} delay={i * 0.05}>
              <MenuItemCard item={dish} className="h-full" />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-sm text-primary transition-all hover:gap-3"
          >
            See the full menu <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </Section>

      {/* OUR STORY TEASER */}
      <Section cream>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <img
              src={kitchenImage}
              alt="Chef folding dumplings by hand"
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full rounded-lg object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl md:text-5xl">
              Old-school craft, wide-open imagination
            </h2>
            <p className="mt-5 text-base leading-relaxed opacity-75">
              Dim Sum Town began with a single steamer and a stubborn belief: a dumpling
              should be folded by hand, every time. Our kitchen pairs that discipline with
              flavours drawn from across Asia — Sichuan heat, Thai brightness, Cantonese
              restraint. The result is familiar and new in the same bite.
            </p>
            <CtaLink to="/about" variant="ghostCream" className="mt-8">
              Read our story
            </CtaLink>
          </Reveal>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <Reveal>
          <SectionHeading eyebrow="Guest book" title="What People Are Saying" />
        </Reveal>
        <div className="mt-14 -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.05}
              className="w-[85%] shrink-0 snap-center sm:w-[46%] lg:w-[31%]"
            >
              <TestimonialCard item={t} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SOCIAL CTA */}
      <Section className="border-t border-border">
        <Reveal className="flex flex-col items-center gap-7 text-center">
          <SectionHeading
            eyebrow="@dimsumtown"
            title="Follow the steam"
            subtitle="New specials, behind-the-pass moments and the odd dumpling close-up."
          />
          <div className="flex flex-wrap justify-center gap-3">
            <CtaAnchor href={site.instagram} external>
              <Instagram className="size-4" /> Instagram
            </CtaAnchor>
            <CtaAnchor href={site.facebook} variant="outline" external>
              <Facebook className="size-4" /> Facebook
            </CtaAnchor>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
