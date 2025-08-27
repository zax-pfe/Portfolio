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
        name="Who am I"
        active={activeSection}
        hover={hoverStatus}
        setactive={setActiveSection}
      />
      <NavBarItem
        name="Chloe je t'aime"
        active={activeSection}
        hover={hoverStatus}
        setactive={setActiveSection}
      />
      <NavBarItem
        name="very strong"
        active={activeSection}
        hover={hoverStatus}
        setactive={setActiveSection}
      />
      <NavBarItem
        name="you'r mine"
        active={activeSection}
        hover={hoverStatus}
        setactive={setActiveSection}
      />
    </motion.div>
  );
}
