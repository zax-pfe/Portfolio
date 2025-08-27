"use client";
import styles from "./page.module.scss";
import LeftPanel from "@/components/LeftPanel/LeftPanel";
import Description from "@/components/Desription/Description";
import Navbar from "@/components/NavBar/NavBar";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import Ball from "@/components/3DBall/Ball";

export default function Page() {
  const panel = useRef(null);
  const screenRef = useRef(null);
  const navBar = useRef(null);
  const timeline = gsap.timeline();

  useGSAP(() => {
    timeline
      .to({}, { duration: 1 })

      .from(panel.current, {
        opacity: 0,
        duration: 1.5,
      })
      .from(
        navBar.current,
        {
          opacity: 0,
          duration: 1.5,
        },
        "-=1.5"
      )

      .to(
        screenRef.current,
        {
          opacity: 0,
          duration: 2,
          onComplete: () => {
            screenRef.current.style.display = "none";
            screenRef.current.style.pointerEvents = "none";
          },
        },
        "-=1"
      );
  }, []);

  return (
    <>
      <div className={styles.styckyelements}>
        <div className={styles.LeftPanel}>
          <div className={styles.ballcontainer}>
            <div ref={screenRef} className={styles.screen} />
            <Ball />
          </div>
          <div ref={panel} className={styles.infopanel}>
            <p> Axel Puech</p>
            <p> Créative developper </p>
          </div>
        </div>
        <div ref={navBar}>
          <Navbar />
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.content}>
          <Description />
        </div>
      </div>
    </>
  );
}
