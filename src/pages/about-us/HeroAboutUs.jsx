import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SvgBackground from "../../components/common/SvgBackground";
import { Helmet } from "react-helmet-async";

const HeroAboutUs = () => {
  const heroRef = useRef(null);
  const imageBoxRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRefs = useRef([]);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef([]);

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
        [textRef.current, ctaRef.current, ...statsRef.current],
        { y: 35, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.12,
          delay: 0.85,
          ease: "power3.out",
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const title = ["YOUR RELIABLE", "RECRUITMENT", "PARTNER"];

  const schemaOrgAboutData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "EmploymentAgency",
      name: "Future Wave Recruitment",
      url: "https://futurewave.online",
      logo: "https://futurewave.online/logo.png",
      description:
        "A trusted international recruitment and staffing firm bridging global talent networks with premier companies.",
      knowsAbout: [
        "International Recruitment",
        "Workforce Staffing Solutions",
        "Executive Search",
        "Human Resources Consulting",
      ],
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#31323d]/95 text-[#F6F5E8] font-arimo px-5 py-28 md:px-14 lg:py-36"
    >
      <Helmet>
        <title>
          About Us | Future Wave | Trusted Global Recruitment Partner
        </title>
        <meta
          name="description"
          content="Discover the story behind Future Wave. We are a reliable international recruitment partner connecting skilled human capital with premier industries globally."
        />
        <meta
          name="keywords"
          content="about future wave, recruitment agency history, trusted staffing partner, global workforce team, human resources philosophy"
        />
        <link rel="canonical" href="https://futurewave.online/about" />

        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://futurewave.online/about" />
        <meta
          property="og:title"
          content="About Us | Future Wave | Trusted Global Recruitment Partner"
        />
        <meta
          property="og:description"
          content="We connect skilled people with trusted employers through human-first, streamlined, and highly reliable recruitment support."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Future Wave Recruitment" />
        <meta
          name="twitter:description"
          content="Learn how we scale business operations globally using our expansive international talent network."
        />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgAboutData)}
        </script>
      </Helmet>

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-120px)] items-center">
        <div className="relative w-full">
          <div
            ref={imageBoxRef}
            className="absolute right-0 top-1/2 hidden h-[72vh] w-[67%] -translate-y-1/2 overflow-hidden backdrop-blur-xl lg:block"
          >
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1900&auto=format&fit=crop"
              alt="About Future Wave"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#31323D] via-[#31323D]/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

            <div className="absolute bottom-8 right-8 max-w-sm rounded-[2rem] border border-[#F6F5E8]/10 bg-[#31323D]/30 p-6 backdrop-blur-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-lime-300">
                About us
              </p>
              <h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.05em] text-[#F6F5E8]">
                people first, hiring smarter
              </h3>
            </div>

            <div className="absolute right-8 top-8 grid h-16 w-16 place-items-center rounded-full border border-lime-300 bg-black/30 text-3xl text-lime-300 backdrop-blur-xl">
              ↗
            </div>
          </div>

          <div className="relative z-20 max-w-4xl">
            <div
              ref={badgeRef}
              className="mb-7 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur-md"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full border border-lime-300 text-lime-300">
                ◌
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F6F5E8]/80 sm:text-[11px]">
                About Future Wave
              </p>
            </div>

            <div className="space-y-1">
              {title.map((line, index) => (
                <div key={index} className="overflow-hidden pb-1">
                  <h1
                    ref={(el) => (titleRefs.current[index] = el)}
                    className={`text-[2.55rem] font-medium uppercase font-arimo leading-[1] tracking-[-0.01em] sm:text-[3.6rem] md:text-[4.5rem] xl:text-[4.5rem] ${
                      index === 1 ? "text-lime-300" : "text-[#F6F5E8]"
                    }`}
                  >
                    {line}
                  </h1>
                </div>
              ))}
            </div>

            <p
              ref={textRef}
              className="mt-8 max-w-xl text-base leading-8 font-montserrat text-[#F6F5E8]/72 md:text-lg"
            >
              We connect skilled people with trusted employers through clear,
              human and reliable recruitment support.
            </p>

            <div ref={ctaRef} className="mt-10 flex items-center gap-5">
              <a
                href="#our-story"
                className="grid h-16 w-16 place-items-center rounded-full border border-lime-300 text-3xl text-lime-300 transition-all duration-500 hover:scale-110 hover:bg-lime-300 hover:text-black md:h-20 md:w-20 md:text-4xl"
              >
                ↗
              </a>

              <div>
                <h4 className="text-base font-semibold uppercase tracking-wide md:text-lg">
                  Read our story
                </h4>
                <p className="mt-1 text-sm font-montserrat text-white/50">
                  Built on trust, people and progress
                </p>
              </div>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                { value: "10+", label: "Industries" },
                { value: "500+", label: "People connected" },
                { value: "Global", label: "Talent network" },
              ].map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (statsRef.current[index] = el)}
                  className="rounded-[1.4rem] border border-[#F6F5E8]/10 bg-[#F6F5E8]/[0.055] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-lime-300/50 hover:bg-[#F6F5E8]/[0.09]"
                >
                  <h3 className="text-2xl font-black text-lime-300">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F6F5E8]/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-20 mt-12 h-[340px] overflow-hidden shadow-2xl lg:hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop"
              alt="About Future Wave"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#31323d]/75 via-[#31323d]/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutUs;
