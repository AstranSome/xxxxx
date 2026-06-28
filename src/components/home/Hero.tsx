"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { videos } from "@/data/videos";
import { AmbientVideo } from "@/components/ui/AmbientVideo";

const headline = ["Made", "for", "Creative", "Minds."];

export function Hero() {
  const [scrollHidden, setScrollHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrollHidden(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-espresso">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <AmbientVideo
          src={videos.hero}
          className="h-full w-full"
          overlayClassName="bg-gradient-to-t from-espresso/80 via-espresso/40 to-espresso/20"
          aria-label="Espresso pour in warm light"
        />
      </motion.div>

      <div className="film-grain absolute inset-0" />

      <div className="container-content relative z-10 w-full px-4 pb-24 pt-32 md:px-8 lg:px-12 lg:pb-32">
        <h1 className="max-w-4xl font-serif text-[clamp(2.75rem,8vw,7.5rem)] leading-[1.05] tracking-tight text-ivory">
          {headline.map((word, i) => (
            <motion.span
              key={word}
              className="mr-[0.25em] inline-block overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-6 font-sans text-base tracking-wide text-ivory/70 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Coffee • Culture • Brunch • Fun
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Link href="/menu" className="btn-primary">
            <span>View Menu</span>
          </Link>
          <Link href="/reservations" className="btn-ghost">
            Reserve a Table
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        animate={{ opacity: scrollHidden ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        aria-hidden
      >
        <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-ivory/50">Scroll</span>
        <motion.div
          className="h-12 w-px bg-brass/60"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
