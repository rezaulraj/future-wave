import React from "react";

import HeroImpact from "./HeroImpact";
import LetsTalks from "../home/LetsTalks";
import SvgBackground from "../../components/common/SvgBackground";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import ImpactPromise from "./ImpactPromise";

const Impact = () => {
  useSmoothScroll();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#31323D] text-[#F6F5E8]">
      <SvgBackground className="opacity-100 fixed" />
      <div className="relative z-10">
        <section className="relative min-h-screen">
          <HeroImpact />
        </section>

        <section className="relative min-h-screen">
          <ImpactPromise />
        </section>

        <section className="relative min-h-screen">
          <LetsTalks />
        </section>
      </div>
    </main>
  );
};

export default Impact;
