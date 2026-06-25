import React, { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";
import SvgBackground from "./SvgBackground";
import { NavLink } from "react-router-dom";
import Schedule from "./Schedule";
const navItems = [
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Impact",
    path: "/impact",
  },
  {
    name: "Live jobs",
    path: "/live-jobs",
  },
  {
    name: "Communities & Resources",
    path: "/communities-resources",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navRefs = useRef([]);
  const btnRefs = useRef([]);
  const [showContactForm, setShowContactForm] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        menuRef.current,
        { clipPath: "circle(0% at 94% 7%)", opacity: 0 },
        {
          clipPath: "circle(150% at 94% 7%)",
          opacity: 1,
          duration: 1,
          ease: "power4.inOut",
        },
      );

      gsap.fromTo(
        navRefs.current,
        { x: -80, opacity: 0, rotate: -3 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.9,
          stagger: 0.12,
          delay: 0.35,
          ease: "back.out(1.8)",
        },
      );

      gsap.fromTo(
        btnRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          delay: 0.75,
          ease: "power3.out",
        },
      );
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const closeMenu = () => {
    gsap.to(menuRef.current, {
      clipPath: "circle(0% at 94% 7%)",
      opacity: 0,
      duration: 0.7,
      ease: "power4.inOut",
      onComplete: () => setOpen(false),
    });
  };

  return (
    <>
      <header className="fixed bg-[#31323d]/95 text-[#F6F5E8] font-arimo left-0 top-0 z-50 w-full px-5 py-4 md:px-12">
        <nav className="mx-auto flex container items-center justify-between rounded-full border border-white/10 bg-gradient-to-r from-[#31323D]/75 via-[#31323D]/70 to-[#31323D]/20 px-5 py-3 shadow-2xl backdrop-blur-xl">
          <a href="/" className="group flex items-center gap-3">
            <img src="/new-logo.png" alt="" className="h-14" />
          </a>

          <button
            onClick={() => (open ? closeMenu() : setOpen(true))}
            className="group relative grid h-12 w-12 place-items-center rounded-full border border-[#F6F5E8]/15 bg-[#F6F5E8]/10 text-2xl text-[#F6F5E8] shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#F6F5E8] hover:text-[#211e25]"
          >
            {open ? <IoClose /> : <FiMenu />}
          </button>
        </nav>
      </header>

      {open && (
        <section
          ref={menuRef}
          className="fixed inset-0 z-40 overflow-hidden bg-[#31323D]"
        >
          <SvgBackground className="opacity-10" />

          <div className="relative z-10 flex min-h-screen items-center px-6 pt-24 md:px-20">
            <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                {/* <p className="mb-5 text-sm font-semibold uppercase tracking-[0.5em] text-white/50">
                  Explore Menu
                </p> */}

                <ul className="space-y-3">
                  {navItems.map((item, index) => (
                    <li
                      key={item.name}
                      ref={(el) => (navRefs.current[index] = el)}
                      className="group w-fit cursor-pointer"
                    >
                      <NavLink
                        to={item.path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `relative block text-4xl font-semibold transition-all duration-500 md:text-[3.5rem]
          ${
            isActive
              ? "translate-x-5 text-lime-300"
              : "text-[#F6F5E8]/80 group-hover:translate-x-5 group-hover:text-[#F6F5E8]"
          }`
                        }
                      >
                        <span className="absolute -left-10 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-lime-300 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                        {item.name}

                        <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-lime-300 transition-all duration-500 group-hover:w-full" />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-[#F6F5E8]/10 bg-[#F6F5E8]/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
                <h3 className="mb-4 text-2xl font-bold text-[#F6F5E8]">
                  Ready to grow?
                </h3>
                <p className="mb-7 text-[#F6F5E8]/70">
                  Connect with us and explore services, impact, live jobs and
                  resources in a beautiful way.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
                  <button
                    onClick={() => {
                      setShowContactForm(true);
                    }}
                    className="group relative w-full text-center bg-lime-100 overflow-hidden rounded-full border border-lime-300 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-lime-900 transition-all duration-500 hover:scale-105 hover:text-[#31323d]"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-lime-300 transition-transform duration-500 group-hover:translate-x-0" />
                    <span className="relative z-10">Schedule a call</span>
                  </button>

                  <a
                    ref={(el) => (btnRefs.current[1] = el)}
                    href="mailto:hello@example.com"
                    className="rounded-full border border-[#F6F5E8]/20 bg-[#F6F5E8]/10 px-7 py-4 text-center font-bold text-[#F6F5E8] shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#F6F5E8] hover:text-[#211e25]"
                  >
                    Email us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Schedule
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </>
  );
};

export default Header;
