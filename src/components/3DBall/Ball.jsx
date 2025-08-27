"use client";
import React, { useEffect } from "react";
import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import styles from "./style.module.scss";
import { OrbitControls } from "@react-three/drei";
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";

export default function Index() {
  return (
    <div className={styles.main}>
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <Ball />
        {/* <Cube /> */}
      </Canvas>
    </div>
  );
}

function Ball() {
  const mesh = useRef(null);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * -0.3;
      // mesh.current.rotation.x = rotX.get();
      // mesh.current.rotation.z = rotZ.get();
    }
  });

  const texture_1 = useLoader(TextureLoader, "/assets/2.png");

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[7, 16, 16]} />
      <meshStandardMaterial map={texture_1} />
    </mesh>
  );
}

// function Cube() {
//   const mesh = useRef(null);
//   useFrame((state, delta) => {
//     mesh.current.rotation.x += delta * 0.3;
//     mesh.current.rotation.y += delta * 0.3;
//     mesh.current.rotation.z += delta * 0.3;
//   });

//   const texture_1 = useLoader(TextureLoader, "/assets/3D Ball Test.png");

//   return (
//     <mesh ref={mesh}>
//       <boxGeometry args={[2.5, 2.5, 2.5]} />
//       <meshStandardMaterial map={texture_1} />
//     </mesh>
//   );
// }
