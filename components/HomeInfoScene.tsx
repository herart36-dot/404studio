'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import type { Group } from 'three'

type Palette = { primary: string; secondary: string; accent: string }

function Shapes({ palette }: { palette: Palette }) {
  const group = useRef<Group>(null)
  const { pointer } = useThree()
  const scroll = useRef(0)
  const points = useMemo(() => {
    const values = new Float32Array(180 * 3)
    for (let i = 0; i < values.length; i += 3) {
      values[i] = (Math.random() - 0.5) * 18
      values[i + 1] = (Math.random() - 0.5) * 9
      values[i + 2] = (Math.random() - 0.5) * 5
    }
    return values
  }, [])

  useFrame((state, delta) => {
    if (!group.current) return
    scroll.current += (window.scrollY * 0.000025 - scroll.current) * Math.min(delta * 2, 1)
    group.current.rotation.x += (pointer.y * 0.12 - group.current.rotation.x) * Math.min(delta * 2, 1)
    group.current.rotation.y += (pointer.x * 0.18 + scroll.current - group.current.rotation.y) * Math.min(delta * 2, 1)
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.22) * 0.08
  })

  return (
    <>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} count={points.length / 3} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color={palette.secondary} size={0.018} transparent opacity={0.34} sizeAttenuation />
      </points>
      <group ref={group}>
        <mesh position={[-3.7, 0.4, -1.5]} rotation={[0.3, 0.2, 0.1]}>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshBasicMaterial color={palette.primary} wireframe transparent opacity={0.28} />
        </mesh>
        <mesh position={[3.1, -0.65, -0.7]} rotation={[0.5, 0.35, 0.2]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshBasicMaterial color={palette.accent} wireframe transparent opacity={0.34} />
        </mesh>
        <mesh position={[0.2, 1.8, -2]} rotation={[0.1, 0.25, 0.1]}>
          <torusGeometry args={[0.48, 0.018, 6, 48]} />
          <meshBasicMaterial color={palette.secondary} transparent opacity={0.5} />
        </mesh>
      </group>
    </>
  )
}

export default function HomeInfoScene({ palette }: { palette: Palette }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
      frameloop="always"
    >
      <Shapes palette={palette} />
    </Canvas>
  )
}
