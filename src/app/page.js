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
import useDevice from "./hooks/useDevice";
import useBallSize from "./hooks/useBalllSize";
import PanelPhone from "@/components/Phone/PanelPhone/PanelPhone";
import InfoSection from "@/components/Phone/InfoSectionPhone/inforSectionPhone";
import { navlist } from "./data/navlist";

import { doingrntext, mybackgroundtext, projectstext } from "./data/text";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("Home");
  const device = useDevice();
  const ballSize = useBallSize(device);
  console.log("ballsize", ballSize);

  useEffect(() => {
    // Lenis scroll init
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Hide the loader and scroll to the top while loading
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    // Setting up the size of the ball rearding the device used

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
      {device === "phone" ? (
        <div className={styles.phoneContainer}>
          <PanelPhone
            ballSize={ballSize}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <div className={styles.content}>
            <div className={styles.textSectionContainerPhone}>
              <Description setActiveSection={setActiveSection} />

              <InfoSection
                setActiveSection={setActiveSection}
                isLoading={isLoading}
                name={"What i am doing right Now"}
                id={navlist[1].name}
                texts={doingrntext}
              />

              <InfoSection
                setActiveSection={setActiveSection}
                isLoading={isLoading}
                name={"My Background"}
                id={navlist[2].name}
                texts={mybackgroundtext}
              />

              <InfoSection
                setActiveSection={setActiveSection}
                isLoading={isLoading}
                name={"Some Project i have worked on"}
                id={navlist[3].name}
                texts={projectstext}
              />
            </div>
            <ProjectW3D setActiveSection={setActiveSection} />
            <div className={styles.textSectionContainerPhone}>
              <Contact
                setActiveSection={setActiveSection}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Panel ballSize={ballSize} />
          <div className={styles.content}>
            <div className={styles.textSectionContainer}>
              <Description setActiveSection={setActiveSection} />
              <DoingRN
                setActiveSection={setActiveSection}
                isLoading={isLoading}
              />
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
              <Contact
                setActiveSection={setActiveSection}
                isLoading={isLoading}
              />
            </div>
          </div>
          <Navbar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </>
      )}
    </div>
  );
}
