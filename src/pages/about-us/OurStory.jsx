import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiBriefcase, FiTarget, FiUsers, FiCheckCircle } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: FiBriefcase,
    title: "Mission",
    position: "lg:left-1/2 lg:top-0 lg:-translate-x-1/2",
    text: "To connect reliable global talent with trusted employers through a transparent, ethical and supportive process.",
  },
  {
    icon: FiTarget,
    title: "Vision",
    position: "lg:left-0 lg:bottom-0",
    text: "To become a trusted recruitment partner for companies that need skilled people and long-term growth.",
  },
  {
    icon: FiUsers,
    title: "Our approach",
    position: "lg:right-0 lg:bottom-0",
    text: "We combine human understanding, strong vetting and practical support so employers and partners feel confident from first contact to full integration.",
  },
];

const OurStory = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRefs = useRef([]);
  const paragraphRefs = useRef([]);
  const cardRefs = useRef([]);
  const pointRefs = useRef([]);
  const lineRefs = useRef([]);

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
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        },
      );

      gsap.fromTo(
        titleRefs.current,
        { y: 100, opacity: 0, rotateX: 75 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.15,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        },
      );

      gsap.fromTo(
        paragraphRefs.current,
        { y: 35, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 58%" },
        },
      );

      gsap.fromTo(
        pointRefs.current,
        { y: 25, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 55%" },
        },
      );

      gsap.fromTo(
        cardRefs.current,
        { y: 90, opacity: 0, scale: 0.85, rotate: -4 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1,
          stagger: 0.16,
          ease: "back.out(1.8)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 52%" },
        },
      );

      gsap.fromTo(
        lineRefs.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.1,
          stagger: 0.15,
          delay: 0.35,
          ease: "power4.out",
          transformOrigin: "left center",
          scrollTrigger: { trigger: sectionRef.current, start: "top 48%" },
        },
      );

      gsap.to(cardRefs.current, {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const title = ["From vision to", "trusted partner"];

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-24 bg-[#31323d]/95 text-[#F6F5E8] font-arimo md:px-14 md:py-32"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#31323D] via-[#31323D]/90 to-[#31323D]/90" /> */}

      <div className="container relative z-10 mx-auto grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <div
            ref={badgeRef}
            className="mb-7 flex w-fit items-center gap-3 rounded-full border border-[#F6F5E8]/10 bg-[#F6F5E8]/[0.04] px-4 py-2 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.9)]" />
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#F6F5E8]/75">
              Our Story
            </p>
          </div>

          <div className="space-y-1">
            {title.map((line, index) => (
              <div key={index} className="overflow-hidden pb-1">
                <h2
                  ref={(el) => (titleRefs.current[index] = el)}
                  className={`text-[3rem] font-semibold leading-[0.92] tracking-[-0.06em] sm:text-[4rem] md:text-[4.5rem] ${
                    index === 1 ? "text-lime-300" : "text-[#F6F5E8]"
                  }`}
                >
                  {line}
                </h2>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-5">
            <p
              ref={(el) => (paragraphRefs.current[0] = el)}
              className="max-w-2xl text-base leading-8 text-[#F6F5E8]/70 font-montserrat md:text-lg"
            >
              Future Wave was built with one clear purpose: to help employers
              find dependable people and help skilled workers reach better
              opportunities through a process that feels simple, respectful and
              reliable.
            </p>

            <p
              ref={(el) => (paragraphRefs.current[1] = el)}
              className="max-w-2xl text-base leading-8 text-[#F6F5E8]/70 font-montserrat md:text-lg"
            >
              We support businesses with practical hiring guidance, careful
              candidate matching and partner-friendly communication, so every
              step feels clear from first conversation to final placement.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            {["Licensed support", "Employer friendly", "Partner focused"].map(
              (item, index) => (
                <div
                  key={index}
                  ref={(el) => (pointRefs.current[index] = el)}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-[#F6F5E8]/[0.05] px-5 py-3 text-sm font-bold text-[#F6F5E8]/75 backdrop-blur-xl transition-all duration-500 hover:border-lime-300/50 hover:bg-lime-300 hover:text-black"
                >
                  <FiCheckCircle className="text-lime-300" />
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="relative">
          <div className="relative min-h-[720px] lg:min-h-[640px]">
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              viewBox="0 0 700 620"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M350 95 L110 440 L590 440 Z"
                stroke="rgba(190,242,100,0.45)"
                strokeWidth="2"
                strokeDasharray="8 10"
              />
              <circle cx="350" cy="95" r="7" fill="#bef264" />
              <circle cx="110" cy="440" r="7" fill="#bef264" />
              <circle cx="590" cy="440" r="7" fill="#bef264" />
            </svg>

            <div className="absolute left-1/2 top-[47%] hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-lime-300/25 bg-[#F6F5E8]/[0.04] backdrop-blur-xl lg:grid">
              <div className="h-10 w-10 rounded-full bg-lime-300 shadow-[0_0_50px_rgba(190,242,100,0.35)]" />
            </div>

            <div className="grid gap-5 lg:block">
              {cards.map((card, index) => {
                const Icon = card.icon;

                const trianglePosition =
                  index === 0
                    ? "lg:left-1/4 lg:top-0 lg:-translate-x-1/2"
                    : index === 1
                      ? "lg:left-0 lg:bottom-20"
                      : "lg:right-0 lg:bottom-20";

                return (
                  <div
                    key={index}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`group relative overflow-hidden rounded-[2rem] border border-[#F6F5E8]/10 bg-[#F6F5E8]/[0.045] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:border-lime-300/50 hover:bg-[#F6F5E8]/[0.085] hover:shadow-[0_30px_100px_rgba(190,242,100,0.12)] lg:absolute lg:w-[46%] ${trianglePosition}`}
                  >
                    <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-lime-300/10 blur-3xl transition-all duration-500 group-hover:bg-lime-300/20" />
                    <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/70 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl border border-lime-300/20 bg-lime-300/10 text-2xl text-lime-300 transition-all duration-500 group-hover:rotate-6 group-hover:bg-lime-300 group-hover:text-[#31323d]">
                        <Icon />
                      </div>

                      <h3 className="text-2xl font-semibold text-[#F6F5E8]">
                        {card.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm font-montserrat leading-7 text-[#F6F5E8]/62 transition-all duration-500 group-hover:text-[#F6F5E8]/80">
                        {card.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* below triangle */}
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-lime-300/25 bg-lime-300/[0.06] p-7 backdrop-blur-2xl">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-lime-300">
              Why partners trust us
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#F6F5E8]">
              Clear process. Strong people. Better hiring confidence.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
