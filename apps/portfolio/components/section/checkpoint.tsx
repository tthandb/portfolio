'use client';
import { Environment } from '@react-three/drei';
import { Beetle } from '../models/beetle';
import React, { useMemo, useState, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';
import { Road } from '../models/road';

export function Checkpoint() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

  return (
    <section className="relative">
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen  top-1/2 -translate-y-1/2 left-0 z-10">
        <Canvas
          camera={{position: [0, 5, 10], fov: 100}}
          className={'w-screen h-screen -z-10 relative'}
          shadows={false}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <InfinityPath />
            <Beetle />
            <OrbitControls
              enablePan={true}
              enableZoom={false}
              enableDamping={true}
              dampingFactor={0.1}
              rotateSpeed={0.1}
              minPolarAngle={Math.PI / 3} // Limit vertical rotation to 90 degrees
              maxPolarAngle={Math.PI / 3} // Limit vertical rotation to 90 degrees
              minAzimuthAngle={Math.PI}
              maxAzimuthAngle={Math.PI / 2}
              minDistance={10}
              maxDistance={50}
              camera={cameraRef.current}
            />
          </Suspense>
          <Environment preset="dawn" />
        </Canvas>
      </div>
    </section>
  )
}

function InfinityPath() {
  const points: THREE.Vector3[] = [];
  const a = 5; // scale factor for the size of the infinity symbol
  for (let t = 0; t < Math.PI * 2; t += 0.01) {
    const x = a * Math.sin(t);
    const y = a * Math.sin(t) * Math.cos(t);
    points.push(new THREE.Vector3(x, y, 0));
  }
  return (
    <Line
      points={points}
      color="red"
      lineWidth={1}
    />
  );
}

