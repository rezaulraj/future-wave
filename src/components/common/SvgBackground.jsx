import React from "react";

const SvgBackground = ({ className = "" }) => {
  const bgSvg =
    "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1007%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(21%2c 24%2c 32%2c 1)'%3e%3c/rect%3e%3cpath d='M-38.54 253.94C114.2 253 312.25 105.13 556.16 113.94 800.07 122.75 722.64 570.63 853.51 650.65' stroke='rgba(108%2c 108%2c 114%2c 0.99)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-114.22 259.61C38.95 264.58 215.53 490.27 449.5 500.41 683.47 510.55 650.24 657.09 731.36 662.76' stroke='rgba(108%2c 108%2c 114%2c 0.99)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-216.36 222.65C-37.75 227.39 178.14 477.56 448.11 485.85 718.09 494.14 688.9 635.93 780.35 639.6' stroke='rgba(108%2c 108%2c 114%2c 0.99)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-10.19 381.9C99.68 382.12 206.75 451.9 423.7 451.9 640.64 451.9 638.59 381.62 857.59 381.9 1076.59 382.18 1173.17 567.49 1291.48 571.57' stroke='rgba(108%2c 108%2c 114%2c 0.99)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-25.48 364.46C173.05 362.64 448.11 156.18 741.15 157.26 1034.2 158.34 985.55 550.7 1124.47 591.68' stroke='rgba(108%2c 108%2c 114%2c 0.99)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1007'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e";

  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{
        backgroundColor: "#151820",
        backgroundImage: `url("${bgSvg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default SvgBackground;
