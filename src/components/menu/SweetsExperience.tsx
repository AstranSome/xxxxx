"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { sweetsMedia, type SweetMedia } from "@/data/sweets";
import { sweetsItems, sweetsMenuPage } from "@/data/menu";
import { AmbientVideo } from "@/components/ui/AmbientVideo";
import { cn } from "@/lib/utils";

const tileVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.88, rotate: 0 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: i % 2 === 0 ? -2.5 : 2.5,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
      delay: 0.08 + i * 0.07,
    },
  }),
};

function SweetTile({
  item,
  index,
  onSelect,
}: {
  item: SweetMedia;
  index: number;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      custom={index}
      variants={tileVariants}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.06, rotate: 0, y: -6 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={cn(
        "group relative overflow-hidden bg-espresso text-left shadow-[0_20px_48px_-24px_rgba(26,20,16,0.55)]",
        index === 0 ? "col-span-2 row-span-2 min-h-[320px] md:min-h-[420px]" : "min-h-[180px] md:min-h-[200px]"
      )}
    >
      {item.type === "video" ? (
        <AmbientVideo
          src={item.src}
          className="h-full w-full min-h-[inherit]"
          aria-label={item.label}
        />
      ) : (
        <Image
          src={item.src}
          alt={item.label}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
      <span className="absolute bottom-4 left-4 font-sans text-xs uppercase tracking-[0.18em] text-ivory/90">
        {item.label}
      </span>
    </motion.button>
  );
}

function SweetLightbox({
  item,
  onClose,
}: {
  item: SweetMedia;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 16 }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/5] w-full md:aspect-[3/4]">
          {item.type === "video" ? (
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Image
              src={item.src}
              alt={item.label}
              fill
              className="object-cover"
              sizes="768px"
            />
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/90 to-transparent p-6">
          <p className="font-serif text-2xl text-ivory">{item.label}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30 bg-espresso/50 font-sans text-sm text-ivory backdrop-blur-sm"
          aria-label="Close"
        >
          ×
        </button>
      </motion.div>
    </motion.div>
  );
}

export function SweetsExperience() {
  const [activeItem, setActiveItem] = useState<SweetMedia | null>(null);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRevealed(false);
    const timer = window.setTimeout(() => setRevealed(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-14"
    >
      <div>
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="eyebrow mb-3"
        >
          Sweet Mood
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-serif text-3xl text-charcoal md:text-4xl"
        >
          Freshly from the oven
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-3 max-w-xl font-sans text-sm text-stone"
        >
          Tap a moment below — pastries, pancakes, and sweet endings in motion.
        </motion.p>
      </div>

      {revealed && (
        <div className="grid auto-rows-fr grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {sweetsMedia.map((item, i) => (
            <SweetTile
              key={item.id}
              item={item}
              index={i}
              onSelect={() => setActiveItem(item)}
            />
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="overflow-hidden border border-charcoal/10 bg-[#F5F2E7] shadow-[0_24px_64px_-32px_rgba(26,20,16,0.35)]"
      >
        <Image
          src={sweetsMenuPage}
          alt="Masagran sweets menu — Edition 2026"
          width={1080}
          height={1350}
          className="h-auto w-full"
          sizes="(max-width: 1024px) 100vw, 720px"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        className="space-y-10"
      >
        {sweetsItems.map((group) => (
          <div key={group.id}>
            <h3 className="font-serif text-2xl text-charcoal">{group.label}</h3>
            <ul className="mt-6 divide-y divide-brass/15">
              {group.items.map((item) => (
                <li key={item.id} className="py-5 first:pt-0">
                  <h4 className="font-serif text-xl text-charcoal">{item.name}</h4>
                  {"description" in item && item.description && (
                    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-stone">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeItem && (
          <SweetLightbox item={activeItem} onClose={() => setActiveItem(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
