"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileUp, Search, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: <FileUp className="w-6 h-6" />,
    number: "1",
    title: "Contactează-ne",
    description: "Sună sau apasă butonul de WhatsApp din colțul dreapta jos al ecranului sau mai jos în pagină."
  },
  {
    icon: <Search className="w-6 h-6" />,
    number: "2",
    title: "Consilierul preia dosarul",
    description: "Consilierul prezintă dosarul comisiei medicale."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    number: "3",
    title: "Primești a doua opinie",
    description: "Totul durează 24 de ore."
  }
];

export function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id="cum-functioneaza"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4 text-balance">
            Cum funcționează
          </h2>
          <p className="text-lg text-[var(--text)]/70">
            3 pași simpli pentru a obține o opinie medicală gratuită
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            {/* Animated connecting line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <motion.div
                className="h-full bg-[var(--primary)] rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              />
            </div>

            <div className="grid grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                >
                  <div className="w-24 h-24 rounded-full bg-[var(--bg)] border-4 border-[var(--primary)] flex items-center justify-center mb-6 shadow-lg relative z-10">
                    <div className="text-[var(--primary)]">{step.icon}</div>
                  </div>
                  <span className="text-sm font-bold text-[var(--primary)] mb-2">
                    Pasul {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-2 text-balance">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text)]/70 text-pretty">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200">
              <motion.div
                className="w-full bg-[var(--primary)] origin-top"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                style={{ height: "100%" }}
              />
            </div>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  {/* Circle on line */}
                  <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-xs font-bold">
                    {step.number}
                  </div>
                  
                  <div className="bg-[var(--bg)] p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-[var(--primary)]">{step.icon}</div>
                      <h3 className="text-lg font-semibold text-[var(--text)]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--text)]/70">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
