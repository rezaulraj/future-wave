import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SvgBackground from "../../components/common/SvgBackground";
import { Helmet } from "react-helmet-async";

const HeroContact = () => {
  const heroRef = useRef(null);
  const imageBoxRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRefs = useRef([]);
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
          duration: 0.9,
          stagger: 0.14,
          delay: 0.85,
          ease: "power3.out",
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const title = ["LET'S START", "A BETTER", "CONVERSATION"];

  const schemaOrgContactData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Future Wave Recruitment Support & Solutions",
    description:
      "Get in touch with our recruitment support office for B2B hiring solutions, candidate partnerships, and general support inquiries.",
    url: "https://futurewave.online/contact",
    mainEntity: {
      "@type": "EmploymentAgency",
      name: "Future Wave Recruitment",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1900",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "info@futurewave.online",
        availableLanguage: ["en"],
      },
    },
  };
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#151820] px-5 py-28 text-white md:px-14 lg:py-36"
    >
      <Helmet>
        <title>Contact Our Recruitment Support Office | Future Wave</title>
        <meta
          name="description"
          content="Get in touch with our staffing advisors. Connect immediately for employer client queries, strategic staffing inquiries, and fast-response support channels."
        />
        <meta
          name="keywords"
          content="contact recruitment agency, hiring inquiries, partner consultation form, message staffing specialist, corporate recruitment support"
        />
        <link rel="canonical" href="https://futurewave.online/contact" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://futurewave.online/contact" />
        <meta
          property="og:title"
          content="Contact Future Wave | Start a Recruitment Conversation"
        />
        <meta
          property="og:description"
          content="Have a query regarding hiring services, pipeline staffing setup, or career options? Reach out to our response desk."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Reach a Talent Specialist | Future Wave"
        />
        <meta
          name="twitter:description"
          content="Drop us a message for premium candidate discovery solutions and swift cross-border service recruitment consulting."
        />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgContactData)}
        </script>
      </Helmet>

      <SvgBackground className="opacity-70" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#10131a]/95 via-[#10131a]/75 to-[#10131a]/20" />
      <div className="absolute -left-28 top-20 h-[500px] w-[500px] rounded-full bg-lime-300/10 blur-[150px]" />

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-120px)] items-center">
        <div className="relative w-full">
          <div
            ref={imageBoxRef}
            className="absolute right-0 top-1/2 hidden h-[72vh] w-[67%] -translate-y-1/2 overflow-hidden rounded-[2.7rem] border border-white/10 bg-white/[0.05] shadow-[0_35px_120px_rgba(0,0,0,0.6)] backdrop-blur-xl lg:block"
          >
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1900&auto=format&fit=crop"
              alt="Contact Future Wave"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#151820] via-[#151820]/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

            <div className="absolute bottom-8 right-8 max-w-sm rounded-[2rem] border border-white/10 bg-black/30 p-6 backdrop-blur-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-lime-300">
                Contact us
              </p>
              <h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.05em] text-[#f4f1e8]">
                tell us what you need
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
              <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.9)]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 sm:text-[11px]">
                Contact
              </p>
            </div>

            <div className="space-y-1">
              {title.map((line, index) => (
                <div key={index} className="overflow-hidden pb-1">
                  <h1
                    ref={(el) => (titleRefs.current[index] = el)}
                    className={`text-[3rem] font-black uppercase leading-[0.88] tracking-[-0.075em] sm:text-[4.5rem] md:text-[5.5rem] xl:text-[6.5rem] ${
                      index === 1 ? "text-lime-300" : "text-[#f4f1e8]"
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
              Have a question, hiring need or partnership idea? Send us a
              message and our team will respond as soon as possible.
            </p>

            <div ref={ctaRef} className="mt-10 flex items-center gap-5">
              <a
                href="#contact-form"
                className="grid h-16 w-16 place-items-center rounded-full border border-lime-300 text-3xl text-lime-300 transition-all duration-500 hover:scale-110 hover:bg-lime-300 hover:text-black md:h-20 md:w-20 md:text-4xl"
              >
                ↗
              </a>

              <div>
                <h4 className="text-base font-bold uppercase tracking-wide md:text-lg">
                  Send a message
                </h4>
                <p className="mt-1 text-sm text-white/50">
                  We usually reply quickly
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-12 h-[340px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-2xl lg:hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1400&auto=format&fit=crop"
              alt="Contact Future Wave"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
