import platesPage from "./menu/721441042_17953205922156963_7814849635229062334_n.jpg";
import pancakesPage from "./menu/721625991_17953205928156963_585258415687051130_n.jpg";
import coldDrinksPage from "./menu/722520900_17953205964156963_1991271532353561734_n.jpg";
import hotDrinksPage from "./menu/722637803_17953205955156963_6113667279826410186_n.jpg";
import benedictsPage from "./menu/722910001_17953205943156963_5779798781116272542_n.jpg";
import sweetsPage from "./menu/722934044_17953205946156963_7914183838837275776_n.jpg";

export type MenuCategory =
  | "plates"
  | "pancakes"
  | "toasts"
  | "benedicts"
  | "waffles"
  | "extras";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  image: typeof platesPage;
};

export type MenuSectionId = "plates" | "sweets" | "drinks";

export const menuSections = [
  {
    id: "plates",
    label: "Plates",
    subtitle: "Brunch classics — eggs, benedicts, pancakes & toasts",
  },
  {
    id: "sweets",
    label: "Sweets",
    subtitle: "Fresh from the oven — pastries, pancakes & sweet endings",
  },
  {
    id: "drinks",
    label: "Drinks",
    subtitle: "Hot, cold & cocktails — coffee craftsmanship",
  },
] as const;

export { sweetsPage as sweetsMenuPage };

export const platesMenuPages = [
  {
    id: "plates-extras",
    title: "The Plates & Extras",
    subtitle: "Les recettes qui voyagent",
    image: platesPage,
    alt: "Masagran menu — The Plates and Les Extras, Edition 2026",
    categories: ["plates", "extras"] as MenuCategory[],
  },
  {
    id: "pancakes-toasts",
    title: "Pancakes & Toasts",
    subtitle: "Les incontournables du brunch moderne",
    image: pancakesPage,
    alt: "Masagran menu — Les Pancakes and Les Toasts, Edition 2026",
    categories: ["pancakes", "toasts"] as MenuCategory[],
  },
  {
    id: "benedicts-waffles",
    title: "Benedicts & Waffles",
    subtitle: "Les grands classiques qui font la une",
    image: benedictsPage,
    alt: "Masagran menu — Les Benedicts and Les Waffles, Edition 2026",
    categories: ["benedicts", "waffles"] as MenuCategory[],
  },
];

export const drinksMenuPages = [
  {
    id: "cold-drinks",
    title: "Boissons Froides",
    subtitle: "Cold edition",
    image: coldDrinksPage,
    alt: "Masagran menu — Boissons Froides, Edition 2026",
  },
  {
    id: "hot-drinks-cocktails",
    title: "Chaudes & Cocktails",
    subtitle: "Hot off the press · Social column",
    image: hotDrinksPage,
    alt: "Masagran menu — Boissons Chaudes and Les Cocktails, Edition 2026",
  },
];

export type MenuPage = {
  id: string;
  title: string;
  subtitle: string;
  image: typeof platesPage;
  alt: string;
  categories: MenuCategory[];
};

export const menuPages = platesMenuPages;

export const menuCategories = [
  { id: "plates", label: "The Plates" },
  { id: "pancakes", label: "Les Pancakes" },
  { id: "toasts", label: "Les Toasts" },
  { id: "benedicts", label: "Les Benedicts" },
  { id: "waffles", label: "Les Waffles" },
  { id: "extras", label: "Les Extras" },
] as const;

export const menuHours = {
  weekday: "Du samedi au jeudi : 08:00 – 22:00",
  friday: "Le vendredi : 15:00 – 22:30",
};

export const menuItems: MenuItem[] = [
  {
    id: "turkish-eggs",
    name: "Turkish Eggs",
    description:
      "Pain au levain toasté, deux œufs parfaits, cream cheese labneh, tomates confites, bacon caramélisé et salade fraîche.",
    category: "plates",
    image: platesPage,
  },
  {
    id: "shakshuka",
    name: "Shakshuka",
    description:
      "Sauce tomate mijotée, poivrons, oignon, paprika fumé, harissa douce, œufs au four, labneh aux herbes et pain pita.",
    category: "plates",
    image: platesPage,
  },
  {
    id: "eggs-bacon",
    name: "Eggs & Bacon",
    description:
      "Deux pancakes fondants, bacon caramélisé, deux œufs au plat, beurre salé et sirop d'érable.",
    category: "pancakes",
    image: pancakesPage,
  },
  {
    id: "salmon-stack",
    name: "Salmon Stack",
    description:
      "Trois pancakes fondants, saumon fumé, cream cheese ciboulette, œuf mollet, pickles d'oignons rouges et sirop d'érable.",
    category: "pancakes",
    image: pancakesPage,
  },
  {
    id: "ave-stracciatella",
    name: "Avé Stracciatella",
    description:
      "Pain au levain toasté, écrasé d'avocat, pesto, stracciatella, tomates confites et noisettes concassées.",
    category: "toasts",
    image: pancakesPage,
  },
  {
    id: "levantine-toast",
    name: "Levantine Toast",
    description:
      "Pain au levain toasté, houmous, labneh, halloumi grillé, pois chiches croustillants, œuf poché, zaatar et menthe fraîche.",
    category: "toasts",
    image: pancakesPage,
  },
  {
    id: "crispy-benedict",
    name: "Crispy Benedict",
    description:
      "Brioche toastée, poulet croustillant laqué, coleslaw, œuf mollet, pickles chou rouge, gomasio et sauce hollandaise paprika.",
    category: "benedicts",
    image: benedictsPage,
  },
  {
    id: "bacon-classic",
    name: "Bacon Classic",
    description:
      "Brioche toastée, bacon caramélisé, coleslaw, œuf mollet, pickles chou rouge, gomasio et sauce hollandaise paprika.",
    category: "benedicts",
    image: benedictsPage,
  },
  {
    id: "smoked-salmon",
    name: "Smoked Salmon",
    description:
      "Brioche toastée, saumon fumé, coleslaw, œuf mollet, pickles chou rouge, gomasio et sauce hollandaise paprika.",
    category: "benedicts",
    image: benedictsPage,
  },
  {
    id: "salty-mood",
    name: "Salty Mood",
    description:
      "Gaufre moelleuse, poulet croustillant laqué, sauce aigre-douce, cheddar, avocat écrasé, œuf au plat, pickles chou rouge et sauce signature.",
    category: "waffles",
    image: benedictsPage,
  },
  {
    id: "salmon-crush",
    name: "Salmon Crush",
    description:
      "Gaufre moelleuse, saumon fumé, cream cheese ciboulette, œuf mollet, pickles chou, gomasio sésame noir et sirop d'érable.",
    category: "waffles",
    image: benedictsPage,
  },
];

export const menuExtras = [
  "Poulet Crispy",
  "Bacon",
  "Avocat",
  "Œuf Mollet",
  "Saumon Fumé",
  "Halloumi",
  "Stracciatella",
  "Pain Sans Gluten",
  "Crème Fouettée",
];

export const sweetsItems = [
  {
    id: "sweet-mood",
    label: "Sweet Mood",
    items: [
      {
        id: "briochic",
        name: "Brio'chic Vanille Caramel",
        description:
          "Brioche au beurre perdue, sauce caramel beurre salé, boule de glace vanille artisanale, banane, granola.",
      },
      {
        id: "original-taste",
        name: "Original Taste",
        description:
          "Noisettes caramélisées, beurre salé, crème fouettée et sirop d'érable.",
      },
      {
        id: "fruits-cream",
        name: "Fruits & Cream",
        description:
          "Fruits de saison, crème fouettée, noisettes torréfiées et sirop d'érable.",
      },
      {
        id: "we-love-choco",
        name: "We Love Choco",
        description:
          "Bananes, noisettes caramélisées, crème fouettée, myrtilles et nappage chocolat.",
      },
      {
        id: "choco-banana",
        name: "Choco Banana",
        description:
          "Banane caramélisée, noix de pécan, crème fouettée et sauce chocolat.",
      },
    ],
  },
  {
    id: "sweets-bakery",
    label: "Sweets & Bakery",
    items: [
      { id: "croissant", name: "Croissant" },
      { id: "pain-chocolat", name: "Pain au Chocolat" },
      { id: "brookie", name: "Brookie" },
      { id: "cookie", name: "Cookie New-Yorkais" },
      { id: "banana-bread", name: "Banana Bread" },
      { id: "carrot-cake", name: "Carrot Cake" },
      { id: "fruit-plate", name: "Assiette de Fruits" },
      { id: "brioche-pb", name: "Brioche Peanut Butter" },
      { id: "granola", name: "Granola Maison" },
    ],
  },
];

export const drinksItems = [
  {
    id: "cold",
    label: "Boissons Froides",
    items: [
      { id: "masagran-cold", name: "Masagran", description: "Citron frais, espresso et glaçons." },
      { id: "lawha-cold", name: "Lawha Faniya", description: "Mousse de lait, espresso, sirop au choix et glaçons." },
      { id: "frappuccino", name: "Frappuccino Caramel", description: "Lait, espresso, glace pilée et caramel." },
      { id: "dalgona", name: "Dalgona Coffee", description: "Mousse de café et lait." },
      { id: "affogato", name: "Affogato", description: "Espresso et boule de glace vanille." },
      { id: "iced-americano", name: "Iced Americano", description: "Café americano servi avec des glaçons." },
      { id: "ice-tea", name: "Ice Tea", description: "Thé vert, sirop pêche ou fraise et glaçons." },
      { id: "smoothie", name: "Smoothie", description: "Fraise, lait, banane et glaçons." },
      { id: "tiramisu-latte", name: "Tiramisu Latte", description: "Vanille, crème légère, espresso, lait et biscuit cuillère." },
      { id: "matcha-ice", name: "That Matcha Ice" },
      { id: "cocktail-juice", name: "Cocktail Juice", description: "Orange, fraise et citronnade menthe." },
      { id: "autumn-serenity", name: "Autumn Serenity", description: "Infusion fruits rouges, miel, eau pétillante et citron." },
      { id: "water", name: "Eau Plate / Eau Gazeifiée" },
    ],
  },
  {
    id: "hot",
    label: "Boissons Chaudes",
    items: [
      { id: "lawha-hot", name: "Lawha Faniya", description: "Espresso, mousse de lait et sirop au choix." },
      { id: "espresso", name: "Espresso" },
      { id: "americano", name: "Americano" },
      { id: "cappuccino", name: "Cappuccino" },
      { id: "mochaccino", name: "Mochaccino", description: "Mousse de lait, chocolat et espresso." },
      { id: "the-infusion", name: "Thé Infusion", description: "Thé vert menthe ou fruits des bois." },
      { id: "hot-chocolate", name: "Hot Chocolate" },
      { id: "choco-cinamo", name: "Choco-Cinamo", description: "Chocolat chaud infusé à la cannelle, cacao onctueux et touche de vanille." },
      { id: "cappu-matcha", name: "Cappu-Matcha" },
      { id: "thai-matcha", name: "Thai Matcha" },
    ],
  },
  {
    id: "cocktails",
    label: "Les Cocktails",
    items: [
      { id: "algerian-sunset", name: "Algerian Sunset", description: "Purée mangue, purée passion, infusion hibiscus, jus citron et eau pétillante." },
      { id: "mojito-fraise", name: "Mojito Fraise", description: "Menthe fraîche, citron, fraise et eau pétillante." },
      { id: "tropical-lush", name: "Tropical Lush", description: "Lait concentré, citron et vanille." },
      { id: "red-boost", name: "Red Boost", description: "Betterave, orange et gingembre." },
      { id: "mojito-classique", name: "Mojito Classique", description: "Feuilles de menthe fraîche, citron et eau pétillante." },
      { id: "mint-detox", name: "Fresh Mint Detox", description: "Concombre, citron, orange et menthe." },
      { id: "aloha-glow", name: "Aloha Glow", description: "Ananas, purée mangue et lait de coco." },
      { id: "pinky-mood", name: "Pinky Mood", description: "Infusion hibiscus, purée fruits rouges, blanc d'œuf et jus citron." },
    ],
  },
];

export const menuCarouselItems = [
  {
    id: "plates-extras",
    title: "The Plates",
    description: "Les recettes qui voyagent — Turkish eggs, shakshuka, and generous brunch plates.",
    image: platesPage,
  },
  {
    id: "pancakes-toasts",
    title: "Pancakes & Toasts",
    description: "Les incontournables du brunch moderne — pancakes, avo toast, and levantine flavors.",
    image: pancakesPage,
  },
  {
    id: "benedicts-waffles",
    title: "Benedicts & Waffles",
    description: "Les grands classiques qui font la une — eggs benedict and signature waffles.",
    image: benedictsPage,
  },
  {
    id: "cold-drinks",
    title: "Boissons Froides",
    description: "Cold edition — iced coffees, frappuccinos, matcha, and summer refreshers.",
    image: coldDrinksPage,
  },
  {
    id: "hot-drinks-cocktails",
    title: "Chaudes & Cocktails",
    description: "Hot off the press — espresso classics and colorful social column mocktails.",
    image: hotDrinksPage,
  },
  {
    id: "sweets-bakery",
    title: "Sweet Mood",
    description: "Freshly from the oven — brioche, pastries, sweet waffles, and bakery picks.",
    image: sweetsPage,
  },
] as const;
