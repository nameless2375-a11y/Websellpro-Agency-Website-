'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { Vector3, type Mesh } from 'three'

function Shape({
  position,
  color,
  scale,
  speed,
  distort = 0.1,
  opacity = 0.4,
  geometry = 'icosahedron',
}: {
  position: [number, number, number]
  color: string
  scale: number
  speed: number
  distort?: number
  opacity?: number
  geometry?: 'icosahedron' | 'dodecahedron' | 'octahedron'
}) {
  const mesh = useRef<Mesh>(null)
  const pos = useMemo(() => new Vector3(...position), [position])

  const Geom = useMemo(() => {
    switch (geometry) {
      case 'dodecahedron': return <dodecahedronGeometry args={[1, 0]} />
      case 'octahedron': return <octahedronGeometry args={[1, 0]} />
      default: return <icosahedronGeometry args={[1, 0]} />
    }
  }, [geometry])

  useFrame(({ clock, mouse }) => {
    if (!mesh.current) return
    const t = clock.getElapsedTime() * speed
    const factor = scale > 1 ? 0.15 : 0.3
    mesh.current.position.x = pos.x + Math.sin(t * 0.5) * factor + mouse.x * (scale > 1 ? 0.8 : 0.4)
    mesh.current.position.y = pos.y + Math.cos(t * 0.7) * factor - mouse.y * (scale > 1 ? 0.8 : 0.4)
    mesh.current.rotation.x = t * 0.2
    mesh.current.rotation.y = t * 0.3
  })

  return (
    <Float speed={speed * 0.3} rotationIntensity={0.1} floatIntensity={scale > 1 ? 0.3 : 0.5}>
      <mesh ref={mesh} position={position} scale={scale}>
        {Geom}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={opacity}
          roughness={0.2}
          metalness={0.8}
          distort={distort}
          speed={speed * 0.3}
        />
      </mesh>
    </Float>
  )
}

function Shapes() {
  const shapes = useMemo(() => [
    // Background layer — distant, small, slow
    { position: [5, 2, -6] as [number, number, number], color: '#c9a84c', scale: 0.5, speed: 0.15, opacity: 0.2, geometry: 'dodecahedron' as const },
    { position: [-4, -3, -5] as [number, number, number], color: '#dfc06a', scale: 0.4, speed: 0.2, opacity: 0.15, geometry: 'icosahedron' as const },

    // Midground layer — medium, visible
    { position: [-3.5, 1.5, -2] as [number, number, number], color: '#c9a84c', scale: 0.6, speed: 0.3, opacity: 0.35, geometry: 'icosahedron' as const },
    { position: [3, -2, -1.5] as [number, number, number], color: '#dfc06a', scale: 0.5, speed: 0.4, opacity: 0.3, geometry: 'octahedron' as const },
    { position: [0, 2.5, -3] as [number, number, number], color: '#c9a84c', scale: 0.7, speed: 0.25, opacity: 0.25, geometry: 'dodecahedron' as const },

    // Foreground layer — large, close, responsive
    { position: [-4.5, -2.5, 1] as [number, number, number], color: '#c9a84c', scale: 1.2, speed: 0.35, opacity: 0.3, distort: 0.15, geometry: 'icosahedron' as const },
    { position: [4.5, 2.5, 0.5] as [number, number, number], color: '#dfc06a', scale: 1.0, speed: 0.4, opacity: 0.25, distort: 0.12, geometry: 'octahedron' as const },

    // Hero accent — partially visible, very large
    { position: [-6, -1, 0.5] as [number, number, number], color: '#c9a84c', scale: 1.8, speed: 0.2, opacity: 0.15, distort: 0.2, geometry: 'dodecahedron' as const },
    { position: [6, 1, -1] as [number, number, number], color: '#dfc06a', scale: 2.0, speed: 0.25, opacity: 0.12, distort: 0.18, geometry: 'icosahedron' as const },
  ], [])

  return (
    <>
      {shapes.map((s, i) => (
        <Shape key={i} {...s} />
      ))}
    </>
  )
}

export default function Hero3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <pointLight position={[-5, -5, -5]} intensity={0.2} color="#c9a84c" />
        <pointLight position={[0, 5, 0]} intensity={0.3} color="#dfc06a" />
        <Shapes />
      </Canvas>
    </div>
  )
}
