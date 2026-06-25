import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Schedule from "../../components/common/Schedule";

gsap.registerPlugin(ScrollTrigger);

const OurMission = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRefs = useRef([]);
  const contentRefs = useRef([]);
  const quoteRefs = useRef([]);
  const buttonRef = useRef(null);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        badgeRef.current,
        { y: 25, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        titleRefs.current,
        { y: 120, opacity: 0, rotateX: 75 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.15,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        },
      );

      gsap.fromTo(
        contentRefs.current,
        { y: 40, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.15,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        },
      );

      gsap.fromTo(
        quoteRefs.current,
        { x: 70, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.18,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
          },
        },
      );

      gsap.fromTo(
        buttonRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const title = ["WE HELP YOU", "ATTRACT THE", "BRIGHTEST AND", "BEST TALENT"];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden font-arimo px-5 py-24 text-[#31323d] md:px-14 md:py-32"
    >
      {/* <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-lime-300/10 blur-[160px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-400/10 blur-[150px]" /> */}

      <div className="container relative z-10 mx-auto grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <div>
          <div
            ref={badgeRef}
            className="mb-6 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.9)]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F6F5E8]/85">
              Our Mission
            </p>
          </div>

          <div className="space-y-1">
            {title.map((line, index) => (
              <div key={index} className="overflow-hidden pb-1">
                <h2
                  ref={(el) => (titleRefs.current[index] = el)}
                  className="text-[2.8rem] font-semibold uppercase leading-[0.93] tracking-[-0.06em] text-[#F6F5E8] sm:text-[4rem] md:text-[4.5rem] xl:text-[5rem]"
                >
                  {line}
                </h2>
              </div>
            ))}
          </div>

          <div className="mt-10 hidden h-px w-full max-w-sm bg-gradient-to-r from-lime-300/80 to-transparent lg:block" />
        </div>

        <div className="space-y-7">
          <p
            ref={(el) => (contentRefs.current[0] = el)}
            className="max-w-xl text-base leading-8 font-montserrat text-[#F6F5E8]/75 md:text-lg"
          >
            We work in partnership with you, shaping your employer brand and
            connecting you with powerful networks and communities, so you can
            attract the talent you deserve.
          </p>

          <div
            ref={(el) => (quoteRefs.current[0] = el)}
            className="group relative overflow-hidden bg-white/[0.06] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-lime-300/40 hover:bg-white/[0.09]"
          >
            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-lime-300/10 blur-3xl" />

            <p className="relative z-10 text-xl font-black leading-8 text-[#f4f1e8] md:text-2xl">
              <span className="text-lime-300">“</span>I would one hundred
              percent rate this as a five-star plus experience, it was
              everything I could have wanted! My trust in Cherry was so high and
              the level of vetting was incredible. We will definitely be working
              with Above & Beyond when we next recruit.
              <span className="text-lime-300">”</span>
            </p>

            <p className="relative z-10 mt-5 text-[10px] font-black uppercase tracking-[0.18em] text-[#F6F5E8]/45">
              — Juliette Devillard, Founder at Climate Connection
            </p>
          </div>

          <div
            ref={(el) => (quoteRefs.current[1] = el)}
            className="group relative overflow-hidden bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-lime-300/40 hover:bg-white/[0.08]"
          >
            <div className="absolute -left-20 -bottom-20 h-44 w-44 rounded-full bg-violet-400/10 blur-3xl" />

            <p className="relative z-10 text-lg font-black leading-8 text-[#F6F5E8] md:text-xl">
              <span className="text-lime-300">“</span>It was certainly a much
              faster process and more candidates than I would have ever been
              able to find on my own. I’d absolutely recommend you to others. I
              had a really positive result.
              <span className="text-lime-300">”</span>
            </p>

            <p className="relative z-10 mt-5 text-[10px] font-black uppercase tracking-[0.18em] text-[#F6F5E8]/45">
              — Peter Clutton-Brock, Co-Founder at Centre for AI and Climate
            </p>
          </div>

          <button
            ref={buttonRef}
            onClick={() => {
              setShowContactForm(true);
            }}
            className="group relative overflow-hidden rounded-full border border-lime-300 px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-lime-300 transition-all duration-500 hover:scale-105 hover:text-[#31323d]"
          >
            <span className="absolute inset-0 -translate-x-full bg-lime-300 transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative z-10">Schedule a call</span>
          </button>
        </div>
      </div>
      <Schedule
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </section>
  );
};

export default OurMission;
