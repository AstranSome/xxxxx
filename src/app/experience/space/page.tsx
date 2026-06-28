"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const CoffeeCup3D = dynamic(
  () => import("@/components/experience/CoffeeCup3D").then((m) => m.CoffeeCup3D),
  { ssr: false, loading: () => (
    <div className="flex h-[400px] items-center justify-center bg-charcoal/5">
      <span className="font-sans text-sm text-stone">Loading experience...</span>
    </div>
  )}
);

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80", alt: "Interior seating area", span: "full" },
  { src: "https://images.unsplash.com/photo-1445116572660-236899ec97a0?w=800&q=80", alt: "Brass fixtures detail", span: "half" },
  { src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80", alt: "Natural light through windows", span: "half" },
  { src: "https://images.unsplash.com/photo-1453610512566-c62085458534?w=800&q=80", alt: "Coffee bar workspace", span: "half" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Social brunch tables", span: "half" },
];

const zones = [
  {
    title: "Work-Friendly Corner",
    description: "Quiet nooks with power outlets, soft task lighting, and bar-height seating for focused creative sessions.",
  },
  {
    title: "Social Brunch Tables",
    description: "Communal tables designed for long conversations over shared plates and second cups.",
  },
  {
    title: "Outdoor Terrace",
    description: "Al fresco seating with shade, greenery, and the gentle hum of Hydra's streets.",
  },
];

export default function SpacePage() {
  return (
    <div className="min-h-screen bg-ivory pt-28">
      <div className="container-content section-padding pb-12 pt-0">
        <ScrollReveal>
          <p className="eyebrow mb-4">The Space</p>
          <h1 className="max-w-3xl font-serif text-5xl text-charcoal md:text-6xl lg:text-7xl">
            Designed for creative minds
          </h1>
        </ScrollReveal>
      </div>

      <ScrollReveal className="container-content mb-16 px-4 md:px-8 lg:px-12">
        <CoffeeCup3D />
        <p className="mt-4 text-center font-sans text-xs uppercase tracking-wider text-stone">
          Drag to explore our ceramic pour-over
        </p>
      </ScrollReveal>

      <div className="container-content section-padding pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          {galleryImages.map((img, i) => (
            <ScrollReveal
              key={img.src}
              delay={i * 80}
              className={img.span === "full" ? "md:col-span-2" : ""}
            >
              <div className={`film-grain relative overflow-hidden ${img.span === "full" ? "h-[50vh]" : "h-[320px]"}`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-section-mobile space-y-16 lg:mt-section">
          {zones.map((zone, i) => (
            <ScrollReveal key={zone.title} delay={i * 100}>
              <div className="grid gap-8 border-t border-brass/20 pt-12 md:grid-cols-2">
                <h2 className="font-serif text-3xl text-charcoal">{zone.title}</h2>
                <p className="font-sans text-base leading-relaxed text-stone">{zone.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
