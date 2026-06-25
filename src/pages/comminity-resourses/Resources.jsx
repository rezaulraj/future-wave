import React, { useEffect, useRef, useState } from "react";
import { FiPlus, FiX, FiUsers, FiBookOpen, FiBriefcase } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const resources = [
  {
    no: "01",
    title: "Collaboration",
    icon: FiUsers,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop",
    text: "We believe real hiring progress happens when employers, candidates and partners work together with trust and transparency.",
    points: [
      "Build stronger employer-candidate relationships.",
      "Create shared opportunities with partner networks.",
      "Support open communication during the hiring journey.",
    ],
  },
  {
    no: "02",
    title: "Knowledge sharing",
    icon: FiBookOpen,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
    text: "We share helpful insights, recruitment guidance and practical resources so teams can make better hiring decisions.",
    points: [
      "Helpful hiring guides and employer resources.",
      "Clear information for candidates and clients.",
      "Practical knowledge from real recruitment experience.",
    ],
  },
  {
    no: "03",
    title: "Opportunities",
    icon: FiBriefcase,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
    text: "We create meaningful opportunities by connecting skilled people with employers who value long-term growth.",
    points: [
      "Open doors for candidates and growing teams.",
      "Connect people with reliable employers.",
      "Help businesses find the right people faster.",
    ],
  },
];

const Resources = () => {
  const [open, setOpen] = useState(0);

  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const itemRefs = useRef([]);
  const imageRef = useRef(null);
  const imageWrapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRefs.current,
        { y: 90, opacity: 0, rotateX: 70 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        },
      );

      gsap.fromTo(
        imageWrapRef.current,
        { x: -80, opacity: 0, scale: 0.94, filter: "blur(10px)" },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 58%",
          },
        },
      );

      gsap.fromTo(
        itemRefs.current,
        { x: 80, opacity: 0, filter: "blur(10px)" },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 1.18, opacity: 0.45, filter: "blur(10px)" },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.7,
        ease: "power4.out",
      },
    );

    gsap.fromTo(
      itemRefs.current[open]?.querySelectorAll(".resource-reveal"),
      { y: 22, opacity: 0, filter: "blur(7px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
      },
    );
  }, [open]);

  const active = resources[open];
  const ActiveIcon = active.icon;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-24 bg-[#31323a]/95 text-[#F6F5E8] font-arimo md:px-14 md:py-32"
    >

      <div className="container relative z-10 mx-auto">
        <div className="mb-14 max-w-5xl">
          <p
            ref={(el) => (titleRefs.current[0] = el)}
            className="mb-5 w-fit rounded-full border border-lime-300/25 bg-lime-300/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-lime-300"
          >
            Resources
          </p>

          <div className="overflow-hidden pb-1">
            <h2
              ref={(el) => (titleRefs.current[1] = el)}
              className="text-[3rem] font-black uppercase leading-[0.9] tracking-[-0.07em] text-[#F6F5E8] sm:text-[4.5rem] md:text-[5rem]"
            >
              Built around <span className="text-lime-300">community</span>
            </h2>
          </div>

          <p
            ref={(el) => (titleRefs.current[2] = el)}
            className="mt-7 max-w-2xl text-base leading-8 text-[#F6F5E8]/65 md:text-lg"
          >
            Explore how collaboration, shared knowledge and better opportunities
            help us support clients, candidates and partners.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div
            ref={imageWrapRef}
            className="sticky top-28 overflow-hidden rounded-[2.4rem] border border-[#F6F5E8]/10 bg-[#F6F5E8]/[0.045] p-4 shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            <div className="relative h-[520px] overflow-hidden rounded-[2rem]">
              <img
                ref={imageRef}
                src={active.image}
                alt={active.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#F6F5E8] via-[#F6F5E8]/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F6F5E8]/45 via-transparent to-[#F6F5E8]/20" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/10 bg-black/35 p-6 backdrop-blur-2xl">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-lime-300/30 bg-lime-300/10 text-2xl text-lime-300">
                    <ActiveIcon />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-lime-300">
                      Active Resource
                    </p>
                    <h3 className="mt-2 text-3xl font-black uppercase leading-none tracking-[-0.05em] text-[#f4f1e8]">
                      {active.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.04] shadow-[0_35px_120px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
            {resources.map((item, index) => {
              const Icon = item.icon;
              const isOpen = open === index;

              return (
                <div
                  key={item.no}
                  ref={(el) => (itemRefs.current[index] = el)}
                  onMouseEnter={() => setOpen(index)}
                  className={`group border-b border-white/10 transition-all duration-500 last:border-b-0 ${
                    isOpen ? "bg-white/[0.055]" : "hover:bg-white/[0.025]"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? index : index)}
                    className="flex w-full items-center justify-between gap-6 p-7 text-left md:p-8"
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl border text-xl transition-all duration-500 ${
                          isOpen
                            ? "border-lime-300 bg-lime-300 text-black"
                            : "border-white/10 bg-black/20 text-lime-300 group-hover:rotate-6"
                        }`}
                      >
                        <Icon />
                      </span>

                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.26em] text-lime-300">
                          {item.no}
                        </p>
                        <h3
                          className={`mt-2 text-2xl font-black uppercase tracking-[-0.04em] transition-all duration-500 md:text-4xl ${
                            isOpen ? "text-[#f4f1e8]" : "text-white/65"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                        isOpen
                          ? "rotate-90 border-lime-300 bg-lime-300 text-black"
                          : "border-white/15 bg-black/20 text-white/45 group-hover:border-lime-300/40 group-hover:text-lime-300"
                      }`}
                    >
                      {isOpen ? <FiX /> : <FiPlus />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-7 pb-8 md:px-8">
                        <p className="resource-reveal max-w-2xl text-base leading-8 text-white/65">
                          {item.text}
                        </p>

                        <div className="resource-reveal mt-6 grid gap-3">
                          {item.points.map((point, i) => (
                            <div key={i} className="flex items-start gap-4">
                              <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-lime-300/40 text-[10px] font-black text-lime-300">
                                {i + 1}
                              </span>
                              <p className="text-sm font-bold leading-7 text-white/58">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="resource-reveal mt-7 h-px bg-gradient-to-r from-lime-300/50 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
