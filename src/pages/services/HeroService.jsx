import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SvgBackground from "../../components/common/SvgBackground";
import { Helmet } from "react-helmet-async";

const HeroService = () => {
  const heroRef = useRef(null);
  const imageBoxRef = useRef(null);
  const imageRef = useRef(null);
  const titleRefs = useRef([]);
  const badgeRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageBoxRef.current,
        { x: 100, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1.4, ease: "power4.out" },
      );

      gsap.fromTo(
        imageRef.current,
        { scale: 1.3 },
        { scale: 1, duration: 2.2, ease: "power4.out" },
      );

      gsap.to(imageRef.current, {
        scale: 1.08,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        badgeRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.15, ease: "power3.out" },
      );

      gsap.fromTo(
        titleRefs.current,
        { y: 120, opacity: 0, rotateX: 75 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.12,
          delay: 0.25,
          ease: "expo.out",
        },
      );

      gsap.fromTo(
        [textRef.current, ctaRef.current],
        { y: 35, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.15,
          delay: 0.9,
          ease: "power3.out",
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

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

  const title = ["SERVICES THAT", "BUILD BETTER", "TEAMS"];

  const schemaOrgServicesData = {
    "@context": "https://schema.org",
    "@graph": services.map((srv) => ({
      "@type": "Service",
      name: srv.title,
      description: srv.short,
      provider: {
        "@type": "EmploymentAgency",
        name: "Future Wave Recruitment",
        url: "https://futurewave.online",
      },
      serviceType: "Workforce Solutions",
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "Contact for custom quotation",
      },
    })),
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#31323d]/95 text-[#F6F5E8] px-5 py-28 font-arimo md:px-14 lg:py-36"
    >
      <Helmet>
        <title>
          Recruitment Services & Workforce Staffing Solutions | Future Wave
        </title>
        <meta
          name="description"
          content="Explore our flexible hiring models: Retained Executive Search, Fast Contract Staffing, and Strategic Employer Brand Advisory customized for high-growth firms."
        />
        <meta
          name="keywords"
          content="retained recruitment, contract staffing, workforce solutions, employee advisory, executive search models, scale hiring"
        />
        <link rel="canonical" href="https://futurewave.online/services" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://futurewave.online/services" />
        <meta
          property="og:title"
          content="Recruitment Services & Workforce Staffing Solutions | Future Wave"
        />
        <meta
          property="og:description"
          content="Discover flexible, transparent, and direct hiring models designed to eliminate corporate recruitment bottlenecks."
        />
        <meta
          property="og:image"
          content="https://plus.unsplash.com/premium_photo-1661495512329-983fa919bda9?q=80&w=870"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Future Wave Workforce Recruitment Models"
        />
        <meta
          name="twitter:description"
          content="Retained, contract, and advisory services built cleanly around transparency and human-centric matching."
        />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgServicesData)}
        </script>
      </Helmet>

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-120px)] items-center">
        <div className="relative w-full">
          <div
            ref={imageBoxRef}
            className="absolute right-0 top-1/2 hidden h-[72vh] w-[67%] -translate-y-1/2 overflow-hidden lg:block"
          >
            <img
              ref={imageRef}
              src="https://plus.unsplash.com/premium_photo-1661495512329-983fa919bda9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Recruitment service"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#31323D] via-[#31323D]/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

            <div className="absolute bottom-8 right-8 max-w-sm rounded-[2rem] border border-white/10 bg-black/30 p-6 backdrop-blur-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-lime-300">
                Talent Strategy
              </p>
              <h3 className="mt-3 text-3xl font-semibold uppercase leading-none tracking-[-0.03em] text-[#F6F5E8]">
                hire smarter, grow faster
              </h3>
            </div>
          </div>

          <div className="relative z-20 max-w-5xl">
            <div
              ref={badgeRef}
              className="mb-7 flex w-fit items-center gap-3 rounded-full border border-[#F6F5E8]/10 bg-[#F6F5E8]/[0.05] px-4 py-2 backdrop-blur-md"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full border border-lime-300 text-lime-300">
                ↗
              </span>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F6F5E8]/80 sm:text-[11px]">
                Recruitment services
              </p>
            </div>

            <div className="space-y-1">
              {title.map((line, index) => (
                <div key={index} className="overflow-hidden pb-1">
                  <h1
                    ref={(el) => (titleRefs.current[index] = el)}
                    className={`text-[3rem] font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-[4rem] md:text-[4.5rem] xl:text-[5rem] ${
                      index === 2 ? "text-lime-300" : "text-[#F6F5E8]"
                    }`}
                  >
                    {line}
                  </h1>
                </div>
              ))}
            </div>

            <p
              ref={textRef}
              className="mt-8 max-w-md text-base leading-8 font-montserrat text-[#F6F5E8]/72 md:text-lg"
            >
              Retained, contract and advisory hiring for teams building the
              future.
            </p>

            <div ref={ctaRef} className="mt-10 flex items-center gap-5">
              <a
                href="#service-list"
                className="grid h-16 w-16 place-items-center rounded-full border border-lime-300 text-3xl text-lime-300 transition-all duration-500 hover:scale-110 hover:bg-lime-300 hover:text-black md:h-20 md:w-20 md:text-4xl"
              >
                ↗
              </a>

              <div>
                <h4 className="text-base font-semibold uppercase tracking-wide md:text-lg">
                  Explore services
                </h4>
                <p className="mt-1 text-sm text-[#F6F5E8]/50 font-montserrat">
                  Find the right hiring model
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-12 h-[340px] overflow-hidden shadow-2xl lg:hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1661495512329-983fa919bda9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Recruitment service"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroService;
