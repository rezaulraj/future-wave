import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Create positive impact",
    icon: "◉",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
    text: "Our drive towards a more sustainable future is always at the forefront of our minds. It dictates every choice we make, from who we work with and how we support them, to the staff we hire and how we run our business.",
  },
  {
    title: "Put people first",
    icon: "♡",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=900&auto=format&fit=crop",
    text: "We believe it’s through empowering people, building communities, and fostering collaboration that we will find the solutions to tackle the climate crisis.",
  },
  {
    title: "Never stop learning",
    icon: "◎",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=900&auto=format&fit=crop",
    text: "Our clients work at the forefront of innovation, in a landscape that’s always changing. That means we need endless curiosity, interest, and drive to ensure we remain experts who can support them.",
  },
  {
    title: "Listen first",
    icon: "◌",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop",
    text: "We don’t let our experience make us lazy. Every business and every candidate has a unique set of needs and wants, so we listen first and advise second.",
  },
  {
    title: "Go Above & Beyond",
    icon: "↗",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=900&auto=format&fit=crop",
    text: "What’s in a name? Well, for us, quite a lot. Exceeding client expectations is where we get our thrills. That means every day we do a little bit extra, go a little bit further, because that’s what makes us special.",
  },
];

const OurValue = () => {
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const itemRefs = useRef([]);
  const previewRef = useRef(null);
  const previewImgRef = useRef(null);
  const previewTitleRef = useRef(null);

  const [active, setActive] = useState(values[0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(previewRef.current, {
        autoAlpha: 0,
        scale: 0.8,
        rotate: -8,
      });

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
        itemRefs.current,
        { y: 70, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const movePreview = (e) => {
    const bounds = sectionRef.current.getBoundingClientRect();

    gsap.to(previewRef.current, {
      x: e.clientX - bounds.left - 310,
      y: e.clientY - bounds.top - 170,
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
      rotate: -6,
      duration: 0.45,
      ease: "back.out(1.8)",
    });

    gsap.fromTo(
      previewImgRef.current,
      { scale: 1.22 },
      { scale: 1, duration: 0.8, ease: "power4.out" },
    );

    gsap.fromTo(
      previewTitleRef.current,
      { y: 20, opacity: 0, filter: "blur(8px)" },
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
      rotate: -12,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible px-5 py-24 text-white md:px-14 md:py-32"
    >
      <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-lime-300/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[170px]" />

      {/* floating preview */}
      <div
        ref={previewRef}
        className="pointer-events-none absolute left-0 top-0 z-50 hidden w-72 overflow-hidden rounded-[1.6rem] border border-white/15 bg-black/35 p-2 opacity-0 shadow-[0_30px_90px_rgba(0,0,0,0.75)] backdrop-blur-xl lg:block"
      >
        <div className="relative h-44 overflow-hidden rounded-[1.2rem]">
          <img
            ref={previewImgRef}
            src={active.image}
            alt={active.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4">
            <p
              ref={previewTitleRef}
              className="text-sm font-black uppercase tracking-[0.15em] text-lime-300"
            >
              {active.title}
            </p>
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <div>
          <div className="mb-6 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.9)]" />
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-white/75">
              Our Values
            </p>
          </div>

          {["WHAT MAKES US", "UNIQUE"].map((line, index) => (
            <div key={index} className="overflow-hidden pb-1">
              <h2
                ref={(el) => (titleRefs.current[index] = el)}
                className="text-[2.9rem] font-black uppercase leading-[0.93] tracking-[-0.06em] text-[#f4f1e8] sm:text-[4rem] md:text-[5rem] xl:text-[5.7rem]"
              >
                {line}
              </h2>
            </div>
          ))}

          <p className="mt-8 max-w-xl text-base leading-8 text-white/70 md:text-lg">
            Like us, you prioritise partnering with companies that share your
            values. Here’s what makes our approach special.
          </p>
        </div>

        <div className="grid gap-6 overflow-visible">
          {values.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              onMouseEnter={(e) => showPreview(item, e)}
              onMouseMove={movePreview}
              onMouseLeave={hidePreview}
              className="group relative overflow-visible rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-lime-300/50 hover:bg-white/[0.085] hover:shadow-[0_25px_90px_rgba(190,242,100,0.12)]"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/70 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

              <div className="flex items-start gap-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/20 text-xl text-lime-300 transition-all duration-500 group-hover:scale-110 group-hover:border-lime-300/60 group-hover:bg-lime-300 group-hover:text-black">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-black text-[#f4f1e8] md:text-2xl">
                    {item.title}
                  </h3>

                  <div className="my-4 h-px w-full bg-gradient-to-r from-white/20 to-transparent" />

                  <p className="max-w-2xl text-sm leading-7 text-white/62 transition-all duration-500 group-hover:text-white/80">
                    {item.text}
                  </p>
                </div>

                <div className="hidden h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 text-lime-300 transition-all duration-500 group-hover:rotate-45 group-hover:border-lime-300 group-hover:bg-lime-300 group-hover:text-black md:grid">
                  ↗
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValue;
