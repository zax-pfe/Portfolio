"use client";
import styles from "./style.module.scss";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import AnimatedText from "../AnimatedText/AnimatedHeaderText";
import AnimatedParagraphText from "../AnimatedText/AnimatedParagraphText";

export default function MyBackGround({ setActiveSection }) {
  const headerRef = useRef(null);

  return (
    <section
      className={styles.DoingRN}
      onViewportEnter={() => setActiveSection("Who am I")}
      viewport={{ once: false, amount: 0.5 }}
      id="about"
    >
      <h2 ref={headerRef}>
        <AnimatedText text="My Background" />{" "}
      </h2>
      <div className={styles.textContainer}>
        <div>
          <AnimatedParagraphText
            text="Developeur python basé a bruxelles, j ai fais une école d ingénieur ou
          j ai suivi une formation qui m a ouvert les portes du métier d
          ingenieur informatique, entre data scientist et develper backend"
          />
        </div>
        <div>
          <AnimatedParagraphText
            text="je souhaite rejoindre la formation Expert en Création Numerique
          interactive avec option lead technique Mes premières interfaces
          interactives étaient purement physiques : "
          />
        </div>
      </div>
    </section>
  );
}
