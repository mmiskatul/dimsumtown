/** Central place for restaurant details so every page stays in sync. */
export const site = {
  name: "Dim Sum Town Dhanmondi",
  shortName: "Dim Sum Town",
  tagline:
    "A Pan-Asian Culinary Extravaganza — Where Tradition Meets Innovation on the Plate",
  address:
    "Ahmad & Kazi Tower, House 35 (Level 5), Road 2, Dhanmondi, Dhaka 1209, Bangladesh",
  phoneDisplay: "+880 1700-000000",
  phoneHref: "tel:+8801700000000",
  email: "hello@dimsumtown.com",
  hours: "12:00 PM – 11:00 PM, daily",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  mapsEmbed:
    "https://www.google.com/maps?q=Ahmad%20%26%20Kazi%20Tower%2C%20House%2035%2C%20Road%202%2C%20Dhanmondi%2C%20Dhaka%201209&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Ahmad+%26+Kazi+Tower+House+35+Road+2+Dhanmondi+Dhaka+1209",
} as const;

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "Location", to: "/location" },
  { label: "Order", to: "/order" },
  { label: "Contact", to: "/contact" },
  { label: "Careers", to: "/careers" },
] as const;
