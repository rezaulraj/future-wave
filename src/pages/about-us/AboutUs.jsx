import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroAboutUs from "./HeroAboutUs";
import OurStory from "./OurStory";
import LetsTalks from "../home/LetsTalks";

import SvgBackground from "../../components/common/SvgBackground";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import OurValue from "../home/OurValue";
import Spatialitys from "./Spatialitys";
import OurProcess from "../services/OurProcess";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRefs = useRef([]);

  useSmoothScroll();

  useEffect(() => {
    const triggers = [];

    sectionRefs.current.forEach((section) => {
      if (!section) return;

      const tween = gsap.fromTo(
        section,
        {
          y: 90,
          opacity: 0,
          scale: 0.96,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
          },
        },
      );

      triggers.push(tween.scrollTrigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger && trigger.kill());
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden md:overflow-visible bg-[#31323D] text-[#F6F5E8]">
      <div className="relative z-10">
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="relative min-h-screen"
        >
          <HeroAboutUs />
        </section>

        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className="relative min-h-screen"
        >
          <OurStory />
        </section>
        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          className="relative min-h-screen"
        >
          <OurValue />
        </section>
        <section
          ref={(el) => (sectionRefs.current[3] = el)}
          className="relative min-h-screen"
        >
          <OurProcess />
        </section>
        <section
          ref={(el) => (sectionRefs.current[4] = el)}
          className="relative min-h-screen"
        >
          <Spatialitys />
        </section>
        <section
          ref={(el) => (sectionRefs.current[5] = el)}
          className="relative min-h-screen"
        >
          <LetsTalks />
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
