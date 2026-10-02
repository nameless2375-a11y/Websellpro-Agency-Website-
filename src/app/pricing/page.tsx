import type { Metadata } from 'next'
import CTABlock from '@/components/primitives/CTABlock'
import PageHeader from '@/components/primitives/PageHeader'
import Reveal from '@/components/primitives/Reveal'
import EngagementCard from '@/components/pricing/EngagementCard'
import { Eyebrow, Heading, Section, Text } from '@/components/primitives'
import { ENGAGEMENTS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Two engagement models: studio projects quoted per brief, and a fixed-price local business site at ₹4,999. You see the finished site before you are invoiced.',
}

/**
 * The questions that used to live on a standalone /faq. They are answered
 * here, next to the claim each one is actually about — a separate FAQ page
 * is where a studio files the objections it has not designed away.
 */
const QUESTIONS = [
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
]

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
