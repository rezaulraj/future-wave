import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiX,
  FiUser,
  FiBriefcase,
  FiArrowRight,
  FiCalendar,
} from "react-icons/fi";

const Schedule = ({ show, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    if (showBooking) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showBooking]);

  useEffect(() => {
    if (!show) {
      setSelectedOption(null);
      setShowBooking(false);
    }
  }, [show]);

  const renderCalendly = () => {
    const url =
      selectedOption === "employee"
        ? "https://calendly.com/rezaul-coderhunt/employer"
        : "https://calendly.com/rezaul-coderhunt/partner";

    return (
      <div className="h-full w-full">
        <div
          className="calendly-inline-widget"
          data-url={url}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    );
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setTimeout(() => {
      setShowBooking(true);
    }, 900);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] overflow-hidden"
        >
          {/* overlay with better blur */}
          <motion.div
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(12px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
          />

          {/* gradient glow effects */}
          <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-lime-300/20 blur-[130px]" />
          <div className="absolute bottom-[-120px] right-[-120px] h-[480px] w-[480px] rounded-full bg-cyan-400/20 blur-[150px]" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/10 blur-[100px]" />

          <motion.div
            className="absolute inset-0 flex items-center justify-center p-4"
            layout
          >
            {!showBooking ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.86,
                  y: 50,
                  rotateX: 18,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  rotateX: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 30,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full max-w-3xl overflow-hidden rounded-[2.8rem] border border-white/20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 shadow-[0_45px_140px_rgba(0,0,0,0.4)] backdrop-blur-3xl"
              >
                {/* animated rotating gradient */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-lime-400/20 via-cyan-400/20 to-amber-400/20 blur-[120px]"
                />

                <div className="relative z-10 p-8 md:p-12">
                  {/* close button - refined */}
                  <button
                    onClick={onClose}
                    className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-gray-300 bg-white/80 text-gray-700 shadow-md transition-all duration-500 hover:border-lime-400 hover:bg-lime-400 hover:text-white"
                  >
                    <FiX size={22} />
                  </button>

                  {/* top section */}
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="mb-10"
                  >
                    <div className="mb-5 flex w-fit items-center gap-3 rounded-full border border-lime-300/40 bg-lime-400/20 px-5 py-2 shadow-sm">
                      <FiCalendar className="text-lime-700" size={16} />
                      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-lime-800">
                        Schedule a call
                      </p>
                    </div>

                    <h2 className="max-w-2xl text-4xl font-black leading-[1.1] tracking-[-0.04em] text-gray-900 md:text-6xl">
                      Choose how you'd like{" "}
                      <span className="bg-gradient-to-r from-lime-600 to-cyan-600 bg-clip-text text-transparent">
                        to connect
                      </span>
                    </h2>

                    <p className="mt-6 max-w-xl text-base leading-7 text-gray-700">
                      Book a personalized session with our recruitment and
                      workforce specialists.
                    </p>
                  </motion.div>

                  {/* options grid */}
                  <div className="grid gap-5 md:grid-cols-2">
                    {/* Employee Option */}
                    <motion.button
                      whileHover={{ y: -6, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleOptionSelect("employee")}
                      className={`group relative overflow-hidden rounded-2xl border p-7 text-left transition-all duration-500 ${
                        selectedOption === "employee"
                          ? "border-lime-500 bg-gradient-to-br from-lime-50 to-white shadow-xl"
                          : "border-gray-300 bg-white/60 shadow-md hover:border-lime-400 hover:bg-white/80 hover:shadow-xl"
                      }`}
                    >
                      <div className="absolute -right-10 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-lime-400/20 blur-2xl transition-all duration-500 group-hover:bg-lime-400/30" />

                      <div className="relative z-10">
                        <div className="mb-8 flex items-center justify-between">
                          <div className="grid h-16 w-16 place-items-center rounded-2xl border border-lime-300/40 bg-gradient-to-br from-lime-400 to-lime-500 text-3xl text-white shadow-md transition-all duration-500 group-hover:scale-110 group-hover:from-lime-500 group-hover:to-lime-600">
                            <FiUser />
                          </div>
                          <div className="grid h-12 w-12 place-items-center rounded-full border border-gray-300 bg-white/80 text-gray-500 shadow-sm transition-all duration-500 group-hover:translate-x-1 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-white">
                            <FiArrowRight />
                          </div>
                        </div>
                        <h3 className="text-3xl font-black tracking-[-0.02em] text-gray-800 transition-all duration-500 group-hover:text-lime-600">
                          Employee
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-gray-600">
                          Looking for international opportunities, career
                          support and relocation guidance.
                        </p>
                      </div>
                    </motion.button>

                    {/* Partner Option */}
                    <motion.button
                      whileHover={{ y: -6, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleOptionSelect("partner")}
                      className={`group relative overflow-hidden rounded-2xl border p-7 text-left transition-all duration-500 ${
                        selectedOption === "partner"
                          ? "border-cyan-500 bg-gradient-to-br from-cyan-50 to-white shadow-xl"
                          : "border-gray-300 bg-white/60 shadow-md hover:border-cyan-400 hover:bg-white/80 hover:shadow-xl"
                      }`}
                    >
                      <div className="absolute -right-10 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/30" />

                      <div className="relative z-10">
                        <div className="mb-8 flex items-center justify-between">
                          <div className="grid h-16 w-16 place-items-center rounded-2xl border border-cyan-300/40 bg-gradient-to-br from-cyan-400 to-cyan-500 text-3xl text-white shadow-md transition-all duration-500 group-hover:scale-110 group-hover:from-cyan-500 group-hover:to-cyan-600">
                            <FiBriefcase />
                          </div>
                          <div className="grid h-12 w-12 place-items-center rounded-full border border-gray-300 bg-white/80 text-gray-500 shadow-sm transition-all duration-500 group-hover:translate-x-1 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-white">
                            <FiArrowRight />
                          </div>
                        </div>
                        <h3 className="text-3xl font-black tracking-[-0.02em] text-gray-800 transition-all duration-500 group-hover:text-cyan-600">
                          Partner
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-gray-600">
                          Explore workforce solutions, staffing support and
                          long-term recruitment partnerships.
                        </p>
                      </div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[94vh] w-full max-w-4xl overflow-hidden rounded-[2.8rem] border border-white/20 bg-gray-100 shadow-[0_45px_140px_rgba(0,0,0,0.6)]"
              >
                {/* glow effects */}
                <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-lime-400/15 blur-[140px]" />
                <div className="absolute bottom-[-120px] right-[-120px] h-[460px] w-[460px] rounded-full bg-cyan-400/15 blur-[150px]" />

                {/* close button */}
                <button
                  onClick={() => {
                    setShowBooking(false);
                    setTimeout(() => setSelectedOption(null), 350);
                  }}
                  className="absolute right-6 top-6 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/50 text-white/80 backdrop-blur-xl transition-all duration-500 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
                >
                  <FiX size={22} />
                </button>

                {/* top info badge */}
                <div className="absolute left-6 top-6 z-20 rounded-full border border-white/20 bg-lime-100 px-5 py-3 backdrop-blur-xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-lime-900">
                    {selectedOption === "employee"
                      ? "Employee Session"
                      : "Partner Session"}
                  </p>
                </div>

                {/* calendly */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="relative z-10 h-full w-full"
                >
                  {renderCalendly()}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Schedule;
