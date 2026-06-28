export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "behind-the-latte-art",
    title: "Behind the Latte Art",
    excerpt: "A morning with our head barista on craft, patience, and the perfect pour.",
    category: "Craft",
    date: "May 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80",
    content: [
      "Every morning at Masagran begins before the first guest arrives. The espresso machine hums to life, milk is steamed to silk, and the ritual of the first pour sets the tone for the day.",
      "Our head barista, Amine, describes latte art not as decoration but as proof of care — the microfoam texture, the temperature, the timing of the pour all visible in a single rosetta.",
      "We rotate single-origin beans weekly, sourced through relationships built over years. Each origin demands a different grind, a different extraction window, a different story.",
    ],
  },
  {
    slug: "spring-menu-preview",
    title: "Taste the Season: Spring Menu Preview",
    excerpt: "Rose cardamom lattes, garden bowls, and the flavors of Algerian spring.",
    category: "Menu",
    date: "April 28, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=1200&q=80",
    content: [
      "Spring in Algiers arrives quietly — jasmine on the breeze, longer golden hours, lighter appetites. Our seasonal menu reflects that shift toward brightness and bloom.",
      "The Rose Cardamom Latte pairs floral notes with warm spice, finished with oat milk for a creamy, aromatic cup that feels like the season itself.",
      "On the brunch side, the Spring Garden Bowl celebrates local greens, a perfectly poached egg, and a tahini dressing brightened with lemon and herbs.",
    ],
  },
  {
    slug: "live-jazz-night-recap",
    title: "Live Jazz Night: A Recap",
    excerpt: "Photos and memories from our latest culture night with local musicians.",
    category: "Culture",
    date: "April 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0ff35a28d?w=1200&q=80",
    content: [
      "Last Thursday, Masagran Hydra transformed into an intimate jazz lounge. Candles, low amber light, and the warm crackle of vinyl between sets.",
      "Local quartet El Djazair Quartet filled the room with standards reimagined through an Algerian lens — oud meeting upright bass, darbuka brushing against brushed snare.",
      "These nights aren't events we host — they're conversations we facilitate. Creative minds gathering over coffee, staying for the music, leaving inspired.",
    ],
  },
];
