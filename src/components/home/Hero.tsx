import { Button, TextLink } from '@/components/primitives'

/**
 * Beat 1 — Attention.
 *
 * V2.3 composition, after founder review of V2.2: the text-left / image-right
 * split read as two unrelated blocks, and the right-bleeding capture felt
 * pushed off the page. The hero is now one stack on one axis:
 *
 *   eyebrow → headline → supporting copy → actions
 *   ↓
 *   the work itself, full container width
 *   ↓
 *   one-line caption saying what it is
 *
 * The capture sits directly under the actions it proves, inside the same
 * container, so the reading order is top-to-bottom with no diagonal to
 * decode. The claim ("then we show you") is answered by the next thing the
 * eye lands on.
 *
 * Art direction on the capture is a <picture>, not next/image: below 768px
 * the desktop screenshot cropped to a phone-width column showed an
 * illegible fragment of one word. The real 390px render is the honest
 * artifact there, and at 20KB against 51KB it also lightens the mobile LCP.
 * The element carries fetchPriority, so the preload scanner still finds it.
 *
 * The entrance runs on the document timeline in reading order — nav,
 * eyebrow, headline, copy, actions, capture, caption — and settles inside
 * one second. No parallax, no mouse tilt, no loop.
 */
export default function Hero() {
  return (
    <section className="section-v2 overflow-hidden bg-paper pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="container-v2">
        <div className="mx-auto max-w-5xl md:text-center">
          <p className="enter text-label font-medium uppercase text-ink-muted">Web studio</p>

          <h1 className="mt-5 font-display text-display-xl font-normal text-balance-v2 text-ink">
            <span className="line-mask line-mask-1">
              <span>We build the website first.</span>
            </span>
            <span className="line-mask line-mask-2">
              <span>Then we show you.</span>
            </span>
          </h1>

          <p className="enter enter-3 measure-tight mt-7 text-body-l text-ink-body md:mx-auto">
            A web studio for businesses that have outgrown a template. Production React,
            measured performance, and a working site you can open on your own phone before
            anyone asks you for money.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 md:justify-center">
            <span className="enter enter-4 inline-flex">
              <Button href="/contact">Start a project</Button>
            </span>
            <span className="enter enter-5 inline-flex">
              <TextLink href="/work">See our work</TextLink>
            </span>
          </div>
        </div>

        <figure className="group mt-14 md:mt-20">
          <div className="enter-media media-frame relative aspect-[390/470] overflow-hidden rounded-md bg-paper-sunken sm:aspect-[16/10]">
            <picture>
              <source media="(min-width: 768px)" srcSet="/work/noir-desktop.webp" />
              <img
                src="/work/noir-mobile.webp"
                alt="A café website built on our Noir design system: full-bleed evening photograph, serif display name, rating and opening hours"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </picture>
          </div>
          <figcaption className="media-caption enter enter-6 mt-4 text-small text-ink-muted">
            Noir, one of our design systems — rendered with a fictional sample business.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
