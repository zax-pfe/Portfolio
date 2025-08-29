// Scene.jsx
import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";

export default function Scene({ scrollProgress, activeProject }) {
  return (
    <div className="fixed top-0 h-screen w-full">
      <Canvas>
        <Model scrollProgress={scrollProgress} activeProject={activeProject} />
      </Canvas>
    </div>
  );
}
