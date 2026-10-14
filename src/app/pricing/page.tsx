import type { Metadata } from 'next'
import CTABlock from '@/components/primitives/CTABlock'
import PageHeader from '@/components/primitives/PageHeader'
import Reveal from '@/components/primitives/Reveal'
import EngagementCard from '@/components/pricing/EngagementCard'
import { Eyebrow, Heading, Section, Text } from '@/components/primitives'
import { ENGAGEMENTS, QUESTIONS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Two engagement models: studio projects quoted per brief, and a fixed-price local business site at ₹4,999. You see the finished site before you are invoiced.',
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        heading="One price for a local site. One payment rule."
        lead="A studio project and a local business site are genuinely different products, priced differently and scoped differently. What does not change is when money moves: after you have seen the working site."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-12">
          {ENGAGEMENTS.map((tier, i) => (
            <Reveal
              key={tier.kind}
              index={i}
              className={tier.primary ? 'lg:col-span-7' : 'lg:col-span-5'}
            >
              <EngagementCard tier={tier} full />
            </Reveal>
          ))}
        </div>

        <Text muted className="mt-10">
          Prices are in Indian rupees and exclude any third-party costs you would pay directly
          — domain registration, hosting beyond a free tier, paid fonts or stock licences. We
          tell you about those before they are incurred, never after.
        </Text>
      </Section>

      <Section tone="sunken">
        <Eyebrow>Before you ask</Eyebrow>
        <Heading level={2} className="mt-5">
          The questions that actually come up.
        </Heading>

        <dl className="mt-14">
          {QUESTIONS.map((item, i) => (
            <Reveal
              key={item.q}
              index={i}
              className="grid gap-4 border-t border-rule py-8 md:grid-cols-12 md:gap-8"
            >
              <dt className="font-display text-display-m text-ink md:col-span-5">{item.q}</dt>
              <dd className="text-body text-ink-body md:col-span-7">{item.a}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <CTABlock
        eyebrow="Get a number"
        heading="Tell us the scope and we’ll quote it."
        body="A few sentences about the business and what the site has to do is enough for a realistic figure. No call required to get one."
      />
    </>
  )
}
