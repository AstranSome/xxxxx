import Link from "next/link";
import { locations } from "@/data/locations";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-ivory/80">
      <div
        className="pointer-events-none absolute inset-0 flex items-end justify-center overflow-hidden"
        aria-hidden
      >
        <span className="translate-y-1/3 font-serif text-[12rem] leading-none text-ivory/[0.03] md:text-[18rem]">
          Masagran
        </span>
      </div>

      <div className="container-content relative section-padding">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <h3 className="eyebrow mb-6">Visit Us</h3>
            <ul className="space-y-6">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <Link
                    href={`/locations/${loc.id}`}
                    className="group block transition-colors hover:text-brass"
                  >
                    <p className="font-serif text-lg text-ivory">{loc.name}</p>
                    <p className="mt-1 font-sans text-sm text-ivory/60">
                      {loc.neighborhood}, {loc.city}
                    </p>
                    <p className="mt-1 font-sans text-xs text-ivory/50">
                      {loc.hours[0].time}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-6">Follow</h3>
            <p className="mb-4 font-sans text-sm leading-relaxed">
              Daily pours, brunch spreads, and culture nights — follow along on Instagram.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow text-brass"
            >
              @masagran
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>

          <div>
            <h3 className="eyebrow mb-6">Join the Creative Minds</h3>
            <p className="mb-4 font-sans text-sm leading-relaxed">
              Seasonal menus, event invites, and stories from behind the bar.
            </p>
            <form className="flex border-b border-brass/30 pb-2" action="#">
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 bg-transparent font-sans text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="text-brass transition-colors hover:text-ivory"
                aria-label="Subscribe"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-xs text-ivory/40">
            © {new Date().getFullYear()} Masagran. Made for creative minds.
          </p>
          <div className="flex gap-6">
            <Link href="/contact#careers" className="font-sans text-xs text-ivory/40 hover:text-brass">
              Careers
            </Link>
            <Link href="/contact#press" className="font-sans text-xs text-ivory/40 hover:text-brass">
              Press
            </Link>
            <Link href="/order" className="font-sans text-xs text-ivory/40 hover:text-brass">
              Order
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
