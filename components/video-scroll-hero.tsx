"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TextEffect } from "@/components/core/text-effect";

interface VideoScrollHeroProps {
  videoSrc?: string;
  fallbackImage?: string;
  enableAnimations?: boolean;
  startScale?: number;
}

export function VideoScrollHero({
  videoSrc = "https://res.cloudinary.com/drsqm7oae/video/upload/v1774440119/Eve-Hero_srxplq.mp4",
  fallbackImage = "/hero-medical.jpg",
  enableAnimations = true,
  startScale = 0.25,
}: VideoScrollHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [scrollScale, setScrollScale] = useState(startScale);
  const [videoError, setVideoError] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    if (!enableAnimations || shouldReduceMotion) return;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = containerHeight - windowHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollScale(startScale + progress * (1 - startScale));
      setShowScrollIndicator(scrolled < 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableAnimations, shouldReduceMotion, startScale]);

  return (
    <div style={{ background: "#ffffff", overflow: "hidden" }}>
      <div
        ref={containerRef}
        className="relative h-[180vh]"
        style={{ background: "#ffffff" }}
      >
        <div
          className="sticky top-0 w-full h-screen flex items-center justify-center z-10 overflow-hidden"
          style={{ background: "#ffffff" }}
        >
          <div
            className="relative flex items-center justify-center will-change-transform"
            style={{
              transform: `scale(${scrollScale})`,
              transformOrigin: "center center",
            }}
          >
            {/* Video / Fallback wrapper */}
            <div className="w-[95vw] md:w-[80vw] max-w-4xl h-[54vw] md:h-[60vh] rounded-2xl shadow-2xl overflow-hidden">
              {videoError ? (
                <img
                  src={fallbackImage}
                  alt="Opinie Medicală - Consultație medicală"
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  onError={() => setVideoError(true)}
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              )}
            </div>

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-6 rounded-2xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center text-balance px-4">
                <TextEffect
                  per="char"
                  delay={0.8}
                  variants={{
                    container: {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.04 },
                      },
                    },
                    item: {
                      hidden: { opacity: 0, rotateX: 90, y: 10 },
                      visible: {
                        opacity: 1,
                        rotateX: 0,
                        y: 0,
                        transition: { duration: 0.2 },
                      },
                    },
                  }}
                >
                  A doua opinie medicală
                </TextEffect>
              </h1>
              <p className="text-lg text-white/80 text-center max-w-xl px-4">
                <TextEffect per="char" delay={1.5} preset="blur">
                  Cu grijă și profesionalism
                </TextEffect>
              </p>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: showScrollIndicator ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-[#1a1a2e] text-sm font-medium">
              Derulează pentru a descoperi
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6 text-[#2596be]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}