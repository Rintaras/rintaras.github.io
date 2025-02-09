import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useSpring, motion, useScroll } from 'framer-motion';

function Scene({ scrollY }: { scrollY: number }) {
  const { camera } = useThree();
  
  useEffect(() => {
    // Update camera position based on scroll
    camera.position.y = -scrollY * 0.002;
  }, [scrollY, camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <AnimatedSphere 
        position={[-2, 0, 0]} 
        color="#4B5563" 
        speed={1.5} 
        distort={0.5}
        scrollY={scrollY}
      />
      <AnimatedSphere 
        position={[2, -1, -2]} 
        color="#3B82F6" 
        speed={1} 
        distort={0.3}
        scrollY={scrollY}
      />
      
      <ParticleField scrollY={scrollY} />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

function AnimatedSphere({ position, color, speed, distort, scrollY }: { 
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
  scrollY: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseX = useSpring(0);
  const mouseY = useSpring(0);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Rotate based on time
    meshRef.current.rotation.x += 0.001 * speed;
    meshRef.current.rotation.y += 0.002 * speed;

    // React to mouse movement
    const { x, y } = state.mouse;
    mouseX.set(x * 0.1);
    mouseY.set(y * 0.1);
    meshRef.current.position.x = position[0] + mouseX.get();
    meshRef.current.position.z = position[2] + mouseY.get();

    // Scale based on scroll
    const scale = 1.5 - (scrollY * 0.001);
    meshRef.current.scale.setScalar(Math.max(0.5, Math.min(1.5, scale)));

    // Gentle floating motion
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.1;
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={[1.5, 1.5, 1.5]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort + (scrollY * 0.0005)}
        speed={speed}
        roughness={0.5}
        metalness={0.2}
      />
    </Sphere>
  );
}

function ParticleField({ scrollY }: { scrollY: number }) {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y += 0.0005;
    
    // Scale particles based on scroll
    const scale = 1 - (scrollY * 0.001);
    particlesRef.current.scale.setScalar(Math.max(0.5, Math.min(1, scale)));
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2000}
          array={new Float32Array(6000).map(() => (Math.random() - 0.5) * 20)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.2}
        sizeAttenuation
      />
    </points>
  );
}

export default function Background3D() {
  const { scrollY } = useScroll();

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene scrollY={scrollY.get()} />
      </Canvas>
    </div>
  );
}