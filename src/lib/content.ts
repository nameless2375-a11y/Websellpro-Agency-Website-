/**
 * Site content.
 *
 * REAL DATA POLICY — every claim in this file must be traceable to something
 * that exists. No testimonials, no client logos, no client counts, no revenue,
 * no conversion figures, no awards, no team size, no years in business, no
 * project outcomes. If evidence does not exist, the section says so plainly
 * or does not exist.
 *
 * Verified 2026-09-20 against the workspace:
 *   43 buildable generated sites across 7 categories, from 19 templates
 *   (website-engine/generated-sites, website-engine/templates).
 */

export const PRODUCTION_RECORD = {
  sites: 43,
  categories: 7,
  templates: 19,
  note: 'Studio demonstration sites, built to prove the delivery system. Not client commissions.',
} as const

/**
 * Studio demonstrations shown on /work and (a selection) on the homepage.
 *
 * One design per business category, each a template that exists in
 * website-engine/templates, rendered with a FICTIONAL sample record
 * (`isSample: true`, labelled "Demo preview" inside every capture). These are
 * demonstrations of design range — not client work, and nothing here implies
 * a client, a result or a commission. No real business, phone number or
 * address appears: the *-d8 templates bundle real leads, so those designs are
 * only ever captured with a fictional record swapped in
 * (.validation/capture-range.mjs), and every capture carries the same
 * obviously fake phone number.
 *
 * Design notes below state what is visible in the capture and which typefaces
 * the template actually loads. Nothing about outcomes.
 */
export const DEMOS = [
  {
    slug: 'nordic',
    name: 'Nordic',
    category: 'Café',
    kind: 'Daylight café',
    direction:
      'Paper-white ground, generous air, photography held in a hard-edged panel beside the type rather than behind it. Quiet, and legible in sunlight.',
    notes: [
      { label: 'Typography', value: 'Spectral, an editorial serif, at three stacked lines; DM Sans for everything else' },
      { label: 'Layout', value: 'Split hero, asymmetric — copy left, image bleeding right' },
      { label: 'Interaction', value: 'Persistent call button; rating shown as evidence, not decoration' },
    ],
    desktop: '/work/nordic-desktop.webp',
    inner: '/work/nordic-inner.webp',
    innerLabel: 'Gallery',
    mobile: '/work/nordic-mobile.webp',
  },
  {
    slug: 'ember',
    name: 'Ember',
    category: 'Restaurant',
    kind: 'Evening dining room',
    direction:
      'A full-bleed dining-room photograph under a warm brown wash, the restaurant’s name set large across it in serif. Built for a room that sells on atmosphere, with the menu one tap away.',
    notes: [
      { label: 'Typography', value: 'Playfair Display for the name, Source Sans for everything else' },
      { label: 'Layout', value: 'Full-bleed hero with the navigation split either side of a centred name; amenities as a strip on the fold line' },
      { label: 'Interaction', value: 'Two actions only — see the menu, or message the restaurant' },
    ],
    desktop: '/work/ember-desktop.webp',
    inner: '/work/ember-inner.webp',
    innerLabel: 'Gallery',
    mobile: '/work/ember-mobile.webp',
  },
  {
    slug: 'iron',
    name: 'Iron',
    category: 'Gym',
    kind: 'Fitness studio',
    direction:
      'An acid-yellow block, black rules and a headline set at poster scale. It looks finished without a photograph: the type and the grid do the work, and the one loud action is the call to join.',
    notes: [
      { label: 'Typography', value: 'Archivo, heavy and condensed, in capitals; Inter Tight for supporting text' },
      { label: 'Layout', value: 'Ruled grid — rating and today’s hours in a boxed column beside the main block' },
      { label: 'Interaction', value: 'A call-to-join button with a hard offset shadow' },
    ],
    desktop: '/work/iron-desktop.webp',
    inner: '/work/iron-inner.webp',
    innerLabel: 'Contact',
    mobile: '/work/iron-mobile.webp',
  },
  {
    slug: 'meridian',
    name: 'Meridian',
    category: 'Clinic',
    kind: 'Family clinic',
    direction:
      'White ground, one blue accent and rounded cards that carry the facts a patient looks for first: where it is, when it is open, how to get there. Calm and legible; nothing decorative.',
    notes: [
      { label: 'Typography', value: 'Plus Jakarta Sans for headings, Public Sans for body copy' },
      { label: 'Layout', value: 'Split hero — name and rating beside a visit card with the address' },
      { label: 'Interaction', value: 'Call pinned in the navigation; WhatsApp and directions beside the headline' },
    ],
    desktop: '/work/meridian-desktop.webp',
    inner: '/work/meridian-inner.webp',
    innerLabel: 'Details',
    mobile: '/work/meridian-mobile.webp',
  },
  {
    slug: 'sage',
    name: 'Sage',
    category: 'Dentist',
    kind: 'Dental practice',
    direction:
      'Soft sage on bone white, a tall editorial serif and a single rounded panel. Quiet and reassuring, for a practice people visit with some apprehension.',
    notes: [
      { label: 'Typography', value: 'Instrument Serif for the name, Figtree for body copy' },
      { label: 'Layout', value: 'Left-aligned stack, with a wide rounded panel under the headline' },
      { label: 'Interaction', value: 'A pill-shaped call button, repeated in the navigation' },
    ],
    desktop: '/work/sage-desktop.webp',
    inner: '/work/sage-inner.webp',
    innerLabel: 'Services',
    mobile: '/work/sage-mobile.webp',
  },
  {
    slug: 'rosewood',
    name: 'Rosewood',
    category: 'Salon',
    kind: 'Hair and beauty studio',
    direction:
      'A studio photograph under a plum-brown wash with a soft serif name over it and two quiet actions. Warm and personal rather than clinical.',
    notes: [
      { label: 'Typography', value: 'Lora, a soft serif, for the name; Karla for everything else' },
      { label: 'Layout', value: 'Full-bleed hero with a centred wordmark between the navigation links; offers as a strip on the fold line' },
      { label: 'Interaction', value: 'Two actions only — see the services, or message the studio' },
    ],
    desktop: '/work/rosewood-desktop.webp',
    inner: '/work/rosewood-inner.webp',
    innerLabel: 'Gallery',
    mobile: '/work/rosewood-mobile.webp',
  },
] as const

/**
 * Measured evidence. Every figure here has a stored record.
 *   - counts: website-engine/generated-sites + /templates, counted 2026-09-20
 *   - Lighthouse + axe: this site, .validation/v2/, measured 2026-09-20
 * Nothing about clients, revenue, or outcomes — none of that exists.
 */
export const EVIDENCE = [
  {
    figure: '43',
    label: 'websites generated',
    detail: 'Complete, buildable Next.js projects produced by our own generator.',
  },
  {
    figure: '7',
    label: 'business categories',
    detail: 'Cafés, restaurants, clinics, dental practices, gyms, salons and spas.',
  },
  {
    figure: '19',
    label: 'design systems',
    detail: 'Distinct templates, each with its own palette, type scale and layout grammar.',
  },
  {
    figure: '100',
    label: 'accessibility, this site',
    detail: 'Lighthouse accessibility, desktop and mobile. Zero axe WCAG 2.1 AA violations across every route at both viewports.',
  },
] as const

/* -------------------------------------------------------------------------
   Beat 3 — What we actually build
   ------------------------------------------------------------------------- */

export const CAPABILITIES = [
  {
    title: 'Production React, not a page builder',
    body: 'Next.js App Router and TypeScript, statically rendered where it can be. You get a repository, not a subscription to somebody else’s editor. Nothing about the site depends on us staying in the picture.',
  },
  {
    title: 'Performance treated as a requirement',
    body: 'Pages are measured, not assumed — production build, real Lighthouse runs on desktop and mobile, JavaScript budgets tracked per route. A site that loads slowly on a mid-range Android on 4G has not shipped.',
  },
  {
    title: 'Accessible and keyboard-complete',
    body: 'Real focus states, working keyboard paths, contrast checked against WCAG AA, and a layout that stays usable when a visitor asks for reduced motion. Audited before handover, not after a complaint.',
  },
  {
    title: 'Found, and legible to machines',
    body: 'Per-page metadata, canonical URLs, sitemap and robots, and structured data appropriate to the business type — built from facts the business actually has, never padded out with invented detail.',
  },
] as const

/* -------------------------------------------------------------------------
   Beat 4 — Build before you buy
   ------------------------------------------------------------------------- */

export const MECHANISM = {
  eyebrow: 'How we prove it',
  heading: 'We build the site first. Then we show you.',
  lead: 'Most studios ask for a deposit against a deck. We would rather hand you the working thing and let you judge it. There is no version of this where you pay for something you have not already opened on your own phone.',
  steps: [
    {
      n: '01',
      title: 'We build it',
      body: 'A real, deployed website — not a mockup, not a Figma frame, not a slide. Every page, on a live URL.',
    },
    {
      n: '02',
      title: 'You open it',
      body: 'On your own phone, in your own hands, with no call booked and nothing signed. Click everything. Break it if you can.',
    },
    {
      n: '03',
      title: 'You decide',
      body: 'If it is not right, say so and we revise it, or walk away owing nothing. We only invoice once you have seen what you are buying.',
    },
  ],
} as const

/* -------------------------------------------------------------------------
   Beat 5 — Services
   ------------------------------------------------------------------------- */

export const SERVICES = [
  {
    title: 'Website design and build',
    body: 'The whole thing, from structure and copy hierarchy through to a deployed production site. Custom design — no theme with your logo dropped into it.',
    detail: [
      'Information architecture and page structure',
      'Visual design system: type, colour, spacing, motion',
      'Front-end build in Next.js and TypeScript',
      'Deployment, domain and SSL configuration',
    ],
  },
  {
    title: 'Rebuilds and rescues',
    body: 'An existing site that is slow, unmaintainable, or was handed over half-finished. We audit what is there, keep what works, and rebuild the rest on a foundation you can actually own.',
    detail: [
      'Audit of the current build and its real problems',
      'Content and URL migration without losing search positions',
      'Performance and accessibility repair',
      'A clean handover: repo, deploy access, documentation',
    ],
  },
  {
    title: 'Local business sites',
    body: 'Fixed-price, fast, for cafes, clinics, salons and shops that need a credible web presence and a phone that rings. This is the entry tier — a different product from a studio engagement, priced accordingly.',
    detail: [
      'Mobile-first, built for a mid-range phone on 4G',
      'Call, WhatsApp and directions, one tap from anywhere',
      'Google Business Profile and local search structure',
      'Menu, services, hours and gallery as the business needs',
    ],
  },
] as const

/* -------------------------------------------------------------------------
   Beat 6 — How an engagement runs
   ------------------------------------------------------------------------- */

export const PROCESS = [
  {
    n: '01',
    title: 'Understand',
    body: 'What the business actually does, who it is for, and what the site has to make happen. Short, specific, no discovery theatre.',
  },
  {
    n: '02',
    title: 'Build',
    body: 'Design and development as one pass, on the real stack. You see progress on a live URL rather than in a status email.',
  },
  {
    n: '03',
    title: 'Review',
    body: 'You open the finished site and tell us what is wrong with it. We revise. This is where the work is judged — before money changes hands.',
  },
  {
    n: '04',
    title: 'Launch and hand over',
    body: 'Domain, hosting, SSL, analytics if you want it. Then the repository and every access credential, in your name.',
  },
] as const

/* -------------------------------------------------------------------------
   Beat 7 — What we don't do
   Honest exclusions. The strongest available substitute for testimonials
   we have not earned yet.
   ------------------------------------------------------------------------- */

export const EXCLUSIONS = [
  {
    title: 'We don’t show client logos we haven’t earned',
    body: 'There is no logo strip on this site because there is no roster to put in it yet. When there is, it will be real and it will be permitted.',
  },
  {
    title: 'We don’t quote conversion numbers',
    body: 'You will not find "increased revenue by 240%" anywhere here. We have not measured it, so we will not claim it.',
  },
  {
    title: 'We don’t hold your site hostage',
    body: 'No proprietary CMS you can only edit through us, no mandatory retainer, no account you cannot get the keys to. The repository is yours at handover.',
  },
  {
    title: 'We don’t take work we’d do badly',
    body: 'Native mobile apps, large e-commerce platforms, and ongoing paid-ads management are not what we are good at. We will say so and point you elsewhere.',
  },
] as const

/* -------------------------------------------------------------------------
   Beat 8 — Engagement models
   The tier split is explicit and visible. These are two different products.
   ------------------------------------------------------------------------- */

export const ENGAGEMENTS = [
  {
    kind: 'Local business website',
    forWho: 'Cafes, clinics, salons, shops',
    price: '₹4,999',
    priceNote: 'Paid only after you have opened the finished site.',
    body: 'Fixed-price and fast, built on our own template system. A credible, quick site that gets a local business found and makes it easy to call. Deliberately a smaller product than a studio engagement — not a discounted version of one.',
    includes: [
      'Mobile-first build on a proven template',
      'Call, WhatsApp and directions on every screen',
      'Local search structure and Google Business Profile setup',
      'You see the working site before you are invoiced',
    ],
    primary: true,
  },
  {
    kind: 'Studio engagement',
    forWho: 'Businesses that have outgrown a template',
    price: 'Quoted per project',
    priceNote: 'Scoped after a conversation about what the site has to do.',
    body: 'A custom site designed and built for one business — its own structure, its own design system, its own content. Scoped and quoted after a conversation about what the site has to do.',
    includes: [
      'Custom design, not a theme',
      'Production Next.js build, repository yours at handover',
      'Performance and accessibility measured before launch',
      'You see the working site before you are invoiced',
    ],
    primary: false,
  },
] as const
