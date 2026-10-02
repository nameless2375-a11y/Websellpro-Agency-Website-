import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import PageHeader from '@/components/primitives/PageHeader'
import { Eyebrow, Section, Text } from '@/components/primitives'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell us what the site has to do. Email, phone, or the form — whichever you prefer. No call required to get a quote.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        heading="Tell us what the site has to do."
        lead="A few sentences is enough to start. We will tell you honestly whether this is work we would do well, and roughly what it would cost, before anyone books a call."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Eyebrow>Or go direct</Eyebrow>
            <ul className="mt-6 space-y-5">
              <li>
                <p className="text-small text-ink-muted">Email</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-body text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <p className="text-small text-ink-muted">Phone</p>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="text-body text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <p className="text-small text-ink-muted">Based in</p>
                <p className="text-body text-ink-body">{siteConfig.contact.location}</p>
              </li>
            </ul>

            <Text muted size="small" className="mt-10">
              We reply in our own words, usually within a working day. There is no automated
              sequence waiting on the other side of this form.
            </Text>
          </div>
        </div>
      </Section>
    </>
  )
}
