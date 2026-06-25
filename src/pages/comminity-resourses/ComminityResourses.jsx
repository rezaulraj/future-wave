import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroComminityResourses from "./HeroComminityResourses";
import Resources from "./Resources";
import OurBlogs from "./OurBlogs";
import LetsTalks from "../home/LetsTalks";

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
    <main className="relative min-h-screen overflow-hidden bg-[#31323D] text-[#F6F5E8]">
      <div className="relative z-10">
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="relative min-h-screen"
        >
          <HeroComminityResourses />
        </section>

        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className="relative min-h-screen"
        >
          <Resources />
        </section>

        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          className="relative min-h-screen"
        >
          <OurBlogs />
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

export default ComminityResourses;
