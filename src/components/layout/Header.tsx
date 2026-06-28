"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/experience/space", label: "Experience" },
  { href: "/journal", label: "Journal" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-brass/10 bg-espresso/80 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="container-content flex h-20 items-center justify-between px-4 md:px-8 lg:px-12">
          <Link
            href="/"
            className={cn(
              "font-serif text-2xl tracking-tight transition-colors md:text-[1.65rem]",
              scrolled ? "text-ivory" : "text-ivory"
            )}
          >
            Masagran
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-[13px] font-medium uppercase tracking-[0.12em] transition-colors hover:text-brass",
                  scrolled ? "text-ivory/80" : "text-ivory/90"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/reservations"
              className="hidden btn-primary py-2.5 text-xs md:inline-flex"
            >
              <span>Reserve a Table</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-label="Open menu"
            >
              <span className="h-px w-6 bg-ivory" />
              <span className="h-px w-6 bg-ivory" />
              <span className="h-px w-4 bg-ivory" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </>
  );
}
