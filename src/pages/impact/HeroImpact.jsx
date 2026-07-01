import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SvgBackground from "../../components/common/SvgBackground";
import { Helmet } from "react-helmet-async";

const impactItems = [
  {
    text: "Connecting talent with international opportunities",
    highlight: "Connecting talent",
    image:
      "https://plus.unsplash.com/premium_photo-1764702365155-4430df293faa?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "Helping employers access skilled and qualified professionals",
    highlight: "Qualified Professionals",
    image:
      "https://images.unsplash.com/photo-1569496736555-47c448d556f7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "Supporting career growth and long-term success",
    highlight: "Career Growth",
    image:
      "https://plus.unsplash.com/premium_photo-1682309553075-c84ea8d9d49a?q=80&w=912&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "Building diverse, high-performing workforces",
    highlight: "High-performing Workforces",
    image:
      "https://plus.unsplash.com/premium_photo-1661389568756-c47d565d8a5a?q=80&w=1114&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "We make ethical decisions when gifting for candidates and clients.",
    highlight: "ethical decisions",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    text: "Creating lasting value for businesses and communities",
    highlight: "Businesses and Communities",
    image:
      "https://images.unsplash.com/photo-1634936016780-65f6a77ebdd4?q=80&w=739&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HeroImpact = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const listRefs = useRef([]);
  const previewRef = useRef(null);
  const previewImgRef = useRef(null);
  const previewTitleRef = useRef(null);

  const [active, setActive] = useState(impactItems[0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(previewRef.current, {
        autoAlpha: 0,
        scale: 0.8,
        rotate: -8,
      });

      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, rotateX: 75 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "expo.out",
        },
      );

      gsap.fromTo(
        descRef.current,
        { y: 40, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          delay: 0.35,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        listRefs.current,
        { x: 70, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          delay: 0.45,
          ease: "power4.out",
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const movePreview = (e) => {
    const bounds = heroRef.current.getBoundingClientRect();

    gsap.to(previewRef.current, {
      x: e.clientX - bounds.left - 290,
      y: e.clientY - bounds.top - 160,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  const showPreview = (item, e) => {
    setActive(item);
    movePreview(e);

    gsap.to(previewRef.current, {
      autoAlpha: 1,
      scale: 1,
      rotate: -5,
      duration: 0.45,
      ease: "back.out(1.8)",
    });

    gsap.fromTo(
      previewImgRef.current,
      { scale: 1.18 },
      { scale: 1, duration: 0.8, ease: "power4.out" },
    );

    gsap.fromTo(
      previewTitleRef.current,
      { y: 18, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power3.out",
      },
    );
  };

  const hidePreview = () => {
    gsap.to(previewRef.current, {
      autoAlpha: 0,
      scale: 0.82,
      rotate: -10,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const schemaOrgImpactData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Our Sustainability Impact",
    description:
      "Learn about our carbon-conscious recruitment operations and corporate social responsibility initiatives.",
    publisher: {
      "@type": "EmploymentAgency",
      name: "Future Wave Recruitment",
      url: "https://futurewave.online",
    },
    mainEntity: {
      "@type": "Organization",
      name: "Future Wave Recruitment",
      knowsAbout: [
        "Sustainable Business Practices",
        "Ethical Recruitment",
        "Carbon Offset Programs",
        "Diversity and Inclusion Schemes",
      ],
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-visible bg-[#31323d]/95 text-[#F6F5E8] px-5 py-28 font-arimo md:px-14 lg:py-36"
    >
      <Helmet>
        <title>Our Sustainability & Eco Impact | Future Wave Recruitment</title>
        <meta
          name="description"
          content="Discover how we lead carbon-conscious recruitment. From planting 10 trees per job placement to supporting ethical candidate gating and ocean preservation schemes."
        />
        <meta
          name="keywords"
          content="green recruitment, carbon-neutral staffing, ethical hiring, diversity internship scheme, corporate sustainability impact"
        />
        <link rel="canonical" href="https://futurewave.online/impact" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://futurewave.online/impact" />
        <meta
          property="og:title"
          content="Our Environmental & Social Impact | Future Wave"
        />
        <meta
          property="og:description"
          content="Every job placement plants 15 trees and clears ocean plastic. Explore our framework for sustainable workforce scaling."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Carbon-Conscious Recruitment Impact"
        />
        <meta
          name="twitter:description"
          content="We run an eco-conscious staffing infrastructure investing back into carbon removal and under-represented tech internships."
        />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgImpactData)}
        </script>
      </Helmet>

      <div
        ref={previewRef}
        className="pointer-events-none absolute left-0 top-0 z-50 hidden w-80 overflow-hidden lg:block"
      >
        <div className="relative h-52 overflow-hidden rounded-[1.25rem]">
          <img
            ref={previewImgRef}
            src={active.image}
            alt={active.highlight}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#31323D]/85 via-[#31323D]/20 to-transparent" />
          <p
            ref={previewTitleRef}
            className="absolute bottom-5 left-5 right-5 text-sm font-black uppercase tracking-[0.16em] text-lime-300"
          >
            {active.highlight}
          </p>
        </div>
      </div>

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-120px)] items-center">
        <div className="grid w-full gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <div className="mb-7 flex w-fit items-center gap-3 rounded-full border border-[#31323D]/10 bg-[#31323D]/[0.05] px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.9)]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F6F5E8]/75">
                Our Impact
              </p>
            </div>

            <div className="overflow-hidden pb-2">
              <h1
                ref={titleRef}
                className="text-[4.2rem] font-semibold uppercase leading-[0.9] tracking-[-0.08em] text-[#F6F5E8] sm:text-[6rem] md:text-[7rem] xl:text-[8rem]"
              >
                Impact
              </h1>
            </div>

            <p
              ref={descRef}
              className="mt-10 max-w-xl text-lg leading-9 text-[#F6F5E8]/72 font-montserrat md:text-xl"
            >
              At Future Wave, we create meaningful connections between talented
              professionals and leading employers across the globe. Our work
              goes beyond recruitment—we help individuals unlock new
              opportunities while enabling businesses to build stronger, more
              capable teams.
            </p>
            <p
              ref={descRef}
              className="mt-10 max-w-2xl mx-auto text-lg leading-9 text-[#F6F5E8]/72 font-montserrat md:text-xl"
            >
              Every successful placement represents a new opportunity, a
              stronger organization, and a brighter future. Through our
              people-first approach and smart recruitment solutions, we continue
              to make a positive impact on careers and businesses worldwide.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-4 shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-6">
            <div className="space-y-4">
              {impactItems.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (listRefs.current[index] = el)}
                  onMouseEnter={(e) => showPreview(item, e)}
                  onMouseMove={movePreview}
                  onMouseLeave={hidePreview}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-[#F6F5E8]/10 bg-[#31323d]/20 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-lime-300/50 hover:bg-[#F6F5E8]/[0.075] hover:shadow-[0_20px_70px_rgba(190,242,100,0.1)]"
                >
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  <div className="flex gap-4">
                    <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-lime-300 text-sm text-lime-300 transition-all duration-500 group-hover:rotate-45 group-hover:bg-lime-300 group-hover:text-[#31323d]">
                      ✓
                    </span>

                    <p className="text-base font-semibold font-montserrat leading-8 text-[#F6F5E8]/78 transition-all duration-500 group-hover:text-[#F6F5E8]">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-4 block overflow-hidden rounded-[1.2rem] border border-[#F6F5E8]/10 lg:hidden">
                    <img
                      src={item.image}
                      alt={item.highlight}
                      className="h-44 w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto pt-30">
        <h1
          ref={titleRef}
          className="max-w-4xl mx-auto text-[2.2rem] font-semibold uppercase leading-[0.9] tracking-[-0.08em] text-[#F6F5E8] sm:text-[3rem] md:text-[4rem] xl:text-[5rem] text-center"
        >
          Connecting the Right People to the Right Opportunities.
        </h1>
        <div className="flex items-center justify-center mt-16">
          <a
            href="/contact"
            className="group relative w-fit overflow-hidden rounded-full border border-lime-300 px-7 py-4 text-[1.5rem] font-semibold uppercase tracking-[0.18em] text-[#F6F5E8] transition-all duration-500 hover:scale-105 hover:text-black"
          >
            <span className="absolute inset-0 -translate-x-full bg-lime-300 transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative z-10">Contact Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroImpact;
