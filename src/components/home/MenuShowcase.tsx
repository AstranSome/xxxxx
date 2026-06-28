"use client";

import Image from "next/image";
import Link from "next/link";
import { menuCarouselItems } from "@/data/menu";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function MenuShowcase() {
  return (
    <section className="section-padding overflow-hidden bg-ivory">
      <div className="container-content mb-12 px-4 md:px-8 lg:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">The Menu</p>
          <h2 className="font-serif text-4xl text-charcoal md:text-5xl lg:text-6xl">
            Every plate is a small celebration.
          </h2>
          <p className="mt-4 max-w-lg font-sans text-stone">
            Six editions from our 2026 menu — drag to explore.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={100}>
        <div className="flex gap-6 overflow-x-auto px-4 pb-4 scrollbar-hide md:gap-8 md:px-8 lg:px-12 snap-x snap-mandatory">
          {menuCarouselItems.map((item) => (
            <article
              key={item.id}
              className="group relative h-[420px] w-[300px] flex-shrink-0 snap-start overflow-hidden md:h-[480px] md:w-[360px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="360px"
              />
              <div className="film-grain absolute inset-0" />
              <div className="absolute inset-0 bg-espresso/0 transition-colors duration-300 group-hover:bg-caramel/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-center font-serif text-2xl text-ivory">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[260px] text-center font-sans text-sm leading-relaxed text-ivory/85">
                  {item.description}
                </p>
                <span className="mt-4 flex h-8 w-8 items-center justify-center rounded-full border border-ivory/60 text-ivory">
                  +
                </span>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>

      <div className="container-content mt-10 px-4 text-center md:px-8 lg:px-12">
        <Link href="/menu" className="link-arrow">
          Explore full menu
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
