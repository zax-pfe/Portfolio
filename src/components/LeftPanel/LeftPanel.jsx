"use client";
import styles from "./style.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import Ball from "@/components/3DBall/Ball";

export default function leftPanel() {
  const panel = useRef(null);
  const screenRef = useRef(null);
  const timeline = gsap.timeline();

  useGSAP(() => {
    timeline
      .to({}, { duration: 2 })

      .from(panel.current, {
        opacity: 0,
        duration: 1.5,
      })
      .to(screenRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          screenRef.current.style.display = "none";
          screenRef.current.style.pointerEvents = "none";
        },
      });
  }, []);
  return (
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
  );
}
