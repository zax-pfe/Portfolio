import styles from "./style.module.scss";
import ProjectItem from "../ProjectItem/ProjectItem";
import { motion } from "framer-motion";
export default function Projects({ setActiveSection, setActiveProject }) {
  return (
    <motion.section
      className={styles.projects}
      // onViewportEnter={() => setActiveSection("Projects")}
      // viewport={{ once: false, amount: 0.5 }}
      // id="Projects"
    >
      <ProjectItem
        projectname={"CHLOE JE TAIME"}
        projectId={0}
        setActiveProject={setActiveProject}
      />
      <ProjectItem
        projectname={"Bonsoir Paris"}
        projectId={1}
        setActiveProject={setActiveProject}
      />
      <ProjectItem
        projectname={"Bienvenue dans"}
        projectId={2}
        setActiveProject={setActiveProject}
      />
      <ProjectItem
        projectname={"Mon cul"}
        projectId={3}
        setActiveProject={setActiveProject}
      />
    </motion.section>
  );
}
