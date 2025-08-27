"use client";
import Image from "next/image";
import Loader from "@/components/Loader/Loader";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Description from "@/components/Desription/Description";
import Lenis from "lenis";
import StickyElement from "@/components/StickyElement/StickyElement";
import DoingRN from "@/components/DoingRN/DoingRN";
import MyBackGround from "@/components/MyBackGround/MyBackGround";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("Who am I");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      document.body.style.overflow = "auto";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);
  return (
    <main>
      {isLoading && <Loader />}
      <StickyElement
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className={styles.main}>
        <div className={styles.content}>
          <Description setActiveSection={setActiveSection} />
          <DoingRN setActiveSection={setActiveSection} />
          <MyBackGround setActiveSection={setActiveSection} />
        </div>
      </div>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Cube /> */}
    </main>
  );
}
