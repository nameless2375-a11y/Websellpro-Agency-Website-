'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { type Mesh } from 'three'

function TiltMesh({ mouse }: { mouse: { x: number; y: number } }) {
  const mesh = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.getElapsedTime() * 0.5
    mesh.current.rotation.x = Math.sin(t) * 0.05 + mouse.y * 0.1
    mesh.current.rotation.y = Math.cos(t) * 0.05 + mouse.x * 0.1
  })

  return (
    <Float speed={0.5} rotationIntensity={0.05} floatIntensity={0.2}>
      <mesh ref={mesh}>
        <boxGeometry args={[2.2, 1.4, 0.1]} />
        <MeshDistortMaterial
          color="#c9a84c"
          transparent
          opacity={0.2}
          roughness={0.1}
          metalness={0.9}
          distort={0.02}
          speed={0.3}
        />
      </mesh>
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[2, 1.2]} />
        <meshBasicMaterial color="#1a1a1a" />
      </mesh>
    </Float>
  )
}

export default function TiltCard3D({ className = '' }: { className?: string }) {
  const mouse = useMemo(() => ({ x: 0, y: 0 }), [])

  const handleMouse = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    mouse.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
  }

  return (
    <div
      className={`relative w-full aspect-[16/10] ${className}`}
      onMouseMove={handleMouse}
      onMouseLeave={() => { mouse.x = 0; mouse.y = 0 }}
    >
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-3, -3, 2]} intensity={0.3} color="#c9a84c" />
        <TiltMesh mouse={mouse} />
      </Canvas>
    </div>
  )
}
