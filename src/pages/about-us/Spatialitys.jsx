import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    title: "Hospitality & Tourism",
    subtitle: "Hotels • Resorts • Events",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop",
    text: "We help hospitality businesses find reliable, service-minded people for guest-facing and operational roles.",
    roles: ["Hotel Staff", "Waiter", "Chef", "Event Crew"],
  },
  {
    title: "Personal Care & Beauty",
    subtitle: "Salon • Spa • Wellness",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1400&auto=format&fit=crop",
    text: "We connect beauty and wellness brands with skilled professionals who understand care, presentation and trust.",
    roles: ["Beautician", "Hair Stylist", "Spa Assistant", "Makeup Artist"],
  },
  {
    title: "Transportation & Logistics",
    subtitle: "Delivery • Fleet • Warehouse",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400&auto=format&fit=crop",
    text: "We support fast-moving logistics teams with dependable workers for delivery, warehouse and support operations.",
    roles: ["Driver", "Courier", "Warehouse Worker", "Forklift Driver"],
  },
  {
    title: "Home & Repair Services",
    subtitle: "Cleaning • Maintenance • Fixing",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1400&auto=format&fit=crop",
    text: "We help service companies hire practical, hands-on workers for homes, buildings and maintenance needs.",
    roles: ["Cleaner", "Plumber Helper", "Electrician", "Maintenance Staff"],
  },
  {
    title: "Construction & Skilled Trades",
    subtitle: "Build • Repair • Install",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop",
    text: "We connect employers with skilled trade workers who can support projects safely, efficiently and consistently.",
    roles: ["Welder", "Carpenter", "Painter", "Fitter"],
  },
];

const Spatialitys = () => {
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const cardRefs = useRef([]);
  const detailsRef = useRef(null);
  const [active, setActive] = useState(0);

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
            start: "top 72%",
          },
        },
      );

      gsap.fromTo(
        cardRefs.current,
        { y: 100, opacity: 0, scale: 0.85, rotate: -4 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 58%",
          },
        },
      );

      cardRefs.current.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      detailsRef.current,
      { y: 25, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.55,
        ease: "power3.out",
      },
    );
  }, [active]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible px-5 py-24 bg-[#31323D] text-[#F6F5E8] font-arimo md:px-14 md:py-32"
    >
      {/* <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-lime-300/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[170px]" /> */}

      <div className="container relative z-10 mx-auto">
        <div className="mb-16 max-w-4xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-lime-300">
            Industry Specialties
          </p>

          {["Specialized hiring", "for real service teams"].map(
            (line, index) => (
              <div key={index} className="overflow-hidden pb-1">
                <h2
                  ref={(el) => (titleRefs.current[index] = el)}
                  className={`text-[3rem] font-semibold uppercase leading-[0.9] tracking-[-0.07em] sm:text-[4.5rem] md:text-[5rem] ${
                    index === 1 ? "text-lime-300" : "text-[#F6F5E8]"
                  }`}
                >
                  {line}
                </h2>
              </div>
            ),
          )}

          <p className="mt-7 max-w-2xl text-base font-montserrat leading-8 text-[#F6F5E8]/75 md:text-lg">
            Explore the areas where we help employers find reliable, skilled and
            service-focused people.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-start overflow-visible">
          {/* cards */}
          <div className="grid gap-8">
            {industries.map((item, index) => {
              const isActive = active === index;

              return (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  onMouseEnter={() => setActive(index)}
                  className={`group relative overflow-hidden rounded-[2.3rem] border p-4 backdrop-blur-2xl transition-all duration-700 ${
                    isActive
                      ? "border-lime-300/60 bg-[#F6F5E8] shadow-[0_35px_120px_rgba(190,242,100,0.14)]"
                      : "border-white/10 bg-[#F6F5E8]/10 hover:border-lime-300/40 hover:bg-white/[0.07]"
                  }`}
                >
                  <div className="grid gap-5 md:grid-cols-[0.75fr_1fr] md:items-center">
                    <div className="relative h-64 overflow-hidden rounded-[1.8rem]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`h-full w-full object-cover transition-all duration-700 ${
                          isActive ? "scale-110" : "scale-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                      <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-lime-300/50 bg-black/30 text-lime-300 backdrop-blur-xl">
                        0{index + 1}
                      </div>
                    </div>

                    <div className="p-2 md:p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#31323d]">
                        {item.subtitle}
                      </p>

                      <h3 className="mt-4 text-3xl font-semibold uppercase leading-none tracking-[-0.055em] text-[#31323d] md:text-4xl">
                        {item.title}
                      </h3>

                      <p className="mt-5 max-w-xl font-montserrat text-sm leading-7 text-[#31323d]/85">
                        {item.text}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {item.roles.slice(0, 3).map((role, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-[#31323d]/10 bg-[#31323d]/20 px-4 py-2 text-xs font-bold text-[#31323d]/85"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-lime-300 to-transparent transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          <div className="sticky top-28 hidden lg:block self-start">
            <div className="relative mx-auto h-[520px] w-[520px]">
              <div className="absolute inset-0 rounded-full border border-white/10 bg- backdrop-blur-2xl" />
              <div className="absolute inset-8 rounded-full border border-lime-300/20" />
              <div className="absolute inset-20 rounded-full border border-cyan-300/15" />

              <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-lime-300/30 shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
                <img
                  src={industries[active].image}
                  alt={industries[active].title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#31323d]/85 via-[#31323d]/30 to-transparent" />
              </div>

              <div
                ref={detailsRef}
                className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-white/10 bg-black/35 p-6 backdrop-blur-xl"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-lime-300">
                  Active Specialty
                </p>

                <h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.05em] text-[#f4f1e8]">
                  {industries[active].title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  {industries[active].text}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {industries[active].roles.map((role, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-lime-300/20 bg-lime-300/[0.08] px-3 py-1.5 text-[11px] font-bold text-lime-200"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {industries.map((item, index) => {
                const angle = (index / industries.length) * Math.PI * 2 - 1.57;
                const radius = 250;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-xs font-black transition-all duration-500 ${
                      active === index
                        ? "border-lime-300 bg-lime-300 text-black shadow-[0_0_35px_rgba(190,242,100,0.5)]"
                        : "border-white/15 bg-black/30 text-white/50 hover:border-lime-300 hover:text-lime-300"
                    }`}
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    0{index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spatialitys;
