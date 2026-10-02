import type { Metadata } from 'next'
import CTABlock from '@/components/primitives/CTABlock'
import PageHeader from '@/components/primitives/PageHeader'
import Reveal from '@/components/primitives/Reveal'
import { Eyebrow, Heading, Section, Text } from '@/components/primitives'
import { EXCLUSIONS, MECHANISM, PROCESS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Approach',
  description:
    'How we work: we build the site first, you open it on your own phone, and you decide. Four steps, no discovery theatre, no deposit against a deck.',
}

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        eyebrow="Approach"
        heading="We would rather prove it than promise it."
        lead="Nearly every studio asks for money against a deck and a timeline. That is a reasonable way to run a business and a terrible way to be a customer. So we inverted it."
      />

      {/* The mechanism — the peak beat of this page. */}
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

      <Section>
        <Eyebrow>How an engagement runs</Eyebrow>
        <Heading level={2} className="mt-5">
          Four steps.
        </Heading>
        <Text size="lead" className="mt-6">
          Short, specific, and the same every time. You always know which step you are in and
          what the next one requires from you.
        </Text>

        <ol className="mt-14">
          {PROCESS.map((step, i) => (
            <Reveal as="li" key={step.n} index={i} className="border-t border-rule py-10">
              <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-1">
                  <span className="text-label font-medium uppercase text-accent">{step.n}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-display-m text-ink">{step.title}</h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-body text-ink-body">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Who we are — honest, no invented team or history. */}
      <Section tone="sunken">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Who you are dealing with</Eyebrow>
            <Heading level={2} className="mt-5">
              A small studio, based in Gujarat.
            </Heading>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Text size="lead">
              We are new. We have built a working delivery system and dozens of complete sites
              with it, and we are early in the business of being paid for them.
            </Text>
            <Text className="mt-6">
              That is worth saying plainly, because it is the thing you would find out anyway
              and it changes what you should expect. You will not be passed to an account
              manager, because there isn&rsquo;t one. The person who designs your site is the
              person who builds it and the person who answers your message.
            </Text>
            <Text className="mt-6">
              The trade is straightforward: you take a chance on a studio without a long
              client list, and in exchange you carry none of the usual risk — the site exists
              and works before you are asked for anything.
            </Text>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Where the limits are</Eyebrow>
        <Heading level={2} className="mt-5">
          What we won&rsquo;t do.
        </Heading>

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

      <CTABlock />
    </>
  )
}
