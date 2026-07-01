import React from "react";

import HeroComminityResourses from "./HeroComminityResourses";
import Resources from "./Resources";
import OurBlogs from "./OurBlogs";
import LetsTalks from "../home/LetsTalks";

import useSmoothScroll from "../../hooks/useSmoothScroll";
import SvgBackground from "../../components/common/SvgBackground";

const ComminityResourses = () => {
  useSmoothScroll();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#31323D] text-[#F6F5E8]">
      <SvgBackground className="opacity-100 fixed" />
      <div className="relative z-10">
        <section className="relative">
          <HeroComminityResourses />
        </section>

        <section className="relative">
          <Resources />
        </section>

        <section className="relative">
          <OurBlogs />
        </section>

        <section className="relative">
          <LetsTalks />
        </section>
      </div>
    </main>
  );
};

export default ComminityResourses;
