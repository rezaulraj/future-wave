import React, { useEffect, useRef } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiMessageSquare,
  FiMapPin,
  FiClock,
  FiSend,
  FiChevronDown,
  FiShield,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdEmail } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const ContactFrom = () => {
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const formRef = useRef(null);
  const sideRefs = useRef([]);
  const inputRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pre-set GPU compositing on all animated elements to prevent jank
      gsap.set(
        [
          titleRefs.current,
          formRef.current,
          sideRefs.current,
          inputRefs.current,
        ],
        { willChange: "transform, opacity" },
      );

      // Title animation — Animates each word on its own clean layer line block
      gsap.fromTo(
        titleRefs.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "expo.out",
          force3D: true,
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
          onComplete: () => {
            gsap.set(titleRefs.current, { willChange: "auto" });
          },
        },
      );

      // Form animation — Left layout slide slide-in sequence
      gsap.fromTo(
        formRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: { trigger: sectionRef.current, start: "top 58%" },
          onComplete: () => {
            gsap.set(formRef.current, { willChange: "auto" });
          },
        },
      );

      // Input fields — clean y axis cascade slide down
      gsap.fromTo(
        inputRefs.current,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.05,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: { trigger: formRef.current, start: "top 75%" },
          onComplete: () => {
            gsap.set(inputRefs.current, { willChange: "auto" });
          },
        },
      );

      // Sidebar cards — Right side structural items entry animation
      gsap.fromTo(
        sideRefs.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: { trigger: sectionRef.current, start: "top 55%" },
          onComplete: () => {
            gsap.set(sideRefs.current, { willChange: "auto" });
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Safe ref tracking callback handler that prevents infinite array inflation during mutations
  const setInputRef = (el, index) => {
    if (el) {
      inputRefs.current[index] = el;
    }
  };

  const Field = ({
    icon: Icon,
    label,
    placeholder,
    type = "text",
    required,
    index,
  }) => (
    <div ref={(el) => setInputRef(el, index)} className="group">
      <label className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-white/65">
        {label} {required && <span className="text-lime-300">*</span>}
      </label>

      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35 transition-all duration-500 group-focus-within:text-lime-300" />
        <input
          type={type}
          placeholder={placeholder}
          className="h-14 w-full rounded-2xl border border-white/10 bg-black/20 pl-12 pr-4 text-sm font-semibold text-white outline-none backdrop-blur-xl transition-all duration-500 placeholder:text-white/25 focus:border-lime-300/60 focus:bg-white/[0.06]"
        />
      </div>
    </div>
  );

  return (
    <section
      id="contact-form"
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-24 text-white bg-[#151820] md:px-14 md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#10131a]/95 via-[#10131a]/70 to-[#10131a]/20" />
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[170px]" />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="flex space-x-4 items-center justify-center space-y-2 sm:space-y-3">
            {["Send", "An", "inquiry"].map((line, index) => (
              <div key={index} className="overflow-hidden pb-1">
                <h2
                  ref={(el) => (titleRefs.current[index] = el)}
                  className={`text-4xl font-black uppercase tracking-[-0.06em] md:text-6xl ${
                    index === 1 ? "text-lime-300" : "text-[#f4f1e8]"
                  }`}
                >
                  {line}
                </h2>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/55 md:text-base">
            Fill out the form and our team will contact you with a personalized
            response as soon as possible.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            ref={formRef}
            className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-8"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime-300/10 blur-[100px]" />

            <div className="relative z-10 mb-8 flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-lime-300/25 bg-lime-300/10 text-2xl text-lime-300">
                <FiMessageSquare />
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#f4f1e8]">
                  Request a free estimate
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/55">
                  Share your hiring need, company details and timeline. We will
                  review everything carefully.
                </p>
              </div>
            </div>

            <div className="relative z-10 grid gap-5 md:grid-cols-2">
              <Field
                index={0}
                icon={FiUser}
                label="Name and surname"
                placeholder="Your name"
                required
              />
              <Field
                index={1}
                icon={FiMail}
                label="Email"
                placeholder="you@email.com"
                type="email"
                required
              />
              <Field
                index={2}
                icon={FiPhone}
                label="Phone"
                placeholder="+880..."
              />
              <Field
                index={3}
                icon={FiBriefcase}
                label="Company"
                placeholder="Company name"
              />

              {/* Industry Dropdown Input Control Selection Fields */}
              <div ref={(el) => setInputRef(el, 4)} className="group">
                <label className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-white/65">
                  Industry
                </label>
                <div className="relative">
                  <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35 z-10" />
                  <select className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-[#1e222b] pl-12 pr-10 text-sm font-semibold text-white outline-none backdrop-blur-xl transition-all duration-500 focus:border-lime-300/60 focus:bg-white/[0.06]">
                    <option className="bg-[#151820] text-white">
                      Select an industry
                    </option>
                    <option className="bg-[#151820] text-white">
                      Hospitality & Tourism
                    </option>
                    <option className="bg-[#151820] text-white">
                      Personal Care & Beauty
                    </option>
                    <option className="bg-[#151820] text-white">
                      Transportation & Logistics
                    </option>
                    <option className="bg-[#151820] text-white">
                      Home & Repair Services
                    </option>
                  </select>
                  <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35 pointer-events-none z-10" />
                </div>
              </div>

              {/* Quantity Metrics Operational Counter Options Dropdown Selection Fields */}
              <div ref={(el) => setInputRef(el, 5)} className="group">
                <label className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-white/65">
                  How many workers?
                </label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35 z-10" />
                  <select className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-[#1e222b] pl-12 pr-10 text-sm font-semibold text-white outline-none backdrop-blur-xl transition-all duration-500 focus:border-lime-300/60 focus:bg-white/[0.06]">
                    <option className="bg-[#151820] text-white">
                      Choose a number
                    </option>
                    <option className="bg-[#151820] text-white">1 - 5</option>
                    <option className="bg-[#151820] text-white">6 - 20</option>
                    <option className="bg-[#151820] text-white">21 - 50</option>
                    <option className="bg-[#151820] text-white">50+</option>
                  </select>
                  <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35 pointer-events-none z-10" />
                </div>
              </div>

              <div ref={(el) => setInputRef(el, 6)} className="md:col-span-2">
                <label className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-white/65">
                  Message <span className="text-lime-300">*</span>
                </label>
                <textarea
                  rows="5"
                  placeholder="Describe your needs — roles, urgency, location, and any special requirements..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-semibold text-white outline-none backdrop-blur-xl transition-all duration-500 placeholder:text-white/25 focus:border-lime-300/60 focus:bg-white/[0.06]"
                />
              </div>
            </div>

            <button
              type="button"
              className="group relative z-10 mt-7 flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-lime-300 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-black transition-all duration-500 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative z-10">Request an estimate</span>
              <FiSend className="relative z-10" />
            </button>

            <p className="relative z-10 mt-5 flex items-center justify-center gap-2 text-xs text-white/40">
              <FiShield className="text-lime-300" />
              Your data is secure and shared only with our team.
            </p>
          </form>

          <div className="grid gap-5">
            <div
              ref={(el) => (sideRefs.current[0] = el)}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              <div className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop"
                  alt="Talk to us"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-[#10131a]/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-lime-300">
                    Talk to us
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-[#f4f1e8]">
                    Real people behind every query.
                  </h3>
                </div>
              </div>

              <div className="p-5 text-white">
                <p className="text-sm font-bold">
                  Talk to our expert about your recruitment needs.
                </p>
                <a
                  href="mailto:info@futurewave.online"
                  className="mt-4 flex h-12 items-center justify-center rounded-xl bg-white text-sm font-black text-black uppercase tracking-[0.14em] transition-all duration-500 hover:scale-[1.02]"
                >
                  <MdEmail className="mr-2" /> Email now
                </a>
              </div>
            </div>

            <div
              ref={(el) => (sideRefs.current[1] = el)}
              className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              <h3 className="mb-6 text-2xl font-black text-[#f4f1e8]">
                Contact information
              </h3>

              <div className="space-y-5">
                {[
                  {
                    icon: FiMail,
                    label: "E-mail",
                    text: "info@futurewave.online",
                  },
                  {
                    icon: FiMapPin,
                    label: "Address",
                    text: "9 Ivana Meštrovića Street 35, 10360, Sesvete, Croatia",
                  },
                  {
                    icon: FiClock,
                    label: "Working hours",
                    text: "Mon - Fri / 08:00 - 16:00",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-lime-300/25 bg-lime-300/10 text-lime-300">
                        <Icon />
                      </span>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-bold text-white/75">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 h-px bg-white/10" />

              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-bold text-white/60">Follow us</p>
                <div className="flex gap-3">
                  {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                    (Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-black/20 text-white/60 transition-all duration-500 hover:-translate-y-1 hover:border-lime-300 hover:bg-lime-300 hover:text-black"
                      >
                        <Icon />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFrom;
