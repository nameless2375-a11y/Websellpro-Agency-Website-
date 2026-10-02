import { Button, Eyebrow, Heading, Text } from '@/components/primitives'

export default function NotFound() {
  return (
    <section className="section-v2 bg-paper">
      <div className="container-v2">
        <Eyebrow>404</Eyebrow>
        <Heading level={1} size="l" className="mt-6">
          That page isn&rsquo;t here.
        </Heading>
        <Text size="lead" className="mt-6">
          It may have moved when we rebuilt the site. The work, services, approach and pricing
          pages all still exist — start from one of those.
        </Text>
        <div className="mt-10">
          <Button href="/">Back to the homepage</Button>
        </div>
      </div>
    </section>
  )
}
