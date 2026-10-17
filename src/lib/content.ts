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
 * Ten working websites, one per kind of local business, each built from scratch
 * for a FICTIONAL business with its own design system, and each live on its own
 * Vercel project (source: Business/showcase-sites/<slug>). Every one carries a
 * "Studio demo — fictional" bar, publishes no phone number, runs its forms in
 * demo mode, and is excluded from search indexing. These are demonstrations of
 * design range — not client work, and nothing here implies a client, a result
 * or a commission. Photographs on those sites are Unsplash stock, credited there.
 *
 * `url` is the production host Vercel actually assigned (four plain names were
 * taken by other people's projects — never shorten one to the slug).
 * Captures: .validation/capture-showcase.mjs, taken from those live URLs.
 * Notes state what is visible on each site and which typefaces it loads.
 */
export const DEMOS = [
  {
    slug: 'kettle-and-kiln',
    name: 'Kettle & Kiln',
    category: 'Café',
    kind: 'Café with a pottery kiln',
    url: 'https://kettle-and-kiln.vercel.app',
    direction:
      'A printed menu card: newsprint ground, ink brown, one tomato-red accent, prices on dot leaders. The café makes its own cups, so the cups are drawn like a ceramics catalogue.',
    notes: [
      { label: 'Typography', value: 'Fraunces with optical sizing for everything, IBM Plex Mono for prices and labels' },
      { label: 'Signature', value: 'A menu board — switching Brew, Bake and Breakfast re-sets each row like letters on a café board' },
      { label: 'Pages', value: 'Home, Menu, The Kiln, About, Visit' },
    ],
    desktop: '/work/kettle-and-kiln-desktop.webp',
    inner: '/work/kettle-and-kiln-inner.webp',
    innerLabel: 'Menu',
    mobile: '/work/kettle-and-kiln-mobile.webp',
  },
  {
    slug: 'thali-house',
    name: 'Thali House',
    category: 'Restaurant',
    kind: 'Gujarati thali',
    url: 'https://thali-house-puce.vercel.app',
    direction:
      'The whole restaurant is one plate, so the site opens on it: a top-down photograph of the thali, ivory ground, turmeric as the only loud colour, and a high-contrast serif that reads like a printed menu.',
    notes: [
      { label: 'Typography', value: 'Gloock for headings, Instrument Sans for text' },
      { label: 'Signature', value: 'The real plate — a spotlight glides from bowl to bowl as you pick each of the twelve things on it' },
      { label: 'Pages', value: 'Home, The Thali, The Room, About, Visit' },
    ],
    desktop: '/work/thali-house-desktop.webp',
    inner: '/work/thali-house-inner.webp',
    innerLabel: 'The Thali',
    mobile: '/work/thali-house-mobile.webp',
  },
  {
    slug: 'rep-house',
    name: 'Rep House',
    category: 'Gym',
    kind: 'Coached strength gym',
    url: 'https://rep-house.vercel.app',
    direction:
      'The gym whiteboard: concrete grey, black, safety orange, condensed capitals at poster scale. Sharp corners everywhere and fast, short motion.',
    notes: [
      { label: 'Typography', value: 'Archivo at 62% width for display, JetBrains Mono for times' },
      { label: 'Signature', value: 'A live timetable that opens on today and marks the class on now and the one next, in India time' },
      { label: 'Pages', value: 'Home, Timetable, Membership, The Club, Visit' },
    ],
    desktop: '/work/rep-house-desktop.webp',
    inner: '/work/rep-house-inner.webp',
    innerLabel: 'Timetable',
    mobile: '/work/rep-house-mobile.webp',
  },
  {
    slug: 'sahaj-clinic',
    name: 'Sahaj Family Clinic',
    category: 'Clinic',
    kind: 'Family clinic',
    url: 'https://sahaj-clinic.vercel.app',
    direction:
      'A prescription pad: white paper, ruled lines, a red margin, deep teal ink. Calm, quiet motion — a clinic should feel steady.',
    notes: [
      { label: 'Typography', value: 'Source Serif 4 for headings, Public Sans for text' },
      { label: 'Signature', value: 'An OPD board — which doctor sits in which session all week, with the session in progress marked' },
      { label: 'Pages', value: 'Home, What we treat, Doctors, About, OPD & visit' },
    ],
    desktop: '/work/sahaj-clinic-desktop.webp',
    inner: '/work/sahaj-clinic-inner.webp',
    innerLabel: 'Doctors',
    mobile: '/work/sahaj-clinic-mobile.webp',
  },
  {
    slug: 'thirty-two-dental',
    name: 'Thirty Two Dental',
    category: 'Dentist',
    kind: 'Dental clinic',
    url: 'https://thirty-two-dental.vercel.app',
    direction:
      'Named for the thirty-two teeth an adult starts with: bone white, navy, one coral, and an italic serif for the human lines.',
    notes: [
      { label: 'Typography', value: 'Bricolage Grotesque for display and text, Newsreader italic for emphasis' },
      { label: 'Signature', value: 'A full tooth chart — tap any tooth to see the treatments for it and a price range' },
      { label: 'Pages', value: 'Home, Treatments, First visit, About, Visit' },
    ],
    desktop: '/work/thirty-two-dental-desktop.webp',
    inner: '/work/thirty-two-dental-inner.webp',
    innerLabel: 'Treatments',
    mobile: '/work/thirty-two-dental-mobile.webp',
  },
  {
    slug: 'maison-kesh',
    name: 'Maison Kesh',
    category: 'Salon',
    kind: 'Hair salon',
    url: 'https://maison-kesh.vercel.app',
    direction:
      'A fashion lookbook: blush ground, oxblood, a Didone serif at very large sizes and wide-tracked small capitals. Slow, fabric-like motion.',
    notes: [
      { label: 'Typography', value: 'Bodoni Moda, roman and italic, for display; Manrope for text' },
      { label: 'Signature', value: 'A horizontal lookbook that swipes on a phone, each look settling to full size at the centre' },
      { label: 'Pages', value: 'Home, Lookbook, Services, Stylists, Visit' },
    ],
    desktop: '/work/maison-kesh-desktop.webp',
    inner: '/work/maison-kesh-inner.webp',
    innerLabel: 'Lookbook',
    mobile: '/work/maison-kesh-mobile.webp',
  },
  {
    slug: 'rye-and-ember',
    name: 'Rye & Ember',
    category: 'Bakery',
    kind: 'Wood-fired bakery',
    url: 'https://rye-and-ember.vercel.app',
    direction:
      'Stamped bakery labels: flour-white ground, stamp-blue ink set slightly off-square, a monospaced voice like a label printer, and ember orange for what is fresh.',
    notes: [
      { label: 'Typography', value: 'Young Serif for headings, Space Mono for everything else' },
      { label: 'Signature', value: 'An oven clock — today’s trays along the baking day, each marked fresh, on the shelf, or how long to wait' },
      { label: 'Pages', value: 'Home, Breads, The Oven, About, Pre-order' },
    ],
    desktop: '/work/rye-and-ember-desktop.webp',
    inner: '/work/rye-and-ember-inner.webp',
    innerLabel: 'The Oven',
    mobile: '/work/rye-and-ember-mobile.webp',
  },
  {
    slug: 'plinth-realty',
    name: 'Plinth Realty',
    category: 'Real estate',
    kind: 'Property broker',
    url: 'https://plinth-realty-lovat.vercel.app',
    direction:
      'An architect’s drawing: faint drafting grid, graphite, blueprint blue, and dimension lines under every listing photograph.',
    notes: [
      { label: 'Typography', value: 'Spectral for headings, Schibsted Grotesk for text and numbers' },
      { label: 'Signature', value: 'A listing finder whose cards glide to their new places when you filter, plus an EMI calculator' },
      { label: 'Pages', value: 'Home, Listings, EMI, About, Contact' },
    ],
    desktop: '/work/plinth-realty-desktop.webp',
    inner: '/work/plinth-realty-inner.webp',
    innerLabel: 'Listings',
    mobile: '/work/plinth-realty-mobile.webp',
  },
  {
    slug: 'studio-ochre',
    name: 'Studio Ochre',
    category: 'Interior design',
    kind: 'Interior studio',
    url: 'https://studio-ochre-psi.vercel.app',
    direction:
      'A material sample board: lime-plaster ground, terracotta and oak, a classical serif with italics, and generous, unhurried spacing.',
    notes: [
      { label: 'Typography', value: 'EB Garamond for display, Karla for text' },
      { label: 'Signature', value: 'A drawn room that re-dresses itself — walls, floor, sofa and rug — when you pick a material palette' },
      { label: 'Pages', value: 'Home, Projects, Process & fees, Studio, Contact' },
    ],
    desktop: '/work/studio-ochre-desktop.webp',
    inner: '/work/studio-ochre-inner.webp',
    innerLabel: 'Projects',
    mobile: '/work/studio-ochre-mobile.webp',
  },
  {
    slug: 'still-hour',
    name: 'Still Hour',
    category: 'Yoga studio',
    kind: 'Small yoga studio',
    url: 'https://still-hour-two.vercel.app',
    direction:
      'Breath and space: sage paper, clay, soft radii, a light serif and the slowest motion of the ten sites.',
    notes: [
      { label: 'Typography', value: 'Literata for headings, Figtree for text' },
      { label: 'Signature', value: 'A guided breathing circle — four in, four held, six out, five rounds' },
      { label: 'Pages', value: 'Home, Classes, Teachers, The studio, Visit' },
    ],
    desktop: '/work/still-hour-desktop.webp',
    inner: '/work/still-hour-inner.webp',
    innerLabel: 'Classes',
    mobile: '/work/still-hour-mobile.webp',
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
    // Every line is already stated elsewhere on the site (/pricing FAQ and
    // note, SERVICES). The page count is deliberately absent: unconfirmed.
    includes: [
      'Mobile-first build on a proven template',
      'Call, WhatsApp and directions on every screen',
      'Local search structure and Google Business Profile setup',
      'Revisions during review are included',
      'Ready to review in about two to four weeks',
      'You see the working site before you are invoiced',
    ],
    extras:
      'Not included: domain registration and hosting beyond a free tier. You pay those directly, and we tell you the cost before it is incurred.',
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
    extras: null,
    primary: false,
  },
] as const

/* -------------------------------------------------------------------------
   Questions. Shared by /pricing (all of them) and the homepage teaser
   (a selection) so the answers cannot drift apart.
   ------------------------------------------------------------------------- */

export const QUESTIONS = [
  {
    q: 'When exactly do I pay?',
    a: 'After the site is built and you have opened it yourself. Not on signature, not on a deposit, not at a milestone before there is anything to look at. If you decide against it, you walk away owing nothing — that is the whole point of the arrangement, not a promotional offer.',
  },
  {
    q: 'Why is one price fixed and the other quoted?',
    a: 'Because they are different products. A local business site is built on our template system, so the scope is known in advance and the price can be too. A studio engagement is designed for one business from its structure up, so it is quoted after we understand what the site has to do. Quoting a studio project from a menu would mean guessing, and the guess would be wrong in one direction or the other.',
  },
  {
    q: 'What if I want changes after I see it?',
    a: 'Expected, and built into the sequence. The review step exists precisely so you can say what is wrong while changing it is still cheap. Revisions during review are part of the engagement, not a variation order.',
  },
  {
    q: 'How long does it take?',
    a: 'A local business site is usually ready to review in about two to four weeks. A studio engagement depends entirely on scope, and we give you a real timeline when we quote rather than an optimistic one to win the work.',
  },
  {
    q: 'What do I actually own at the end?',
    a: 'The repository, the deployment, the domain and every credential, in your name. There is no proprietary editor you can only reach through us and no retainer you have to keep paying to keep the site online.',
  },
  {
    q: 'Is there a catch in building it before I pay?',
    a: 'The honest answer is that we carry the risk instead of you. If you say no, we have spent the time for nothing. We think that is a fair bet to make on our own work, and it is the fastest way to prove the work is worth what we are asking.',
  },
] as const

/** The four a skeptical visitor asks first. Subset of QUESTIONS, same words. */
export const HOME_QUESTIONS = [QUESTIONS[0], QUESTIONS[2], QUESTIONS[3], QUESTIONS[5]] as const

/* -------------------------------------------------------------------------
   After "hello" — what the visitor can expect once they write.
   ------------------------------------------------------------------------- */

export const AFTER_HELLO = {
  eyebrow: 'After you say hello',
  heading: 'What happens next.',
  steps: [
    {
      n: '01',
      title: 'You write to us',
      body: 'We reply within one business day and tell you honestly if it is a fit.',
    },
    {
      n: '02',
      title: 'We build your site',
      body: 'On a live URL you can open anytime.',
    },
    {
      n: '03',
      title: 'You open it on your phone',
      body: 'You decide. We invoice only after you have seen it.',
    },
  ],
} as const
