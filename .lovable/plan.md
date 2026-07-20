# Hemovra — Plain React + Vite (JSX only)

Per your choice, I'll scrap the TanStack Start template and rebuild as a pure JSX project.

## Stack

- Vite + React 19 (JSX only, no TypeScript)
- React Router DOM v6 for routing
- Tailwind CSS v4 for styling
- Framer Motion for scroll/hover animations and animated counters
- lucide-react for icons

All files use `.jsx`/`.js`. No `.ts`/`.tsx` anywhere.

## Cleanup

Remove TanStack Start scaffolding:
- `src/router.tsx`, `src/server.ts`, `src/start.ts`, `src/routes/`, `src/routeTree.gen.ts`
- `src/lib/error-capture.ts`, `src/lib/error-page.ts`, `src/lib/lovable-error-reporting.ts`, `src/lib/utils.ts`
- `src/hooks/use-mobile.tsx`
- `tsconfig.json`, `components.json`
- Rewrite `vite.config.ts` → `vite.config.js` (React plugin + Tailwind v4 Vite plugin only)
- Rewrite `package.json` to remove TanStack/TS deps, add react-router-dom, framer-motion, lucide-react

## New folder structure

```text
index.html
vite.config.js
src/
  main.jsx
  App.jsx
  styles/
    index.css              (Tailwind v4 + design tokens)
  assets/
    hero-donation.jpg      (generated)
    about-community.jpg    (generated)
  components/
    layout/
      Navbar.jsx
      Footer.jsx
    ui/
      Button.jsx
      Card.jsx
      Input.jsx
      Select.jsx
      Textarea.jsx
      Accordion.jsx
      SectionHeading.jsx
      AnimatedCounter.jsx
      PageTransition.jsx
    home/
      Hero.jsx
      Stats.jsx
      About.jsx
      WhyDonate.jsx
    donors/
      DonorCard.jsx
  pages/
    Home.jsx
    About.jsx
    Donate.jsx
    Request.jsx
    FindDonors.jsx
    Eligibility.jsx
    FAQ.jsx
    Contact.jsx
    NotFound.jsx
  data/
    donors.js              (static sample donors)
    faqs.js
    stats.js
  hooks/
    useScrollReveal.js
    useCountUp.js
  utils/
    validators.js
    cn.js
```

## Design system

Deep crimson red / white / soft gray with subtle gradients and glassmorphism.

Tokens in `src/styles/index.css` (Tailwind v4 `@theme`):
- `--color-primary`: deep crimson `oklch(0.48 0.19 25)`
- `--color-primary-glow`: `oklch(0.62 0.22 25)`
- `--color-background`: white
- `--color-muted`: soft gray `oklch(0.97 0.005 250)`
- `--color-foreground`: near-black slate
- Gradients: `--gradient-primary`, `--gradient-hero`
- Shadows: `--shadow-elegant`, `--shadow-card`

Typography: Plus Jakarta Sans (body) + Instrument Serif (display accents), loaded via `<link>` in `index.html`.

Motion: Framer Motion for section fade-ins, hover scale on cards/buttons, animated stat counters via IntersectionObserver.

## Pages & content

- **Navbar** (sticky, glassmorphic on scroll): Home, About, Donate Blood, Request Blood, Find Donors, Eligibility, FAQ, Contact + mobile drawer.
- **Home** (`/`): Hero ("Donate Blood, Save Lives" + two CTAs + illustration) → animated Stats (donors, lives saved, donations, hospitals) → About preview → Why Donate cards → CTA band.
- **About** (`/about`): mission, vision, values, image, community commitment.
- **Donate Blood** (`/donate`): registration form (all fields listed) with client-side validation, success toast.
- **Request Blood** (`/request`): request form (all fields listed), emergency-level select styled by severity.
- **Find Donors** (`/find-donors`): filter by blood group + city, grid of DonorCard from `data/donors.js` with availability badge + contact button.
- **Eligibility** (`/eligibility`): four requirement cards (age 18–65, weight ≥50kg, good health, 3-month interval) + do/don't list.
- **FAQ** (`/faq`): accordion (custom, animated).
- **Contact** (`/contact`): contact info, form, socials, Google Maps placeholder iframe/box.
- **Footer**: logo, description, quick links, contact, socials, newsletter form, copyright.
- **NotFound** (`*`).

Forms are frontend-only (validation + local success state); no backend.

## SEO & accessibility

- Semantic HTML (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`)
- Per-page `<title>`/meta via `react-helmet-async`
- One `<h1>` per page, proper heading order
- Alt text on all images, focus states, aria-labels on icon-only buttons
- Responsive with Tailwind breakpoints; tested mental model at 360 / 768 / 1280

## Technical notes

- Two images generated with imagegen (hero illustration + about community photo) into `src/assets/`.
- Animated counter uses `requestAnimationFrame` inside a custom hook, triggered by IntersectionObserver.
- Accordion is a controlled component (no Radix) to keep deps minimal.
- `App.jsx` wraps routes in `<BrowserRouter>` + `<AnimatePresence>` for page transitions; `<ScrollToTop />` on route change.

Approve and I'll implement.
