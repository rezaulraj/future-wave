import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HomeHero from "./HomeHero";
import Cliend from "./Cliend";
import SvgBackground from "../../components/common/SvgBackground";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import OurMission from "./OurMission";
import WhatWeDo from "./WhatWeDo";
import OurValue from "./OurValue";
import LetsTalks from "./LetsTalks";
import Challenges from "./Challenges";
import Spatialitys from "../about-us/Spatialitys";
import GrobalWorkforceNetwork from "./GrobalWorkforceNetwork";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRefs = useRef([]);

  useSmoothScroll();

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      if (!section) return;

      gsap.fromTo(
        section,
        {
          y: 90,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 35%",
            scrub: false,
          },
        },
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden md:overflow-visible text-white bg-[#151820]">
      {/* <SvgBackground /> */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#10131a]/95 via-[#10131a]/70 to-[#10131a]/20" />
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="relative z-10 min-h-screen"
      >
        <HomeHero />
      </section>
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="relative z-10 min-h-screen"
      >
        <Challenges />
      </section>

      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="relative z-10 min-h-screen"
      >
        <OurMission />
      </section>

      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="relative z-10 min-h-screen"
      >
        <WhatWeDo />
      </section>
      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        className="relative z-10 min-h-screen"
      >
        <GrobalWorkforceNetwork />
      </section>
      <section
        ref={(el) => (sectionRefs.current[5] = el)}
        className="relative z-10 min-h-screen"
      >
        <Spatialitys />
      </section>

      <section
        ref={(el) => (sectionRefs.current[6] = el)}
        className="relative z-10 min-h-screen"
      >
        <OurValue />
      </section>

      <section
        ref={(el) => (sectionRefs.current[7] = el)}
        className="relative z-10 min-h-screen"
      >
        <Cliend />
      </section>
      <section
        ref={(el) => (sectionRefs.current[8] = el)}
        className="relative z-10 min-h-screen"
      >
        <LetsTalks />
      </section>
      {/* <section
        ref={(el) => (sectionRefs.current[5] = el)}
        className="relative z-10 min-h-screen px-5 py-24"
      >
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-white/50">
            More Section
          </p>
          <h2 className="text-4xl font-bold md:text-7xl">
            Add more components here
          </h2>
        </div>
      </section> */}
    </main>
  );
};

export default Home;
