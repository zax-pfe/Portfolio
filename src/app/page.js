"use client";
import Image from "next/image";
import Loader from "@/components/Loader/Loader";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Description from "@/components/Desription/Description";
import Lenis from "lenis";
import DoingRN from "@/components/DoingRN/DoingRN";
import MyBackGround from "@/components/MyBackGround/MyBackGround";
import Navbar from "@/components/NavBar/NavBar";
import Panel from "@/components/Panel/Panel";
import ProjectW3D from "@/components/ProjectW3D/ProjectW3D";
import ProjectDescription from "@/components/ProjectDescription/ProjectDescription";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      document.body.style.overflow = "auto";
      window.scrollTo(0, 0);
      setActiveSection("Home");
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.pageContainer}>
      {isLoading && <Loader />}
      <Panel />
      <div className={styles.content}>
        <div className={styles.textSectionContainer}>
          <Description setActiveSection={setActiveSection} />
          <DoingRN setActiveSection={setActiveSection} isLoading={isLoading} />
          <MyBackGround
            setActiveSection={setActiveSection}
            isLoading={isLoading}
          />
          <ProjectDescription
            setActiveSection={setActiveSection}
            isLoading={isLoading}
          />
        </div>
        <ProjectW3D setActiveSection={setActiveSection} />
        <div className={styles.textSectionContainer}>
          <Contact setActiveSection={setActiveSection} isLoading={isLoading} />
        </div>
      </div>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
    // <main>
    //   {isLoading && <Loader />}
    //   <StickyElement
    //     activeSection={activeSection}
    //     setActiveSection={setActiveSection}
    //   />
    //   <div className={styles.main}>
    //     <div className={styles.content}>
    //       <Description setActiveSection={setActiveSection} />
    //       <DoingRN setActiveSection={setActiveSection} />
    //       <MyBackGround setActiveSection={setActiveSection} />
    //     </div>
    //     <Projects />
    //   </div>
    //   {/* <Navbar /> */}
    //   {/* <Hero /> */}
    //   {/* <Cube /> */}
    // </main>
  );
}
