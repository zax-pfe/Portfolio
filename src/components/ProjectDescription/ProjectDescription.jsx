"use client";
import styles from "./style.module.scss";
import React, { useRef } from "react";
import AnimatedHeaderText from "../AnimatedText/AnimatedHeaderText";
import AnimatedParagraphText from "../AnimatedText/AnimatedParagraphText";
import { motion } from "framer-motion";

export default function ProjectDescription({ setActiveSection, isLoading }) {
  const headerRef = useRef(null);

  return (
    <motion.section
      className={styles.ProjectDescription}
      onViewportEnter={() => setActiveSection("Projects")}
      viewport={{ once: false, amount: 0.5 }}
      id="Projects"
    >
      <h2 ref={headerRef}>
        <AnimatedHeaderText
          text="Some Project i have worked on"
          isLoading={isLoading}
        />{" "}
      </h2>
      <div className={styles.textContainer}>
        <div>
          <AnimatedParagraphText
            isLoading={isLoading}
            text="Developeur python basé a bruxelles, j ai fais une école d ingénieur ou
          j ai suivi une formation qui m a ouvert les portes du métier d
          ingenieur informatique, entre data scientist et develper backend"
          />
        </div>
        <div>
          <AnimatedParagraphText
            isLoading={isLoading}
            text="je souhaite rejoindre la formation Expert en Création Numerique
          interactive avec option lead technique Mes premières interfaces
          interactives étaient purement physiques : "
          />
        </div>
      </div>
    </motion.section>
  );
}
