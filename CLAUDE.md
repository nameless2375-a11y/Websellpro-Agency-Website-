# Websellpro Agency Website (OpenCode build) — Project Notes

## What this is
Our agency's own marketing site. Built with OpenCode, adopted 2026-07-17 to replace the
old Claude-built `agency-website/` (now archived as `agency-website-OLD/`).

- **Stack:** Next.js 15.5.20 App Router · React 19 · TypeScript · Tailwind v4 (`@theme` in
  `globals.css`) · framer-motion 11 · three.js / @react-three/fiber (3D hero) · lucide-react.
- **Design tokens:** dark bg `#0a0a0a`, gold accent `#c9a84c` (`--color-accent`), Inter font.
  UI primitives in `src/components/ui/primitives`.
- **Live URL:** https://websellpro-agency.vercel.app (Vercel project `websellpro-agency`).
- **Brand domain (canonical, in `src/lib/site.ts`):** https://websellpro.com

## ⚠️ Real Data Policy (governs every change here)
If real data does not exist: remove the section, or clearly label it demo. Never invent
content, screenshots, metrics, client names, or stats. "Do not fabricate any business data."

## Session 2026-07-17 — audit fixes (DONE)
Approved checkpoint from the audit. Build verified PASS (17/17 static, 0 errors).

**1. Fake content removed (Real Data Policy):**
- `src/components/sections/TestimonialsSection.tsx` — 4 fake testimonials → honest
  "Be Our First Success Story" early-stage placeholder + CTA.
- `src/components/sections/FeaturedWorkSection.tsx` — 4 fake case studies (+X% stats) →
  honest "We're launching our first client websites now" state + CTA.
- `src/app/portfolio/page.tsx` — 6 fake projects → honest empty state, ready to receive
  REAL client sites (user provides next session).

**2. India consistency:**
- `src/app/contact/page.tsx` — real contact: email `nameless2375@gmail.com`,
  Phone/WhatsApp `+91 91046 41180`, Location "Gujarat, India — serving local businesses across India".
- `src/app/layout.tsx` — `<html lang="en-IN">`, OG `locale: 'en_IN'`, added `metadataBase`.
- `src/lib/site.ts` — India description; removed placeholder social links (rendered nowhere);
  added real `contact` block. `url` kept as brand domain.
- `src/lib/utils.ts` — `formatNumber` locale `en-IN`.
- `src/app/privacy/page.tsx` — contact email → real.
- `src/app/faq/page.tsx` — "across the country" → "based in Gujarat … across India".
- Pricing already fully INR/India-localized by OpenCode (no change needed).

**3. Contact form wired (`src/app/contact/page.tsx`):**
- `handleSubmit` now POSTs JSON `{name,email,businessName,message,source,submittedAt}` to
  `process.env.NEXT_PUBLIC_N8N_WEBHOOK`. Sending state + error fallback pointing to real
  email/WhatsApp. All inputs given `name` attrs. **⚠️ Set `NEXT_PUBLIC_N8N_WEBHOOK` in Vercel
  env (and `.env.local`) or the form errors out — BLOCKED on user's webhook URL.**

**4. Launch readiness added:**
- `src/app/icon.svg` — gold "W" favicon on dark bg (Next auto-serves).
- `src/app/opengraph-image.tsx` — dynamic branded OG image (edge runtime) from `siteConfig`.
- `src/app/robots.ts` — allow all + sitemap ref.
- `src/app/sitemap.ts` — all 11 real routes only.
- `metadataBase` added so OG/sitemap URLs resolve absolutely.

## Session 2026-07-17b — stats replaced + homepage polish (DONE)
- **StatsSection REMOVED entirely** (fake `100+/98%/40%/4wk`). Deleted `StatsSection.tsx` +
  `AnimatedCounter.tsx` (its only consumer). No dead files/refs (grep clean).
- **New `src/components/sections/WhyChooseSection.tsx`** — "Why Businesses Choose Websellpro",
  4 premium value-prop cards (Build Before You Pay / Custom Built / Mobile First / No
  Long-Term Contracts). Content section, NOT a stats bar. Design-system primitives, lucide
  icons in accent tiles, Framer Motion stagger, hover lift + glow, responsive 1→2 col,
  `<ul>/<li>` + `aria-hidden` icons for a11y. Wired into `page.tsx` right after Hero.
- **Homepage polish:** section-background alternation verified consistent post-removal
  (Hero → WhyChoose plain w/ elevated cards → Proof surface/50 …). USP card fixed
  "single dollar" → "single rupee" (India).
- **Quality gates:** `tsc --noEmit` clean (only pre-existing `json5` implicit-type-lib
  quirk from node_modules, not our code, exit 0). ESLint not configured in repo (interactive
  prompt, no config) — skipped. Production build: PASS (rerun `npx next build` to confirm).
- ⚠️ `next.config.ts` sets `ignoreBuildErrors` + `ignoreDuringBuilds` — build does NOT gate
  on TS/lint; run `npx tsc --noEmit` separately.

## Session 2026-07-18 — n8n webhook build (MCP FIXED; build completed in 2026-07-18b below)
- **n8n is UP** — launched detached (`npx -y n8n start`), `GET /healthz` → `{"status":"ok"}`.
  Cold start ~45s.
- **🟢 `n8n-mcp` disconnect FIXED (2026-07-18).** Was `✘ Failed to connect / timed out after
  30000ms` because the server launched via `npx -y n8n-mcp` (registry re-resolve on every start
  hung past the 30s handshake). Fixed by installing `n8n-mcp` globally and repointing
  `.claude.json` to `node <global>/dist/mcp/stdio-wrapper.js` (~7.5s start). `claude mcp get
  n8n-mcp` → ✔ Connected. Full writeup in the main project `CLAUDE.md` ("connection timed out"
  section). **Restart Claude Code to load it this session, confirm `n8n_health_check` → ok, THEN
  build the webhook.**
- **Webhook to build (after reconnect):** Webhook (POST, path e.g. `websellpro-contact`)
  receiving `{name,email,businessName,message,source:"websellpro-agency-contact",submittedAt}`
  → Respond to Webhook (200 JSON) → destination (Sheet append / email / WhatsApp — **user to
  choose destination**). Resulting URL → `NEXT_PUBLIC_N8N_WEBHOOK`.

## Session 2026-07-18b — n8n webhook BUILT + VERIFIED + frontend wired (DONE)
- **Workflow `Websellpro Agency — Contact Form`, id `VdGAh9M9Ge8Ku95Y`, ACTIVE.**
  Flow: `Contact Form Webhook (POST /websellpro-contact, v2.1, responseMode=responseNode)`
  → `Append to Sheet (googleSheets v4.7, append)` → `Respond 200 (respondToWebhook v1.5, JSON
  {success,message})`. `validate_workflow` → valid, 0 errors. Tested end-to-end: execution 94
  `status:success` — row landed in Sheet2.
- **Destination = Google Sheet** (user chose). Same leads spreadsheet
  `1_HJDqGdAYLBikS_nSIbTaJrJwLR2NQ_JRk2xXRUO6BY`, **tab 2 (Sheet2, gid `1157010893`)**, cred
  `Google Sheets account` (id `KVTh49MGwxlo3SQ2`). Node targets the tab by **gid**, not name.
  Sheet2 headers (6): `Submitted At`, `Name `, `Email`, `Business Name`, `Message `, `Source`.
- 🔴 **GOTCHA that cost this session ~10 failed runs:** two Sheet2 headers have **trailing
  spaces** — `"Name "` and `"Message "` (invisible in the formula bar). The googleSheets node
  matches header text EXACTLY, so the mapping `id`/`displayName` MUST include the trailing space
  (`"Name "`, `"Message "`). Symptom was `Column names were updated after the node's setup /
  Missing columns: Name, Message`. Fix = map to the real header strings, OR retype the cells to
  drop the spaces (user left the spaces, node maps to them).
- Other errors seen + fixed along the way: (1) OAuth cred expired → user reconnected
  `Google Sheets account` in n8n UI; (2) `Sheet with ID Sheet2 not found` → n8n needs the **gid**
  not the display name; (3) UI-open-while-MCP-push desynced the value mappings (the documented
  MCP↔UI conflict — keep the node/editor tab CLOSED while pushing via MCP). n8n also crashed once
  mid-session (port 5678 down) → relaunched detached, ~cold start.
- **Frontend wired:** created `.env.local` with
  `NEXT_PUBLIC_N8N_WEBHOOK=http://localhost:5678/webhook/websellpro-contact`; hardened
  `.gitignore` (was only `.vercel` → now ignores `.env.local`, `.next`, `node_modules`, tsbuildinfo).
  `src/app/contact/page.tsx` needed NO change — already reads the env var + POSTs the exact
  payload. Form field `company` → sheet `Business Name`. Test locally: `npm run dev` →
  http://localhost:3000/contact (restart dev server after adding `.env.local`).
  NOTE: this folder is NOT under git (no repo above it) — no commit-leak risk today; `.gitignore`
  is for when it's initialized/deployed.
- ⚠️ **PROD caveat:** webhook URL is `localhost` → works for local dev ONLY; deployed Vercel site
  can't reach `localhost:5678`. Production needs n8n publicly exposed (tunnel/hosted) — ties into
  the postponed domain/deploy work.
- 🔴 **Cleanup:** delete the test row(s) in Sheet2 (`TEST — please delete`, sources
  `webhook-verification-test-*`). MCP can't selectively delete sheet rows — clear manually.

## Session 2026-07-18c — homepage redesigns + real images + pricing overhaul (DEPLOYED)
All changes built (`next build` PASS, 17/17 pages) and deployed to production
(**live: https://www.websellpro.in**, aliased). Direct build ~8–9 min each (three.js is the cost
driver, not file writes — batch edits + one build/deploy at session end to save $).

- **Real images added to 2 placeholder squares** (user: "images have to look real, dont add AI slop"):
  - `src/components/animations/ImageReveal.tsx` — component previously **accepted `src` but never
    rendered it** (gradient-only). FIXED: now renders `next/image` (fill, object-cover) when `src`
    is set, keeps gradient+label fallback otherwise. Added `alt` prop.
  - Source = REAL screenshots of an actual built client site (Aurora Coffee Roasters, cafe-premium
    template) from `website-engine/.validation/premium-shots/`. Real-Data-Policy compliant (genuine
    work, not stock/AI). Copied → cropped to hero → WebP into `public/showcase/`:
    `site-desktop.webp` (33 KB, square/hero crop) + `site-mobile.webp` (23 KB, portrait crop).
    Optimized with **ffmpeg** (`crop=...,scale=...:flags=lanczos -q:v 6`) — PNGs were 5 MB/8 MB →
    99%+ smaller. Heavy PNGs deleted so they don't ship.
  - `ProofSection.tsx` ("Why Businesses Choose Us") square → `site-desktop.webp`.
    `USPSection.tsx` ("We Build Before You Buy") portrait → `site-mobile.webp`.
- **Process section redesigned** (brand-positioned, Step 4 = focal point) — BOTH surfaces:
  - `src/components/sections/ProcessSection.tsx` (homepage) + `src/app/process/page.tsx` (route).
  - Heading → "How We Work / A Transparent Process Built Around **Trust**". 6 steps rewritten with
    brand copy + deliverable lists (Discover / Strategy & Design / Build / **04 Approve Before You
    Pay** / Launch / Grow). **Step 04** promoted to full-width gold-accent focal card: ⭐ "Websellpro
    Signature Step" badge, glow shadow, giant watermark "04", highlighted final deliverable
    "Pay only after approval". Route page's per-step `ImageReveal` placeholders (ugly
    `step-01-discover` labels) replaced with clean gradient+icon panels; dropped `ImageReveal` import.
- **Pricing redesigned from the ground up** (user: local-India focus, sell outcomes, no fixed
  prices, Build-Before-You-Buy centerpiece) — BOTH surfaces:
  - `src/components/sections/PricingSection.tsx` (homepage) + `src/app/pricing/page.tsx` (route).
  - **Dropped 4th "Enterprise" tier + all enterprise language** (SLA, dedicated dev team, scalable
    infra, etc). Now **3 outcome cards**: Essential / **Growth** (Most Popular) / Complete — each
    states *who it's for*, the *business outcome*, then price. 4 plain-language bullets each (was 7–12).
  - **NO fixed price points** (user rule): "Starting from ₹9,999", "Starting from ₹19,999",
    "Custom quote" — replaced ₹24,999/49,999/99,999. CTA → "Get My Free Quote".
  - **"We Build Before You Buy" gold card shown BEFORE any price** on both surfaces. Route-page
    add-ons rewritten as plain services (Domain & Hosting / Ongoing Care / Get Found / Words &
    Photos) folded into the custom quote — no SaaS-style fixed add-on prices.
- Icons used (all lucide-react): Store, TrendingUp, Building2, ShieldCheck, Compass, Code2, Star, Check.
- **⚠️ Pattern learned:** several homepage sections have a **twin standalone route page** with a
  DUPLICATED copy of the content (`/process`, `/pricing`) that does NOT import the homepage section
  component. Redesigning a homepage section = must also update its route twin or they contradict.
  Check `src/app/<name>/page.tsx` whenever editing `src/components/sections/<Name>Section.tsx`.

## 🔴 REMAINING / BLOCKED (resume here next session)
1. **n8n webhook workflow** — ✅ **DONE 2026-07-18** (id `VdGAh9M9Ge8Ku95Y`, active, tested;
   frontend `.env.local` wired). Only leftovers: (a) delete Sheet2 test rows, (b) expose n8n
   publicly + set `NEXT_PUBLIC_N8N_WEBHOOK` in Vercel env for production (blocked on the
   postponed domain/deploy work).
2. **Real portfolio projects** — user will provide REAL client websites. Fill portfolio +
   FeaturedWork with real URLs/screenshots then. No placeholders.
3. **Domain / DNS / GoDaddy / Vercel deploy** — INTENTIONALLY POSTPONED by user to a later
   session. Do NOT touch deployment, DNS, or domain config until user reopens it.
4. **Domain** — `websellpro.com` canonical in config but not verified owned/connected.

## Security
- 🔴 **Vercel token `vcp_3Qy5Lt…` pasted in chat MULTIPLE times (2026-07-18) — user MUST rotate**
  at vercel.com/account/tokens. Deploys done, so safe to revoke now. Never store tokens in repo;
  deploy via `--token=` flag at deploy time only.
- ⚠️ **`src/lib/site.ts` `url` = `websellpro.com` but live domain is `www.websellpro.in`** — SEO
  canonical/OG/sitemap point at the wrong host. One-line fix, not yet applied (flagged to user).
