import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Calendly from "../../components/common/Calendly";

gsap.registerPlugin(ScrollTrigger);

const countries = [
  {
    code: "IN",
    name: "India",
    region: "South Asia",
    workers: "2,200+",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop",
  },
  {
    code: "NP",
    name: "Nepal",
    region: "South Asia",
    workers: "800+",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1400&auto=format&fit=crop",
  },
  {
    code: "LK",
    name: "Sri Lanka",
    region: "South Asia",
    workers: "550+",
    image:
      "https://images.unsplash.com/photo-1641651684010-b72e49f53137?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    code: "PK",
    name: "Pakistan",
    region: "South Asia",
    workers: "900+",
    image:
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=1400&auto=format&fit=crop",
  },
  {
    code: "ME",
    name: "Middle East",
    region: "Gulf Network",
    workers: "1,100+",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    code: "AF",
    name: "Africa",
    region: "African Partners",
    workers: "650+",
    image:
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=1400&auto=format&fit=crop",
  },
];

const GrobalWorkforceNetwork = () => {
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const statRefs = useRef([]);
  const cardRefs = useRef([]);
  const ctaRef = useRef(null);
  const [showCalendly, setShowCalendly] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRefs.current,
        { y: 90, opacity: 0, rotateX: 70, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          filter: "blur(0px)",
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
        statRefs.current,
        { y: 40, opacity: 0, scale: 0.88 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 62%",
          },
        },
      );

      gsap.fromTo(
        cardRefs.current,
        { y: 100, opacity: 0, scale: 0.9, filter: "blur(12px)" },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.09,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 48%",
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
      {/* <div className="absolute left-[-120px] top-0 h-[520px] w-[520px] rounded-full bg-lime-300/10 blur-[150px]" /> */}
      {/* <div className="absolute bottom-0 right-[-140px] h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[180px]" /> */}

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-5xl text-center">
          <div
            ref={(el) => (titleRefs.current[0] = el)}
            className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.9)]" />
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-white/75">
              Global Workforce Network
            </p>
          </div>

          <div className="overflow-hidden pb-2">
            <h2
              ref={(el) => (titleRefs.current[1] = el)}
              className="text-[3rem] font-black leading-[0.92] tracking-[-0.07em] text-[#f4f1e8] sm:text-[4.5rem] md:text-[6rem]"
            >
              People from across{" "}
              <span className="text-lime-300">Asia, Middle East</span> and
              Africa.
            </h2>
          </div>

          <p
            ref={(el) => (titleRefs.current[2] = el)}
            className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/62 md:text-lg"
          >
            We connect trusted employers with skilled candidates from India,
            Nepal, Sri Lanka, Pakistan, Bangladesh, Middle East partners and
            selected African workforce networks.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { value: "5,500+", label: "Connected workers" },
              { value: "12+", label: "Partner countries" },
              { value: "3", label: "Main regions" },
            ].map((stat, index) => (
              <div
                key={index}
                ref={(el) => (statRefs.current[index] = el)}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-2xl"
              >
                <h3 className="text-3xl font-black text-lime-300">
                  {stat.value}
                </h3>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-lime-300">
              Workforce regions
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#f4f1e8] md:text-5xl">
              Strong partner coverage
            </h3>
          </div>

          <button
            ref={ctaRef}
            onClick={() => {
              setShowCalendly(true);
            }}
            className="group flex items-center gap-3 rounded-full border border-lime-300/30 bg-lime-300/10 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-lime-300 transition-all duration-500 hover:bg-lime-300 hover:text-black cursor-pointer" 
          >
            Partner with us
            <FiArrowRight className="transition-all duration-500 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {countries.map((country, index) => (
            <div
              key={country.name}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative h-[330px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_25px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-700 hover:-translate-y-3 hover:border-lime-300/45 hover:shadow-[0_35px_120px_rgba(190,242,100,0.12)]"
            >
              <img
                src={country.image}
                alt={country.name}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-[#10131a]/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-lime-300/5 opacity-0 transition-all duration-700 group-hover:opacity-100" />

              <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-lime-300">
                  {country.code}
                </p>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-[1.6rem] border border-white/10 bg-black/35 p-5 backdrop-blur-2xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-lime-300">
                      <FiMapPin />
                      {country.region}
                    </p>

                    <h4 className="text-3xl font-black tracking-[-0.05em] text-[#f4f1e8]">
                      {country.name}
                    </h4>
                  </div>

                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-lime-300/25 bg-lime-300/10 text-xl text-lime-300 transition-all duration-500 group-hover:bg-lime-300 group-hover:text-black">
                    <FiUsers />
                  </div>
                </div>

                <p className="mt-4 text-sm font-bold text-white/60">
                  {country.workers} available talent network
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </section>
  );
};

export default GrobalWorkforceNetwork;
