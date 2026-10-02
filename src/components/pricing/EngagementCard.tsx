import { Button } from '@/components/primitives'
import { cn } from '@/lib/utils'
import type { ENGAGEMENTS } from '@/lib/content'

type Tier = (typeof ENGAGEMENTS)[number]

/**
 * One engagement model. The primary tier states its price as the largest
 * thing on the card and nothing else competes with it: no strike-through, no
 * badge, no urgency. A price this plain reads as confidence, not promotion.
 *
 * `full` adds the inclusions list and the action (pricing page); the
 * homepage excerpt is the price and the sentence behind it.
 */
export default function EngagementCard({
  tier,
  full = false,
  level = 2,
}: {
  tier: Tier
  full?: boolean
  level?: 2 | 3
}) {
  const Heading = `h${level}` as 'h2' | 'h3'

  return (
    <div
      className={cn(
        'price-card relative flex h-full flex-col overflow-clip rounded-md border bg-paper-raised p-8 md:p-10',
        tier.primary ? 'border-accent/40 hover:border-accent' : 'border-rule hover:border-rule-strong',
      )}
    >
      {tier.primary && (
        <span aria-hidden="true" className="price-rule absolute inset-x-0 top-0 h-0.5 bg-accent" />
      )}

      <p className="text-label font-medium uppercase text-ink-muted">{tier.forWho}</p>
      <Heading className="mt-4 font-display text-display-m text-ink">{tier.kind}</Heading>

      <p
        className={cn(
          'font-display leading-none text-ink',
          tier.primary
            ? cn('mt-8', full ? 'text-display-xl' : 'text-display-l')
            : 'mt-8 text-display-m text-ink-body',
        )}
      >
        {tier.price}
      </p>
      <p className="mt-3 text-small text-ink-muted">{tier.priceNote}</p>

      <p className="measure mt-6 flex-1 text-body text-ink-body">{tier.body}</p>

      {full && (
        <>
          <ul className="mt-8">
            {tier.includes.map((item) => (
              <li
                key={item}
                className="border-t border-rule py-3 text-small text-ink-body first:border-t-0 first:pt-0"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/contact" variant={tier.primary ? 'solid' : 'quiet'}>
              {tier.primary ? 'Start a project' : 'Ask about a studio project'}
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
