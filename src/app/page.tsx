import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { MenuShowcase } from "@/components/home/MenuShowcase";
import { SpaceTeaser } from "@/components/home/SpaceTeaser";
import { CultureBlock } from "@/components/home/CultureBlock";
import { InstagramStrip } from "@/components/home/InstagramStrip";
import { LocationsPreview } from "@/components/home/LocationsPreview";
import { NewsletterBand } from "@/components/home/NewsletterBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <MenuShowcase />
      <SpaceTeaser />
      <CultureBlock />
      <InstagramStrip />
      <LocationsPreview />
      <NewsletterBand />
    </>
  );
}
