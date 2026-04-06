"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileCheck, Building2, Heart, BadgeCheck } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  endValue: number;
  suffix: string;
  label: string;
  isInView: boolean;
}

function StatItem({ icon, endValue, suffix, label, isInView }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = endValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, endValue]);

  return (
    <div className="flex flex-col items-center gap-3 p-6">
      <div className="text-[var(--primary)]">{icon}</div>
      <div className="text-4xl md:text-5xl font-bold text-[var(--text)]">
        {count}{suffix}
      </div>
      <div className="text-sm text-[var(--text)]/70 text-center">{label}</div>
    </div>
  );
}

export function StatisticsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: <FileCheck size={40} />, endValue: 60.000, suffix: "+", label: "Cazuri Analizate" },
    { icon: <Building2 size={40} />, endValue: 14, suffix: "", label: "Spitale Partenere" },
    { icon: <Heart size={40} />, endValue: 100, suffix: "%", label: "Satisfacție Pacienți" },
    { icon: <BadgeCheck size={40} />, endValue: 100, suffix: "%", label: "Gratuit" },
  ];

  return (
    <motion.section
      ref={ref}
      className="py-16 bg-[var(--bg)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              endValue={stat.endValue}
              suffix={stat.suffix}
              label={stat.label}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
