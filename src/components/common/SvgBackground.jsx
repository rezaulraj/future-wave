import bgsvg from "/contour_bg.svg";
const SvgBackground = ({ className = "" }) => {
  const bgSvg = bgsvg;

  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{
        backgroundColor: "#31323D",
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
