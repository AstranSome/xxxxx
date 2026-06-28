import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Philosophy() {
  return (
    <section className="section-padding">
      <div className="container-content mx-auto max-w-[700px] text-center">
        <ScrollReveal>
          <div className="mx-auto gold-divider mb-10" />
          <p className="font-serif text-2xl leading-relaxed text-charcoal md:text-3xl md:leading-snug">
            Masagran is more than a café — it&apos;s a creative culture space where every cup
            is crafted with intention, every plate celebrates local ingredients, and every
            evening invites connection through music, art, and community.
          </p>
          <div className="mx-auto gold-divider mt-10" />
        </ScrollReveal>
      </div>
    </section>
  );
}
