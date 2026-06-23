import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiClock } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    slug: "hire-foreign-worker-eu-2026",
    no: "01",
    category: "Recruitment Guide",
    time: "6 min read",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
    title: "How to hire a foreign worker in the EU — Complete guide 2026.",
    description:
      "Complete recruitment process, permits, employer responsibilities and onboarding strategy for international hiring.",
  },

  {
    slug: "eu-work-permit-2026",
    no: "02",
    category: "Work Permit",
    time: "8 min read",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop",
    title:
      "Residence and work permit in the EU 2026 — steps, documentation and deadlines.",
    description:
      "Everything employers should know about permits, legal documentation and processing timelines.",
  },

  {
    slug: "employer-mistakes-foreign-workers",
    no: "03",
    category: "Employer Tips",
    time: "5 min read",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
    title:
      "The 10 most common mistakes employers make when hiring foreign workers.",
    description:
      "Avoid costly mistakes and improve your international recruitment workflow.",
  },

  {
    slug: "eu-visa-sponsorship-guide",
    no: "04",
    category: "Sponsorship Explained",
    time: "7 min read",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
    title:
      "Employer sponsorship for EU work visas — costs, obligations, and legal requirements.",
    description:
      "Understand sponsorship responsibilities, legal compliance and employer obligations.",
  },

  {
    slug: "eu-blue-card-2026",
    no: "05",
    category: "EU Blue Card",
    time: "6 min read",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
    title:
      "EU Blue Card 2026 — eligibility, salary thresholds, and application process for employers.",
    description:
      "Detailed guide for employers hiring highly skilled foreign professionals in Europe.",
  },

  {
    slug: "remote-hiring-eu",
    no: "06",
    category: "Remote Hiring",
    time: "5 min read",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop",
    title:
      "Hiring remote foreign workers in the EU — tax, payroll, and compliance essentials.",
    description:
      "Everything about payroll, taxation and compliance for remote international teams.",
  },

  {
    slug: "seasonal-workers-eu-2026",
    no: "07",
    category: "Seasonal Workers",
    time: "6 min read",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
    title:
      "How to hire seasonal foreign workers in the EU — permits, quotas, and timelines.",
    description:
      "Learn how employers can legally hire seasonal foreign workers across Europe while managing quotas and permits.",
  },

  {
    slug: "eu-remote-work-compliance",
    no: "08",
    category: "Remote Hiring",
    time: "5 min read",
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1400&auto=format&fit=crop",
    title:
      "Remote foreign workers in the EU — tax, payroll, and compliance essentials.",
    description:
      "Important compliance and payroll information for businesses hiring remote international teams.",
  },

  {
    slug: "foreign-worker-document-checklist",
    no: "09",
    category: "Document Checklist",
    time: "4 min read",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    title:
      "Mandatory documents for hiring non-EU nationals — employer and candidate side.",
    description:
      "Complete checklist of documents employers and foreign workers need during international hiring.",
  },

  {
    slug: "illegal-employment-eu-fines",
    no: "10",
    category: "Compliance & Fines",
    time: "7 min read",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop",
    title:
      "Illegal employment of foreign workers in the EU — penalties and audits.",
    description:
      "Understand employer risks, penalties and compliance responsibilities when hiring internationally.",
  },
];

const OurBlogs = () => {
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRefs.current,
        {
          y: 90,
          opacity: 0,
          rotateX: 70,
        },
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
          y: 90,
          opacity: 0,
          scale: 0.92,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.08,
          ease: "back.out(1.7)",
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
      <div className="absolute left-[-120px] top-0 h-[520px] w-[520px] rounded-full bg-lime-300/10 blur-[150px]" />

      <div className="absolute bottom-0 right-[-120px] h-[560px] w-[560px] rounded-full bg-cyan-400/10 blur-[170px]" />

      <div className="container relative z-10 mx-auto">
        <div className="mb-16 max-w-5xl">
          <p
            ref={(el) => (titleRefs.current[0] = el)}
            className="mb-5 w-fit rounded-full border border-lime-300/25 bg-lime-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-lime-300"
          >
            Insights
          </p>

          <div className="overflow-hidden pb-2">
            <h2
              ref={(el) => (titleRefs.current[1] = el)}
              className="text-[3rem] font-black uppercase leading-[0.9] tracking-[-0.07em] text-[#f4f1e8] sm:text-[4.5rem] md:text-[6rem]"
            >
              Recruitment <span className="text-lime-300">resources</span>
            </h2>
          </div>

          <p
            ref={(el) => (titleRefs.current[2] = el)}
            className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg"
          >
            Modern recruitment insights, hiring guides and practical EU
            workforce solutions for employers and global teams.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <Link
              key={blog.slug}
              to={`/communities-resources/${blog.slug}`}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_25px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-700 hover:-translate-y-3 hover:border-lime-300/40 hover:bg-white/[0.07]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-[#10131a]/35 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-lime-300/5 opacity-0 transition-all duration-700 group-hover:opacity-100" />

                <div className="absolute left-5 top-5 rounded-full border border-lime-300/30 bg-black/30 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-lime-300">
                    {blog.no}
                  </p>
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/75 backdrop-blur-xl">
                    {blog.category}
                  </span>

                  <span className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60 backdrop-blur-xl">
                    <FiClock />
                    {blog.time}
                  </span>
                </div>
              </div>

              <div className="relative p-7">
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-lime-300/10 blur-3xl transition-all duration-700 group-hover:bg-lime-300/20" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-black leading-tight tracking-[-0.045em] text-[#f4f1e8] transition-all duration-500 group-hover:text-lime-300">
                    {blog.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/58 transition-all duration-500 group-hover:text-white/75">
                    {blog.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
                      Read article
                    </span>

                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/20 text-white/45 transition-all duration-500 group-hover:translate-x-1 group-hover:border-lime-300 group-hover:bg-lime-300 group-hover:text-black">
                      <FiArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
