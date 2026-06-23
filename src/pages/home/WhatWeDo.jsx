import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Calendly from "../../components/common/Calendly";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Retained recruitment",
    icon: "△",
    text: "Whether you’re looking to make one key hire into your leadership team, or build out a whole team of Product or Engineering specialists, we can support you.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Contract recruitment",
    icon: "◌",
    text: "As your business grows, we help you bring in part-time, fractional or short-term specialists to join your journey quickly and efficiently.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Advisory services",
    icon: "⬡",
    text: "From board advisory to employer brand strategy, we help you build, define and execute your talent strategy as you grow.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop",
  },
];

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRefs = useRef([]);
  const descRef = useRef(null);
  const cardRefs = useRef([]);
  const popupRefs = useRef([]);
  const [active, setActive] = useState(null);
  const [showCalendly, setShowCalendly] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        badgeRef.current,
        { y: 24, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        },
      );

      gsap.fromTo(
        titleRefs.current,
        { y: 100, opacity: 0, rotateX: 75 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 68%",
          },
        },
      );

      gsap.fromTo(
        descRef.current,
        { y: 35, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 62%",
          },
        },
      );

      gsap.fromTo(
        cardRefs.current,
        { y: 90, opacity: 0, scale: 0.92, rotateX: 30 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.16,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 52%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const showPopup = (index) => {
    setActive(index);

    gsap.fromTo(
      popupRefs.current[index],
      { opacity: 0, y: 24, scale: 0.8, rotate: -4 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 0.55,
        ease: "back.out(1.8)",
      },
    );
  };

  const hidePopup = (index) => {
    gsap.to(popupRefs.current[index], {
      opacity: 0,
      y: 18,
      scale: 0.85,
      duration: 0.35,
      ease: "power3.inOut",
      onComplete: () => setActive(null),
    });
  };

  const title = ["HELPING YOU IN YOUR MISSION TO", "BUILD A BETTER FUTURE"];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-24 text-white md:px-14 md:py-32"
    >
      <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-lime-300/10 blur-[150px]" />
      <div className="absolute bottom-10 right-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[160px]" />

      <div className="container relative z-10 mx-auto">
        <div className="mb-16 max-w-5xl">
          <div
            ref={badgeRef}
            className="mb-6 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.9)]" />
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-white/75">
              What We Do
            </p>
          </div>

          <div className="space-y-1">
            {title.map((line, index) => (
              <div key={index} className="overflow-hidden pb-1">
                <h2
                  ref={(el) => (titleRefs.current[index] = el)}
                  className="text-[2.3rem] font-black uppercase leading-[0.95] tracking-[-0.055em] text-[#f4f1e8] sm:text-[3.6rem] md:text-[4.8rem] xl:text-[5.5rem]"
                >
                  {line}
                </h2>
              </div>
            ))}
          </div>

          <p
            ref={descRef}
            className="mt-8 max-w-2xl text-base leading-8 text-white/70 md:text-lg"
          >
            We help you build happy, productive and mission-aligned teams by
            finding people who not only love what they do, but love why they do
            it.
          </p>
        </div>

        <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-4 shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-6">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-lime-300/15 blur-[80px]" />
          <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-violet-400/15 blur-[90px]" />

          <div className="relative z-10 grid gap-5 lg:grid-cols-3">
            {services.map((item, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => showPopup(index)}
                onMouseLeave={() => hidePopup(index)}
                className="group relative min-h-[360px] overflow-visible rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-lime-300/50 hover:bg-white/[0.085] hover:shadow-[0_30px_90px_rgba(190,242,100,0.12)]"
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-2xl text-lime-300 shadow-inner">
                  {item.icon}
                </div>

                <h3 className="max-w-xs text-3xl font-black leading-[0.95] tracking-[-0.04em] text-[#f4f1e8]">
                  {item.title}
                </h3>

                <div className="my-7 h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent" />

                <p className="text-sm leading-7 text-white/60">{item.text}</p>

                <div className="absolute bottom-7 left-7 flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-lime-300 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  Explore
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-lime-300">
                    ↗
                  </span>
                </div>

                {/* popup image */}
                <div
                  ref={(el) => (popupRefs.current[index] = el)}
                  className={`pointer-events-none absolute z-30 hidden w-64 overflow-hidden rounded-[1.5rem] border border-white/15 bg-black/30 p-2 opacity-0 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl md:block ${
                    index === 0
                      ? "-right-16 -top-20"
                      : index === 1
                        ? "left-1/2 -top-24 -translate-x-1/2"
                        : "-left-16 -top-20"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 w-full rounded-[1.1rem] object-cover"
                  />
                  <div className="p-3">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-300">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/services"
              className="group relative overflow-hidden rounded-full border border-lime-300 px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-lime-300 transition-all duration-500 hover:scale-105 hover:text-black"
            >
              <span className="absolute inset-0 -translate-x-full bg-lime-300 transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative z-10">Our Services</span>
            </a>

            <button
              onClick={() => {
                setShowCalendly(true);
              }}
              className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-white/80 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-white/40 hover:bg-white/[0.08]"
            >
              Speak To Us
            </button>
          </div>
        </div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </section>
  );
};

export default WhatWeDo;
