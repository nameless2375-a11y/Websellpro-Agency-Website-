import PageHeader from '@/components/primitives/PageHeader'
import { Section } from '@/components/primitives'

/** Shared shell for /privacy and /terms. Prose measure, no decoration. */
export default function LegalPage({
  title,
  lead,
  updated,
  clauses,
}: {
  title: string
  lead: string
  updated: string
  clauses: { heading: string; body: string }[]
}) {
  return (
    <>
      <PageHeader eyebrow="Legal" heading={title} lead={lead} />
      <Section>
        <p className="text-small text-ink-muted">Last updated: {updated}</p>
        <div className="measure mt-10">
          {clauses.map((clause, i) => (
            <section key={clause.heading} className="border-t border-rule py-8 first:border-t-0 first:pt-0">
              <h2 className="font-display text-display-m text-ink">
                <span className="text-ink-muted">{i + 1}.</span> {clause.heading}
              </h2>
              <p className="mt-4 text-body text-ink-body">{clause.body}</p>
            </section>
          ))}
        </div>
      </Section>
    </>
  )
}
