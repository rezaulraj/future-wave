import React from "react";

import HeroImpact from "./HeroImpact";
import LetsTalks from "../home/LetsTalks";
import SvgBackground from "../../components/common/SvgBackground";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import ImpactPromise from "./ImpactPromise";
import Spatialitys from "../about-us/Spatialitys";

const Impact = () => {
  useSmoothScroll();

  return (
    <main className="relative min-h-screen overflow-hidden md:overflow-visible bg-[#31323D] text-[#F6F5E8]">
      <SvgBackground className="opacity-100 fixed" />
      <div className="relative z-10">
        <section className="relative">
          <HeroImpact />
        </section>
        <section className="relative">
          <Spatialitys />
        </section>
        <section className="relative">
          <ImpactPromise />
        </section>

        <section className="relative">
          <LetsTalks />
        </section>
      </div>
    </main>
  );
};

export default Impact;
