import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Box, Torus, OrbitControls, Float, Environment, ContactShadows, MeshTransmissionMaterial, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Advanced 3D Geometric Objects
const ComplexCrystal = ({ position, scale = 1 }: { position: [number, number, number], scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  const geometry = useMemo(() => {
    const vertices = new Float32Array([
      0, 1.5, 0,   // Top
      -0.8, 0.5, 0.8,   // Top ring
      0.8, 0.5, 0.8,
      0.8, 0.5, -0.8,
      -0.8, 0.5, -0.8,
      -1, -0.5, 1,   // Bottom ring
      1, -0.5, 1,
      1, -0.5, -1,
      -1, -0.5, -1,
      0, -1.5, 0    // Bottom
    ]);

    const indices = [
      0, 1, 2,  0, 2, 3,  0, 3, 4,  0, 4, 1,  // Top faces
      1, 5, 6,  1, 6, 2,  2, 6, 7,  2, 7, 3,  // Side faces
      3, 7, 8,  3, 8, 4,  4, 8, 5,  4, 5, 1,
      5, 9, 6,  6, 9, 7,  7, 9, 8,  8, 9, 5   // Bottom faces
    ];

    const geom = new THREE.BufferGeometry();
    geom.setIndex(indices);
    geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geom.computeVertexNormals();
    return geom;
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
      <mesh ref={meshRef} position={position} scale={scale} geometry={geometry} castShadow receiveShadow>
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={512}
          transmission={0.8}
          roughness={0.1}
          thickness={0.2}
          ior={1.5}
          chromaticAberration={0.02}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color="#9d4edd"
        />
      </mesh>
    </Float>
  );
};

const MetallicOctahedron = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.6;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position} castShadow receiveShadow>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#3b82f6"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={1}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
};

const HolographicTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.6;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={2} floatIntensity={4}>
      <mesh ref={meshRef} position={position} castShadow receiveShadow>
        <torusKnotGeometry args={[0.6, 0.15, 128, 32]} />
        <meshPhysicalMaterial
          color="#10b981"
          metalness={0.8}
          roughness={0.2}
          transmission={0.3}
          thickness={0.5}
          ior={1.4}
          emissive="#10b981"
          emissiveIntensity={0.1}
          clearcoat={0.8}
        />
      </mesh>
    </Float>
  );
};

// Floating geometric shapes for the hero section
const FloatingShapes = () => {
  return (
    <>
      <ComplexCrystal position={[-2, 1, -1]} scale={0.8} />
      <MetallicOctahedron position={[2, -1, 0]} />
      <HolographicTorus position={[0, 2, -2]} />
    </>
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

// Main 3D Scene component for hero section
export const HeroScene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        shadows
        gl={{ antialias: true, alpha: true }}
      >
        {/* Advanced lighting setup */}
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.2} 
          castShadow 
          shadow-mapSize={[2048, 2048]}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-5, 5, 5]} intensity={0.8} color="#9d4edd" />
        <pointLight position={[5, -5, 3]} intensity={0.6} color="#3b82f6" />
        <spotLight 
          position={[0, 10, 0]} 
          intensity={0.5} 
          angle={0.3} 
          penumbra={0.2} 
          color="#10b981"
          castShadow
        />
        
        {/* Environment and atmosphere */}
        <Environment preset="studio" />
        <fog attach="fog" args={['#000020', 10, 25]} />
        
        <FloatingShapes />
        
        {/* Contact shadows for ground effect */}
        <ContactShadows 
          position={[0, -3, 0]} 
          opacity={0.3} 
          scale={20} 
          blur={2} 
          far={4.5} 
        />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.3}
          enableDamping
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