import Link from "next/link";
import { locations } from "@/data/locations";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function LocationsPreview() {
  return (
    <section className="section-padding">
      <div className="container-content">
        <ScrollReveal className="mb-12">
          <p className="eyebrow mb-4">Locations</p>
          <h2 className="font-serif text-4xl text-charcoal md:text-5xl">Find us in Algiers</h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {locations.map((loc, i) => (
            <ScrollReveal key={loc.id} delay={i * 100}>
              <article className="group border border-brass/20 bg-ivory p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-charcoal">{loc.name}</h3>
                    <p className="mt-1 font-sans text-sm text-stone">{loc.neighborhood}</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brass/40 text-brass">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </span>
                </div>
                <p className="font-sans text-sm text-stone">{loc.address}, {loc.city}</p>
                <p className="mt-2 font-sans text-xs text-stone/80">{loc.hours[0].time}</p>
                <Link
                  href={`/locations/${loc.id}`}
                  className="link-arrow mt-6 inline-flex text-sm"
                >
                  Get Directions
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
