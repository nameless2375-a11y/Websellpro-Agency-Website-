import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-lg mx-auto px-4">
        <h1 className="text-8xl font-light text-accent">404</h1>
        <h2 className="text-2xl font-medium mt-6">Page Not Found</h2>
        <p className="text-muted mt-4 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-accent transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
