import type { Metadata } from 'next'
import Image from 'next/image'
import CTABlock from '@/components/primitives/CTABlock'
import PageHeader from '@/components/primitives/PageHeader'
import Reveal from '@/components/primitives/Reveal'
import DemoViewer from '@/components/work/DemoViewer'
import { Eyebrow, Heading, Section, Text } from '@/components/primitives'
import { DEMOS, EVIDENCE, PRODUCTION_RECORD } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Six business categories, six different website designs — café, restaurant, gym, clinic, dentist and salon. Studio demonstrations rendered with fictional sample data, honestly labelled.',
}

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        heading="A different site for each kind of business."
        lead="We are a new studio, so instead of a wall of borrowed logos this page shows the thing itself: our own templates, built and running — one design for each kind of local business, each answering a different brief."
      />

      {/* The honest label, once, before anything is shown. */}
      <section className="bg-paper pb-4">
        <div className="container-v2">
          <p className="measure rounded-md border border-rule bg-paper-sunken px-5 py-4 text-small text-ink-muted">
            Every capture below is one of our templates rendered with the fictional sample record
            that ships with it — a made-up business for each category, so the design is the thing
            you are looking at. These are demonstrations of range, not client projects. No real
            business, name, phone number or address appears anywhere on this site.
          </p>
        </div>
      </section>

      {/* The range at a glance: one card per category, each linking to its
          detail row. The breadth is the point, so it comes before the depth. */}
      <Section>
        <Eyebrow>The range</Eyebrow>
        <Heading level={2} size="m" className="mt-5">
          Six kinds of business, six different designs.
        </Heading>
        <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {DEMOS.map((demo, i) => (
            <Reveal as="li" key={demo.slug} index={i % 3}>
              <a href={`#${demo.slug}`} className="range-card group block">
                <div className="media-frame relative aspect-[16/10] rounded-md bg-paper-sunken">
                  <Image
                    src={demo.desktop}
                    alt=""
                    fill
                    priority={i < 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <span className="mt-5 flex items-baseline justify-between gap-4">
                  <span className="range-title font-display text-display-m text-ink">
                    {demo.category}
                  </span>
                  <span className="text-small text-ink-muted">
                    {demo.name}{' '}
                    <span aria-hidden="true" className="range-arrow inline-block">
                      ↓
                    </span>
                  </span>
                </span>
                <span className="mt-2 block text-small text-ink-muted">{demo.kind}</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Section>

      {DEMOS.map((demo, i) => (
        <Section key={demo.slug} id={demo.slug} tone={i % 2 === 0 ? 'sunken' : 'paper'}>
          <div className="group grid gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Alternate which side the copy sits on — the page should not
                settle into a single rhythm across consecutive demos.
                The motion follows the layout: a column on the right enters
                from the right, so the movement reinforces the alternation
                instead of pulling every row the same way. */}
            <div
              className={
                i % 2 === 0
                  ? 'reveal-side lg:col-span-4'
                  : 'reveal-side-right lg:col-span-4 lg:order-2 lg:col-start-9'
              }
            >
              <Eyebrow tone={i % 2 === 0 ? 'sunken' : 'paper'}>
                {String(i + 1).padStart(2, '0')} · {demo.category} · {demo.kind}
              </Eyebrow>
              <Heading level={2} size="l" className="mt-5">
                {demo.name}
              </Heading>
              <p className="measure media-caption mt-6 text-body text-ink-body">
                {demo.direction}
              </p>

              <dl className="mt-8">
                {demo.notes.map((note) => (
                  <div key={note.label} className="border-t border-rule py-4">
                    <dt className="text-label font-medium uppercase text-ink-muted">
                      {note.label}
                    </dt>
                    <dd className="mt-2 text-small text-ink-body">{note.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div
              className={
                i % 2 === 0
                  ? 'reveal-media lg:col-span-7 lg:col-start-6'
                  : 'reveal-media lg:order-1 lg:col-span-7'
              }
            >
              <DemoViewer
                slug={demo.slug}
                label={`${demo.category} — ${demo.name}`}
                views={[
                  { src: demo.desktop, label: 'Desktop', ratio: 'wide' },
                  { src: demo.inner, label: demo.innerLabel, ratio: 'wide' },
                  { src: demo.mobile, label: 'Mobile', ratio: 'tall' },
                ]}
              />
              <p className="mt-4 text-small text-ink-muted">
                Same site, three views — switch between them. The mobile view is the real 390px
                render, not a scaled-down desktop.
              </p>
            </div>
          </div>
        </Section>
      ))}

      {/* Capability proof — measured figures only. */}
      <Section tone="peak">
        <Eyebrow tone="peak">What has actually been built</Eyebrow>
        <Heading level={2} tone="peak" className="mt-5">
          The record, in numbers we can show you.
        </Heading>
        <Text tone="peak" muted size="lead" className="mt-6">
          Each of these has a stored record behind it — a directory of projects that build, or a
          validation run on this site. None of them are about clients, revenue or results,
          because we do not have those figures.
        </Text>

        <dl className="mt-16 grid gap-px overflow-clip rounded-md border border-peak-rule bg-peak-rule sm:grid-cols-2 lg:grid-cols-4">
          {EVIDENCE.map((item, i) => (
            <Reveal key={item.label} index={i} className="bg-peak p-8">
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <p className="font-display text-display-l leading-none text-peak-ink">
                  {item.figure}
                </p>
                <p className="mt-4 text-small font-medium text-peak-ink">{item.label}</p>
                <p className="mt-2 text-small text-peak-muted">{item.detail}</p>
              </dd>
            </Reveal>
          ))}
        </dl>

        <p className="measure mt-10 text-small text-peak-muted">
          {PRODUCTION_RECORD.note} We build them unprompted, for real local businesses we find
          without a website, to prove the delivery system works end to end — and we do not
          publish those businesses&rsquo; names or screenshots without their permission.
        </p>
      </Section>

      <Section>
        <Eyebrow>Not on this page</Eyebrow>
        <Heading level={2} size="m" className="mt-5">
          No logo strip. No case-study metrics. No testimonials.
        </Heading>
        <Text className="mt-6">
          Not as a design choice — because we have not earned them yet. Inventing them would be
          the single fastest way to tell you exactly how much the rest of this site can be
          trusted.
        </Text>
      </Section>

      <CTABlock
        eyebrow="Be the first named"
        heading="Your site could be the one with a name on it."
        body="Early clients get founder-level attention and the same build-before-you-buy terms as everyone else. Tell us what you need and we will show you the working site before any invoice."
      />
    </>
  )
}
