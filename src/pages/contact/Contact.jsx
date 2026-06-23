import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ContactFrom from "./ContactFrom";
import HeroContact from "./HeroContact";
import OurLocations from "./OurLocations";
import ReletedArticals from "./ReletedArticals";
import Faqs from "./Faqs";

import SvgBackground from "../../components/common/SvgBackground";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import LetsTalks from "../home/LetsTalks";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
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
      {/* <div className="fixed inset-0 z-0">
        <SvgBackground className="opacity-45" />
      </div> */}

      {/* <div className="fixed inset-0 z-[1] bg-[radial-gradient(circle_at_15%_10%,rgba(190,242,100,0.10),transparent_28%),radial-gradient(circle_at_85%_45%,rgba(34,211,238,0.08),transparent_30%),linear-gradient(90deg,rgba(16,19,26,0.94),rgba(16,19,26,0.72),rgba(16,19,26,0.88))]" /> */}

      <div className="fixed left-[-160px] top-[15%] z-[1] h-[520px] w-[520px] rounded-full bg-lime-300/10 blur-[160px]" />
      <div className="fixed right-[-180px] top-[45%] z-[1] h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative z-10">
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="relative min-h-screen"
        >
          <HeroContact />
        </section>

        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className="relative min-h-screen"
        >
          <ContactFrom />
        </section>

        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          className="relative min-h-screen"
        >
          <OurLocations />
        </section>

        <section
          ref={(el) => (sectionRefs.current[3] = el)}
          className="relative min-h-screen"
        >
          <ReletedArticals />
        </section>

        <section
          ref={(el) => (sectionRefs.current[4] = el)}
          className="relative min-h-screen"
        >
          <Faqs />
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

export default Contact;
