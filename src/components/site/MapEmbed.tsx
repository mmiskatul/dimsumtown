import { site } from "@/data/site";

/** Reusable Google Map embed (Location + Contact pages). */
export function MapEmbed({ className }: { className?: string }) {
  return (
    <div
      className={
        className ??
        "aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-muted"
      }
    >
      <iframe
        title={`Map to ${site.name}`}
        src={site.mapsEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0 grayscale-[0.35] transition-all duration-500 hover:grayscale-0"
        allowFullScreen
      />
    </div>
  );
}
