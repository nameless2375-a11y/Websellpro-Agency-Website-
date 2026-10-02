import type { Metadata } from 'next'
import LegalPage from '@/components/primitives/LegalPage'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'What we collect, why, and how to have it removed.',
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      lead="Short, because we collect very little. If you have a question this does not answer, email us and you will get a real reply."
      updated="20 September 2026"
      clauses={[
        {
          heading: 'What we collect',
          body: 'Only what you give us: your name, email address, business name and message when you use the contact form or write to us directly. There is no account to create and nothing is collected in the background.',
        },
        {
          heading: 'Why we use it',
          body: 'To reply to you and to carry out work you have asked us to do. We do not add you to a marketing list, and we do not sell or share your details with anyone for their own purposes.',
        },
        {
          heading: 'Where it goes',
          body: 'Form submissions are delivered to our own systems and to a spreadsheet we control. Our site is hosted on Vercel, which processes standard request data under its own privacy terms.',
        },
        {
          heading: 'Cookies and analytics',
          body: 'This site sets no tracking or advertising cookies. If we add analytics later, this page will be updated before it goes live, not after.',
        },
        {
          heading: 'How long we keep it',
          body: 'Enquiries that do not become projects are kept while they are still useful to answer, and deleted on request. Project records are kept for as long as we have a working relationship and a reasonable period afterwards.',
        },
        {
          heading: 'Your rights',
          body: `Ask us for a copy of what we hold, a correction, or deletion, and we will do it. Email ${siteConfig.contact.email} and say what you want; you do not need to give a reason.`,
        },
      ]}
    />
  )
}
