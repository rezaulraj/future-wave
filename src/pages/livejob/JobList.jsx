import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const jobs = [
  {
    title: "Hospitality & Tourism Services",
    tag: "Hotels • Travel • Events",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    video: "https://www.pexels.com/download/video/7820512/",
    text: "Guest-focused roles in hotels, resorts, restaurants, travel and event services.",
    roles: ["Hotel Staff", "Tour Guide", "Event Assistant", "Restaurant Crew"],
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

const JobList = () => {
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const cardRefs = useRef([]);
  const videoRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRefs.current,
        { y: 90, opacity: 0, rotateX: 70 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        cardRefs.current,
        { y: 80, opacity: 0, scale: 0.92, rotate: -2 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 58%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = (index) => {
    setActiveIndex(index);

    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    gsap.to(cardRefs.current[index], {
      y: -14,
      scale: 1.02,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  const handleLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) video.pause();

    setActiveIndex(null);

    gsap.to(cardRefs.current[index], {
      y: 0,
      scale: 1,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-24 bg-[#31323D]/95 text-[#F6F5E8] font-arimo md:px-14 md:py-32"
    >
      <div className="container relative z-10 mx-auto">
        <div className="mb-14 max-w-4xl">
          <p className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-lime-300">
            Live Job Categories
          </p>

          {["Find service jobs", "that fit your skills"].map((line, index) => (
            <div key={index} className="overflow-hidden pb-1">
              <h2
                ref={(el) => (titleRefs.current[index] = el)}
                className="text-[3rem] font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-[#F6F5E8] sm:text-[4.5rem] md:text-[5rem]"
              >
                {line}
              </h2>
            </div>
          ))}

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#F6F5E8]/65 font-montserrat md:text-lg">
            Explore practical service roles across hospitality, beauty,
            logistics and home support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={() => handleLeave(index)}
              className="group relative overflow-hidden rounded-[2.2rem] border border-lime-300/15 bg-[#F6F5E8]/[0.045] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all duration-500 hover:border-lime-300/60 hover:bg-[#F6F5E8]/[0.08] hover:shadow-[0_30px_100px_rgba(56,189,248,0.14)]"
            >
              <div className="relative h-[310px] overflow-hidden rounded-[1.7rem]">
                <img
                  src={job.image}
                  alt={job.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    activeIndex === index
                      ? "opacity-0 scale-110"
                      : "opacity-100"
                  }`}
                />

                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={job.video}
                  muted
                  loop
                  playsInline
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    activeIndex === index
                      ? "opacity-100 scale-105"
                      : "opacity-0"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#31323d]/90 via-[#31323d]/25 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-lime-300/40 bg-[#31323d]/30 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-lime-300 backdrop-blur-xl">
                  {job.tag}
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em] text-[#F6F5E8] md:text-4xl">
                    {job.title}
                  </h3>
                  <p className="mt-4 max-w-xl font-montserrat text-sm leading-7 text-[#F6F5E8]/80">
                    {job.text}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {job.roles.map((role, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-[#F6F5E8]/10 bg-[#31323d]/20 px-4 py-2 text-xs font-semibold text-[#F6F5E8]/70 transition-all duration-500 group-hover:border-lime-300/40 group-hover:text-lime-300"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-lime-300/50 bg-[#31323d]/30 text-2xl text-lime-300 backdrop-blur-xl transition-all duration-500 group-hover:rotate-45 group-hover:bg-lime-300 group-hover:text-[#31323d]">
                ↗
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobList;
