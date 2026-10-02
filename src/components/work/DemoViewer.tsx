import Image from 'next/image'
import { cn } from '@/lib/utils'

type View = { src: string; label: string; ratio: 'wide' | 'tall' }

/**
 * Desktop / inner-page / mobile switcher for one studio demonstration.
 *
 * ponytail: radio inputs + `:checked ~` sibling selectors. No JS, no state,
 * no client component — so it works before hydration and costs nothing in the
 * bundle. Radios are real radios, so arrow keys and labels work for free.
 */
export default function DemoViewer({
  slug,
  label,
  views,
}: {
  slug: string
  /** Human name of the demo, used in the image alt text. */
  label: string
  views: View[]
}) {
  const name = `view-${slug}`

  return (
    <div className="demo-viewer">
      <div className="flex flex-wrap gap-1 rounded-md border border-rule bg-paper p-1">
        {views.map((view, i) => (
          <span key={view.label} className="contents">
            <input
              type="radio"
              name={name}
              id={`${name}-${i}`}
              defaultChecked={i === 0}
              className="peer/tab sr-only"
              data-tab={i}
            />
            <label
              htmlFor={`${name}-${i}`}
              className="cursor-pointer rounded-sm px-4 py-2 text-small text-ink-muted transition-colors duration-[160ms] hover:text-ink motion-reduce:transition-none"
            >
              {view.label}
            </label>
          </span>
        ))}
      </div>

      <div className="mt-5">
        {views.map((view, i) => (
          <figure
            key={view.label}
            data-panel={i}
            className={cn(
              'media-frame relative overflow-hidden rounded-md bg-paper-sunken',
              view.ratio === 'wide' ? 'aspect-[16/10]' : 'mx-auto aspect-[390/844] max-w-[280px]',
            )}
          >
            <Image
              src={view.src}
              alt={`${label} design — ${view.label} view, rendered with a fictional sample business`}
              fill
              sizes={view.ratio === 'wide' ? '(max-width: 1024px) 100vw, 60vw' : '280px'}
              // Hidden views are display:none, so a lazy image would only start
              // loading on click and the tab switch would reveal an empty frame.
              // Fetch them eagerly but at low priority, behind everything visible.
              loading={i === 0 ? undefined : 'eager'}
              fetchPriority={i === 0 ? undefined : 'low'}
              className="object-cover object-top"
            />
          </figure>
        ))}
      </div>
    </div>
  )
}
