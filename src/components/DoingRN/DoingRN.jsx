"use client";
import styles from "./style.module.scss";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import AnimatedText from "../AnimatedText/AnimatedHeaderText";
import AnimatedParagraphText from "../AnimatedText/AnimatedParagraphText";
import { motion } from "framer-motion";

export default function DoingRN({ setActiveSection }) {
  const headerRef = useRef(null);

  return (
    <motion.section
      className={styles.DoingRN}
      onViewportEnter={() => setActiveSection("Chloe je t'aime")}
      viewport={{ once: false, amount: 0.5 }}
    >
      <h2 ref={headerRef}>
        <AnimatedText text="What Am i doing Right Now ?" />{" "}
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
        <div>
          <AnimatedParagraphText
            text="des panneaux de contrôle
          avec boutons, potentiomètres et écrans LCD pilotés par des cartes
          électroniques. Cette possibilité d'interagir directement avec la
          technologie m'a toujours fasciné, ce qui m'a orienté vers la robotique
          en début de carrière. Dans une startup parisienne"
          />
        </div>
        <div>
          <AnimatedParagraphText
            text="des panneaux de contrôle
          avec boutons, potentiomètres et écrans LCD pilotés par des cartes
          électroniques. Cette possibilité d'interagir directement avec la
          technologie m'a toujours fasciné, ce qui m'a orienté vers la robotique
          en début de carrière. Dans une startup parisienne "
          />
        </div>
      </div>
    </motion.section>
  );
}
