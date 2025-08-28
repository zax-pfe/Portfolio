"use client";

import LeftPanel from "@/components/LeftPanel/LeftPanel";
import Navbar from "@/components/NavBar/NavBar";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftPanel}></div>
      <div className={styles.content}></div>
      <div className={styles.navbar}></div>
    </div>
  );
}
