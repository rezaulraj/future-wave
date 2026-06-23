import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  {
    name: "Climate Connection",
    initials: "CC",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.18)",
  },
  {
    name: "Climate Policy Radar",
    initials: "CP",
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.18)",
  },
  {
    name: "Risilience",
    initials: "RI",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.18)",
  },
  {
    name: "Centre for AI",
    initials: "CA",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.18)",
  },
  {
    name: "Jumptech",
    initials: "JT",
    color: "#f472b6",
    bg: "rgba(244,114,182,0.18)",
  },
  {
    name: "GIST Impact",
    initials: "GI",
    color: "#bef264",
    bg: "rgba(190,242,100,0.18)",
  },
  {
    name: "EcoMetrics",
    initials: "EM",
    color: "#34d399",
    bg: "rgba(52,211,153,0.18)",
  },
  {
    name: "GreenPath",
    initials: "GP",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.18)",
  },
  {
    name: "NetZero Labs",
    initials: "NZ",
    color: "#e879f9",
    bg: "rgba(232,121,249,0.18)",
  },
  {
    name: "CarbonBridge",
    initials: "CB",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.18)",
  },
];

// Duplicate 4× for seamless infinite loop
const row1Clients = [...clients, ...clients, ...clients, ...clients];
const row2Clients = [...clients]
  .reverse()
  .concat(
    [...clients].reverse(),
    [...clients].reverse(),
    [...clients].reverse(),
  );

/* ── Marquee card ── */
const MarqueeCard = ({ client, index }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  const handleEnter = () => {
    gsap.to(cardRef.current, {
      y: -12,
      scale: 1.06,
      borderColor: client.color + "80",
      boxShadow: `0 28px 80px ${client.color}22, 0 0 0 1px ${client.color}20`,
      duration: 0.45,
      ease: "back.out(1.7)",
    });
    gsap.to(iconRef.current, {
      rotateY: 15,
      scale: 1.2,
      duration: 0.4,
      ease: "back.out(1.4)",
    });
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      borderColor: "rgba(255,255,255,0.08)",
      boxShadow: "none",
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(iconRef.current, {
      rotateY: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        width: 190,
        height: 150,
        flexShrink: 0,
        borderRadius: 22,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(14px)",
        cursor: "pointer",
        overflow: "hidden",
        perspective: 600,
      }}
    >
      {/* top shimmer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "15%",
          right: "15%",
          height: 1,
          background: `linear-gradient(90deg, transparent, ${client.color}80, transparent)`,
        }}
      />

      {/* icon */}
      <div
        ref={iconRef}
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Syne', sans-serif",
          fontSize: 16,
          fontWeight: 800,
          color: client.color,
          background: client.bg,
          border: `1px solid ${client.color}44`,
        }}
      >
        {client.initials}
      </div>

      <span
        style={{
          fontSize: 11,
          fontWeight: 500,
          color: "rgba(255,255,255,0.55)",
          textAlign: "center",
          padding: "0 10px",
          lineHeight: 1.3,
        }}
      >
        {client.name}
      </span>

      {/* bottom bar */}
      <span
        style={{
          display: "block",
          width: 24,
          height: 2,
          borderRadius: 2,
          background: client.color,
          boxShadow: `0 0 14px ${client.color}cc`,
          transition: "width 0.4s",
        }}
      />

      {/* bottom glow */}
      <div
        style={{
          position: "absolute",
          bottom: -20,
          right: -20,
          width: 70,
          height: 70,
          borderRadius: "50%",
          background: client.color + "22",
          filter: "blur(24px)",
        }}
      />
    </div>
  );
};

/* ── Main Section ── */
const Client = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const statsRef = useRef([]);
  const gsapRow1 = useRef(null);
  const gsapRow2 = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* --- Header entrance --- */
      gsap.fromTo(
        titleRef.current,
        { y: 55, opacity: 0, filter: "blur(14px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        },
      );

      /* --- Row 1: slide in from left, then infinite scroll left --- */
      gsap.fromTo(
        row1Ref.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          onComplete: () => startMarquees(),
        },
      );

      /* --- Row 2: slide in from right --- */
      gsap.fromTo(
        row2Ref.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );

      /* --- Stats --- */
      gsap.fromTo(
        statsRef.current,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const startMarquees = () => {
    const totalW1 = row1Ref.current?.scrollWidth / 2 ?? 0;
    const totalW2 = row2Ref.current?.scrollWidth / 2 ?? 0;

    // Row 1 scrolls left (negative X)
    gsapRow1.current = gsap.to(row1Ref.current, {
      x: `-=${totalW1}`,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalW1),
      },
    });

    // Row 2 scrolls right (positive X)
    gsapRow2.current = gsap.fromTo(
      row2Ref.current,
      { x: -totalW2 / 2 },
      {
        x: 0,
        duration: 35,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => (parseFloat(x) % totalW2) - totalW2 / 2),
        },
      },
    );
  };

  const handleMouseEnter = () => {
    if (!pausedRef.current) {
      gsapRow1.current?.pause();
      gsapRow2.current?.pause();
      pausedRef.current = true;
    }
  };

  const handleMouseLeave = () => {
    if (pausedRef.current) {
      gsapRow1.current?.resume();
      gsapRow2.current?.resume();
      pausedRef.current = false;
    }
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "80px 0",
        // background: "#070810",
        color: "#fff",
      }}
    >
      {/* Ambient blobs */}
       <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-lime-300/10 blur-[150px]" />
      {/* <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[170px]" /> */}

      {/* ── Header ── */}
      <div
        ref={titleRef}
        style={{
          textAlign: "center",
          marginBottom: 56,
          padding: "0 20px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.05)",
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 20,
            backdropFilter: "blur(12px)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#bef264",
              boxShadow: "0 0 20px rgba(190,242,100,0.9)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Our Partners
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(32px,5vw,58px)",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          Trusted by <span style={{ color: "#bef264" }}>Pioneers</span>
        </h2>
        <p
          style={{
            marginTop: 12,
            fontSize: "clamp(13px,2vw,17px)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Building a better future together
        </p>
        <div
          style={{
            width: 280,
            height: 1,
            background:
              "linear-gradient(90deg,transparent,rgba(190,242,100,0.7),transparent)",
            margin: "22px auto 0",
          }}
        />
      </div>

      {/* ── Marquee ── */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: 180,
            background: "linear-gradient(90deg,#070810,transparent)",
            zIndex: 20,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: 180,
            background: "linear-gradient(270deg,#070810,transparent)",
            zIndex: 20,
            pointerEvents: "none",
          }}
        />

        {/* Row 1 → scrolls left */}
        <div style={{ overflow: "hidden", position: "relative" }}>
          <div
            ref={row1Ref}
            style={{ display: "flex", gap: 18, width: "max-content" }}
          >
            {row1Clients.map((c, i) => (
              <MarqueeCard key={i} client={c} index={i} />
            ))}
          </div>
        </div>

        {/* Row 2 → scrolls right */}
        <div style={{ overflow: "hidden", position: "relative" }}>
          <div
            ref={row2Ref}
            style={{ display: "flex", gap: 18, width: "max-content" }}
          >
            {row2Clients.map((c, i) => (
              <MarqueeCard key={i} client={c} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          gap: 18,
          marginTop: 52,
          padding: "0 20px",
          flexWrap: "wrap",
        }}
      >
        {[
          { value: "200+", label: "Partners", icon: "↗" },
          { value: "50+", label: "Countries", icon: "🌐" },
          { value: "1K+", label: "Placements", icon: "✦" },
        ].map((item, i) => (
          <div
            key={i}
            ref={(el) => (statsRef.current[i] = el)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 16,
              padding: "18px 24px",
              backdropFilter: "blur(12px)",
              minWidth: 160,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "grid",
                placeItems: "center",
                color: "#bef264",
                fontSize: 18,
              }}
            >
              {item.icon}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 28,
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  marginTop: 2,
                }}
              >
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;
