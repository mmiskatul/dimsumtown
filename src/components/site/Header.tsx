import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, site } from "@/data/site";
import { CtaLink } from "./CtaButton";
import { cn } from "@/lib/utils";

/** Sticky header: transparent over the hero, solid + condensed on scroll. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/90 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6",
      )}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:flex lg:justify-between">
        <Link to="/" className="min-w-0">
          <span className="block truncate font-display text-xl leading-none tracking-tight sm:text-2xl">
            Dim Sum <span className="text-primary">Town</span>
          </span>
          <span className="mt-1 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Dhanmondi
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "relative text-sm transition-colors hover:text-primary",
                pathname === item.to ? "text-primary" : "text-foreground/80",
              )}
            >
              {item.label}
              {pathname === item.to ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-px w-full bg-primary"
                />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaLink to="/order" size="sm">
            Reserve a Table
          </CtaLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-full border border-border p-2.5 text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col border-l border-border bg-card px-7 pb-10 pt-24 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "border-b border-border/60 py-4 font-display text-2xl transition-colors",
                    pathname === item.to ? "text-primary" : "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <a href={site.phoneHref} className="block hover:text-primary">
                {site.phoneDisplay}
              </a>
              <p>{site.hours}</p>
            </div>
            <CtaLink to="/order" className="mt-6 w-full">
              Reserve a Table
            </CtaLink>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
