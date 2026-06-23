import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiPlus, FiX } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "How quickly can you find workers?",
    a: "Depending on the role, number of workers and required documents, the process usually takes between 45 and 90 days. For urgent needs, we can support an expedited hiring plan.",
  },
  {
    q: "What are the costs of your services?",
    a: "The cost depends on the number of workers, role type, sourcing needs and support level. After understanding your hiring request, we provide a clear estimate.",
  },
  {
    q: "Do I need to arrange accommodation for the workers?",
    a: "In many cases, accommodation support is helpful. We can guide you based on the worker profile, employer requirements and location.",
  },
  {
    q: "What if the worker doesn’t meet my needs?",
    a: "We focus on careful screening and matching before placement. If any issue appears, our team will help review the situation and support the next step.",
  },
  {
    q: "Do you only work with large companies?",
    a: "No. We work with growing businesses, small teams and larger employers. Our process is flexible based on your hiring needs.",
  },
];

const Faqs = () => {
  const [open, setOpen] = useState(0);

  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const faqRefs = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRefs.current,
        { y: 80, opacity: 0, rotateX: 70 },
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
        faqRefs.current,
        { x: 70, opacity: 0, filter: "blur(10px)" },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 58%",
          },
        },
      );

      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      faqRefs.current[open]?.querySelectorAll(".faq-answer"),
      { y: 18, opacity: 0, filter: "blur(6px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.45,
        stagger: 0.05,
        ease: "power3.out",
      },
    );
  }, [open]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-24 text-white md:px-14 md:py-32"
    >

      <div className="container relative z-10 mx-auto">
        <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.04] shadow-[0_35px_120px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative border-b border-white/10 p-8 md:p-12 lg:border-b-0 lg:border-r">
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-lime-300/10 blur-[100px]" />

              <p
                ref={(el) => (titleRefs.current[0] = el)}
                className="mb-5 w-fit rounded-full border border-lime-300/25 bg-lime-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-lime-300"
              >
                FAQ
              </p>

              <h2
                ref={(el) => (titleRefs.current[1] = el)}
                className="max-w-md text-4xl font-black leading-[0.95] tracking-[-0.06em] text-[#f4f1e8] md:text-6xl"
              >
                Frequently asked{" "}
                <span className="text-lime-300">questions</span>
              </h2>

              <p
                ref={(el) => (titleRefs.current[2] = el)}
                className="mt-6 max-w-sm text-base leading-8 text-white/60"
              >
                Answers to common questions about collaboration, recruitment
                support and hiring timelines.
              </p>

              <a
                ref={ctaRef}
                href="#contact-form"
                className="group mt-8 inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-lime-300/25 bg-white/[0.04] px-6 py-4 text-sm font-black text-white transition-all duration-500 hover:border-lime-300 hover:bg-lime-300 hover:text-black"
              >
                Contact us
                <FiArrowRight className="transition-all duration-500 group-hover:translate-x-1" />
              </a>
            </div>

            <div>
              {faqs.map((item, index) => {
                const isOpen = open === index;

                return (
                  <div
                    key={index}
                    ref={(el) => (faqRefs.current[index] = el)}
                    className={`group border-b border-white/10 transition-all duration-500 last:border-b-0 ${
                      isOpen ? "bg-white/[0.045]" : "hover:bg-white/[0.025]"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-6 p-7 text-left md:p-8"
                    >
                      <span
                        className={`text-base font-black transition-all duration-500 md:text-lg ${
                          isOpen ? "text-[#f4f1e8]" : "text-white/65"
                        }`}
                      >
                        {item.q}
                      </span>

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
                        <p className="faq-answer px-7 pb-8 text-sm leading-8 text-white/58 md:px-8 md:text-base">
                          {item.a}
                        </p>

                        <div className="faq-answer mx-7 mb-7 h-px bg-gradient-to-r from-lime-300/50 to-transparent md:mx-8" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
