"use client";

import { useState } from "react";
import { videos } from "@/data/videos";
import { AmbientVideo } from "@/components/ui/AmbientVideo";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];

export default function ReservationsPage() {
  const [confirmed, setConfirmed] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [partySize, setPartySize] = useState(2);

  if (confirmed) {
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center bg-espresso">
        <div className="text-center">
          <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto" aria-hidden>
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke="#C9A24B"
              strokeWidth="1.5"
              strokeDasharray="226"
              strokeDashoffset="226"
              className="animate-[draw-circle_0.8s_ease-out_forwards]"
              style={{
                animation: "draw-circle 0.8s ease-out forwards",
              }}
            />
            <path
              d="M24 40l10 10 22-22"
              fill="none"
              stroke="#C9A24B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="50"
              strokeDashoffset="50"
              style={{
                animation: "draw-check 0.5s ease-out 0.6s forwards",
              }}
            />
          </svg>
          <style jsx>{`
            @keyframes draw-circle {
              to { stroke-dashoffset: 0; }
            }
            @keyframes draw-check {
              to { stroke-dashoffset: 0; }
            }
          `}</style>
          <h2 className="mt-8 font-serif text-3xl text-ivory">You&apos;re all set.</h2>
          <p className="mt-3 font-sans text-sm text-ivory/60">
            We&apos;ll confirm your reservation shortly.
          </p>
          <button
            type="button"
            onClick={() => setConfirmed(false)}
            className="mt-8 font-sans text-xs uppercase tracking-wider text-brass hover:text-ivory"
          >
            Make another reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-espresso pt-28">
      <AmbientVideo
        src={videos.space}
        className="absolute inset-0 opacity-20 blur-md"
        aria-label="Masagran interior ambiance"
      />

      <div className="container-content relative section-padding">
        <ScrollReveal className="mx-auto max-w-lg">
          <p className="eyebrow mb-4 text-brass">Reservations</p>
          <h1 className="font-serif text-4xl text-ivory md:text-5xl">Reserve your table</h1>
          <p className="mt-4 font-sans text-sm text-ivory/60">
            Brunch tables and event seating — we&apos;ll save you a spot.
          </p>

          <form
            className="mt-10 space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              setConfirmed(true);
            }}
          >
            <div>
              <label htmlFor="date" className="mb-2 block font-sans text-xs uppercase tracking-wider text-ivory/60">
                Date
              </label>
              <input
                id="date"
                type="date"
                required
                className="w-full border border-brass/30 bg-espresso/50 px-4 py-3 font-sans text-sm text-ivory focus:border-brass focus:outline-none"
              />
            </div>

            <div>
              <span className="mb-3 block font-sans text-xs uppercase tracking-wider text-ivory/60">
                Time
              </span>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`border px-4 py-2 font-sans text-xs transition-colors ${
                      selectedTime === time
                        ? "border-caramel bg-caramel text-ivory"
                        : "border-brass/30 text-ivory/70 hover:border-brass"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="mb-3 block font-sans text-xs uppercase tracking-wider text-ivory/60">
                Party Size
              </span>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setPartySize(Math.max(1, partySize - 1))}
                  className="flex h-10 w-10 items-center justify-center border border-brass/30 text-ivory hover:border-brass"
                  aria-label="Decrease party size"
                >
                  −
                </button>
                <span className="font-sans text-lg text-ivory">{partySize}</span>
                <button
                  type="button"
                  onClick={() => setPartySize(Math.min(12, partySize + 1))}
                  className="flex h-10 w-10 items-center justify-center border border-brass/30 text-ivory hover:border-brass"
                  aria-label="Increase party size"
                >
                  +
                </button>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-sans text-xs uppercase tracking-wider text-ivory/60">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full border border-brass/30 bg-espresso/50 px-4 py-3 font-sans text-sm text-ivory focus:border-brass focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block font-sans text-xs uppercase tracking-wider text-ivory/60">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  className="w-full border border-brass/30 bg-espresso/50 px-4 py-3 font-sans text-sm text-ivory focus:border-brass focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-sans text-xs uppercase tracking-wider text-ivory/60">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full border border-brass/30 bg-espresso/50 px-4 py-3 font-sans text-sm text-ivory focus:border-brass focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="requests" className="mb-2 block font-sans text-xs uppercase tracking-wider text-ivory/60">
                Special Requests
              </label>
              <textarea
                id="requests"
                rows={3}
                className="w-full resize-none border border-brass/30 bg-espresso/50 px-4 py-3 font-sans text-sm text-ivory focus:border-brass focus:outline-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              <span>Confirm Reservation</span>
            </button>
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}
