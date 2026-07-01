import React from "react";

import HeroAboutUs from "./HeroAboutUs";
import OurStory from "./OurStory";
import LetsTalks from "../home/LetsTalks";

import SvgBackground from "../../components/common/SvgBackground";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import OurValue from "../home/OurValue";
import Spatialitys from "./Spatialitys";
import OurProcess from "../services/OurProcess";

const AboutUs = () => {
  useSmoothScroll();

  return (
    <main className="relative min-h-screen overflow-hidden md:overflow-visible bg-[#31323D] text-[#F6F5E8]">
      <SvgBackground className="opacity-100 fixed" />
      <div className="relative z-10">
        <section className="relative">
          <HeroAboutUs />
        </section>

        <section className="relative">
          <OurStory />
        </section>

        <section className="relative">
          <OurValue />
        </section>

        <section className="relative">
          <OurProcess />
        </section>

        <section className="relative">
          <Spatialitys />
        </section>

        <section className="relative">
          <LetsTalks />
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
