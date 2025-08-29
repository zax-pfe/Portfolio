"use client";
import React, { useEffect } from "react";
import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import styles from "./style.module.scss";
import { OrbitControls, useMotion } from "@react-three/drei";
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
} from "framer-motion";

export default function Index() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;

    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });
  return (
    <div className="z-50">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={1.9} />
        <directionalLight position={[2, 1, 1]} />
        <Ball mouse={mouse} />
        {/* <Cube /> */}
      </Canvas>
    </div>
  );
}

function Ball({ mouse }) {
  // const rotationX = useTransform(
  //   mouse,
  //   [0, 1],
  //   [rotation.x - 1, rotation.x + 1]
  // );
  const rotX = useTransform(mouse.y, [0, 1], [-0.1, 0.1]);
  const rotY = useTransform(mouse.x, [0, 1], [0.1, -0.1]);

  const { scrollY } = useScroll();
  const rawVelocity = useVelocity(scrollY);
  const velocity = useSpring(rawVelocity, { damping: 40, stiffness: 200 });

  const mesh = useRef(null);

  useFrame((state, delta) => {
    if (mesh.current) {
      let baseSpeed = -0.3;
      const boost = velocity.get() * -0.001;
      // mesh.current.rotation.y += delta * -0.3 * smoothSpeed.get();
      mesh.current.rotation.y += delta * (baseSpeed + boost);
      mesh.current.rotation.x = -0.18;
      // mesh.current.rotation.y += rotY.get();
      // mesh.current.rotation.x = rotX.get();
      // mesh.current.rotation.z = rotY.get();
    }
  });

  const texture_1 = useLoader(TextureLoader, "/assets/ballMaterial.png");

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
