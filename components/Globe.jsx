import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei'
import { Suspense } from 'react'

export default function Globe() {
  return (
    <section id="globe" className="h-[600px] relative">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#3b82f6"
              attach="material"
              distort={0.3}
              speed={1.5}
              roughness={0.2}
              metalness={0.8}
              emissive="#1e3a8a"
            />
          </Sphere>
          
          {/* Connection Lines */}
          {[...Array(20)].map((_, i) => (
            <mesh key={i} position={[Math.sin(i) * 2, Math.cos(i) * 2, Math.sin(i) * 2]}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshStandardMaterial color="#8b5cf6" emissive="#4c1d95" />
            </mesh>
          ))}
          
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1.5}
          />
        </Suspense>
      </Canvas>
      
      {/* Overlay Text */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Global <span className="text-gradient">Network</span>
        </h2>
        <p className="text-gray-400 max-w-2xl px-4">
          Connect to servers in 50+ countries with optimized routing for the best performance
        </p>
      </div>
    </section>
  )
}