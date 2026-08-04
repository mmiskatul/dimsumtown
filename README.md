# Dim Sum Town Digital

Build a modern, production-ready restaurant website for "Dim Sum Town Dhanmondi," 

a Pan-Asian & Dim Sum restaurant located at Ahmad & Kazi Tower, House 35 (Level 5), 

Road 2, Dhanmondi, Dhaka 1209, Bangladesh.

TECH STACK

- Next.js 14 (App Router) + TypeScript

- Tailwind CSS for styling

- Framer Motion for subtle animations/transitions

- Fully responsive (mobile-first), optimized for fast load and SEO

DESIGN DIRECTION

- Aesthetic: modern Pan-Asian fusion — warm, premium, appetite-driven

- Color palette: deep charcoal/black background sections mixed with warm cream, 

  paired with an accent color of jade green OR deep red/gold (pick one consistent accent)

- Typography: a refined serif or display font for headings (evoking Asian calligraphy 

  influence without being cliché), clean sans-serif for body text

- Large, high-quality food imagery with soft overlays; generous whitespace; no clutter

- Smooth scroll-triggered fade/slide animations, hover states on cards and buttons

- Sticky header with logo + nav that changes style on scroll

NAVIGATION — EACH ITEM IS ITS OWN DEDICATED PAGE (no shared/duplicate routes)

1. Home (/)

2. Menu (/menu)

3. About Us (/about)

4. Location & Hours (/location)

5. Reservations / Order Now (/order)

6. Contact (/contact)

7. Careers / Join Our Team (/careers)

PAGE-BY-PAGE REQUIREMENTS

1. HOME (/)

   - Hero section: full-bleed background video/image, tagline 

     "A Pan-Asian Culinary Extravaganza — Where Tradition Meets Innovation on the Plate"

     with a primary CTA "View Menu" and secondary CTA "Order Now"

   - "Signature Dishes" carousel/grid featuring 6-8 best-selling items with name, 

     short description, price (BDT), and image

   - "Our Story" teaser section (2-3 sentences) linking to About page

   - Testimonials / "What People Are Saying" section with a carousel

   - Instagram/Facebook feed strip or social CTA section

   - Footer with address, phone, social icons, quick links

2. MENU (/menu)

   - Category tabs/filter bar: Appetizers, Soup & Broth, Salad, Chicken, Beef, 

     Seafood, Rice & Noodles, Vegetable, Dessert, Drinks

   - Each item as a card: image, name, short description, price in BDT, 

     spicy/veg tags (icon badges)

   - Search/filter functionality (by category and dietary tag)

   - Sticky category nav on scroll for easy jumping between sections

   - "Order Now" floating button that links to /order

3. ABOUT (/about)

   - Brand story: fusion of traditional dim sum craftsmanship with modern 

     Pan-Asian flavors

   - Mission/values section (quality ingredients, authentic technique, 

     modern presentation)

   - Team or kitchen photography section

   - Timeline or milestones (optional, generic placeholder content)

4. LOCATION & HOURS (/location)

   - Dhanmondi branch address, embedded Google Map, opening hours table 

     (placeholder hours, e.g. 12 PM – 11 PM daily)

   - Parking/access notes, nearby landmark reference

   - Click-to-call and "Get Directions" buttons

5. RESERVATIONS / ORDER NOW (/order)

   - Reservation form: name, phone, date, time, party size, special requests

   - Order Now section: click-to-call button + placeholder for delivery 

     partner links (Foodpanda/HungryNaki style buttons — use generic placeholders)

   - Confirmation state/toast on form submit (mock, no backend needed unless specified)

6. CONTACT (/contact)

   - Contact form (name, email, message)

   - Direct contact info: phone, email, address

   - Social media links (Instagram, Facebook)

   - Embedded map (can reuse component from Location page)

7. CAREERS / JOIN OUR TEAM (/careers)

   - Short intro on culture/why work here

   - Open positions list (placeholder roles: Chef, Server, Delivery Rider)

   - Application form or CTA button linking to an external application form

GLOBAL COMPONENTS

- Reusable Header/Nav component with active-state highlighting per page

- Reusable Footer with address, hours snippet, social icons, quick nav links

- Reusable MenuItemCard, TestimonialCard, and Button components

- Mobile hamburger menu with smooth slide-in animation

- Loading and empty states handled gracefully

CONTENT NOTES

- Use realistic placeholder menu items and prices in BDT (Bangladeshi Taka) 

  in the style of dim sum/pan-Asian cuisine (e.g. Chicken Lemongrass Siu Mai — 349 BDT)

- Use placeholder testimonials, team bios, and images (clearly marked as placeholders) 

  unless real assets are provided

- All copy should sound premium but approachable, not overly formal

DELIVERABLE

- Clean, componentized, well-commented code

- Consistent design system (spacing, colors, typography) applied across all pages

- No dead links — every nav item must route to a real, built-out page


https://dimsumtown.com/

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://dimsumtown.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c6be2bd0-2a81-4a2c-9ad3-e9a211dfc57f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
