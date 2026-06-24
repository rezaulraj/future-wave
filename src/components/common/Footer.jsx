import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedinIn, FaYoutube, FaSpotify } from "react-icons/fa";
import SvgBackground from "./SvgBackground";

gsap.registerPlugin(ScrollTrigger);

const rowOne = [
  "Glazier",
  "Driver",
  "Tinsmith",
  "Fitter",
  "Plasterer",
  "Electrician",
  "Plumber",
  "Painter",
  "Locksmith",
  "Joiner",
  "Ceramist",
  "Carpenter",
  "Turner",
  "Welder",
];

const rowTwo = [
  "Chef",
  "Bus driver",
  "Forklift driver",
  "Electrician",
  "MIG/MAG Welder",
  "Warehouse worker",
  "Production worker",
  "Seller",
  "Maid",
  "Waiter",
  "Reinforcement worker",
];

const Footer = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const iconRefs = useRef([]);
  const infoRefs = useRef([]);
  const marqueeRef = useRef(null);
  const marqueeItemsRef = useRef([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { y: 45, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        iconRefs.current,
        { y: 35, opacity: 0, scale: 0.7, rotate: -20 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 82%",
          },
        },
      );

      gsap.fromTo(
        infoRefs.current,
        { y: 35, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        marqueeRef.current,
        { y: 50, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: marqueeRef.current,
            start: "top 90%",
          },
        },
      );

      gsap.fromTo(
        marqueeItemsRef.current,
        { y: 25, opacity: 0, scale: 0.85 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          stagger: 0.025,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: marqueeRef.current,
            start: "top 88%",
          },
        },
      );

      gsap.fromTo(
        bottomRef.current,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 75%",
          },
        },
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const renderMarquee = (items, rowType = "lime") => {
    const repeated = [...items, ...items, ...items];

    return repeated.map((item, index) => (
      <div
        key={`${item}-${index}-${rowType}`}
        ref={(el) => marqueeItemsRef.current.push(el)}
        className="mx-2 flex shrink-0 items-center gap-4"
      >
        <span
          className={`h-2 w-2 rounded-full ${
            rowType === "lime"
              ? "bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.95)]"
              : "bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.95)]"
          }`}
        />

        <span
          className={`group relative overflow-hidden rounded-full border px-5 py-2.5 text-sm font-black backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 ${
            rowType === "lime"
              ? "border-lime-300/20 bg-lime-300/[0.06] text-white/75 hover:border-lime-300 hover:text-black"
              : "border-cyan-300/20 bg-cyan-300/[0.06] text-white/75 hover:border-cyan-300 hover:text-black"
          }`}
        >
          <span
            className={`absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0 ${
              rowType === "lime" ? "bg-lime-300" : "bg-cyan-300"
            }`}
          />
          <span className="relative z-10">{item}</span>
        </span>
      </div>
    ));
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden text-white">
      <SvgBackground className="opacity-100" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#10131a]/95 via-[#10131a]/70 to-[#10131a]/20" />

      <div className="relative px-5 py-6 md:px-14">
        <div className="container relative z-10 mx-auto grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div className="flex flex-col gap-8">
            <div ref={logoRef}>
              <a href="/" className="group flex items-center gap-3">
                <img src="/logo-update.png" alt="" className="h-14" />
              </a>
            </div>

            <div className="flex items-center gap-5">
              {[FaYoutube, FaSpotify, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  ref={(el) => (iconRefs.current[index] = el)}
                  href="#"
                  className="group grid h-12 w-12 place-items-center rounded-2xl border border-white/20 bg-white/[0.04] text-xl text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-6 hover:border-lime-300 hover:bg-lime-300 hover:text-black"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Email",
                text: "info@futurewave.online",
              },
              {
                title: "Terms",
                text: "© Future Wave Recruitment",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => (infoRefs.current[index] = el)}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-lime-300/50 hover:bg-white/[0.08]"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-lime-300">
                  {item.title}
                </p>
                <p className="mt-3 text-sm font-semibold tracking-wide text-white/75">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={marqueeRef}
        className="group/marquee relative z-10 overflow-hiddenpy-6 py-2 backdrop-blur-sm"
      >

        <div className="footer-marquee footer-marquee-left mb-4 flex w-max items-center">
          {renderMarquee(rowOne, "lime")}
        </div>

        <div className="footer-marquee footer-marquee-right flex w-max items-center">
          {renderMarquee(rowTwo, "cyan")}
        </div>
      </div>

      <div
        ref={bottomRef}
        className="relative z-10 bg-[#f4f1e8] px-5 py-7 text-[#30313c] md:px-14"
      >
        <div className="container mx-auto flex flex-col justify-between gap-4 text-sm md:flex-row md:items-center">
          <p className="text-lg font-light">
            This page loaded in 1.4s, emitting ~0.090g of CO₂e.
          </p>

          <p className="text-xs font-bold uppercase tracking-[0.2em]">
            Website design by Future Wave Recruitment / Development by Tempest
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
