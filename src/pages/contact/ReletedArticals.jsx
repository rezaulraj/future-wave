import React, { useEffect, useRef } from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiClock,
  FiTrendingUp,
} from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    slug: "hire-foreign-worker-eu-2026",
    title: "How to hire a foreign worker in EU — Complete guide 2026.",
    category: "Recruitment Guide",
    time: "6 min read",
  },

  {
    slug: "eu-work-permit-2026",
    title:
      "Residence and work permit in EU 2026 — steps, documentation and deadlines.",
    category: "Work Permit",
    time: "8 min read",
  },

  {
    slug: "employer-mistakes-hiring-foreign-workers",
    title:
      "The 10 most common mistakes employers make when hiring foreign workers.",
    category: "Employer Tips",
    time: "5 min read",
  },
];

const ReletedArticals = () => {
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const cardRefs = useRef([]);
  const linkRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRefs.current,
        { y: 90, opacity: 0, rotateX: 70 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
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
        cardRefs.current,
        {
          x: 80,
          opacity: 0,
          scale: 0.96,
          filter: "blur(10px)",
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        },
      );

      gsap.fromTo(
        linkRefs.current,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 68%",
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
      <div className="container relative z-10 mx-auto">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* left side */}
          <div>
            <div
              ref={(el) => (titleRefs.current[0] = el)}
              className="mb-6 flex w-fit items-center gap-3 rounded-full border border-lime-300/20 bg-lime-300/10 px-5 py-2 backdrop-blur-xl"
            >
              <FiBookOpen className="text-lime-300" />
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-lime-300">
                Related Articles
              </p>
            </div>

            <div className="overflow-hidden pb-2">
              <h2
                ref={(el) => (titleRefs.current[1] = el)}
                className="text-4xl font-black leading-[0.92] tracking-[-0.06em] text-[#f4f1e8] md:text-6xl"
              >
                Find out more before{" "}
                <span className="text-lime-300">you contact us</span>
              </h2>
            </div>

            <p
              ref={(el) => (titleRefs.current[2] = el)}
              className="mt-6 max-w-xl text-base leading-8 text-white/58"
            >
              Read helpful recruitment guides, work permit information and
              employer insights before starting your hiring process.
            </p>

            <div
              ref={(el) => (titleRefs.current[3] = el)}
              className="mt-10 hidden items-center gap-4 md:flex"
            >
              <div className="grid h-16 w-16 place-items-center rounded-2xl border border-lime-300/25 bg-lime-300/10 text-2xl text-lime-300">
                <FiTrendingUp />
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-lime-300">
                  Recruitment Insights
                </p>
                <p className="mt-1 text-sm text-white/50">
                  Updated articles for employers and partners.
                </p>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="space-y-5">
            {articles.map((article, index) => (
              <Link
                key={index}
                to={`/communities-resources/${article.slug}`}
                ref={(el) => (cardRefs.current[index] = el)}
                className="group relative flex overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-lime-300/35 hover:bg-white/[0.06]"
              >
                <div className="absolute -right-10 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-lime-300/10 blur-3xl transition-all duration-500 group-hover:bg-lime-300/20" />

                <div className="relative z-10 flex w-full items-start gap-5">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-lime-300/20 bg-lime-300/10 text-xl text-lime-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-lime-300 group-hover:text-black">
                    <FiBookOpen />
                  </div>

                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/55">
                        {article.category}
                      </span>

                      <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/35">
                        <FiClock />
                        {article.time}
                      </span>
                    </div>

                    <h3 className="max-w-2xl text-lg font-black leading-8 tracking-[-0.03em] text-[#f4f1e8] transition-all duration-500 group-hover:text-lime-300 md:text-xl">
                      {article.title}
                    </h3>
                  </div>

                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 bg-black/20 text-lg text-white/40 transition-all duration-500 group-hover:translate-x-1 group-hover:border-lime-300 group-hover:bg-lime-300 group-hover:text-black">
                    <FiArrowRight />
                  </div>
                </div>
              </Link>
            ))}

            {/* links */}
            {/* links */}
            <div className="flex flex-wrap items-center gap-6 pt-3">
              {[
                {
                  label: "All articles",
                  path: "/communities-resources",
                },

                {
                  label: "Employment services",
                  path: "/services",
                },

                {
                  label: "Work permit support",
                  path: "/contact",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  ref={(el) => (linkRefs.current[index] = el)}
                  className="group flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-white/55 transition-all duration-500 hover:text-lime-300"
                >
                  <span>{item.label}</span>

                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-black/20 text-xs transition-all duration-500 group-hover:translate-x-1 group-hover:border-lime-300 group-hover:bg-lime-300 group-hover:text-black">
                    <FiArrowRight />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReletedArticals;
