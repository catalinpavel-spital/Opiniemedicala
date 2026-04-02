"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#cum-te-ajutam", label: "Cum te ajutăm" },
  { href: "#cum-functioneaza", label: "Cum funcționează" },
  { href: "#parteneri", label: "Parteneri" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <nav
            className="flex items-center justify-between px-6 py-3"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(37, 150, 190, 0.2)",
              borderRadius: "16px",
              boxShadow: "0 8px 32px rgba(37, 150, 190, 0.1)",
            }}
          >
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20png%20negru-OqS6D7qK8um70b1xlHg5zrvZJrSpGV.png"
                alt="Spitale Străinătate - Powered by Eva Pavel"
                style={{ height: "40px", width: "auto" }}
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-[var(--text)] hover:text-[var(--primary)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden p-2 text-[#1a1a2e]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Menu Drawer */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden mt-2 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderRadius: "16px",
                  border: "1px solid rgba(37, 150, 190, 0.2)",
                  boxShadow: "0 8px 32px rgba(37, 150, 190, 0.1)",
                }}
              >
                <div className="py-2">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="block text-lg py-4 px-6 text-[#1a1a2e] hover:text-[#2596be] transition-colors"
                      style={{
                        borderBottom: index < navLinks.length - 1 ? "1px solid rgba(37, 150, 190, 0.1)" : "none",
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
