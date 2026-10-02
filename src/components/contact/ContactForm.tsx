'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/site'

/**
 * Posts the payload shape the contact webhook (NEXT_PUBLIC_N8N_WEBHOOK)
 * expects. Do not change these keys without updating the receiving
 * workflow — the contract is shared.
 *
 * Real labels, native input types, one field per row. No placeholder-as-label.
 */
export default function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setState('sending')

    const form = e.currentTarget
    const payload = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value ?? '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value ?? '',
      businessName: (form.elements.namedItem('company') as HTMLInputElement)?.value ?? '',
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? '',
      source: 'websellpro-agency-contact',
      submittedAt: new Date().toISOString(),
    }

    const webhook = process.env.NEXT_PUBLIC_N8N_WEBHOOK

    try {
      if (!webhook) throw new Error('Contact endpoint is not configured yet.')
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setState('sent')
    } catch {
      setState('idle')
      setError(
        `We couldn’t send that. Email ${siteConfig.contact.email} or call ${siteConfig.contact.phone} and it will reach us.`,
      )
    }
  }

  if (state === 'sent') {
    return (
      <div className="rounded-md border border-rule bg-paper-raised p-8" role="status">
        <p className="font-display text-display-m text-ink">Message sent.</p>
        <p className="measure mt-4 text-body text-ink-body">
          We read everything that comes in and reply in our own words, usually within a
          working day. If it is urgent, {siteConfig.contact.phone} is the fastest route.
        </p>
      </div>
    )
  }

  const field =
    'mt-2 w-full rounded-md border border-rule bg-paper-raised px-4 py-3 text-body text-ink placeholder:text-ink-muted/60'
  const labelClass = 'block text-small font-medium text-ink'

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <div>
        <label htmlFor="name" className={labelClass}>
          Your name
        </label>
        <input id="name" name="name" type="text" autoComplete="name" required className={field} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          className={field}
        />
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Business name <span className="font-normal text-ink-muted">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          What does the site need to do?
        </label>
        <textarea id="message" name="message" rows={6} required className={field} />
      </div>

      {error && (
        <p role="alert" className="text-small text-signal">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'sending'}
        className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 text-small font-medium text-paper transition-colors duration-[160ms] hover:bg-accent-hover disabled:opacity-60 motion-reduce:transition-none"
      >
        {state === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
