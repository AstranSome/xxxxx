import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function NewsletterBand() {
  return (
    <section className="bg-espresso section-padding">
      <ScrollReveal className="container-content mx-auto max-w-xl text-center">
        <h2 className="font-serif text-4xl text-ivory md:text-5xl">Stay in the loop.</h2>
        <p className="mt-4 font-sans text-sm text-ivory/60">
          Seasonal menus, event invites, and stories from behind the bar.
        </p>
        <form
          className="mx-auto mt-10 flex max-w-md border-b border-brass/40 pb-3 focus-within:border-brass"
          action="#"
        >
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Email for newsletter"
            className="flex-1 bg-transparent text-center font-sans text-sm text-ivory placeholder:text-ivory/40 focus:outline-none md:text-left"
          />
          <button
            type="submit"
            className="text-brass transition-colors hover:text-ivory"
            aria-label="Subscribe to newsletter"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </form>
      </ScrollReveal>
    </section>
  );
}
