import React from "react";

import ContactFrom from "./ContactFrom";
import HeroContact from "./HeroContact";
import OurLocations from "./OurLocations";
import ReletedArticals from "./ReletedArticals";
import Faqs from "./Faqs";

import SvgBackground from "../../components/common/SvgBackground";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import LetsTalks from "../home/LetsTalks";

const Contact = () => {
  useSmoothScroll();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#31323d] text-[#F6F5E8]">
      <SvgBackground className="opacity-100 fixed" />
      <div className="relative z-10">
        <section className="relative min-h-screen">
          <HeroContact />
        </section>

        <section className="relative min-h-screen">
          <ContactFrom />
        </section>

        <section className="relative min-h-screen">
          <OurLocations />
        </section>

        <section className="relative min-h-screen">
          <ReletedArticals />
        </section>

        <section className="relative min-h-screen">
          <Faqs />
        </section>

        <section className="relative min-h-screen">
          <LetsTalks />
        </section>
      </div>
    </main>
  );
};

export default Contact;
