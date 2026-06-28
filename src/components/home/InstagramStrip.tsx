"use client";

import Image from "next/image";
import { mixMedia } from "@/data/mix";
import { AmbientVideo } from "@/components/ui/AmbientVideo";

export function InstagramStrip() {
  const doubled = [...mixMedia, ...mixMedia];

  return (
    <section className="overflow-hidden bg-espresso py-16">
      <p className="mb-10 text-center font-serif text-xl text-ivory/80 md:text-2xl">
        Tag us. We might just feature you.
      </p>

      <div className="group relative">
        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {doubled.map((item, i) => (
            <a
              key={`${item.id}-${i}`}
              href="https://instagram.com/masagran.dz"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-[280px] w-[224px] flex-shrink-0 overflow-hidden md:h-[320px] md:w-[256px]"
            >
              {item.type === "video" ? (
                <AmbientVideo
                  src={item.src}
                  className="h-full w-full transition-transform duration-500 hover:scale-105"
                  aria-label={item.alt}
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="256px"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
