import React, { useEffect, useRef } from "react";
import {
  FiClipboard,
  FiFileText,
  FiSearch,
  FiFilter,
  FiMessageCircle,
  FiCheckSquare,
  FiShield,
  FiGift,
  FiUserCheck,
} from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processes = [
  {
    number: "01",
    label: "First Step",
    title: "Planning",
    icon: FiClipboard,
    text: "We define hiring goals, timeline, team needs and the ideal candidate profile before the search begins.",
  },
  {
    number: "02",
    label: "Step Two",
    title: "Creating a job description",
    icon: FiFileText,
    text: "We create a clear, attractive and realistic job description that speaks to the right candidates.",
  },
  {
    number: "03",
    label: "Step Three",
    title: "Sourcing",
    icon: FiSearch,
    text: "We search through trusted channels, referrals, databases and talent communities to find strong candidates.",
  },
  {
    number: "04",
    label: "Step Four",
    title: "Screening",
    icon: FiFilter,
    text: "We review experience, motivation, communication and role fit before moving candidates forward.",
  },
  {
    number: "05",
    label: "Step Five",
    title: "Interviewing",
    icon: FiMessageCircle,
    text: "We support structured interviews that reveal ability, attitude, reliability and long-term fit.",
  },
  {
    number: "06",
    label: "Step Six",
    title: "Assessment",
    icon: FiCheckSquare,
    text: "We evaluate practical skills, readiness and alignment with the role before final decisions.",
  },
  {
    number: "07",
    label: "Step Seven",
    title: "Background checks",
    icon: FiShield,
    text: "We verify important candidate details carefully so employers can hire with confidence.",
  },
  {
    number: "08",
    label: "Step Eight",
    title: "Offering",
    icon: FiGift,
    text: "We help manage offer communication clearly and professionally so both sides stay aligned.",
  },
  {
    number: "09",
    label: "Final Step",
    title: "Onboarding",
    icon: FiUserCheck,
    text: "We support a smooth start so the candidate and employer feel prepared from day one.",
  },
];

const OurProcess = () => {
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const itemRefs = useRef([]);
  const progressRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRefs.current,
        { y: 90, opacity: 0, rotateX: 70 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        },
      );

      gsap.fromTo(
        itemRefs.current,
        { y: 80, opacity: 0, scale: 0.92, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.14,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
          },
        },
      );

      gsap.fromTo(
        progressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 45%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );

      itemRefs.current.forEach((item) => {
        gsap.fromTo(
          item.querySelectorAll(".step-reveal"),
          { y: 30, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 70%",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-24 bg-[#31323D] text-[#F6F5E8] font-arimo md:px-14 md:py-32"
    >

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto mb-20 max-w-5xl text-center">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-lime-300">
            Our Process
          </p>

          {["How we recruit", "better people"].map((line, index) => (
            <div key={index} className="overflow-hidden pb-1">
              <h2
                ref={(el) => (titleRefs.current[index] = el)}
                className={`text-[3rem] font-semibold uppercase leading-[0.9] tracking-[-0.05em] sm:text-[4rem] md:text-[5rem] ${
                  index === 1 ? "text-lime-300" : "text-[#F6F5E8]"
                }`}
              >
                {line}
              </h2>
            </div>
          ))}

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 font-montserrat text-[#F6F5E8]/65 md:text-lg">
            A refined recruitment workflow designed to plan, attract, evaluate
            and onboard the right people with confidence.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#F6F5E8]/10 md:block" />
          <div
            ref={progressRef}
            className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-lime-300 via-cyan-300 to-lime-300 shadow-[0_0_25px_rgba(190,242,100,0.45)] md:block"
          />

          <div className="space-y-16">
            {processes.map((step, index) => {
              const Icon = step.icon;
              const isRight = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className="relative grid gap-8 md:grid-cols-[1fr_90px_1fr] md:items-center"
                >
                  {/* left side */}
                  <div
                    className={`${
                      isRight ? "hidden md:block" : "md:text-right md:pr-6"
                    }`}
                  >
                    {!isRight && (
                      <div className="group">
                        <p className="step-reveal text-[10px] font-black uppercase tracking-[0.28em] text-lime-300">
                          {step.label}
                        </p>
                        <h3 className="step-reveal mt-3 text-3xl font-black uppercase leading-none tracking-[-0.05em] text-[#f4f1e8] md:text-4xl">
                          {step.title}
                        </h3>
                        <p className="step-reveal mt-5 text-sm leading-7 text-[#F6F5E8]/62 md:ml-auto md:max-w-md">
                          {step.text}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 flex justify-start md:justify-center">
                    <div className="group relative grid h-20 w-20 place-items-center rounded-full border border-lime-300/30 bg-[#31323d] shadow-[0_0_45px_rgba(190,242,100,0.12)] backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:border-lime-300">
                      <div className="absolute inset-2 rounded-full border border-[#F6F5E8]/10" />
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-lime-300 text-2xl text-[#31323d] shadow-[0_0_30px_rgba(190,242,100,0.45)]">
                        <Icon />
                      </div>

                      <span className="absolute -bottom-7 text-xs font-black tracking-[0.2em] text-white/35">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* right side */}
                  <div className={`${isRight ? "md:pl-6" : "hidden md:block"}`}>
                    {isRight && (
                      <div className="group">
                        <p className="step-reveal text-[10px] font-black uppercase tracking-[0.28em] text-lime-300">
                          {step.label}
                        </p>
                        <h3 className="step-reveal mt-3 text-3xl font-semibold uppercase leading-none tracking-[-0.05em] text-[#f4f1e8] md:text-4xl">
                          {step.title}
                        </h3>
                        <p className="step-reveal mt-5 max-w-md text-sm leading-7 font-montserrat text-[#F6F5E8]/62">
                          {step.text}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="md:hidden">
                    <p className="step-reveal text-[10px] font-semibold uppercase tracking-[0.28em] text-lime-300">
                      {step.label}
                    </p>
                    <h3 className="step-reveal mt-3 text-3xl font-semibold uppercase leading-none tracking-[-0.05em] text-[#F6F5E8]">
                      {step.title}
                    </h3>
                    <p className="step-reveal mt-5 text-sm font-montserrat leading-7 text-[#F6F5E8]/62">
                      {step.text}
                    </p>
                  </div>

                  <div
                    className={`pointer-events-none absolute top-10 hidden h-px w-[calc(50%-45px)] bg-gradient-to-r md:block ${
                      isRight
                        ? "left-1/2 from-lime-300/60 to-transparent"
                        : "right-1/2 from-transparent to-lime-300/60"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
