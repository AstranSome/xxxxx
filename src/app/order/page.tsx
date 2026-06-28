import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = { title: "Order" };

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-ivory pt-28">
      <div className="container-content section-padding">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">Order & Delivery</p>
          <h1 className="font-serif text-5xl text-charcoal md:text-6xl">Craving Masagran?</h1>
          <p className="mt-6 font-sans text-lg text-stone">
            Order your favorites for delivery or pick-up through our partners.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+213555123456"
              className="btn-primary inline-flex"
            >
              <span>Call to Order</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost border-charcoal text-charcoal hover:bg-charcoal/5"
            >
              Order via Instagram DM
            </a>
          </div>

          <p className="mt-12 font-sans text-sm text-stone">
            Prefer dining in?{" "}
            <Link href="/reservations" className="text-caramel underline-offset-4 hover:underline">
              Reserve a table
            </Link>{" "}
            or browse our{" "}
            <Link href="/menu" className="text-caramel underline-offset-4 hover:underline">
              full menu
            </Link>
            .
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
