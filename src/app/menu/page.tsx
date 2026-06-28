"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  menuSections,
  platesMenuPages,
  menuCategories,
  menuItems,
  menuExtras,
  menuHours,
  type MenuCategory,
  type MenuSectionId,
} from "@/data/menu";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SweetsExperience } from "@/components/menu/SweetsExperience";
import { DrinksExperience } from "@/components/menu/DrinksExperience";

function PlatesSection() {
  const itemsForCategory = (category: MenuCategory) =>
    menuItems.filter((item) => item.category === category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-24"
    >
      {platesMenuPages.map((page, pageIndex) => (
        <section key={page.id}>
          <ScrollReveal>
            <div className="mb-8">
              <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
                {page.title}
              </h2>
              <p className="mt-2 font-sans text-sm uppercase tracking-wider text-stone">
                {page.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="overflow-hidden border border-charcoal/10 bg-[#F5F2E7] shadow-[0_24px_64px_-32px_rgba(26,20,16,0.35)]">
              <Image
                src={page.image}
                alt={page.alt}
                width={1080}
                height={1350}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 720px"
                priority={pageIndex === 0}
              />
            </div>
          </ScrollReveal>

          <div className="mt-12 space-y-14">
            {page.categories.map((categoryId) => {
              const category = menuCategories.find((c) => c.id === categoryId);
              if (!category) return null;

              if (categoryId === "extras") {
                return (
                  <ScrollReveal key={categoryId}>
                    <div>
                      <h3 className="font-serif text-2xl text-charcoal">
                        {category.label}
                      </h3>
                      <p className="mt-2 max-w-2xl font-sans text-sm text-stone">
                        Parce que chaque assiette mérite d&apos;être
                        personnalisée — ajoutez vos ingrédients favoris et
                        composez votre propre version du brunch idéal.
                      </p>
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                        {menuExtras.map((extra) => (
                          <li
                            key={extra}
                            className="border border-brass/20 px-4 py-3 font-sans text-sm uppercase tracking-wider text-charcoal"
                          >
                            {extra}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                );
              }

              const items = itemsForCategory(categoryId);
              if (items.length === 0) return null;

              return (
                <ScrollReveal key={categoryId}>
                  <div>
                    <h3 className="font-serif text-2xl text-charcoal">
                      {category.label}
                    </h3>
                    <ul className="mt-6 divide-y divide-brass/15">
                      {items.map((item) => (
                        <li key={item.id} className="py-5 first:pt-0">
                          <h4 className="font-serif text-xl text-charcoal">
                            {item.name}
                          </h4>
                          <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-stone">
                            {item.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      ))}
    </motion.div>
  );
}

export default function MenuPage() {
  const [activeSection, setActiveSection] = useState<MenuSectionId>("plates");

  return (
    <div className="min-h-screen bg-ivory pt-28">
      <div className="container-content section-padding pb-8 pt-0">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">Edition 2026</p>
              <h1 className="font-serif text-5xl text-charcoal md:text-6xl lg:text-7xl">
                The Menu
              </h1>
              <p className="mt-6 max-w-xl font-sans text-lg text-stone">
                Coffee &amp; brunch — a place for creative minds. Three chapters:
                plates, sweets, and drinks.
              </p>
            </div>
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-stone">
              Val d&apos;Hydra, El Biar · Alger
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80} className="mt-10">
          <div className="flex flex-wrap gap-3">
            {menuSections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  "rounded-full border px-6 py-2.5 font-sans text-sm uppercase tracking-wider transition-all duration-300",
                  activeSection === section.id
                    ? "border-caramel bg-caramel text-ivory shadow-[0_8px_24px_-8px_rgba(181,101,29,0.55)]"
                    : "border-brass/40 text-stone hover:border-brass hover:text-charcoal"
                )}
              >
                {section.label}
              </button>
            ))}
          </div>
          <p className="mt-4 font-sans text-sm text-stone">
            {menuSections.find((s) => s.id === activeSection)?.subtitle}
          </p>
        </ScrollReveal>
      </div>

      <div className="container-content px-4 pb-section-mobile md:px-8 lg:px-12 lg:pb-section">
        <AnimatePresence mode="wait">
          {activeSection === "plates" && <PlatesSection key="plates" />}
          {activeSection === "sweets" && <SweetsExperience key="sweets" />}
          {activeSection === "drinks" && <DrinksExperience key="drinks" />}
        </AnimatePresence>

        <ScrollReveal className="mt-16 border-t border-brass/20 pt-8">
          <div className="space-y-2 font-sans text-xs text-stone">
            <p>{menuHours.weekday}</p>
            <p>{menuHours.friday}</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
