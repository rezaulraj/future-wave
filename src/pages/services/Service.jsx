import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroService from "./HeroService";
import ServiceList from "./ServiceList";
import LetsTalks from "../home/LetsTalks";
import SvgBackground from "../../components/common/SvgBackground";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import OurProcess from "./OurProcess";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
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
    <main className="relative min-h-screen overflow-hidden bg-[#151820] text-[#f4f1e8]">
      {/* glow effect */}
      <div className="fixed left-[-160px] top-[15%] z-[1] h-[520px] w-[520px] rounded-full bg-lime-300/10 blur-[160px]" />
      <div className="fixed right-[-180px] top-[45%] z-[1] h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative z-10">
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="relative min-h-screen"
        >
          <HeroService />
        </section>

        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className="relative min-h-screen"
        >
          <ServiceList />
        </section>
        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          className="relative min-h-screen"
        >
          <OurProcess />
        </section>
        <section
          ref={(el) => (sectionRefs.current[3] = el)}
          className="relative min-h-screen"
        >
          <LetsTalks />
        </section>
      </div>
    </main>
  );
};

export default Service;
