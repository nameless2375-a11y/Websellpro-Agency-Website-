import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// Our type scale lives in @theme as --text-display-l etc. tailwind-merge
// doesn't know those keys, so it files `text-display-l` under text-COLOR and a
// later `text-ink` silently deletes the font size. Teach it the scale once.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        { text: ['display-xl', 'display-l', 'display-m', 'body-l', 'body', 'small', 'label'] },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num)
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length) + '...'
}
