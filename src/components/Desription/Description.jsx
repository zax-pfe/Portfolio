"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
export default function Description({ setActiveSection }) {
  gsap.registerPlugin(SplitText);
  useGSAP(() => {
    document.fonts.ready.then(() => {
      let split = SplitText.create(".text", {
        type: "chars, lines",
        autoSplit: true,
        mask: "lines",
      });
      const timeline = gsap.timeline({
        defaults: { duration: 1.5, autoAlpha: 0, yPercent: 100 },
      });
      timeline.to({}, { duration: 3.5 }).from(split.chars, {
        y: 100,
        yPercent: 100,
        autoAlpha: 0,
        ease: "power4.out",
        stagger: {
          amount: 1.5,
        },
      });
      gsap.to(timeline, {
        progress: 1,
        duration: timeline.duration(),
        ease: "power1.Out",
      });
    });
  }, []);

  return (
    <motion.section
      className={styles.description}
      onViewportEnter={() => setActiveSection("Who am I")}
      viewport={{ once: false, amount: 0.5 }}
    >
      <h1 className="text">
        Break appart you txt like a pro, using splittext from gsap. This library
        is super usefull to make crazy animation. For now i'm just learning the
        text split, its usper efficient to splittext and create reveal
        animations, i love it !
      </h1>
    </motion.section>
  );
}
