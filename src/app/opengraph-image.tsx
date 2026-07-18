import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const runtime = 'edge'
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, color: '#c9a84c', letterSpacing: 4, textTransform: 'uppercase' }}>
          Websellpro
        </div>
        <div style={{ display: 'flex', fontSize: 84, color: '#ffffff', fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          Websites That
        </div>
        <div style={{ display: 'flex', fontSize: 84, color: '#c9a84c', fontWeight: 700, lineHeight: 1.1 }}>
          Actually Sell.
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#a0a0a0', marginTop: 32 }}>
          Premium websites for local businesses across India.
        </div>
      </div>
    ),
    { ...size }
  )
}
