import React from "react";

import HeroLivejob from "./HeroLivejob";
import JobList from "./JobList";
import LetsTalks from "../home/LetsTalks";
import SvgBackground from "../../components/common/SvgBackground";
import useSmoothScroll from "../../hooks/useSmoothScroll";

const LiveJob = () => {
  useSmoothScroll();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#31323D] text-[#F6F5E8]">
      <SvgBackground className="opacity-100 fixed" />
      <div className="relative z-10">
        <section className="relative min-h-screen">
          <HeroLivejob />
        </section>

        <section className="relative min-h-screen">
          <JobList />
        </section>

        <section className="relative min-h-screen">
          <LetsTalks />
        </section>
      </div>
    </main>
  );
};

export default LiveJob;
