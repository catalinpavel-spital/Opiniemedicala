"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay before showing banner
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-[var(--text)] text-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                  Folosim cookie-uri pentru a îmbunătăți experiența ta pe site. Citește{" "}
                  <Link 
                    href="/politica-cookies" 
                    className="text-[var(--primary)] hover:underline font-medium"
                  >
                    Politica de Cookies
                  </Link>{" "}
                  pentru mai multe informații.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={handleAcceptNecessary}
                  className="px-6 py-3 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  Doar necesare
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] rounded-lg text-white transition-colors text-sm font-medium"
                >
                  Accept toate
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
