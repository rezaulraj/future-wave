import React from "react";

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

const Home = () => {
  useSmoothScroll();

  return (
    <main className="relative min-h-screen overflow-hidden md:overflow-visible bg-[#31323D] text-[#F6F5E8]">
      <SvgBackground className="opacity-100 fixed bg-[#31323D]" />

      <section className="relative z-10">
        <HomeHero />
      </section>

      <section className="relative z-10">
        <Challenges />
      </section>

      <section className="relative z-10">
        <OurMission />
      </section>

      <section className="relative z-10">
        <WhatWeDo />
      </section>

      <section className="relative z-10">
        <GrobalWorkforceNetwork />
      </section>

      <section className="relative z-10">
        <Spatialitys />
      </section>

      <section className="relative z-10">
        <OurValue />
      </section>

      <section className="relative z-10">
        <Cliend />
      </section>

      <section className="relative z-10">
        <LetsTalks />
      </section>
    </main>
  );
};

export default Home;
