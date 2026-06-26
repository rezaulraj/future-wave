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
    <main className="relative min-h-screen overflow-hidden bg-[#31323D] text-[#F6F5E8]">
      <SvgBackground className="opacity-100 fixed bg-[#31323D]" />

      <section className="relative z-10 min-h-screen">
        <HomeHero />
      </section>

      <section className="relative z-10 min-h-screen">
        <Challenges />
      </section>

      <section className="relative z-10 min-h-screen">
        <OurMission />
      </section>

      <section className="relative z-10 min-h-screen">
        <WhatWeDo />
      </section>

      <section className="relative z-10 min-h-screen">
        <GrobalWorkforceNetwork />
      </section>

      <section className="relative z-10 min-h-screen">
        <Spatialitys />
      </section>

      <section className="relative z-10 min-h-screen">
        <OurValue />
      </section>

      <section className="relative z-10 min-h-screen">
        <Cliend />
      </section>

      <section className="relative z-10 min-h-screen">
        <LetsTalks />
      </section>
    </main>
  );
};

export default Home;
