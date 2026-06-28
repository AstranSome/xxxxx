import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory pt-28">
      <div className="container-content section-padding pb-12 pt-0">
        <ScrollReveal>
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="font-serif text-5xl text-charcoal md:text-6xl">Get in touch</h1>
          <p className="mt-6 max-w-xl font-sans text-lg text-stone">
            Questions, collaborations, or just saying hello — we&apos;d love to hear from you.
          </p>
        </ScrollReveal>
      </div>

      <div className="container-content grid gap-16 px-4 pb-section-mobile md:grid-cols-2 md:px-8 lg:px-12 lg:pb-section">
        <ScrollReveal>
          <form className="space-y-6" action="#">
            <div>
              <label htmlFor="contact-name" className="mb-2 block font-sans text-xs uppercase tracking-wider text-stone">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                className="w-full border-b border-brass/30 bg-transparent py-3 font-sans text-sm text-charcoal focus:border-brass focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block font-sans text-xs uppercase tracking-wider text-stone">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                className="w-full border-b border-brass/30 bg-transparent py-3 font-sans text-sm text-charcoal focus:border-brass focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block font-sans text-xs uppercase tracking-wider text-stone">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                className="w-full resize-none border-b border-brass/30 bg-transparent py-3 font-sans text-sm text-charcoal focus:border-brass focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-primary">
              <span>Send Message</span>
            </button>
          </form>
        </ScrollReveal>

        <div className="space-y-12">
          <ScrollReveal delay={100}>
            <div id="careers">
            <h2 className="font-serif text-2xl text-charcoal">Careers</h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-stone">
              We&apos;re always looking for passionate baristas, kitchen creatives, and culture curators.
              Send your CV to careers@masagran.dz
            </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div id="press">
            <h2 className="font-serif text-2xl text-charcoal">Press & Collaborations</h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-stone">
              For media inquiries, brand partnerships, and art collaborations, reach us at
              press@masagran.dz
            </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h2 className="font-serif text-2xl text-charcoal">General</h2>
            <p className="mt-4 font-sans text-sm text-stone">hello@masagran.dz</p>
            <p className="mt-2 font-sans text-sm text-stone">+213 555 123 456</p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
