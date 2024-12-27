'use client'

import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Mesh } from 'three'
// import { extend } from '@react-three/fiber'
// import * as THREE from 'three'

// extend(THREE)

export default function GlassSphere() {
  const sphereRef = useRef<Mesh>(null)

  return (
    <Canvas className="absolute w-[40vw] h-[40vw] left-[-20vw] top-[50%] transform translate-y-[-50%]">
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 2, 5]} intensity={1.5} />
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={0.4}
          speed={1.5}
          metalness={0.9}
          roughness={0.05}
          envMapIntensity={0.9}
          clearcoat={1}
          transparent
          opacity={0.5}
          reflectivity={0.2}
          refractionRatio={0.985}
          ior={0.9}
          side={-1}
        />
      </Sphere>
    </Canvas>
  )
} 