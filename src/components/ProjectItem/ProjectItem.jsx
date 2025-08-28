import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
export default function ProjectItem({ projectname }) {
  const [hoverStatus, setHoverStatus] = useState(false);

  useEffect(() => {
    console.log("hoverStatus:", hoverStatus);
  }, [hoverStatus]);
  return (
    <motion.div
      className={styles.projectItem}
      onMouseEnter={() => setHoverStatus(true)}
      onMouseOut={() => setHoverStatus(false)}
    >
      <div className={styles.textContainer}>
        <div className={styles.stroke}>{projectname}</div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            hoverStatus
              ? { opacity: 1, transition: { duration: 0.3 } }
              : { opacity: 0, transition: { duration: 0.3 } }
          }
          className={styles.full}
        >
          {projectname}
        </motion.div>
      </div>
    </motion.div>
  );
}
