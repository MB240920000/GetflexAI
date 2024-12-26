import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Robot3D() {
  const groupRef = useRef<THREE.Group>();
  const ringRef = useRef<THREE.Mesh>();

  useFrame((state) => {
    if (!groupRef.current || !ringRef.current) return;
    
    // Gentle floating animation for the entire group
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    
    // Rotate the ring
    ringRef.current.rotation.z += 0.005;
    ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#0AE697"
          emissive="#0AE697"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Outer ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.2, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#0AE697"
          emissive="#0AE697"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <mesh key={i} position={[
          Math.sin(i * 2) * 1.5,
          Math.cos(i * 2) * 1.5,
          Math.sin(i * 3) * 1.5
        ]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial
            color="#0AE697"
            emissive="#0AE697"
            emissiveIntensity={1}
          />
        </mesh>
      ))}
    </group>
  );
}