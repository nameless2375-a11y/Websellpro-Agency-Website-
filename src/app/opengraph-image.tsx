import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * V2 card: warm paper, ink, one green rule. Runs at build time (no edge
 * runtime) so the route prerenders statically like every other page.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#fbf9f5',
          padding: '72px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, color: '#6e675b', letterSpacing: 4 }}>
          WEBSELLPRO
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 76, color: '#1a1815', lineHeight: 1.05 }}>
            We build the website first.
          </div>
          <div style={{ display: 'flex', fontSize: 76, color: '#1f6f52', lineHeight: 1.05 }}>
            Then we show you.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ display: 'flex', width: 72, height: 4, backgroundColor: '#1f6f52' }} />
          <div style={{ display: 'flex', fontSize: 26, color: '#2e2a24' }}>
            A web studio for businesses that have outgrown a template
          </div>
        </div>
      </div>
    ),
    size,
  )
}
