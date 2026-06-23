import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroComminityResourses from "./HeroComminityResourses";
import Resources from "./Resources";
import OurBlogs from "./OurBlogs";
import LetsTalks from "../home/LetsTalks";

import SvgBackground from "../../components/common/SvgBackground";
import useSmoothScroll from "../../hooks/useSmoothScroll";

gsap.registerPlugin(ScrollTrigger);

const ComminityResourses = () => {
  const sectionRefs = useRef([]);

  useSmoothScroll();

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        gsap.fromTo(
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
            delay: index * 0.03,
            ease: "power4.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              end: "top 35%",
              scrub: false,
            },
          },
        );
      });

      gsap.to(".floating-glow-left", {
        y: -60,
        x: 30,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-glow-right", {
        y: 50,
        x: -20,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#151820] text-[#f4f1e8]">
      {/* svg background */}
      {/* <div className="fixed inset-0 z-0">
        <SvgBackground className="opacity-45" />
      </div> */}

      {/* overlays */}
      <div className="fixed inset-0 z-[1] bg-[radial-gradient(circle_at_15%_10%,rgba(190,242,100,0.08),transparent_26%),radial-gradient(circle_at_85%_50%,rgba(34,211,238,0.07),transparent_28%),linear-gradient(90deg,rgba(16,19,26,0.96),rgba(16,19,26,0.72),rgba(16,19,26,0.88))]" />

      {/* floating glow */}
      <div className="floating-glow-left fixed left-[-160px] top-[12%] z-[1] h-[540px] w-[540px] rounded-full bg-lime-300/10 blur-[170px]" />

      <div className="floating-glow-right fixed right-[-180px] top-[48%] z-[1] h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-[190px]" />

      {/* noise */}
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03] mix-blend-soft-light [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10">
        {/* hero */}
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="relative min-h-screen"
        >
          <HeroComminityResourses />
        </section>

        {/* resources */}
        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className="relative min-h-screen"
        >
          <Resources />
        </section>

        {/* blogs */}
        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          className="relative min-h-screen"
        >
          <OurBlogs />
        </section>

        {/* cta */}
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

export default ComminityResourses;
