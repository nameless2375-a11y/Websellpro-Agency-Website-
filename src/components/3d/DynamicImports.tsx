'use client'

import dynamic from 'next/dynamic'

export const Dynamic3DScene = dynamic(() => import('@/components/3d/Hero3DScene'), {
  ssr: false,
  loading: () => null,
})

export const DynamicFloatingShapes = dynamic(() => import('@/components/3d/FloatingShapes'), {
  ssr: false,
  loading: () => null,
})

export const DynamicTiltCard = dynamic(() => import('@/components/3d/TiltCard3D'), {
  ssr: false,
  loading: () => null,
})
