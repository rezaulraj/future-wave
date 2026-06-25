import React, { useEffect, useRef } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiNavigation,
  FiExternalLink,
} from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurLocations = () => {
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const mapRef = useRef(null);
  const cardRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRefs.current,
        { y: 90, opacity: 0, rotateX: 70 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.05,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
        },
      );

      gsap.fromTo(
        mapRef.current,
        { y: 80, opacity: 0, scale: 0.94, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 55%" },
        },
      );

      gsap.fromTo(
        cardRef.current,
        { x: -45, y: 35, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.85,
          delay: 0.25,
          ease: "back.out(1.6)",
          scrollTrigger: { trigger: mapRef.current, start: "top 75%" },
        },
      );

      gsap.to(pinRef.current, {
        y: -12,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-24 bg-[#31323d]/95 text-[#F6F5E8] font-arimo md:px-14 md:py-32"
    >

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          {["Where", "are we?"].map((line, index) => (
            <div key={index} className="inline-block overflow-hidden pb-1">
              <h2
                ref={(el) => (titleRefs.current[index] = el)}
                className={`inline text-4xl font-semibold uppercase tracking-[-0.06em] md:text-6xl ${
                  index === 1 ? "text-lime-300" : "text-[#F6F5E8]"
                }`}
              >
                {index === 1 ? ` ${line}` : line}
              </h2>
            </div>
          ))}

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 font-montserrat text-[#F6F5E8]/55 md:text-base">
            Visit our office or contact us online. We are ready to help with
            hiring, partnerships and recruitment support.
          </p>
        </div>

        <div
          ref={mapRef}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-[#F6F5E8]/10 bg-[#F6F5E8]/[0.045] p-3 shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
        >
          <div className="relative h-[520px] overflow-hidden rounded-[1.8rem]">
            <iframe
              title="Future Wave Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=16.0702%2C45.8269%2C16.0902%2C45.8389&layer=mapnik&marker=45.8329%2C16.0802"
              className="h-full w-full border-0 grayscale invert-[0.88] sepia-[0.2] saturate-[0.7] hue-rotate-[150deg] opacity-80"
              loading="lazy"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10131a]/75 via-transparent to-[#10131a]/25" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#10131a]/40 via-transparent to-[#10131a]/20" />

            <div
              ref={pinRef}
              className="absolute left-1/2 top-[44%] z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative grid h-16 w-16 place-items-center rounded-full bg-lime-300 text-3xl text-black shadow-[0_0_45px_rgba(190,242,100,0.55)]">
                <FiMapPin />
                <span className="absolute inset-0 animate-ping rounded-full border border-lime-300" />
              </div>
            </div>

            <div
              ref={cardRef}
              className="absolute bottom-7 left-7 right-7 max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/45 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:right-auto"
            >
              <div className="flex gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-lime-300/30 bg-lime-300/10 text-2xl text-lime-300">
                  <FiNavigation />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-lime-300">
                    Our Location
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-[#F6F5E8]">
                    Sesvete, Croatia
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#F6F5E8]/60">
                    Future Wave office — available for online consultation and
                    partnership discussions.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:info@futurewave.online"
                  className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-[#F6F5E8]/70 transition-all duration-500 hover:border-lime-300/40 hover:bg-lime-300 hover:text-black"
                >
                  <FiMail /> info@futurewave.online
                </a>

                <a
                  href="https://www.openstreetmap.org/?mlat=45.8329&mlon=16.0802#map=17/45.83290/16.08020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl border border-lime-300/40 bg-lime-300/10 px-4 py-3 text-sm font-bold text-lime-300 transition-all duration-500 hover:bg-lime-300 hover:text-black"
                >
                  <FiExternalLink /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLocations;
