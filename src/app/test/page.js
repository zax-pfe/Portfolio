"use client";
import dynamic from "next/dynamic";
import React, { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import Scene from "@/components/CurvedImage/Scene";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  const [activeSection, setActiveSection] = useState("Home");
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    console.log("activeProject:", activeProject);
  }, [activeProject]);

  return (
    <main>
      <Scene activeProject={activeProject} />
      <div className="h-50"></div>
      <Projects
        setActiveSection={setActiveSection}
        setActiveProject={setActiveProject}
      />
      <div className="h-50"></div>
    </main>
  );
}
