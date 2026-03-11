"use client"

import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, ContactShadows, Environment, Decal, useGLTF, useTexture, Float } from "@react-three/drei"
import { ErrorBoundary } from "react-error-boundary"
import * as THREE from "three"

interface TShirtProps {
  color?: string
}

function TShirtModel({ color = "#ffffff" }: TShirtProps) {
  const { nodes, materials } = useGLTF("/shirt.glb") as any
  const logoTexture = useTexture("/Logo.svg")
  logoTexture.anisotropy = 16

  // Apply color directly to the materials
  React.useEffect(() => {
    Object.values(materials).forEach((mat: any) => {
      if (mat.color) {
        mat.color.set(color)
        mat.roughness = 0.85
        mat.metalness = 0.1
        mat.side = THREE.DoubleSide
      }
    })
  }, [materials, color])

  // Identify the main shirt mesh for the decal
  // We'll look for common names or just the largest mesh if names aren't found
  const shirtNodeName = React.useMemo(() => {
    const commonNames = ["T_Shirt_Male001", "shirt", "Body", "TShirt"]
    for (const name of commonNames) {
      if (nodes[name]) return name
    }
    // Fallback to the first mesh found
    const firstMesh = Object.entries(nodes).find(([_, node]: any) => node.isMesh)
    return firstMesh ? firstMesh[0] : null
  }, [nodes])

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group dispose={null} scale={1

      } position={[0, -1.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        {Object.entries(nodes).map(([name, node]: [string, any]) => {
          if (!node.isMesh) return null

          return (
            <mesh
              key={name}
              castShadow
              receiveShadow
              geometry={node.geometry}
              material={node.material}
              onClick={(e) => {
                e.stopPropagation();
                const { x, y, z } = e.point;
                console.log(`%c 👕 T-Shirt Coordinate: [${x.toFixed(4)}, ${y.toFixed(4)}, ${z.toFixed(4)}]`, "color: #ff0000; font-weight: bold;");
              }}
            >
              {name === shirtNodeName && (
                <Decal
                  position={[0, 0.04, 0.15]}
                  rotation={[0, 0, 0]}
                  scale={0.16}
                  map={logoTexture}
                />
              )}
            </mesh>
          )
        })}
      </group>
    </Float>
  )
}

function ErrorFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#EB0028" wireframe />
    </mesh>
  )
}

export default function TShirt({ color = "#ffffff" }: TShirtProps) {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <ErrorBoundary fallback={<div className="flex flex-col items-center justify-center h-full text-white/50 gap-4">
        <p>3D Preview unavailable</p>
        <div className="w-12 h-12 border-2 border-red-600 rounded-full animate-pulse" />
      </div>}>
        <Canvas shadows camera={{ position: [-0.01, 0, -2.5], fov: 20 }} gl={{ antialias: true, preserveDrawingBuffer: true, toneMapping: THREE.ACESFilmicToneMapping }}>
          <ambientLight intensity={0.5} />
          {/* Main Key Light */}
          <pointLight position={[10, 10, 10]} intensity={2} castShadow />
          {/* Rim Light for depth */}
          <pointLight position={[-10, 5, -10]} intensity={1} color="#ffffff" />
          {/* Subtle Fill Light */}
          <pointLight position={[0, -5, 5]} intensity={0.5} />

          <Suspense fallback={null}>
            <TShirtModel color={color} />
            <Environment preset="studio" />
            <ContactShadows position={[0, -1, 0]} opacity={0.6} scale={10} blur={2.8} far={4} />
          </Suspense>

          <OrbitControls
            makeDefault
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.3}
            enableZoom={true}
            minDistance={1.0}
            maxDistance={4.2}
            dampingFactor={0.07}
            enableDamping
            autoRotate
            autoRotateSpeed={0.8}
            rotateSpeed={0.8}
          />
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}
