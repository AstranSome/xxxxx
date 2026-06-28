import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { locations } from "@/data/locations";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return locations.map((loc) => ({ id: loc.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const loc = locations.find((l) => l.id === id);
  return { title: loc?.name ?? "Location" };
}

export default async function LocationPage({ params }: Props) {
  const { id } = await params;
  const loc = locations.find((l) => l.id === id);
  if (!loc) notFound();

  const mapUrl = `https://maps.google.com/?q=${loc.coordinates.lat},${loc.coordinates.lng}`;

  return (
    <div className="min-h-screen bg-ivory pt-28">
      <div className="film-grain relative h-[50vh]">
        <Image src={loc.image} alt={loc.name} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 to-transparent" />
        <div className="absolute bottom-8 left-4 md:left-12">
          <p className="eyebrow text-brass">{loc.neighborhood}</p>
          <h1 className="mt-2 font-serif text-4xl text-ivory md:text-5xl">{loc.name}</h1>
        </div>
      </div>

      <div className="container-content section-padding">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-charcoal">Hours</h2>
            <table className="mt-4 w-full font-sans text-sm">
              <tbody>
                {loc.hours.map((row) => (
                  <tr key={row.day} className="border-b border-brass/10">
                    <td className="py-3 text-stone">{row.day}</td>
                    <td className="py-3 text-right text-charcoal">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 className="mt-10 font-serif text-2xl text-charcoal">Amenities</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {loc.amenities.map((amenity) => (
                <li
                  key={amenity}
                  className="border border-brass/30 px-4 py-2 font-sans text-xs uppercase tracking-wider text-stone"
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-charcoal">Address</h2>
            <p className="mt-4 font-sans text-stone">
              {loc.address}<br />
              {loc.neighborhood}, {loc.city}
            </p>
            <p className="mt-4 font-sans text-stone">{loc.phone}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <span>Get Directions</span>
              </a>
              <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="btn-ghost border-charcoal text-charcoal hover:bg-charcoal/5">
                Call
              </a>
            </div>

            <div className="mt-10 h-64 overflow-hidden border border-brass/20 bg-charcoal/5">
              <iframe
                title={`Map of ${loc.name}`}
                src={`https://maps.google.com/maps?q=${loc.coordinates.lat},${loc.coordinates.lng}&z=15&output=embed`}
                className="h-full w-full grayscale-[30%] sepia-[20%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <Link href="/locations" className="link-arrow mt-12 inline-flex">
          All locations
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
