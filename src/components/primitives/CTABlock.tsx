import { Button, Eyebrow, Heading, Text, TextLink } from '@/components/primitives'
import { siteConfig } from '@/lib/site'

/**
 * The close. One of exactly two dark surfaces on the site.
 *
 * One heading, one button, one line of reassurance. No form, no second offer,
 * no fresh pitch — the visitor should leave on the emotion the page built,
 * not on the feeling that there is more to read.
 */
export default function CTABlock({
  eyebrow = 'Start a conversation',
  heading = 'Tell us what the site has to do.',
  body = 'A short message is enough to begin. We will tell you honestly whether this is work we would do well — and if it is, you will see the site before you are invoiced.',
}: {
  eyebrow?: string
  heading?: string
  body?: string
}) {
  return (
    <section className="section-v2 bg-peak text-peak-ink">
      <div className="container-v2">
        <div className="reveal max-w-3xl">
          <Eyebrow tone="peak">{eyebrow}</Eyebrow>
          <Heading level={2} size="l" tone="peak" className="mt-6">
            {heading}
          </Heading>
          <Text tone="peak" muted size="lead" className="mt-6">
            {body}
          </Text>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="/contact" variant="peak">
              Start a project
            </Button>
            <TextLink href={siteConfig.contact.phoneHref} tone="peak">
              Or call {siteConfig.contact.phone}
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  )
}
