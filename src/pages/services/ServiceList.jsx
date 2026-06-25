import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Retained Recruitment",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    short:
      "Whether you’re looking to make one key hire or build a whole specialist team, we can support you.",
    answers: [
      "We quickly determine your requirements and where to find the right people.",
      "We offer flexible and transparent pricing with no hidden margins.",
      "We source, approach and screen candidates to save your time.",
      "We ensure everyone works in a happy, supported and engaged way.",
    ],
  },
  {
    number: "02",
    title: "Contract Recruitment",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    short:
      "Bring in part-time, fractional or short-term specialists to help you move quickly.",
    answers: [
      "We help you source contract specialists fast.",
      "We manage screening, vetting and shortlisting.",
      "We support onboarding so projects keep moving.",
      "We help you scale without long-term commitment.",
    ],
  },
  {
    number: "03",
    title: "Employer Brand & Talent Advisory",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    short:
      "We help build, define and execute your talent and employer brand strategy.",
    answers: [
      "We help shape your employer brand message.",
      "We advise on hiring process and candidate experience.",
      "We support board/advisor hiring strategy.",
      "We help your team attract aligned talent.",
    ],
  },
];

const ServiceList = () => {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const answerRefs = useRef([]);
  const previewRef = useRef(null);
  const previewImgRef = useRef(null);
  const previewTitleRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(1);
  const [activePreview, setActivePreview] = useState(services[0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(answerRefs.current, { height: 0, opacity: 0 });

      if (answerRefs.current[openIndex]) {
        gsap.set(answerRefs.current[openIndex], {
          height: "auto",
          opacity: 1,
        });
      }

      gsap.set(previewRef.current, {
        autoAlpha: 0,
        scale: 0.8,
        rotate: -8,
      });

      gsap.fromTo(
        itemRefs.current,
        { y: 90, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.14,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleItem = (index) => {
    if (openIndex === index) {
      gsap.to(answerRefs.current[index], {
        height: 0,
        opacity: 0,
        duration: 0.55,
        ease: "power3.inOut",
      });
      setOpenIndex(null);
      return;
    }

    if (openIndex !== null && answerRefs.current[openIndex]) {
      gsap.to(answerRefs.current[openIndex], {
        height: 0,
        opacity: 0,
        duration: 0.45,
        ease: "power3.inOut",
      });
    }

    setOpenIndex(index);

    gsap.fromTo(
      answerRefs.current[index],
      { height: 0, opacity: 0 },
      {
        height: "auto",
        opacity: 1,
        duration: 0.65,
        ease: "power4.out",
      },
    );
  };

  const movePreview = (e) => {
    const bounds = sectionRef.current.getBoundingClientRect();

    gsap.to(previewRef.current, {
      x: e.clientX - bounds.left - 260,
      y: e.clientY - bounds.top - 180,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  const showPreview = (item, e) => {
    setActivePreview(item);
    movePreview(e);

    gsap.to(previewRef.current, {
      autoAlpha: 1,
      scale: 1,
      rotate: -5,
      duration: 0.45,
      ease: "back.out(1.8)",
    });

    gsap.fromTo(
      previewImgRef.current,
      { scale: 1.2 },
      { scale: 1, duration: 0.8, ease: "power4.out" },
    );

    gsap.fromTo(
      previewTitleRef.current,
      { y: 18, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power3.out",
      },
    );
  };

  const hidePreview = () => {
    gsap.to(previewRef.current, {
      autoAlpha: 0,
      scale: 0.82,
      rotate: -10,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="service-list"
      className="relative overflow-visible px-5 py-24 bg-[#31323d]/95 text-[#F6F5E8] font-arimo md:px-14 md:py-32"
    >
      <div
        ref={previewRef}
        className="pointer-events-none absolute left-0 top-0 z-50 hidden w-72 overflow-hidden rounded-[1.6rem] border border-[#F6F5E8]/15 bg-[#31323d]/35 p-2 opacity-0 shadow-[0_30px_90px_rgba(0,0,0,0.75)] backdrop-blur-xl lg:block"
      >
        <div className="relative h-44 overflow-hidden rounded-[1.2rem]">
          <img
            ref={previewImgRef}
            src={activePreview.image}
            alt={activePreview.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#31323d]/85 via-[#31323d]/15 to-transparent" />
          <p
            ref={previewTitleRef}
            className="absolute bottom-4 left-4 right-4 text-sm font-semibold uppercase tracking-[0.15em] text-lime-300"
          >
            {activePreview.title}
          </p>
        </div>
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.25em] text-lime-300">
            Services
          </p>
          <h2 className="text-4xl font-semibold uppercase tracking-[-0.02em] text-[#f4f1e8] md:text-6xl">
            Flexible hiring support
          </h2>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.045] shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          {services.map((item, index) => (
            <div
              key={item.number}
              ref={(el) => (itemRefs.current[index] = el)}
              className="group border-b border-white/10 last:border-b-0"
            >
              <button
                onClick={() => toggleItem(index)}
                onMouseEnter={(e) => showPreview(item, e)}
                onMouseMove={movePreview}
                onMouseLeave={hidePreview}
                className="relative flex w-full items-start justify-between gap-6 px-6 py-8 text-left transition-all duration-500 hover:bg-white/[0.055] md:px-10"
              >
                <div>
                  <h3 className="text-2xl font-semibold uppercase tracking-[-0.04em] text-[#F6F5E8] md:text-3xl">
                    <span className="text-lime-300">{item.number}</span>
                    <span className="mx-2 text-white/35">/</span>
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 font-montserrat text-[#F6F5E8]/65">
                    {item.short}
                  </p>
                </div>

                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-lime-300 text-xl text-lime-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-lime-300 group-hover:text-black ${
                    openIndex === index
                      ? "rotate-45 bg-lime-300 text-black"
                      : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className="overflow-hidden"
              >
                <div className="px-6 pb-9 md:px-10">
                  <div className="rounded-[1.7rem] border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
                    <div className="grid gap-4">
                      {item.answers.map((answer, i) => (
                        <div key={i} className="flex gap-4">
                          <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-lime-300 text-[10px] text-lime-300">
                            ✓
                          </span>
                          <p className="text-sm font-semibold leading-7 font-montserrat text-[#F6F5E8]/75">
                            {answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
