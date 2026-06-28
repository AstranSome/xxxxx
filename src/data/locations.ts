export type Location = {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  city: string;
  phone: string;
  hours: { day: string; time: string }[];
  amenities: string[];
  image: string;
  coordinates: { lat: number; lng: number };
};

export const locations: Location[] = [
  {
    id: "hydra",
    name: "Masagran Hydra",
    neighborhood: "Hydra",
    address: "12 Rue Didouche Mourad",
    city: "Algiers",
    phone: "+213 555 123 456",
    hours: [
      { day: "Mon – Fri", time: "7:30 AM – 10:00 PM" },
      { day: "Sat – Sun", time: "8:00 AM – 11:00 PM" },
    ],
    amenities: ["WiFi", "Outdoor Seating", "Parking", "Pet-friendly"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
    coordinates: { lat: 36.7538, lng: 3.0588 },
  },
  {
    id: "bab-el-oued",
    name: "Masagran Bab El Oued",
    neighborhood: "Bab El Oued",
    address: "45 Boulevard de la Soummam",
    city: "Algiers",
    phone: "+213 555 789 012",
    hours: [
      { day: "Mon – Fri", time: "8:00 AM – 9:30 PM" },
      { day: "Sat – Sun", time: "9:00 AM – 10:30 PM" },
    ],
    amenities: ["WiFi", "Outdoor Seating"],
    image: "https://images.unsplash.com/photo-1445116572660-236899ec97a0?w=1200&q=80",
    coordinates: { lat: 36.7897, lng: 3.0515 },
  },
];
