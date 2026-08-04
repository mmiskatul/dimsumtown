import siumai from "@/assets/dish-siumai.jpg";
import hargow from "@/assets/dish-hargow.jpg";
import beef from "@/assets/dish-beef.jpg";
import prawn from "@/assets/dish-prawn.jpg";
import noodles from "@/assets/dish-noodles.jpg";
import soup from "@/assets/dish-soup.jpg";
import dessert from "@/assets/dish-dessert.jpg";

export const categories = [
  "Appetizers",
  "Soup & Broth",
  "Salad",
  "Chicken",
  "Beef",
  "Seafood",
  "Rice & Noodles",
  "Vegetable",
  "Dessert",
  "Drinks",
] as const;

export type Category = (typeof categories)[number];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number; // BDT
  category: Category;
  image?: string;
  spicy?: boolean;
  veg?: boolean;
  signature?: boolean;
};

/** Placeholder menu — prices and copy are illustrative. */
export const menu: MenuItem[] = [
  {
    id: "siu-mai",
    name: "Chicken Lemongrass Siu Mai",
    description: "Hand-pleated open dumplings, lemongrass, ginger, sesame oil.",
    price: 349,
    category: "Appetizers",
    image: siumai,
    signature: true,
  },
  {
    id: "har-gow",
    name: "Crystal Prawn Har Gow",
    description: "Translucent wrappers, whole tiger prawn, bamboo shoot.",
    price: 429,
    category: "Appetizers",
    image: hargow,
    signature: true,
  },
  {
    id: "edamame",
    name: "Chili Salt Edamame",
    description: "Steamed soy beans tossed in toasted chili salt.",
    price: 229,
    category: "Appetizers",
    veg: true,
    spicy: true,
  },
  {
    id: "spring-roll",
    name: "Vegetable Spring Rolls",
    description: "Crisp rolls, glass noodle and cabbage, sweet chili dip.",
    price: 269,
    category: "Appetizers",
    veg: true,
  },
  {
    id: "tom-yum",
    name: "Tom Yum Goong",
    description: "Hot and sour prawn broth, galangal, kaffir lime, chili oil.",
    price: 389,
    category: "Soup & Broth",
    image: soup,
    spicy: true,
    signature: true,
  },
  {
    id: "hot-sour",
    name: "Sichuan Hot & Sour Soup",
    description: "Silken tofu, wood ear mushroom, black vinegar, white pepper.",
    price: 299,
    category: "Soup & Broth",
    veg: true,
    spicy: true,
  },
  {
    id: "corn-soup",
    name: "Chicken Sweet Corn Soup",
    description: "Slow-simmered chicken broth, sweet corn, egg ribbon.",
    price: 279,
    category: "Soup & Broth",
  },
  {
    id: "som-tam",
    name: "Som Tam Green Papaya Salad",
    description: "Shredded papaya, peanuts, lime, bird's eye chili.",
    price: 329,
    category: "Salad",
    veg: true,
    spicy: true,
  },
  {
    id: "glass-noodle-salad",
    name: "Thai Glass Noodle Salad",
    description: "Chilled noodles, prawn, red onion, coriander, lime dressing.",
    price: 379,
    category: "Salad",
    spicy: true,
  },
  {
    id: "lemon-chicken",
    name: "Crispy Lemon Chicken",
    description: "Golden fried chicken, bright house lemon glaze, sesame.",
    price: 549,
    category: "Chicken",
  },
  {
    id: "kung-pao",
    name: "Kung Pao Chicken",
    description: "Wok-charred chicken, dried chili, roasted cashew.",
    price: 579,
    category: "Chicken",
    spicy: true,
  },
  {
    id: "thai-basil-chicken",
    name: "Thai Basil Chicken",
    description: "Minced chicken, holy basil, garlic, chili, fried egg.",
    price: 599,
    category: "Chicken",
    spicy: true,
  },
  {
    id: "pepper-beef",
    name: "Sizzling Black Pepper Beef",
    description: "Tenderloin strips, cracked pepper, onion, hot iron plate.",
    price: 749,
    category: "Beef",
    image: beef,
    signature: true,
  },
  {
    id: "beef-broccoli",
    name: "Beef & Broccoli in Oyster Sauce",
    description: "Velveted beef, tender-stem broccoli, garlic oyster glaze.",
    price: 699,
    category: "Beef",
  },
  {
    id: "chili-prawn",
    name: "Chili Garlic Tiger Prawns",
    description: "Butterflied prawns, roasted chili paste, garlic, coriander.",
    price: 899,
    category: "Seafood",
    image: prawn,
    spicy: true,
    signature: true,
  },
  {
    id: "steamed-fish",
    name: "Steamed Fish, Ginger & Scallion",
    description: "Whole fillet steamed in light soy, ginger, spring onion.",
    price: 829,
    category: "Seafood",
  },
  {
    id: "hakka-noodles",
    name: "Wok-Tossed Hakka Noodles",
    description: "Egg noodles, julienne vegetables, dark soy, scallion.",
    price: 449,
    category: "Rice & Noodles",
    image: noodles,
    veg: true,
    signature: true,
  },
  {
    id: "yangzhou-rice",
    name: "Yangzhou Fried Rice",
    description: "Jasmine rice, prawn, chicken, egg, spring onion.",
    price: 489,
    category: "Rice & Noodles",
  },
  {
    id: "pad-thai",
    name: "Prawn Pad Thai",
    description: "Rice noodles, tamarind, peanut, bean sprout, lime.",
    price: 619,
    category: "Rice & Noodles",
    spicy: true,
  },
  {
    id: "mapo-tofu",
    name: "Mapo Tofu",
    description: "Silken tofu, fermented bean, Sichuan pepper numbing heat.",
    price: 429,
    category: "Vegetable",
    veg: true,
    spicy: true,
  },
  {
    id: "garlic-greens",
    name: "Stir-Fried Garlic Greens",
    description: "Seasonal Asian greens, smashed garlic, light soy.",
    price: 359,
    category: "Vegetable",
    veg: true,
  },
  {
    id: "mango-sticky",
    name: "Mango Sticky Rice",
    description: "Coconut sticky rice, ripe mango, salted cream.",
    price: 369,
    category: "Dessert",
    image: dessert,
    veg: true,
    signature: true,
  },
  {
    id: "sesame-balls",
    name: "Golden Sesame Balls",
    description: "Crisp glutinous shell, sweet lotus paste centre.",
    price: 289,
    category: "Dessert",
    veg: true,
  },
  {
    id: "jasmine-tea",
    name: "Jasmine Pearl Tea",
    description: "Hand-rolled jasmine pearls, brewed by the pot.",
    price: 189,
    category: "Drinks",
    veg: true,
  },
  {
    id: "lemongrass-cooler",
    name: "Lemongrass Cooler",
    description: "Chilled lemongrass infusion, lime, mint.",
    price: 219,
    category: "Drinks",
    veg: true,
  },
];

export const signatureDishes = menu.filter((item) => item.signature);
