import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SvgBackground from "../../components/common/SvgBackground";
import { Helmet } from "react-helmet-async";

const HeroLivejob = () => {
  const heroRef = useRef(null);
  const titleRefs = useRef([]);
  const textRef = useRef(null);
  const badgeRef = useRef(null);
  const imageBoxRef = useRef(null);
  const imageRef = useRef(null);
  const cardRefs = useRef([]);

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
        [textRef.current, ...cardRefs.current],
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

  const jobs = [
    {
      title: "Hospitality & Tourism Services",
      tag: "Hotels • Travel • Events",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      video: "https://www.pexels.com/download/video/7820512/",
      text: "Guest-focused roles in hotels, resorts, restaurants, travel and event services.",
      roles: [
        "Hotel Staff",
        "Tour Guide",
        "Event Assistant",
        "Restaurant Crew",
      ],
    },
    {
      title: "Personal Care & Beauty Services",
      tag: "Salon • Spa • Wellness",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
      video: "https://www.pexels.com/download/video/7754492/",
      text: "Creative and caring roles in beauty, grooming, wellness and personal care.",
      roles: ["Hair Stylist", "Beautician", "Spa Assistant", "Makeup Artist"],
    },
    {
      title: "Transportation & Logistics Services",
      tag: "Delivery • Fleet • Warehouse",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      video:
        "https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4",
      text: "Fast-moving opportunities in delivery, warehousing, fleet and supply chain support.",
      roles: ["Driver", "Warehouse Staff", "Courier", "Fleet Assistant"],
    },
    {
      title: "Home & Repair Services",
      tag: "Maintenance • Cleaning • Fixing",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
      video: "https://www.pexels.com/download/video/8487986/",
      text: "Practical hands-on roles helping homes and businesses stay clean, safe and working.",
      roles: [
        "Cleaner",
        "Electrician Helper",
        "Plumber Helper",
        "Maintenance Staff",
      ],
    },
  ];

  const title = ["LIVE JOBS", "FOR MISSION", "BUILDERS"];

  const schemaOrgJobBoardData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Live Job Openings & Service Sector Vacancies",
    description:
      "Browse current employment listings across hospitality, wellness, logistics, and maintenance sectors.",
    url: "https://futurewave.online/jobs",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: jobs.length,
      itemListElement: jobs.map((job, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: job.title,
        description: `${job.text} Available roles: ${job.roles.join(", ")}`,
      })),
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#151820] px-5 py-28 text-white md:px-14 lg:py-36"
    >
      <Helmet>
        <title>Live Job Openings | Hospitality, Logistics & Salon Roles</title>
        <meta
          name="description"
          content="Explore live job openings. Apply immediately for certified roles in Hospitality, Wellness Salons, Fleet Logistics, and Home Maintenance Services."
        />
        <meta
          name="keywords"
          content="live job listings, hospitality hiring, salon styling vacancies, logistics driver jobs, warehouse careers, helper roles"
        />
        <link rel="canonical" href="https://futurewave.online/jobs" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://futurewave.online/jobs" />
        <meta
          property="og:title"
          content="Live Job Vacancies Available Now | Future Wave"
        />
        <meta
          property="og:description"
          content="Immediate hiring options across top-tier regional service providers. Find your next career step."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Find Service Sector Job Openings" />
        <meta
          name="twitter:description"
          content="Streamlined career hiring across verified hospitality, repair, and transport corporate networks."
        />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJobBoardData)}
        </script>
      </Helmet>

      <SvgBackground className="opacity-65" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#10131a]/95 via-[#10131a]/72 to-[#10131a]/20" />
      <div className="absolute -left-28 top-20 h-[500px] w-[500px] rounded-full bg-lime-300/10 blur-[150px]" />
      <div className="absolute -right-32 bottom-10 h-[560px] w-[560px] rounded-full bg-cyan-400/10 blur-[170px]" />

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-120px)] items-center">
        <div className="relative w-full">
          <div
            ref={imageBoxRef}
            className="absolute right-0 top-1/2 hidden h-[72vh] w-[67%] -translate-y-1/2 overflow-hidden rounded-[2.7rem] border border-white/10 bg-white/[0.05] shadow-[0_35px_120px_rgba(0,0,0,0.6)] backdrop-blur-xl lg:block"
          >
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1900&auto=format&fit=crop"
              alt="Live jobs conference"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#151820] via-[#151820]/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

            <div className="absolute bottom-8 right-8 max-w-sm rounded-[2rem] border border-white/10 bg-black/30 p-6 backdrop-blur-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-lime-300">
                Open Roles
              </p>
              <h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.05em] text-[#f4f1e8]">
                join teams building tomorrow
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
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 sm:text-[11px]">
                Current Opportunities
              </p>
            </div>

            <div className="space-y-1">
              {title.map((line, index) => (
                <div key={index} className="overflow-hidden pb-1">
                  <h1
                    ref={(el) => (titleRefs.current[index] = el)}
                    className={`text-[3.1rem] font-black uppercase leading-[0.88] tracking-[-0.075em] sm:text-[4.5rem] md:text-[5.5rem] xl:text-[6.5rem] ${
                      index === 2 ? "text-lime-300" : "text-[#f4f1e8]"
                    }`}
                  >
                    {line}
                  </h1>
                </div>
              ))}
            </div>

            <p
              ref={textRef}
              className="mt-8 max-w-md text-base leading-8 text-white/72 md:text-lg"
            >
              Find meaningful roles with companies aligned to your values,
              purpose and future.
            </p>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                { value: "24+", label: "Open roles" },
                { value: "12+", label: "Partner teams" },
                { value: "Core Hours", label: "Flexible work" },
              ].map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-lime-300/50 hover:bg-white/[0.09]"
                >
                  <h3 className="text-2xl font-black text-lime-300">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-20 mt-12 h-[340px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-2xl lg:hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop"
              alt="Live jobs conference"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLivejob;
