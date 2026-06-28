export type Event = {
  id: string;
  date: string;
  title: string;
  description: string;
  location: string;
};

export const upcomingEvents: Event[] = [
  {
    id: "jazz-night-june",
    date: "June 14, 2026",
    title: "Live Jazz Night",
    description: "An evening of local jazz with El Djazair Quartet. Reservations recommended.",
    location: "Masagran Hydra",
  },
  {
    id: "art-collab-june",
    date: "June 21, 2026",
    title: "Local Art Showcase",
    description: "Opening night featuring three emerging Algerian illustrators. Wine & coffee pairing.",
    location: "Masagran Hydra",
  },
  {
    id: "brunch-workshop",
    date: "July 5, 2026",
    title: "Brunch Workshop",
    description: "Learn plating techniques from our kitchen team. Limited to 12 guests.",
    location: "Masagran Bab El Oued",
  },
];

export const cultureFeatures = [
  {
    id: "events",
    title: "Events",
    description: "Curated gatherings for creative minds — from brunch clubs to maker meetups.",
    icon: "calendar",
  },
  {
    id: "music",
    title: "Live Music Nights",
    description: "Intimate performances every month. Jazz, acoustic, and local talent.",
    icon: "music",
  },
  {
    id: "art",
    title: "Local Art Collabs",
    description: "Rotating showcases featuring Algerian artists, illustrators, and photographers.",
    icon: "palette",
  },
];
