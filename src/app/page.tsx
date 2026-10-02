import Image from 'next/image'
import Hero from '@/components/home/Hero'
import EngagementCard from '@/components/pricing/EngagementCard'
import CTABlock from '@/components/primitives/CTABlock'
import Reveal from '@/components/primitives/Reveal'
import { Button, Card, Eyebrow, Heading, Rule, Section, Text, TextLink } from '@/components/primitives'
import {
  CAPABILITIES,
  ENGAGEMENTS,
  EXCLUSIONS,
  MECHANISM,
  PROCESS,
  PRODUCTION_RECORD,
  SERVICES,
} from '@/lib/content'

/**
 * Nine beats, one job each. Blueprint §E.
 * 1 Hero · 2 The work, cropped · 3 What we actually build · 4 Build before
 * you buy · 5 Services · 6 How an engagement runs · 7 What we don't do ·
 * 8 Engagement models · 9 Close.
 *
 * Beats 5, 6 and 8 are excerpts that link to their pages. They are not
 * copies of that content — V1's duplicated homepage/route sections drifted
 * apart and that failure is not being repeated.
 */
export default function Home() {
  return (
    <>
      <Hero />

      {/* 2 — Curiosity. A fragment, cropped. Not the full story. */}
      <Section tone="sunken">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>The work</Eyebrow>
            <Heading level={2} className="mt-5">
              A different site for each kind of business.
            </Heading>
          </div>
          <TextLink href="/work">See all the work</TextLink>
        </div>

        {/* Each capture carries its own scroll range, staggered by position —
            one shared range on the container moved all four as a single slab,
            which is a layout shift rather than a sequence. */}
        <div className="mt-14 grid gap-8 md:grid-cols-12 md:gap-10">
          {[
            {
              src: '/work/ember-desktop.webp',
              alt: 'A restaurant website on our Ember design: full-bleed dining-room photograph under a warm wash, large serif name',
              name: 'Restaurant',
              note: 'Ember — evening dining room',
              span: 'md:col-span-7',
              ratio: 'aspect-[16/10]',
            },
            {
              src: '/work/iron-desktop.webp',
              alt: 'A gym website on our Iron design: acid-yellow block, black rules, poster-scale condensed headline',
              name: 'Gym',
              note: 'Iron — fitness studio',
              span: 'md:col-span-5',
              ratio: 'aspect-[16/10]',
            },
            {
              src: '/work/meridian-mobile.webp',
              alt: 'A clinic website on our Meridian design rendered at 390px: white ground, blue accent, rounded cards',
              name: 'Clinic',
              note: 'Meridian — real 390px render',
              span: 'md:col-span-4',
              ratio: 'aspect-[390/560]',
            },
            {
              src: '/work/sage-desktop.webp',
              alt: 'A dental practice website on our Sage design: sage and bone white, tall editorial serif, one rounded panel',
              name: 'Dentist',
              note: 'Sage — dental practice',
              span: 'md:col-span-8',
              ratio: 'aspect-[16/10]',
            },
          ].map((shot, i) => (
            <figure
              key={shot.src}
              className={`reveal-media group ${shot.span}`}
              style={{ '--i': i } as React.CSSProperties}
            >
              <div
                className={`media-frame relative overflow-hidden rounded-md bg-paper ${shot.ratio}`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="media-caption mt-4 flex flex-wrap gap-x-3 text-small">
                <span className="font-medium text-ink">{shot.name}</span>
                <span className="text-ink-muted">{shot.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="measure mt-10 text-small text-ink-muted">
          Four of six designs, one per kind of business — each a template of ours rendered with a
          fictional sample business. Demonstrations of range, not client projects; no real
          business appears on this site without permission.
        </p>

        <Rule className="mt-16" />
        <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <p className="font-display text-display-m text-ink">
            {PRODUCTION_RECORD.sites} sites
          </p>
          <p className="max-w-2xl text-body text-ink-muted">
            built across {PRODUCTION_RECORD.categories} business categories from{' '}
            {PRODUCTION_RECORD.templates} templates. {PRODUCTION_RECORD.note}
          </p>
        </div>
      </Section>

      {/* 3 — Credibility. Capability, stated concretely. */}
      <Section>
        <Eyebrow>What we actually build</Eyebrow>
        <Heading level={2} className="mt-5">
          A real site, on a foundation you own.
        </Heading>
        <Text size="lead" className="mt-6">
          Four things are true of everything that leaves here. None of them are optional
          extras, and none of them are upsells.
        </Text>

        <div className="mt-14 grid gap-px overflow-clip rounded-md border border-rule bg-rule md:grid-cols-2">
          {CAPABILITIES.map((item, i) => (
            <Reveal key={item.title} index={i} className="bg-paper p-8 md:p-10">
              <h3 className="font-display text-display-m text-ink">{item.title}</h3>
              <p className="measure mt-4 text-body text-ink-body">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4 — Proof. The peak beat. */}
      <Section tone="sunken">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>{MECHANISM.eyebrow}</Eyebrow>
            <Heading level={2} className="mt-5">
              {MECHANISM.heading}
            </Heading>
            <Text size="lead" className="mt-6">
              {MECHANISM.lead}
            </Text>
          </div>

          {/* The rule down the left draws itself as this list scrolls past —
              progression you can see, rather than three static rows. */}
          <div className="relative lg:col-span-6 lg:col-start-7">
            <span
              aria-hidden="true"
              className="track absolute left-0 top-0 hidden h-full w-px bg-accent md:block"
            />
            <ol className="md:pl-10">
              {MECHANISM.steps.map((step, i) => (
                <Reveal
                  as="li"
                  key={step.n}
                  index={i}
                  className="border-t border-rule-strong py-8 first:border-t-0 first:pt-0"
                >
                  <div className="flex gap-6">
                    <span className="font-display text-display-m leading-none text-accent">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="font-display text-display-m text-ink">{step.title}</h3>
                      <p className="measure mt-3 text-body text-ink-body">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* 5 — Services. Excerpt; the page carries the detail. */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Services</Eyebrow>
            <Heading level={2} className="mt-5">
              Three kinds of work.
            </Heading>
          </div>
          <TextLink href="/services">What each one involves</TextLink>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} index={i}>
              <Card className="h-full">
                <h3 className="font-display text-display-m text-ink">{service.title}</h3>
                <p className="mt-4 text-body text-ink-body">{service.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6 — Process. Excerpt; the page carries the detail. */}
      <Section tone="sunken">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>How an engagement runs</Eyebrow>
            <Heading level={2} className="mt-5">
              Four steps, no theatre.
            </Heading>
          </div>
          <TextLink href="/approach">The full approach</TextLink>
        </div>

        <ol className="mt-14 grid gap-px overflow-clip rounded-md border border-rule bg-rule md:grid-cols-4">
          {PROCESS.map((step, i) => (
            <Reveal as="li" key={step.n} index={i} className="bg-paper p-8">
              <span className="text-label font-medium uppercase text-accent">{step.n}</span>
              <h3 className="mt-4 font-display text-display-m text-ink">{step.title}</h3>
              <p className="mt-3 text-small text-ink-body">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* 7 — Differentiation. Honest exclusions. */}
      <Section>
        <Eyebrow>What we don&rsquo;t do</Eyebrow>
        <Heading level={2} className="mt-5">
          The things we won&rsquo;t claim.
        </Heading>
        <Text size="lead" className="mt-6">
          An agency site is mostly assertions. Here is what is missing from ours, and why.
        </Text>

        <dl className="mt-14">
          {EXCLUSIONS.map((item, i) => (
            <Reveal
              key={item.title}
              index={i}
              className="grid gap-4 border-t border-rule py-8 md:grid-cols-12 md:gap-8"
            >
              <dt className="font-display text-display-m text-ink md:col-span-5">
                {item.title}
              </dt>
              <dd className="text-body text-ink-body md:col-span-7">{item.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* 8 — Qualification. The tier split, visible. */}
      <Section tone="sunken">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Engagement models</Eyebrow>
            <Heading level={2} className="mt-5">
              Two different products.
            </Heading>
          </div>
          <TextLink href="/pricing">What&rsquo;s included in each</TextLink>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-12">
          {ENGAGEMENTS.map((tier, i) => (
            <Reveal
              key={tier.kind}
              index={i}
              className={tier.primary ? 'md:col-span-7' : 'md:col-span-5'}
            >
              <EngagementCard tier={tier} level={3} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/pricing" variant="quiet">
            Compare both
          </Button>
        </div>
      </Section>

      {/* 9 — Close. */}
      <CTABlock />
    </>
  )
}
