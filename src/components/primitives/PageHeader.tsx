import type { ReactNode } from 'react'
import { Eyebrow, Heading } from '@/components/primitives'

/** Every route opens the same way: kicker, one h1, one lead paragraph. */
export default function PageHeader({
  eyebrow,
  heading,
  lead,
}: {
  eyebrow: string
  heading: ReactNode
  lead: string
}) {
  return (
    <section className="bg-paper pb-8 pt-16 md:pb-12 md:pt-24">
      <div className="container-v2">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading level={1} size="xl" className="mt-6 max-w-4xl">
          {heading}
        </Heading>
        <p className="measure mt-8 text-body-l text-ink-body">{lead}</p>
      </div>
    </section>
  )
}
