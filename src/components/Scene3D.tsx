import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric shapes for the hero section
const FloatingShapes = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.5;
      sphereRef.current.rotation.y = time * 0.3;
      sphereRef.current.position.y = Math.sin(time) * 0.5;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.3;
      boxRef.current.rotation.z = time * 0.4;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.6;
      torusRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <>
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[0.8, 64, 64]} position={[-2, 1, -1]}>
          <meshStandardMaterial 
            color="#9d4edd" 
            emissive="#9d4edd" 
            emissiveIntensity={0.2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
        <Box ref={boxRef} args={[1, 1, 1]} position={[2, -1, 0]}>
          <meshStandardMaterial 
            color="#3b82f6" 
            emissive="#3b82f6" 
            emissiveIntensity={0.2}
            roughness={0.1}
            metalness={0.8}
          />
        </Box>
      </Float>
      
      <Float speed={2.2} rotationIntensity={0.8} floatIntensity={3}>
        <Torus ref={torusRef} args={[0.6, 0.2, 16, 100]} position={[0, 2, -2]}>
          <meshStandardMaterial 
            color="#10b981" 
            emissive="#10b981" 
            emissiveIntensity={0.2}
            roughness={0.1}
            metalness={0.8}
          />
        </Torus>
      </Float>
    </>
  );
};

// Interactive skill orbs that rotate around a center
const SkillOrbs = ({ skills }: { skills: string[] }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  const orbPositions = useMemo(() => {
    const radius = 3;
    return skills.map((_, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      return [
        Math.cos(angle) * radius,
        Math.sin(index * 0.5) * 0.5,
        Math.sin(angle) * radius
      ] as [number, number, number];
    });
  }, [skills]);

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <Float 
          key={skill} 
          speed={1 + index * 0.2} 
          rotationIntensity={1} 
          floatIntensity={1}
        >
          <group position={orbPositions[index]}>
            <Sphere args={[0.3, 32, 32]}>
              <meshStandardMaterial 
                color={`hsl(${index * 30 + 200}, 70%, 60%)`}
                emissive={`hsl(${index * 30 + 200}, 70%, 60%)`}
                emissiveIntensity={0.1}
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>
            <Center position={[0, 0, 0.35]}>
              <Text3D
                font="/fonts/Inter_Bold.json"
                size={0.1}
                height={0.02}
                curveSegments={12}
              >
                {skill}
                <meshStandardMaterial color="white" />
              </Text3D>
            </Center>
          </group>
        </Float>
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
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9d4edd" />
        <pointLight position={[10, -10, 10]} intensity={0.5} color="#3b82f6" />
        
        <FloatingShapes />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
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
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#9d4edd" />
        
        <SkillOrbs skills={skills} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};