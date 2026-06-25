import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiClock, FiClipboard, FiUserX, FiAlertTriangle } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const challenges = [
  {
    no: "01",
    title: "Production delays",
    icon: FiClock,
    text: "Labor shortages cause downtime, missed deadlines and lost clients.",
    stat: "30%",
    label: "Unused production capacities",
    video: "https://www.pexels.com/download/video/8134511/",
  },
  {
    no: "02",
    title: "Bureaucratic complexity",
    icon: FiClipboard,
    text: "Work permits, visas and applications cost time and resources.",
    stat: "120+",
    label: "Hours per year for administration",
    video: "https://www.pexels.com/download/video/7841639/",
  },
  {
    no: "03",
    title: "High turnover",
    icon: FiUserX,
    text: "Workers leave after a few months, and rehiring gets expensive.",
    stat: "€5,000+",
    label: "Cost of replacing one worker",
    video: "https://www.pexels.com/download/video/7414169/",
  },
  {
    no: "04",
    title: "Legal uncertainty",
    icon: FiAlertTriangle,
    text: "Unclear regulations and penalties make hiring foreign workers risky.",
    stat: "€25,000",
    label: "Possible penalty for non-compliance",
    video: "https://www.pexels.com/download/video/5637927/",
  },
];

const Challenges = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRefs = useRef([]);
  const textRef = useRef(null);
  const cardRefs = useRef([]);
  const ctaRef = useRef(null);

  const previewRef = useRef(null);
  const previewVideoRef = useRef(null);
  const previewTitleRef = useRef(null);

  const [active, setActive] = useState(challenges[0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(previewRef.current, {
        autoAlpha: 0,
        scale: 0.82,
        rotate: -8,
      });

      gsap.fromTo(
        badgeRef.current,
        { y: 22, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
        },
      );

      gsap.fromTo(
        titleRefs.current,
        { y: 90, opacity: 0, rotateX: 70 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.05,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 68%" },
        },
      );

      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        },
      );

      gsap.fromTo(
        cardRefs.current,
        { y: 80, opacity: 0, scale: 0.92, rotateX: 25 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 55%" },
        },
      );

      gsap.fromTo(
        ctaRef.current,
        { y: 70, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 45%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const movePreview = (e) => {
    const bounds = sectionRef.current.getBoundingClientRect();

    gsap.to(previewRef.current, {
      x: e.clientX - bounds.left - 320,
      y: e.clientY - bounds.top - 170,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  const showPreview = (item, e, index) => {
    setActive(item);
    movePreview(e);

    setTimeout(() => {
      if (previewVideoRef.current) {
        previewVideoRef.current.currentTime = 0;
        previewVideoRef.current.play().catch(() => {});
      }
    }, 50);

    gsap.to(previewRef.current, {
      autoAlpha: 1,
      scale: 1,
      rotate: -5,
      duration: 0.45,
      ease: "back.out(1.8)",
    });

    gsap.to(cardRefs.current[index], {
      y: -12,
      scale: 1.015,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.fromTo(
      previewTitleRef.current,
      { y: 20, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.45,
        ease: "power3.out",
      },
    );
  };

  const hidePreview = (index) => {
    if (previewVideoRef.current) previewVideoRef.current.pause();

    gsap.to(previewRef.current, {
      autoAlpha: 0,
      scale: 0.82,
      rotate: -10,
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(cardRefs.current[index], {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible font-archivo bg-[#31323D] px-5 py-24 text-white md:px-14 md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#31323D]/95 via-[#31323D]/70 to-[#31323D]/20" />
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[170px]" />

      {/* floating video preview */}
      <div
        ref={previewRef}
        className="pointer-events-none absolute left-0 top-0 z-50 hidden w-80 overflow-hidden rounded-[1.6rem] border border-white/15 bg-black/35 p-2 opacity-0 shadow-[0_30px_100px_rgba(0,0,0,0.75)] backdrop-blur-xl lg:block"
      >
        <div className="relative h-48 overflow-hidden rounded-[1.2rem]">
          <video
            ref={previewVideoRef}
            key={active.video}
            src={active.video}
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <p
            ref={previewTitleRef}
            className="absolute bottom-4 left-4 right-4 text-sm font-black uppercase tracking-[0.15em] text-lime-300"
          >
            {active.title}
          </p>
        </div>
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <div
            ref={badgeRef}
            className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-lime-300/25 bg-white/[0.04] px-4 py-2 font-arimo backdrop-blur-xl "
          >
            <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.9)]" />
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#F6F5E8]/80">
              Is it familiar to you?
            </p>
          </div>

          {["Do you recognize these", "challenges?"].map((line, index) => (
            <div key={index} className="inline-block overflow-hidden pb-1">
              <h2
                ref={(el) => (titleRefs.current[index] = el)}
                className="inline text-4xl font-normal font-arimo tracking-[-0.06em] text-[#F6F5E8] md:text-6xl"
              >
                {index === 1 ? (
                  <span className="text-lime-300"> {line}</span>
                ) : (
                  line
                )}
              </h2>
            </div>
          ))}

          <p
            ref={textRef}
            className="mt-5 text-sm font-montserrat text-[#F6F5E8]/75 md:text-base"
          >
            Problems we solve every day for employers and growing teams.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-5 md:grid-cols-2">
          {challenges.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.no}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={(e) => showPreview(item, e, index)}
                onMouseMove={movePreview}
                onMouseLeave={() => hidePreview(index)}
                className="group relative overflow-visible rounded-[1.7rem] border border-[#F6F5E8]/10 bg-[#F6F5E8] p-7 backdrop-blur-2xl transition-all duration-500 hover:border-lime-300/50 hover:bg-[#F6F5E8]/90 hover:shadow-[0_25px_100px_rgba(190,242,100,0.12)]"
              >
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-lime-300 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-lime-300/10 blur-3xl transition-all duration-500 group-hover:bg-lime-300/20" />

                <div className="mb-6 flex items-center justify-between">
                  <span className="text-[11px] font-black tracking-[0.25em] text-[#31323d]">
                    {item.no}
                  </span>

                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-lime-300/20 bg-[#31323d]/10 text-[#31323d] transition-all duration-500 group-hover:rotate-6 group-hover:bg-lime-300 group-hover:text-black">
                    <Icon />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-[#31323d] font-arimo">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 font-montserrat text-[#31323d]/95">
                  {item.text}
                </p>

                <div className="my-6 h-px w-full bg-gradient-to-r from-[#31323d]/15 to-transparent" />

                <div className="flex items-end gap-3">
                  <h4 className="text-3xl font-black text-[#31323d]">
                    {item.stat}
                  </h4>
                  <p className="pb-1 text-[10px] font-arimo font-semibold uppercase tracking-[0.16em] text-[#31323d]">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          ref={ctaRef}
          className="mx-auto mt-14 overflow-hidden rounded-[2rem] border border-[#31323d]/30 bg-[#F6F5E8] p-7 shadow-[0_30px_100px_rgba(190,242,100,0.10)] backdrop-blur-2xl"
        >
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase font-arimo tracking-[0.22em] text-[#31323d]">
                One partner. Less stress. Better hiring.
              </p>
              <h3 className="mt-3 max-w-3xl text-2xl font-black tracking-[-0.04em] font-arimo text-[#31323d] md:text-4xl">
                We handle the hiring complexity, so your team can stay focused.
              </h3>
            </div>

            <a
              href="/contact"
              className="group relative w-fit overflow-hidden rounded-full border border-[#31323d] px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#31323d] transition-all duration-500 hover:scale-105 hover:text-black font-arimo"
            >
              <span className="absolute inset-0 -translate-x-full bg-lime-300 transition-transform duration-500 group-hover:translate-x-0 " />
              <span className="relative z-10">
                Request an estimate <span className="ml-2">↗</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
