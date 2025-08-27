import styles from "./style.module.scss";
import { useState } from "react";
import NavBarItem from "../NavBarItem/NavBarItem";
import { motion } from "framer-motion";
export default function Navbar({ activeSection, setActiveSection }) {
  const [hoverStatus, setHoverStatus] = useState(false);

  function action() {
    setHoverStatus(true);
  }

  return (
    <motion.div
      onMouseOver={() => action()}
      onMouseOut={() => setHoverStatus(false)}
      className={styles.navbar}
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
