"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { videos } from "@/data/videos";
import { AmbientVideo } from "@/components/ui/AmbientVideo";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function SpaceTeaser() {
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const onScroll = () => {
      if (!mediaRef.current) return;
      const rect = mediaRef.current.getBoundingClientRect();
      const offset = (window.innerHeight - rect.top) * 0.15;
      mediaRef.current.style.transform = `translateY(${Math.min(offset, 80)}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="grid min-h-[70vh] md:grid-cols-2">
      <div ref={mediaRef} className="relative min-h-[50vh] transition-transform will-change-transform md:min-h-0">
        <AmbientVideo
          src={videos.space}
          className="h-full min-h-[50vh] md:min-h-full"
          aria-label="Masagran interior ambiance"
        />
        <div className="film-grain absolute inset-0" />
      </div>

      <div className="flex items-center bg-charcoal section-padding">
        <ScrollReveal className="max-w-md">
          <p className="eyebrow mb-4">The Space</p>
          <h2 className="font-serif text-4xl leading-tight text-ivory md:text-5xl">
            Step into the space
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-ivory/70">
            Warm wood tones, brass fixtures, and natural light create an atmosphere
            designed for both focused work and unhurried brunch conversations.
          </p>
          <Link href="/experience/space" className="link-arrow mt-8 text-brass">
            Explore the Experience
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
