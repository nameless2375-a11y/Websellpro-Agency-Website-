'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { type Mesh } from 'three'

function FloatingShape({
  position,
  color,
  scale,
  speed,
  offset,
}: {
  position: [number, number, number]
  color: string
  scale: number
  speed: number
  offset: number
}) {
  const mesh = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.getElapsedTime() * speed + offset
    mesh.current.rotation.x = t * 0.1
    mesh.current.rotation.y = t * 0.15
    mesh.current.position.y = position[1] + Math.sin(t * 0.5) * 0.3
  })

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={mesh} position={position} scale={scale}>
        <dodecahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          roughness={0.3}
          metalness={0.6}
          distort={0.05}
          speed={0.3}
        />
      </mesh>
    </Float>
  )
}

export default function FloatingShapes({ count = 3, className = '' }: { count?: number; className?: string }) {
  const shapes = useMemo(() => {
    const arr = []
    for (let i = 0; i < count; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          -2 - Math.random() * 3,
        ] as [number, number, number],
        color: '#c9a84c',
        scale: 0.15 + Math.random() * 0.2,
        speed: 0.2 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2,
      })
    }
    return arr
  }, [count])

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`} style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#c9a84c" />
        {shapes.map((s, i) => (
          <FloatingShape key={i} {...s} />
        ))}
      </Canvas>
    </div>
  )
}
