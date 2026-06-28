"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { cultureFeatures } from "@/data/events";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const icons: Record<string, React.ReactNode> = {
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" className="icon-path" />
      <path d="M3 10h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.2" className="icon-path" />
    </svg>
  ),
  music: (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden>
      <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="1.2" className="icon-path" />
      <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.2" className="icon-path" />
      <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.2" className="icon-path" />
    </svg>
  ),
  palette: (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.6 1.5-1.5 0-.4-.2-.8-.5-1.1-.3-.3-.5-.7-.5-1.1 0-1.1.9-2 2-2h2.2c3 0 5.8-2.4 5.8-5.5C22 6.1 17.5 2 12 2z" stroke="currentColor" strokeWidth="1.2" className="icon-path" />
      <circle cx="7.5" cy="11" r="1.2" fill="currentColor" />
      <circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" />
      <circle cx="14.5" cy="7.5" r="1.2" fill="currentColor" />
    </svg>
  ),
};

function CultureIcon({ icon, animate }: { icon: string; animate: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate || !ref.current) return;
    const paths = ref.current.querySelectorAll(".icon-path");
    paths.forEach((path) => {
      const el = path as SVGGeometryElement;
      const length = el.getTotalLength?.() ?? 100;
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
      requestAnimationFrame(() => {
        el.style.transition = "stroke-dashoffset 1s ease-out";
        el.style.strokeDashoffset = "0";
      });
    });
  }, [animate]);

  return (
    <div ref={ref} className="text-brass">
      {icons[icon]}
    </div>
  );
}

export function CultureBlock() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-content">
        <ScrollReveal className="mb-16 text-center">
          <p className="eyebrow mb-4">Culture & Community</p>
          <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
            Where creative minds gather
          </h2>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {cultureFeatures.map((feature, i) => (
            <ScrollReveal key={feature.id} delay={i * 100}>
              <CultureIcon icon={feature.icon} animate />
              <h3 className="mt-6 font-sans text-xl font-semibold text-charcoal">
                {feature.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-stone">
                {feature.description}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/experience/culture" className="link-arrow">
            Discover our culture
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
