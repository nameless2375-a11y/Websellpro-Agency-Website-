import type { Metadata } from 'next'
import CTABlock from '@/components/primitives/CTABlock'
import PageHeader from '@/components/primitives/PageHeader'
import Reveal from '@/components/primitives/Reveal'
import { Eyebrow, Heading, Section, Text, TextLink } from '@/components/primitives'
import { CAPABILITIES, SERVICES } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Website design and build, rebuilds and rescues, and fixed-price local business sites. Production Next.js, measured performance, repository yours at handover.',
}

/** Industries: a quiet line, not nine icon cards. */
const INDUSTRIES = [
  'Cafes',
  'Restaurants',
  'Dental practices',
  'Clinics',
  'Gyms',
  'Salons and spas',
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        heading="Three kinds of work, and what each one actually involves."
        lead="We do a narrow set of things properly rather than a broad set adequately. If what you need is not here, we will say so rather than learn it on your budget."
      />

      <Section>
        <div className="space-y-px overflow-hidden rounded-md border border-rule bg-rule">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} index={i} className="bg-paper p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-5">
                  <Heading level={2} size="m">
                    {service.title}
                  </Heading>
                  <p className="measure mt-5 text-body text-ink-body">{service.body}</p>
                </div>
                <ul className="md:col-span-6 md:col-start-7">
                  {service.detail.map((item) => (
                    <li
                      key={item}
                      className="border-t border-rule py-4 text-body text-ink-body first:border-t-0 first:pt-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sunken">
        <Eyebrow>True of all of it</Eyebrow>
        <Heading level={2} className="mt-5">
          The standards don&rsquo;t change with the price.
        </Heading>
        <Text size="lead" className="mt-6">
          A fixed-price local site and a studio engagement differ in scope and in how much is
          custom. They do not differ in whether the thing is fast, accessible, or yours.
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

      <Section>
        <Eyebrow>Where we have built before</Eyebrow>
        <Heading level={2} size="m" className="mt-5">
          Mostly local, service-led businesses.
        </Heading>
        <Text className="mt-6">
          {INDUSTRIES.join(' · ')}. Not a restriction — it is simply where the work has been
          so far, and what our template system already covers well.
        </Text>
        <p className="mt-8">
          <TextLink href="/pricing">See how the two engagement models differ</TextLink>
        </p>
      </Section>

      <CTABlock />
    </>
  )
}
