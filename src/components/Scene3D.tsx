import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, MeshTransmissionMaterial, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Animated Floating Crystal with realistic lighting
const RealisticCrystal = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  const vertices = useMemo(() => {
    const v = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 1 + Math.sin(i * 0.5) * 0.3;
      v.push(Math.cos(angle) * radius, (i % 3) * 1.2 - 0.6, Math.sin(angle) * radius);
    }
    v.push(0, 2.2, 0); // top vertex
    v.push(0, -2.2, 0); // bottom vertex
    return new Float32Array(v);
  }, []);

  const indices = useMemo(() => {
    const idx = [];
    for (let i = 0; i < 12; i++) {
      const next = (i + 1) % 12;
      idx.push(i, next, 12); // top faces
      idx.push(i, 13, next); // bottom faces
    }
    return new Uint16Array(idx);
  }, []);

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      meshRef.current.rotation.y += 0.008;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.5;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[-2.5, 0, 0]}>
      <Sparkles count={30} scale={[4, 4, 4]} size={2} speed={0.4} />
      <mesh ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={vertices} count={vertices.length / 3} itemSize={3} />
          <bufferAttribute attach="index" array={indices} count={indices.length} itemSize={1} />
        </bufferGeometry>
        <MeshTransmissionMaterial
          transmissionSampler={false}
          transmission={0.9}
          thickness={0.8}
          roughness={0.05}
          envMapIntensity={2}
          color="#8b5cf6"
          transparent
          ior={1.5}
          chromaticAberration={0.02}
          anisotropy={0.3}
        />
      </mesh>
    </group>
  );
};

// Enhanced Morphing Geometry
const MorphingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      meshRef.current.rotation.x += 0.006;
      meshRef.current.rotation.y += 0.012;
      groupRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.8) * 0.6;
      
      // Morphing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0, 0]}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.3, 1]} />
          <meshPhysicalMaterial
            color="#60a5fa"
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1.5}
            clearcoat={0.8}
            clearcoatRoughness={0.2}
            transmission={0.1}
            transparent
          />
        </mesh>
      </group>
    </Float>
  );
};

// Holographic Energy Ring
const EnergyRing = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      meshRef.current.rotation.x += 0.015;
      meshRef.current.rotation.z += 0.008;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.4;
      
      // Pulsing effect
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.1;
      meshRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.8}>
      <group ref={groupRef} position={[2.5, 0, 0]}>
        <Sparkles count={20} scale={[3, 3, 3]} size={1.5} speed={0.6} />
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[1.1, 0.25, 128, 32]} />
          <meshPhysicalMaterial
            color="#34d399"
            emissive="#34d399"
            emissiveIntensity={0.3}
            metalness={0.2}
            roughness={0.3}
            envMapIntensity={1.2}
            transmission={0.4}
            transparent
            ior={1.4}
          />
        </mesh>
      </group>
    </Float>
  );
};

// 3D Skill Polyhedrons with complex geometry
const SkillPolyhedron = ({ position, skill, index }: { position: [number, number, number], skill: string, index: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * (0.2 + index * 0.1);
      meshRef.current.rotation.y = state.clock.getElapsedTime() * (0.3 + index * 0.05);
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() + index) * 0.3;
    }
  });

  // Create different geometries for different skills
  const geometryType = index % 4;
  
  return (
    <Float speed={1 + index * 0.3} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef} position={position} castShadow receiveShadow>
        {geometryType === 0 && <dodecahedronGeometry args={[0.4]} />}
        {geometryType === 1 && <icosahedronGeometry args={[0.4]} />}
        {geometryType === 2 && <tetrahedronGeometry args={[0.6]} />}
        {geometryType === 3 && <octahedronGeometry args={[0.5]} />}
        
        <meshPhysicalMaterial
          color={`hsl(${index * 45 + 200}, 80%, 60%)`}
          metalness={0.7}
          roughness={0.2}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
          transmission={0.1}
          thickness={0.2}
          ior={1.5}
          emissive={`hsl(${index * 45 + 200}, 60%, 30%)`}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

// Interactive skill orbs that rotate around a center
const SkillOrbs = ({ skills }: { skills: string[] }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  const orbPositions = useMemo(() => {
    const radius = 3.5;
    return skills.map((_, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      const heightOffset = Math.sin(index * 1.2) * 0.8;
      return [
        Math.cos(angle) * radius,
        heightOffset,
        Math.sin(angle) * radius
      ] as [number, number, number];
    });
  }, [skills]);

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <SkillPolyhedron
          key={skill}
          position={orbPositions[index]}
          skill={skill}
          index={index}
        />
      ))}
    </group>
  );
};

// Enhanced floating shapes component
const FloatingShapes = () => {
  return (
    <>
      <RealisticCrystal />
      <MorphingGeometry />
      <EnergyRing />
    </>
  );
};

export const HeroScene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 2, 10], fov: 50 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />
        
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 8, 5]} 
          intensity={1.2} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-8, -5, -8]} color="#8b5cf6" intensity={0.8} />
        <pointLight position={[8, 5, 8]} color="#60a5fa" intensity={0.6} />
        <spotLight 
          position={[0, 15, 0]} 
          angle={0.2} 
          penumbra={1} 
          intensity={0.8}
          color="#34d399"
          castShadow
        />
        
        {/* 3D Objects */}
        <FloatingShapes />
        
        {/* Enhanced Environment */}
        <Environment preset="city" environmentIntensity={0.6} />
        
        {/* Enhanced Ground Shadows */}
        <ContactShadows 
          position={[0, -4, 0]} 
          opacity={0.3} 
          scale={20} 
          blur={3} 
          far={6} 
          color="#8b5cf6"
        />
        
        {/* Enhanced Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 4}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

// Skills 3D Scene component
export const SkillsScene3D = ({ skills }: { skills: string[] }) => {
  return (
    <div className="w-full h-64">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        shadows
        gl={{ antialias: true, alpha: true }}
      >
        {/* Enhanced lighting for skills scene */}
        <ambientLight intensity={0.2} />
        <directionalLight 
          position={[8, 8, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#9d4edd" />
        <pointLight position={[0, 5, -5]} intensity={0.3} color="#3b82f6" />
        
        {/* Environment for reflections */}
        <Environment preset="warehouse" />
        
        <SkillOrbs skills={skills} />
        
        {/* Ground shadows */}
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.2} 
          scale={15} 
          blur={1.5} 
          far={3} 
        />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          enableDamping
          dampingFactor={0.03}
        />
      </Canvas>
    </div>
  );
};