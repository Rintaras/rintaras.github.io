import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

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
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-black to-neutral-950">
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-4rem] right-[-3rem] w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}

function Scene({ scrollY }: { scrollY: number }) {
  return (
    <>
      <color attach="background" args={['#02010a']} />
      <fog attach="fog" args={['#02010a', 7, 16]} />
      <ambientLight intensity={0.28} />
      <directionalLight position={[4, 6, 5]} intensity={0.65} />

      <FloatingSphere
        position={[-2.2, 0.4, -3]}
        color="#0369a1"
        speed={0.3}
        distort={0.2}
        scrollY={scrollY}
      />
      <FloatingSphere
        position={[1.8, -0.6, -2.5]}
        color="#5b21b6"
        speed={0.25}
        distort={0.18}
        scrollY={scrollY}
      />
      <FloatingSphere
        position={[0, 0.9, -4]}
        color="#1f2933"
        speed={0.2}
        distort={0.15}
        scrollY={scrollY}
      />
    </>
  );
}

function FloatingSphere({
  position,
  color,
  speed,
  distort,
  scrollY,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
  scrollY: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.getElapsedTime() * speed;

    meshRef.current.position.x = position[0] + Math.sin(t) * 0.3;
    meshRef.current.position.y =
      position[1] +
      Math.cos(t * 0.8) * 0.25 -
      scrollY * 0.0004;

    meshRef.current.rotation.y += 0.0015;
    meshRef.current.rotation.x += 0.0008;
  });

  return (
    <Sphere
      ref={meshRef}
      args={[1, 20, 20]}
      scale={[1.4, 1.4, 1.4]}
      position={position}
    >
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={0.8}
        roughness={0.4}
        metalness={0.15}
      />
    </Sphere>
  );
}

export default function Background3D() {
  const [webGLAvailable, setWebGLAvailable] = useState<boolean | null>(null);
  const [hasError, setHasError] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setWebGLAvailable(isWebGLAvailable());
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