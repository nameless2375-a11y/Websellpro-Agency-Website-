# Websellpro Agency Website (OpenCode build) — Project Dashboard

This is a **live operational dashboard**, not a session log. Historical detail, design specs, and reference material live under `docs/` — see [Links to Documentation](#links-to-documentation) below. This file should stay short; if you're about to write more than a few lines about something that already happened, it probably belongs in `docs/history/` instead.

## Project Overview
Our agency's own marketing site. Next.js 15.5.20 App Router · React 19 · TypeScript · Tailwind v4. **No animation library, no icon library, no 3D** — all removed in V2. Full stack detail: `docs/architecture/tech-stack.md`.

**GitHub (`main` = `v2`) holds only the redesign** (approved blueprint: `../../design-system/agency-v2-blueprint.md`); V1 was removed from the tree on 2026-10-02 (it survives only in git history). The old Vercel project `websellpro-agency` was deleted; a fresh project is built from this repo. `docs/`, `.validation/` and tool state are **local-only** (gitignored) because the repo is public and those hold lead names/denylists and ids — do not un-ignore them.

## Current Project Status
**V2.3 (hero + nav rework) complete on branch `v2`, awaiting founder visual review.** After founder review of V2.2 (image felt disconnected, split hard to read, nav scrolled away), the text-left / image-right hero became one centred stack with the capture directly under the actions, and the nav became sticky. V2 identity unchanged (warm paper / deep forest green / Instrument Serif / asymmetric editorial / frameless screenshots), 8 public routes, homepage 9 sections. V2.1 added the CSS-only motion system and rebuilt `/work`; V2.2 recomposed the hero and made the motion perceptible (V2.1's reveals moved 20px over ~90px of scroll, staggered by an `animation-delay` the view() timeline ignored, and were frozen entirely inside `overflow-hidden` wrappers). All gates green. Not promoted to production — that needs explicit founder authorization.

**2026-10-02:** two copy fixes, then **V3** (founder brief): `/work` now shows six different designs, one per category (café, restaurant, gym, clinic, dentist, salon) with a range grid; local-business price is **₹4,999**; added motion polish; fixed a pre-existing mobile horizontal-overflow bug. All gates green (`v3-gate.mjs` 47/47). Review deployment = preview target, production build; URL in `docs/validation/deployment.md`. The production alias still serves V1. Detail: `docs/history/2026-10-02b-v3-showcase-pricing-motion.md`.

## Current Development Phase
**Founder visual review gate.** Implementation is done and validated; the next event is the founder's KEEP / IMPROVE / REBUILD.

## Current Resume Point
`git checkout v2`. Read `docs/history/2026-10-02b-v3-showcase-pricing-motion.md` first, then `docs/history/2026-10-02-v23-review-deploy.md`, then `docs/history/2026-09-23-v23-hero-and-nav.md`, then `docs/history/2026-09-22-v22-motion-and-hero.md`, then `docs/history/2026-09-22-v21-motion-and-work.md`, then the two 2026-09-20 V2 logs, then `docs/roadmap/open-items.md`. Item 4 (domain/DNS) stays postponed unless the founder reopens it.

## Active Development Rules

**⚠️ Real Data Policy (governs every change here):** If real data does not exist, remove the section or clearly label it demo. Never invent content, screenshots, metrics, client names, or stats. Do not fabricate any business data.

**Context Efficiency:** Keep session context lean — read CLAUDE.md first, read only task-relevant
docs, search history before opening history files, don't reload large docs after autocompact. Full
policy: Workspace OS governance → `../../workspace/docs/governance/workspace-policies.md` (§Context Efficiency).

**Twin-duplication rule is RETIRED in V2.** Homepage sections for services / process / pricing are short excerpts that link to their page — they are not copies. Do not reintroduce duplicated copy across a section and its route. (The rule still describes `main`/V1.)

**Real-business consent rule:** no screenshot, name, or detail of a real business appears on this site without that business's permission. Every capture in `public/work/` is one of our own templates rendered with a fictional sample record (`isSample: true`) and is labelled as a studio demonstration. ⚠️ The `*-d8` templates bundle REAL leads — only capture them via `.validation/capture-range.mjs`, which swaps in a fictional record and a fake phone; `v3-gate.mjs` fails if a lead's name or number reaches any route. See `docs/roadmap/open-items.md` item 2.

**Motion rules:** CSS-only, no animation library. Scroll-linked animation is transform-only — never opacity, which renders text at partial contrast and breaks contrast audits. Every animated class must degrade to its finished state and be `animation: none` under `prefers-reduced-motion` — and if its rest state is offset or masked, it needs `transform: none` there too, or turning the animation off leaves it clipped out of sight. Three V2.2 rules learned the hard way: (1) stagger scroll-linked motion with `animation-range-start`, never `animation-delay` — a view() timeline is progress-driven and ignores time offsets; (2) never wrap a `.reveal` in `overflow-hidden` — that establishes a scroll container and freezes the timeline; use `overflow-clip`; (3) the LCP element must animate transform only, never opacity, or LCP is pushed out by the whole delay. Full table: `docs/design/design-tokens.md`.

**Deploy via CLI stored login**, not a pasted token: `npx vercel --prod --yes`. Detail: `docs/reference/security-and-deploy.md`.

**Domain/DNS work is postponed** — do not touch deployment domain config until the user reopens it (see `docs/roadmap/open-items.md` item 4).

## Roadmap Summary
6 open items. Item 1 (founder visual review) is the active one. Full detail: [`docs/roadmap/open-items.md`](docs/roadmap/open-items.md).

## Validation Summary
- Build: `next build` PASS (13/13 static), `tsc --noEmit` clean, **lint PASS** (it runs now — the old "cannot run" was an environment fault, fixed). Detail: [`docs/validation/build.md`](docs/validation/build.md)
- Runtime gate: **18/18 PASS** — 16 route x viewport checks (zero console errors, zero failed requests, zero axe WCAG AA violations, all internal links 200) plus `motion:switcher` and `motion:reducedMotion`. `.validation/v2-gate.mjs`
- Motion gate: **77/77 PASS** — `.validation/v22-motion.mjs`. Measures travel in px, the scroll distance it is spread over, the scroll container each view() timeline resolved to, that nothing rests hidden, and that no scroll-driven keyframe touches opacity. The V2.1 gate asserted the classes existed, which is why it passed on motion nobody could see.
- Hero/nav gate (V2.3): **81/81 PASS** — `.validation/v23-hero-nav.mjs`, six viewports 1440→360: capture under the actions on the headline axis and above the fold, no horizontal overflow, nav pinned after deep scroll, five paths visible / mobile menu focus + Escape, focus ring, axe, CLS, LCP, console, failed requests, reduced motion.
- Lighthouse V2.3 (3 serial runs): desktop **94 median (89–97)**, mobile **75 median (74–84)**; a11y / best-practices / SEO 100, CLS ≤ 0.001. Not attributed either way — within this host's documented noise, but below V2.2's record. Previously: desktop **99–100** (was 91), mobile **79–81** (was 75); accessibility / best-practices / SEO **100** everywhere, CLS **0**. ⚠️ **Timing scores on this host are noisy — always take 3 serial runs and report the median and range.** Two passes over near-identical builds once returned desktop 99 then 90 and mobile 75 then 63, caused by host CPU load multiplied by Lighthouse's 4x mobile throttle, not by any code change. Remaining mobile cost is React hydration of the client `Navigation`, not the LCP image. [`docs/validation/lighthouse.md`](docs/validation/lighthouse.md)
- Deployment: live and publicly viewable; custom domain resolution unverified. Detail: [`docs/validation/deployment.md`](docs/validation/deployment.md)

## Open Decisions
- Live domain still unresolved — but V2 no longer claims an unverified canonical: `src/lib/site.ts` reads `NEXT_PUBLIC_SITE_URL`, falling back to the verified Vercel alias.
- Vercel token rotation — flagged repeatedly, not yet done, see `docs/reference/security-and-deploy.md`.
- `docs/adr/` currently holds only a template/purpose README, no backfilled historical ADRs — write new ADRs going forward for decisions that meet the bar described there.

## Documentation Rules
What belongs where — check this before adding new content anywhere in this repo:

| Directory | Contains | Does NOT contain |
|---|---|---|
| `CLAUDE.md` (this file) | Current state only: status, phase, resume point, active rules, links | Session narration, finished work detail, anything dated |
| `docs/history/` | Dated, immutable session logs — what happened, when, and why | Current/ongoing state; never edited after the fact |
| `docs/design/` | **Current** living design system — token values (`design-tokens.md`) and current per-surface behavior (`current-design-system.md`) | Design history/iteration — that's `docs/history/` |
| `docs/architecture/` | Standing structural patterns and tech stack that are true regardless of when you read them | One-off implementation notes — that's `docs/history/` |
| `docs/roadmap/` | Currently open/blocked/postponed items | Completed items — remove them once done, don't archive here |
| `docs/validation/` | Current build/lint/lighthouse/deployment health | Historical validation runs — summarize current state only |
| `docs/reference/` | Environment/tooling facts, security & deploy process | Project-specific decisions — those are ADRs or history |
| `docs/adr/` | One doc per significant, hard-to-reverse decision, with context/decision/consequences | Routine work notes — that's `docs/history/` |

## Links to Documentation
Full index: [`docs/README.md`](docs/README.md)
