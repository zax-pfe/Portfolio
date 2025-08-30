import styles from "./style.module.scss";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

export default function BurgerItems() {
  const itemsRef = useRef(null);

  useGSAP(() => {
    const items = itemsRef.current.querySelectorAll(`.${styles.item}`);
    const timeline = gsap.timeline();
    timeline
      .to({}, { duration: 0.7 }) // Délai initial si nécessaire
      .from(items, {
        opacity: 0,
        x: -30, // Déplacement vertical pour un effet plus dynamique
        // duration: 0.5,
        stagger: 0.08, // Délai de 0.2s entre chaque élément
        ease: "power4.inOut",
      });
  }, []);

  return (
    <div ref={itemsRef} className={styles.burgeritems}>
      <Item name={"Home"} />
      <Item name={"What i'm doing"} />
      <Item name={"My background"} />
      <Item name={"Projects"} />
      <Item name={"Contact"} />
    </div>
  );
}

function Item({ name }) {
  return <div className={styles.item}>{name}</div>;
}
