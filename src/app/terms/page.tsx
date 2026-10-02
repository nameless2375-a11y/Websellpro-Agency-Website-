import type { Metadata } from 'next'
import LegalPage from '@/components/primitives/LegalPage'

export const metadata: Metadata = {
  title: 'Terms',
  description: 'How an engagement works, when payment is due, and what you own at the end.',
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      lead="The working rules of an engagement, in plain language. Anything specific to your project is set out in its own proposal, which takes precedence over this page."
      updated="20 September 2026"
      clauses={[
        {
          heading: 'What we do',
          body: 'Website design, front-end development, and the deployment work that gets a site live. Engaging us means agreeing to these terms alongside whatever your project proposal says.',
        },
        {
          heading: 'Build before you buy',
          body: 'We build the site before asking for full payment. You get to review the completed, working site and request revisions before any invoice is due. If you decide not to proceed at that point, you owe nothing and we keep the code.',
        },
        {
          heading: 'Payment',
          body: 'Due on your approval of the completed work, on the terms set out in your proposal. Third-party costs you would pay anyway — domain registration, paid hosting, licensed fonts or stock — are separate and always flagged before they are incurred.',
        },
        {
          heading: 'Timelines',
          body: 'Estimates given in good faith. The common causes of slippage are delayed feedback and third parties we do not control; we will tell you when a date is at risk rather than let it pass quietly.',
        },
        {
          heading: 'What you own',
          body: 'On full payment, the completed design, the code and the repository are yours, along with the deployment and domain credentials. There is no ongoing licence to us and no retainer required to keep the site online.',
        },
        {
          heading: 'Showing the work',
          body: 'We would like to show your site in our portfolio, and we will ask you before we do. If you say no, or ask us to remove it later, that is the end of it — nothing on our site names a business that has not agreed to be named.',
        },
        {
          heading: 'Liability',
          body: 'We are not liable for indirect or consequential losses arising from use of the work. Our total liability is limited to the amount paid for the service that gave rise to the claim.',
        },
      ]}
    />
  )
}
