import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Schedule from "../../components/common/Schedule";

gsap.registerPlugin(ScrollTrigger);

const LetsTalks = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRefs = useRef([]);
  const btnRefs = useRef([]);
  const [showContactForm, setShowContactForm] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 90, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        badgeRef.current,
        { y: 25, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        titleRefs.current,
        { y: 110, opacity: 0, rotateX: 80 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.15,
          stagger: 0.12,
          delay: 0.25,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 68%",
          },
        },
      );

      gsap.fromTo(
        btnRefs.current,
        { y: 35, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
          delay: 0.75,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const title = ["TALK TO US ABOUT", "HOW WE CAN HELP"];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-24 bg-[#31323D] text-[#F6F5E8] font-arimo md:px-14"
    >
      <div
        ref={cardRef}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-lime-300/60 bg-white/[0.045] px-7 py-14 shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:px-12 md:py-20"
      >
        <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-lime-300/15 blur-[100px]" />
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-lime-300 to-transparent" />

        <div className="absolute right-8 top-8 hidden h-28 w-28 rounded-full border border-lime-300/25 md:block" />
        <div className="absolute right-14 top-14 hidden h-16 w-16 rounded-full border border-white/10 md:block" />

        <div className="relative z-10">
          <div
            ref={badgeRef}
            className="mb-10 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-[#31323d]/20 px-4 py-2 backdrop-blur-xl"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full border border-lime-300/60 text-lime-300">
              ◌
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F6F5E8]/85">
              Let’s Talk
            </p>
          </div>

          <div className="space-y-1">
            {title.map((line, index) => (
              <div key={index} className="overflow-hidden pb-1">
                <h2
                  ref={(el) => (titleRefs.current[index] = el)}
                  className="max-w-5xl text-[2.7rem] font-semibold uppercase leading-[0.92] tracking-[-0.06em] text-[#F6F5E8] sm:text-[4rem] md:text-[5.4rem] xl:text-[6rem]"
                >
                  {line}
                </h2>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => {
                setShowContactForm(true);
              }}
              className="group relative w-fit overflow-hidden rounded-full border border-lime-300 px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-lime-300 transition-all duration-500 hover:scale-105 hover:text-black"
            >
              <span className="absolute inset-0 -translate-x-full bg-lime-300 transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative z-10">Schedule a call</span>
            </button>

            <a
              ref={(el) => (btnRefs.current[1] = el)}
              href="mailto:hello@example.com"
              className="group relative w-fit overflow-hidden rounded-full border border-white/15 bg-white/[0.045] px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-white/80 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-white/40 hover:bg-white hover:text-black"
            >
              <span className="relative z-10">Email us</span>
            </a>
          </div>
        </div>
      </div>
      <Schedule
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </section>
  );
};

export default LetsTalks;
