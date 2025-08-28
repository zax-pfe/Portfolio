import styles from "./style.module.scss";
import ProjectItem from "../ProjectItem/ProjectItem";
export default function Projects() {
  return (
    <div className={styles.projects}>
      <ProjectItem projectname={"CHLOE JE TAIME"} />
      <ProjectItem projectname={"Bonsoir Paris"} />
      <ProjectItem projectname={"Bienvenue dans"} />
      <ProjectItem projectname={"Mon cul"} />
    </div>
  );
}
