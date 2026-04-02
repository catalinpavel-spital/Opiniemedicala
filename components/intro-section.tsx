"use client";
import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <motion.section
      className="pt-8 pb-12 px-6 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-lg md:text-xl lg:text-2xl text-[#1a1a2e] leading-relaxed font-semibold space-y-4">
        {/* First row */}
        <p>
          Uneori, un <span className="text-[#2596be]">diagnostic</span> ridică{" "}
          <span className="text-[#2596be]">întrebări</span>.
        </p>

        {/* Second row */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Alteori, simți nevoia unei{" "}
          <span className="text-[#2596be]">confirmări</span> sau a unei alternative.
        </motion.p>

        {/* Third row */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          În astfel de momente, este important să soliciți{" "}
          <span className="text-[#2596be]">a doua opinie medicală</span> la schema de investigare și metoda de tratament de la o{" "}
          <span className="text-[#2596be]">echipă medicală multidisciplinară</span>.
        </motion.p>
      </div>
    </motion.section>
  );
}
