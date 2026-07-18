import { Section, Heading, Text, Badge } from '@/components/ui/primitives'

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container-wide">
          <Badge>Legal</Badge>
          <Heading as="h1" className="mt-6">
            Terms of{' '}
            <span className="text-accent">Service</span>
          </Heading>
        </div>
      </section>

      <Section className="bg-surface/50">
        <div className="max-w-3xl mx-auto">
          <Text className="mb-8" muted>Last updated: January 2026</Text>

          <h3 className="text-lg font-medium mt-8 mb-4">1. Services</h3>
          <Text muted>Websellpro provides web design, development, and related digital services. By engaging our services, you agree to these terms.</Text>

          <h3 className="text-lg font-medium mt-8 mb-4">2. Build Before You Buy</h3>
          <Text muted>Under our Build Before You Buy model, we develop your website before requesting full payment. You have the opportunity to review and approve the completed work before payment is due.</Text>

          <h3 className="text-lg font-medium mt-8 mb-4">3. Payment Terms</h3>
          <Text muted>Payment is due upon project completion and your approval. We accept standard payment methods. Detailed pricing and payment schedules are provided in your project proposal.</Text>

          <h3 className="text-lg font-medium mt-8 mb-4">4. Project Timeline</h3>
          <Text muted>Timelines are estimates provided in good faith. Delays may occur due to factors outside our control, including delayed client feedback or third-party services.</Text>

          <h3 className="text-lg font-medium mt-8 mb-4">5. Intellectual Property</h3>
          <Text muted>Upon full payment, you own the completed website design and code. We retain the right to display the work in our portfolio.</Text>

          <h3 className="text-lg font-medium mt-8 mb-4">6. Limitation of Liability</h3>
          <Text muted>Websellpro is not liable for indirect damages arising from the use of our services. Our liability is limited to the amount paid for the specific service giving rise to the claim.</Text>
        </div>
      </Section>
    </>
  )
}
