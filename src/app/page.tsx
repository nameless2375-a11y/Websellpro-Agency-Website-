import Image from 'next/image'
import Hero from '@/components/home/Hero'
import EngagementCard from '@/components/pricing/EngagementCard'
import CTABlock from '@/components/primitives/CTABlock'
import CountUp from '@/components/primitives/CountUp'
import Reveal from '@/components/primitives/Reveal'
import { Button, Card, Eyebrow, Heading, Rule, Section, Text, TextLink } from '@/components/primitives'
import {
  AFTER_HELLO,
  CAPABILITIES,
  ENGAGEMENTS,
  EXCLUSIONS,
  HOME_QUESTIONS,
  MECHANISM,
  PROCESS,
  PRODUCTION_RECORD,
  SERVICES,
} from '@/lib/content'
import { siteConfig } from '@/lib/site'

/** Organization structured data. Only facts that exist in siteConfig. */
const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  sameAs: [siteConfig.links.instagram],
}

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
      <script
        type="application/ld+json"
        // `<` escaped so no string value can close the script tag.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationLd).replace(/</g, '\\u003c'),
        }}
      />
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
              src: '/work/thali-house-desktop.webp',
              alt: 'The Thali House restaurant website: a large high-contrast serif headline beside a top-down photograph of a steel thali, with a spotlight on one bowl',
              name: 'Restaurant',
              note: 'Thali House — Gujarati thali',
              span: 'md:col-span-7',
              ratio: 'aspect-[16/10]',
            },
            {
              src: '/work/rep-house-desktop.webp',
              alt: 'The Rep House gym website: concrete grey, a poster-scale condensed headline and a black panel listing today’s classes',
              name: 'Gym',
              note: 'Rep House — strength gym',
              span: 'md:col-span-5',
              ratio: 'aspect-[16/10]',
            },
            {
              src: '/work/sahaj-clinic-mobile.webp',
              alt: 'The Sahaj Family Clinic website at phone size: ruled-paper background, a teal serif headline and a book-a-visit button',
              name: 'Clinic',
              note: 'Sahaj — shown at phone size',
              span: 'md:col-span-4',
              ratio: 'aspect-[390/560]',
            },
            {
              src: '/work/thirty-two-dental-desktop.webp',
              alt: 'The Thirty Two Dental website: bone white and navy, a large grotesque headline ending in a coral-underlined italic line',
              name: 'Dentist',
              note: 'Thirty Two — dental clinic',
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
          Four of ten designs, one per kind of business — each a complete, live website we built
          for a fictional business. Demonstrations of range, not client projects; no real
          business appears on this site without permission.
        </p>

        <Rule className="mt-16" />
        <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <p className="font-display text-display-m text-ink">
            <CountUp to={PRODUCTION_RECORD.sites} /> sites
          </p>
          <p className="max-w-2xl text-body text-ink-muted">
            built across <CountUp to={PRODUCTION_RECORD.categories} /> business categories from{' '}
            <CountUp to={PRODUCTION_RECORD.templates} /> templates. {PRODUCTION_RECORD.note}
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

      {/* 8b — Objections. The four a skeptic asks first; /pricing has the rest.
          Answers come from QUESTIONS, shared with /pricing, so they cannot drift. */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Before you ask</Eyebrow>
            <Heading level={2} className="mt-5">
              The questions that come up first.
            </Heading>
          </div>
          <TextLink href="/pricing">All the questions</TextLink>
        </div>

        <div className="mt-14 border-b border-rule">
          {HOME_QUESTIONS.map((item) => (
            <details key={item.q} className="group/faq border-t border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-display-m text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="font-sans text-body-l text-accent transition-transform duration-[160ms] group-open/faq:rotate-45 motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <p className="measure pb-8 text-body text-ink-body">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* 8c — What happens after contact. Same numbered grammar as 6. */}
      <Section tone="sunken">
        <Eyebrow>{AFTER_HELLO.eyebrow}</Eyebrow>
        <Heading level={2} className="mt-5">
          {AFTER_HELLO.heading}
        </Heading>

        <ol className="mt-14 grid gap-px overflow-clip rounded-md border border-rule bg-rule md:grid-cols-3">
          {AFTER_HELLO.steps.map((step, i) => (
            <Reveal as="li" key={step.n} index={i} className="bg-paper p-8">
              <span className="text-label font-medium uppercase text-accent">{step.n}</span>
              <h3 className="mt-4 font-display text-display-m text-ink">{step.title}</h3>
              <p className="mt-3 text-small text-ink-body">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* 9 — Close. */}
      <CTABlock />
    </>
  )
}
