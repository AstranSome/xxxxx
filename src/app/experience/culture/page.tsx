"use client";

import { useRef, useState } from "react";
import { upcomingEvents } from "@/data/events";
import { videos } from "@/data/videos";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-ivory pt-28">
      <div className="container-content section-padding pb-12 pt-0">
        <ScrollReveal>
          <p className="eyebrow mb-4">Culture</p>
          <h1 className="max-w-3xl font-serif text-5xl text-charcoal md:text-6xl lg:text-7xl">
            Where community comes alive
          </h1>
        </ScrollReveal>
      </div>

      <ScrollReveal className="bg-charcoal section-padding">
        <blockquote className="container-content mx-auto max-w-3xl text-center">
          <p className="font-serif text-2xl italic leading-relaxed text-brass md:text-4xl">
            &ldquo;Masagran isn&apos;t just where I get coffee — it&apos;s where I find my people.&rdquo;
          </p>
          <footer className="mt-6 font-sans text-sm text-ivory/60">— Yasmine K., local illustrator</footer>
        </blockquote>
      </ScrollReveal>

      <div className="container-content section-padding">
        <ScrollReveal>
          <h2 className="font-serif text-3xl text-charcoal md:text-4xl">Past moments</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <ScrollReveal>
            <VideoCard src={videos.culture} title="Live Jazz Night" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <VideoCard src={videos.hero} title="Behind the bar" />
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-section-mobile lg:mt-section">
          <p className="eyebrow mb-8">Upcoming Events</p>
          <div className="relative ml-4 border-l border-brass/30 pl-8">
            {upcomingEvents.map((event, i) => (
              <div key={event.id} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-brass" />
                <time className="font-sans text-xs uppercase tracking-wider text-brass">{event.date}</time>
                <h3 className="mt-2 font-serif text-2xl text-charcoal">{event.title}</h3>
                <p className="mt-2 max-w-lg font-sans text-sm text-stone">{event.description}</p>
                <p className="mt-1 font-sans text-xs text-stone/70">{event.location}</p>
                <button
                  type="button"
                  className="mt-4 border border-brass/40 px-4 py-2 font-sans text-xs uppercase tracking-wider text-caramel transition-colors hover:bg-caramel hover:text-ivory"
                >
                  Add to Calendar
                </button>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

function VideoCard({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  return (
    <div className="group relative aspect-[9/16] max-h-[500px] overflow-hidden rounded-lg shadow-xl">
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-cover"
        loop
        muted={muted}
        playsInline
        autoPlay
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setMuted(videoRef.current.muted);
          }
        }}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/80 p-6">
        <p className="font-serif text-lg text-ivory">{title}</p>
        <p className="mt-1 font-sans text-xs text-ivory/60">Tap to {muted ? "unmute" : "mute"}</p>
      </div>
    </div>
  );
}
