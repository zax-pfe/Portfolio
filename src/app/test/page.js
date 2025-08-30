"use client";
import dynamic from "next/dynamic";
import React, { useRef, useEffect, useState } from "react";
import PanelPhone from "@/components/Phone/PanelPhone/PanelPhone";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <PanelPhone ballSize={5} />
      <div className={styles.testElement}>this is a test</div>
    </div>
  );
}
