"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function Cup() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.8, 0.6, 1.2, 32]} />
        <meshPhysicalMaterial
          color="#F6F1E9"
          roughness={0.15}
          metalness={0.05}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
        />
      </mesh>
      <mesh position={[0, 0.7, 0]} castShadow>
        <torusGeometry args={[0.35, 0.06, 16, 32]} />
        <meshPhysicalMaterial color="#C9A24B" roughness={0.3} metalness={0.7} />
      </mesh>
    </group>
  );
}

export function CoffeeCup3D() {
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) setAutoRotate(false);
  }, []);

  return (
    <div className="h-[400px] w-full overflow-hidden bg-gradient-to-b from-ivory to-charcoal/5">
      <Canvas camera={{ position: [0, 0.5, 3], fov: 45 }} shadows>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Cup />
        <Environment preset="studio" />
        <OrbitControls
          enableZoom={false}
          autoRotate={autoRotate}
          autoRotateSpeed={1.5}
          onStart={() => setAutoRotate(false)}
        />
      </Canvas>
    </div>
  );
}
