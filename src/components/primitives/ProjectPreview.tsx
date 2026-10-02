import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * The signature component. Frameless — no browser chrome, no phone bezel.
 * The screenshot sits on a sunken tint and is cropped deliberately;
 * a cropped screenshot creates curiosity, a full one answers everything.
 *
 * `note` is not optional decoration. Every preview on this site states what
 * it actually is — a studio demonstration, sample business data, or real
 * client work. A screenshot presented without that line is a claim we have
 * not earned.
 */
export default function ProjectPreview({
  src,
  alt,
  label,
  meta,
  note,
  priority = false,
  aspect = 'wide',
  className,
  sizes = '(max-width: 1024px) 100vw, 60vw',
}: {
  src: string
  alt: string
  /** Business or project name, as it appears in the screenshot. */
  label: string
  /** Category · city, or template · stack. */
  meta: string
  /** What this artefact honestly is. Always rendered. */
  note: string
  priority?: boolean
  aspect?: 'wide' | 'square' | 'portrait'
  className?: string
  sizes?: string
}) {
  const aspects = {
    wide: 'aspect-[16/10]',
    square: 'aspect-square',
    portrait: 'aspect-[4/5]',
  }

  return (
    <figure className={cn('group', className)}>
      <div
        className={cn(
          'relative overflow-hidden rounded-md bg-paper-sunken',
          aspects[aspect],
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
      <figcaption className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-small font-medium text-ink">{label}</span>
        <span className="text-small text-ink-muted">{meta}</span>
        <span className="w-full text-small text-ink-muted">{note}</span>
      </figcaption>
    </figure>
  )
}
