"use client"
import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function WavePoints() {
  const pointsRef = useRef<THREE.Points>(null!)
  
  // Grid settings
  const SEPARATION = 0.5
  const AMOUNTX = 60
  const AMOUNTY = 60
  const particleCount = AMOUNTX * AMOUNTY

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    let i = 0
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        pos[i * 3] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2 // x
        pos[i * 3 + 1] = 0 // y (will be animated)
        pos[i * 3 + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2 // z
        i++
      }
    }
    return pos
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array
    
    let i = 0
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        // Advanced wave formula: combines two sine waves for organic motion
        pos[i * 3 + 1] = (Math.sin((ix + time) * 0.3) * 1.5) + (Math.sin((iy + time) * 0.5) * 1.5)
        i++
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true
    
    // Smooth tilt of the wave plane
    pointsRef.current.rotation.x = -Math.PI / 4 // Tilt back for perspective
    pointsRef.current.rotation.y = time * 0.05
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#3b82f6" // Using a tech blue for the "wave" look
        sizeAttenuation={true}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function ParticleWave() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas
        camera={{ position: [0, 8, 12], fov: 75 }} // Positioned to look down at the wave
        gl={{ antialias: true, alpha: true }}
      >
        <WavePoints />
      </Canvas>
    </div>
  )
}
