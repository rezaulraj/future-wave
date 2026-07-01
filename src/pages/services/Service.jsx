import React from "react";

import HeroService from "./HeroService";
import ServiceList from "./ServiceList";
import LetsTalks from "../home/LetsTalks";
import SvgBackground from "../../components/common/SvgBackground";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import OurProcess from "./OurProcess";

const Service = () => {
  useSmoothScroll();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#31323D] text-[#F6F5E8]">
      <SvgBackground className="opacity-100 fixed" />
      <div className="relative z-10">
        <section className="relative">
          <HeroService />
        </section>

        <section className="relative">
          <ServiceList />
        </section>

        <section className="relative">
          <OurProcess />
        </section>

        <section className="relative">
          <LetsTalks />
        </section>
      </div>
    </main>
  );
};

export default Service;
