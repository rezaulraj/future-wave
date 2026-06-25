import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SvgBackground from "../../components/common/SvgBackground";
import homeHero from "../../assets/homehero.png";
import { Helmet } from "react-helmet-async";
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
  "Steel Fixer",
  "Roofer",
  "Bricklayer",
  "Scaffolder",
  "Pipefitter",
  "HVAC Tech",
];

const rowTwo = [
  "Chef",
  "Bus Driver",
  "Forklift Driver",
  "MIG/MAG Welder",
  "Warehouse Worker",
  "Production Worker",
  "Seller",
  "Maid",
  "Waiter",
  "Reinforcement Worker",
  "Logistics Operator",
  "Machine Operator",
  "Quality Inspector",
  "Site Manager",
  "Cold Storage Worker",
  "Night Shift Supervisor",
];

const renderMarqueeItems = (items, rowType) => {
  const repeated = [...items, ...items, ...items];
  return repeated.map((item, index) => (
    <div
      key={`${item}-${index}-${rowType}`}
      className="mx-2 flex shrink-0 items-center gap-4"
    >
      <span
        className={`h-2 w-2 rounded-full ${
          rowType === "lime"
            ? "bg-lime-400 shadow-[0_0_18px_rgba(190,242,100,0.95)]"
            : "bg-cyan-400 shadow-[0_0_18px_rgba(103,232,249,0.95)]"
        }`}
      />
      <span
        className={`group relative overflow-hidden rounded-full border px-5 py-2.5 text-sm font-black backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 ${
          rowType === "lime"
            ? "border-lime-300/20 bg-lime-300/[0.06] text-[#F6F5E8] hover:border-lime-300 hover:text-gray-900"
            : "border-cyan-300/20 bg-cyan-300/[0.06] text-[#F6F5E8] hover:border-cyan-300 hover:text-gray-900"
        }`}
      >
        <span
          className={`absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0 ${
            rowType === "lime" ? "bg-lime-300" : "bg-cyan-300"
          }`}
        />
        <span className="relative z-10 tracking-[0.08em]">{item}</span>
      </span>
    </div>
  ));
};

const HomeHero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const imageBoxRef = useRef(null);
  const mobileImgRef = useRef(null);
  const linesRef = useRef([]);
  const smallRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  const title = ["ATTRACT THE TALENT", "YOU NEED TO BUILD A", "BETTER FUTURE"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [imageBoxRef.current, mobileImgRef.current],
        { x: 80, opacity: 0, scale: 0.96 },
        { x: 0, opacity: 1, scale: 1, duration: 1.3, ease: "power4.out" },
      );
      gsap.fromTo(
        imageRef.current,
        { scale: 1.3 },
        { scale: 1, duration: 2, ease: "power4.out" },
      );
      gsap.to(imageRef.current, {
        scale: 1.08,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        smallRef.current,
        { y: -24, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.15, ease: "power3.out" },
      );
      gsap.fromTo(
        linesRef.current,
        { y: 120, opacity: 0, rotateX: 75 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.12,
          delay: 0.28,
          ease: "expo.out",
        },
      );
      gsap.fromTo(
        [paraRef.current, ctaRef.current, statsRef.current],
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          delay: 0.9,
          ease: "power3.out",
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "Future Wave Recruitment",
    alternateName: "Future Wave",
    description:
      "Top-notch global recruitment agency helping pioneering companies scale by connecting them with skilled, ready-to-work professionals across 20+ countries.",
    url: "https://futurewave.online",
    logo: "https://futurewave.online/logo.png",
    image: "https://futurewave.online/assets/homehero.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ivana Meštrovića Street 35",
      addressLocality: "Sesvete",
      postalCode: "10360",
      addressCountry: "HR",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "1000",
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden font-archivo bg-[#31323D] text-[#F6F5E8]"
    >
      <Helmet>
        <title>
          Top Recruitment Agency | Global Staffing Services | Future Wave
        </title>
        <meta
          name="description"
          content="Connect with top-tier professionals. Future Wave is a premier global recruitment and workforce agency scaling enterprises with skilled workforce staffing across 50+ countries."
        />
        <meta
          name="keywords"
          content="recruitment agency, global staffing, professional workforce, executive search, hire skilled workers, essential workforce pioneers, job placement, international recruitment"
        />
        <link rel="canonical" href="https://futurewave.online" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://futurewave.online" />
        <meta
          property="og:title"
          content="Top Recruitment Agency & Global Staffing Services | Future Wave"
        />
        <meta
          property="og:description"
          content="We reduce hiring stress by connecting pioneering companies with ready-to-work professionals globally. Explore global talent pools."
        />
        <meta
          property="og:image"
          content="https://futurewave.online/assets/homehero.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Recruitment Agency & Global Staffing | Future Wave"
        />
        <meta
          name="twitter:description"
          content="Connecting scaleups and global enterprises with essential workforce pioneers smoothly and efficiently."
        />
        <meta
          name="twitter:image"
          content="https://futurewave.online/assets/homehero.png"
        />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgData)}
        </script>
      </Helmet>

      <SvgBackground className="opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#31323D] via-[#31323D]/95 to-[#31323D]/90" />

      <div className="relative z-10 px-5 pt-28 md:px-14 lg:pt-36">
        <div className="container mx-auto flex min-h-[calc(100vh-220px)] items-center">
          <div className="relative w-full">
            <div
              ref={imageBoxRef}
              className="absolute right-0 top-1/2 hidden h-[70vh] w-[67%] -translate-y-1/2 overflow-hidden bg-[#31323D] shadow-[0_35px_120px_rgba(0,0,0,0.55)] lg:block"
            >
              <img
                ref={imageRef}
                src={homeHero}
                alt="future wave cover"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#31323D] via-[#31323D]/55 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            <div className="relative z-20 max-w-5xl">
              <div
                ref={smallRef}
                className="mb-7 flex w-fit items-center gap-3"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full border border-lime-500 text-[#F6F5E8]">
                  ↗
                </span>
                <p className="text-[10px] font-normal uppercase tracking-[0.20em] text-[#F6F5E8] sm:text-[0.9rem]">
                  Recruitment for essential workforce pioneers
                </p>
              </div>

              <div className="space-y-1">
                {title.map((line, i) => (
                  <div key={i} className="overflow-hidden pb-1">
                    <h1
                      ref={(el) => (linesRef.current[i] = el)}
                      className={`text-[2.55rem] font-medium uppercase font-arimo leading-[1] tracking-[-0.01em] sm:text-[3.6rem] md:text-[4.5rem] xl:text-[4.5rem] ${
                        i === 2 ? "text-lime-300" : "text-[#F6F5E8]"
                      }`}
                    >
                      {line}
                    </h1>
                  </div>
                ))}
              </div>

              <p
                ref={paraRef}
                className="mt-7 max-w-md text-base font-montserrat leading-8 text-[#F6F5E8] md:text-xl font-normal"
              >
                We help pioneering companies grow by reducing hiring stress and
                connecting them with ready-to-work professionals.
              </p>

              <div ref={ctaRef} className="mt-9 flex items-center gap-5">
                <button className="grid h-16 w-16 place-items-center rounded-full border border-lime-300 text-3xl text-lime-300 transition-all duration-500 hover:scale-110 hover:bg-lime-300 hover:text-black md:h-20 md:w-20 md:text-4xl">
                  ↗
                </button>
                <div>
                  <h4 className="text-base font-bold text-[#F6F5E8] uppercase tracking-wide md:text-lg">
                    Explore Opportunities
                  </h4>
                  <p className="mt-1 text-sm font-montserrat text-[#F6F5E8]/50">
                    Let's build a better future together
                  </p>
                </div>
              </div>
            </div>

            {/* mobile image */}
            <div
              ref={mobileImgRef}
              className="relative z-20 mt-12 h-[330px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl sm:h-[420px] lg:hidden"
            >
              <img
                src={homeHero}
                alt="future wave cover"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            {/* stats */}
            <div
              ref={statsRef}
              className="relative z-20 mt-6 grid grid-cols-1 gap-4 rounded-[2rem] border border-white/10 bg-black/25 p-5 backdrop-blur-xl sm:grid-cols-3 lg:ml-auto lg:mr-10 lg:mt-20 lg:max-w-2xl"
            >
              <div>
                <h3 className="text-3xl font-black md:text-4xl">200+</h3>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/50">
                  Partners
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                <h3 className="text-3xl font-black md:text-4xl">1000+</h3>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/50">
                  Placements
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                <h3 className="text-3xl font-black md:text-4xl">50+</h3>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/50">
                  Countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Marquee — same as footer ── */}
      <div className="group/marquee relative z-10 overflow-hidden py-2 backdrop-blur-sm mt-12">
        <div className="footer-marquee footer-marquee-left mb-4 flex w-max items-center">
          {renderMarqueeItems(rowOne, "lime")}
        </div>
        <div className="footer-marquee footer-marquee-right flex w-max items-center">
          {renderMarqueeItems(rowTwo, "cyan")}
        </div>
      </div>

      {/* scroll hint */}
      {/* <div className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 text-center md:block">
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">
          Scroll to discover
        </p>
        <span className="mt-2 block animate-bounce text-2xl">⌄</span>
      </div> */}
    </section>
  );
};

export default HomeHero;
