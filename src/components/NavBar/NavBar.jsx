import styles from "./style.module.scss";
import { useState, useRef } from "react";
import NavBarItem from "../NavBarItem/NavBarItem";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar({ activeSection, setActiveSection }) {
  const [hoverStatus, setHoverStatus] = useState(false);
  const timeline = gsap.timeline();
  const navbar = useRef(null);

  function action() {
    setHoverStatus(true);
  }
  useGSAP(() => {
    timeline
      .to({}, { duration: 2 })

      .from(navbar.current, {
        opacity: 0,
        duration: 1.5,
      });
  }, []);

  return (
    <motion.div
      onMouseOver={() => action()}
      onMouseOut={() => setHoverStatus(false)}
      className={styles.navbar}
      ref={navbar}
    >
      <NavBarItem
        name="Home"
        active={activeSection}
        hover={hoverStatus}
        setactive={setActiveSection}
      />
      <NavBarItem
        name="What i'm doing"
        active={activeSection}
        hover={hoverStatus}
        setactive={setActiveSection}
      />
      <NavBarItem
        name="My background"
        active={activeSection}
        hover={hoverStatus}
        setactive={setActiveSection}
      />
      <NavBarItem
        name="Projects"
        active={activeSection}
        hover={hoverStatus}
        setactive={setActiveSection}
      />
      <NavBarItem
        name="Contact"
        active={activeSection}
        hover={hoverStatus}
        setactive={setActiveSection}
      />
    </motion.div>
  );
}
