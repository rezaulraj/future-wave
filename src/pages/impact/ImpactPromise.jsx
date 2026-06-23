import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  "Responsible hiring choices",
  "Lower-impact digital experience",
  "People-first recruitment process",
  "Long-term climate contribution",
];

const ImpactPromise = () => {
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        cardRefs.current,
        { y: 80, opacity: 0, scale: 0.9, rotate: -3 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.9,
          stagger: 0.13,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-24 text-white md:px-14 md:py-32"
    >
      <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-lime-300/10 blur-[150px]" />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-lime-300">
            Our Promise
          </p>

          {["Small actions.", "Real impact.", "Better future."].map(
            (line, index) => (
              <div key={index} className="overflow-hidden pb-1">
                <h2
                  ref={(el) => (titleRefs.current[index] = el)}
                  className="text-[3rem] font-black uppercase leading-[0.9] tracking-[-0.07em] text-[#f4f1e8] sm:text-[4.5rem] md:text-[6rem]"
                >
                  {line}
                </h2>
              </div>
            ),
          )}

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Impact is not a statement for us. It is a daily habit shaped through
            better decisions, better partnerships and better responsibility.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-lime-300/50 hover:bg-white/[0.085]"
            >
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-lime-300/10 blur-3xl transition-all duration-500 group-hover:bg-lime-300/20" />

              <span className="text-sm font-black text-lime-300">
                0{index + 1}
              </span>

              <h3 className="mt-8 text-2xl font-black uppercase leading-tight tracking-[-0.04em] text-[#f4f1e8]">
                {item}
              </h3>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-lime-300/60 to-transparent" />

              <p className="mt-5 text-sm leading-7 text-white/55">
                Designed to support people, companies and the planet with more
                care at every step.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactPromise;
