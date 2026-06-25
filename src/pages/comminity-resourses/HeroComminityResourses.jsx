import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SvgBackground from "../../components/common/SvgBackground";
import { Helmet } from "react-helmet-async";

const HeroComminityResourses = () => {
  const heroRef = useRef(null);
  const imageBoxRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRefs = useRef([]);
  const textRef = useRef(null);
  const statRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageBoxRef.current,
        { x: 100, opacity: 0, scale: 0.94 },
        { x: 0, opacity: 1, scale: 1, duration: 1.4, ease: "power4.out" },
      );

      gsap.fromTo(
        imageRef.current,
        { scale: 1.3 },
        { scale: 1, duration: 2.1, ease: "power4.out" },
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
        { y: -22, opacity: 0 },
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
        [textRef.current, ...statRefs.current],
        { y: 35, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.14,
          delay: 0.85,
          ease: "power3.out",
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const resources = [
    {
      no: "01",
      title: "Collaboration",
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

  const title = ["COMMUNITIES", "& RESOURCES"];

  const schemaOrgCommunityData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Recruitment Communities & Staffing Resources",
    description:
      "Access collaborative hiring frameworks, practical recruitment guides, and employment opportunity networks.",
    url: "https://futurewave.online/resources",
    mainEntity: {
      "@type": "CreativeWorkSeries",
      name: "Future Wave Knowledge Commons",
      description:
        "Fostering collaboration, transparent knowledge sharing, and strategic talent placement.",
      hasPart: resources.map((res) => ({
        "@type": "CreativeWork",
        position: parseInt(res.no),
        headline: res.title,
        abstract: res.text,
        keywords: res.points.join(", "),
      })),
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#31323D]/95 text-[#F6F5E8] px-5 py-28 font-arimo md:px-14 lg:py-36"
    >
      <Helmet>
        <title>Hiring Resources & Partner Communities | Future Wave</title>
        <meta
          name="description"
          content="Access our community recruitment tools. Get hiring guidance, collaborative insights, and knowledge-sharing frameworks built to solve the staffing crisis."
        />
        <meta
          name="keywords"
          content="recruitment resources, hiring collaboration hubs, talent guides, candidate tools, corporate recruitment networks, workforce knowledge sharing"
        />
        <link rel="canonical" href="https://futurewave.online/resources" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://futurewave.online/resources" />
        <meta
          property="og:title"
          content="Recruitment Resources Hub & Networking Communities"
        />
        <meta
          property="og:description"
          content="Fostering direct synergy between top service networks and active work candidates through open guides and transparent placement paths."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hiring Guidance & Collaborative Networks"
        />
        <meta
          name="twitter:description"
          content="Unlock expert insights, candidate guidelines, and practical knowledge from enterprise staffing partners."
        />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgCommunityData)}
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
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1900&auto=format&fit=crop"
              alt="Communities and resources"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#151820] via-[#151820]/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

            <div className="absolute bottom-8 right-8 max-w-sm rounded-[2rem] border border-[#F6F5E8]/10 bg-[#31323d]/30 p-6 backdrop-blur-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-lime-300">
                Shared knowledge
              </p>
              <h3 className="mt-3 text-3xl font-semibold uppercase leading-none tracking-[-0.01em] text-[#F6F5E8]">
                collaboration builds stronger teams
              </h3>
            </div>

            <div className="absolute right-8 top-8 grid h-16 w-16 place-items-center rounded-full border border-lime-300 bg-[#31323d]/30 text-3xl text-lime-300 backdrop-blur-xl">
              ↗
            </div>
          </div>

          <div className="relative z-20 max-w-4xl">
            <div
              ref={badgeRef}
              className="mb-7 flex w-fit items-center gap-3 rounded-full border border-[#F6F5E8]/10 bg-[#F6F5E8]/[0.05] px-4 py-2 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.9)]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F6F5E8]/80 sm:text-[11px]">
                Communities & Resources
              </p>
            </div>

            <div className="space-y-1">
              {title.map((line, index) => (
                <div key={index} className="overflow-hidden pb-1">
                  <h1
                    ref={(el) => (titleRefs.current[index] = el)}
                    className={`text-[3rem] font-semibold uppercase leading-[0.88] tracking-[-0.075em] sm:text-[4rem] md:text-[4.5rem] xl:text-[5rem] ${
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
              className="mt-8 max-w-xl text-base leading-8 text-[#F6F5E8]/72 font-montserrat md:text-lg"
            >
              We know that the only way to solve the talent crisis is by working
              together. That&apos;s why we put our energy and expertise into
              fostering collaboration, sharing knowledge, and creating
              opportunities for our clients and candidates.
            </p>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                { value: "01", label: "Collaboration" },
                { value: "02", label: "Knowledge sharing" },
                { value: "03", label: "Opportunities" },
              ].map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (statRefs.current[index] = el)}
                  className="rounded-[1.4rem] border border-[#F6F5E8]/10 bg-[#F6F5E8]/[0.055] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-lime-300/50 hover:bg-[#F6F5E8]/[0.09]"
                >
                  <h3 className="text-2xl font-black text-lime-300">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F6F5E8]/70">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-20 mt-12 h-[340px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-2xl lg:hidden">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
              alt="Communities and resources"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComminityResourses;
