"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.scss";
import Description from "@/components/Desription/Description";

export default function Page() {
  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    document.fonts.ready.then(() => {
      // Split the text into characters
      let split = SplitText.create(".text", {
        type: "chars, lines",
        autoSplit: true,
        mask: "lines",

        // onSplit: (self) => {
        //   gsap.from(self.chars, {
        //     y: 100,
        //     duration: 2,
        //     ease: "power3.out",
        //     yPercent: 100,
        //     autoAlpha: 0,
        //     opacity: 1,
        //     stagger: {
        //       amount: 0.6,
        //     },
        //   });
        // },
      });

      // Timeline globale
      const timeline = gsap.timeline({
        defaults: { duration: 2, autoAlpha: 0, yPercent: 100 },
      });
      timeline.to({}, { duration: 2 }).from(split.chars, {
        y: 100,
        yPercent: 100,
        autoAlpha: 0,
        ease: "power4.out",
        stagger: {
          // each: 0.03,
          amount: 1.5,
          // ease: "power3.inOut",
        },
      });
      gsap.to(timeline, {
        progress: 1,
        duration: timeline.duration(),
        ease: "power1.Out",
      });
    });

    // gsap.from(split.chars, {
    //   y: 100,
    //   autoAlpha: 0,
    //   stagger: {
    //     amount: 0.5,
    //     from: "start",
    //   },
    // });
  }, []);

  return (
    <div className="container">
      <div className="text">
        Break appart you txt like a pro, using splittext from gsap. This library
        is super usefull to make crazy animation. For now i'm just learning the
        text split, its usper efficient to splittext and create reveal
        animations, i love it !
      </div>
    </div>
  );
}
