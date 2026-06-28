import Link from "next/link";
import Image from "next/image";
import { locations } from "@/data/locations";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = { title: "Locations" };

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-ivory pt-28">
      <div className="container-content section-padding pb-12 pt-0">
        <ScrollReveal>
          <p className="eyebrow mb-4">Visit Us</p>
          <h1 className="font-serif text-5xl text-charcoal md:text-6xl lg:text-7xl">Locations</h1>
          <p className="mt-6 max-w-xl font-sans text-lg text-stone">
            Two neighborhoods, one creative culture. Find your nearest Masagran.
          </p>
        </ScrollReveal>
      </div>

      <div className="container-content space-y-16 px-4 pb-section-mobile md:px-8 lg:px-12 lg:pb-section">
        {locations.map((loc, i) => (
          <ScrollReveal key={loc.id} delay={i * 100}>
            <Link href={`/locations/${loc.id}`} className="group grid gap-8 md:grid-cols-2">
              <div className="film-grain relative h-[320px] overflow-hidden md:h-[400px]">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="50vw"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-3xl text-charcoal transition-colors group-hover:text-caramel md:text-4xl">
                  {loc.name}
                </h2>
                <p className="mt-2 font-sans text-stone">{loc.neighborhood}, {loc.city}</p>
                <p className="mt-4 font-sans text-sm text-stone">{loc.address}</p>
                <p className="mt-2 font-sans text-sm text-stone/80">{loc.hours[0].time}</p>
                <span className="link-arrow mt-6 inline-flex text-sm">
                  View details
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
