"use client";
import styles from "./style.module.scss";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import AnimatedHeaderText from "../AnimatedText/AnimatedHeaderText";
import AnimatedParagraphText from "../AnimatedText/AnimatedParagraphText";
import { motion } from "framer-motion";

export default function DoingRN({ setActiveSection, isLoading }) {
  return (
    <motion.section
      className={styles.DoingRN}
      onViewportEnter={() => setActiveSection("What i'm doing")}
      viewport={{ once: false, amount: 0.7 }}
      id="What i'm doing"
    >
      <h2>
        <AnimatedHeaderText
          text="What Am i doing Right Now ?"
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
        <div>
          <AnimatedParagraphText
            isLoading={isLoading}
            text="des panneaux de contrôle
          avec boutons, potentiomètres et écrans LCD pilotés par des cartes
          électroniques. Cette possibilité d'interagir directement avec la
          technologie m'a toujours fasciné, ce qui m'a orienté vers la robotique
          en début de carrière. Dans une startup parisienne"
          />
        </div>
        <div>
          <AnimatedParagraphText
            isLoading={isLoading}
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
