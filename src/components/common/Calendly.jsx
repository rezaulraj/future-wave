import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const Calendly = ({ show, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (show) {
      setLoading(true);

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: "https://calendly.com/rezaul-coderhunt/partner",
            parentElement: document.querySelector(".calendly-inline-widget"),
            prefill: {},
            utm: {},
          });

          setTimeout(() => setLoading(false), 1000);
        }
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-hidden"
        >
          {/* Blur overlay with your color */}
          <motion.div
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(8px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            className="absolute inset-0 bg-[#1A9695]/20"
            onClick={onClose}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center p-4"
            layout
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl h-[90vh] bg-gradient-to-br from-white via-[#f0f8f8] to-[#e6f3f3] rounded-2xl shadow-2xl overflow-hidden border border-[#1A9695]/20"
              layout
            >
              {/* Decorative glow with your color */}
              <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#1A9695]/10 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#1A9695]/10 blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#1A9695]/5 blur-3xl" />

              {/* Close button with your color */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white p-2 text-[#1A9695] rounded-full cursor-pointer shadow-md hover:bg-[#1A9695] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Close"
              >
                <FiX size={24} />
              </button>

              {/* Loading spinner with your color */}
              {loading && (
                <div className="flex-1 flex items-center justify-center h-full">
                  <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#1A9695]/30 border-t-[#1A9695]"></div>
                    <p className="text-[#1A9695] font-medium">
                      Loading calendar...
                    </p>
                  </div>
                </div>
              )}

              {/* Calendly widget */}
              <div
                className="calendly-inline-widget w-full h-full"
                data-url="https://calendly.com/rezaul-coderhunt/partner"
                style={{
                  minHeight: "100%",
                  display: loading ? "none" : "block",
                }}
              ></div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Calendly;
