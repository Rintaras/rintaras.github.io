import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// WebGLサポートチェック関数
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
}

// フォールバックコンポーネント
function FallbackBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gray-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
}

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
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Rotate based on time
    meshRef.current.rotation.x += 0.001 * speed;
    meshRef.current.rotation.y += 0.002 * speed;

    // React to mouse movement
    const { x, y } = state.mouse;
    setMouseX(x * 0.1);
    setMouseY(y * 0.1);
    meshRef.current.position.x = position[0] + mouseX;
    meshRef.current.position.z = position[2] + mouseY;

    // Scale based on scroll
    const scale = 1.5 - (scrollY * 0.001);
    meshRef.current.scale.setScalar(Math.max(0.5, Math.min(1.5, scale)));

    // Gentle floating motion
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.1;
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} scale={[1.5, 1.5, 1.5]}>
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
          count={500}
          array={new Float32Array(1500).map(() => (Math.random() - 0.5) * 20)}
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
  const [webGLAvailable, setWebGLAvailable] = useState<boolean | null>(null);
  const [hasError, setHasError] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setWebGLAvailable(isWebGLAvailable());

    // スクロールイベントリスナーを追加
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WebGLが利用できない場合、フォールバックを表示
  if (webGLAvailable === false || hasError) {
    return <FallbackBackground />;
  }

  // WebGLサポートチェック中は何も表示しない
  if (webGLAvailable === null) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        onError={() => setHasError(true)}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Scene scrollY={scrollY} />
      </Canvas>
    </div>
  );
}