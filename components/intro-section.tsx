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
        <p>
          Un diagnostic deschide direcții. A doua opinie le clarifică.
        </p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Medicina evoluează constant — tehnologii noi, tratamente inovatoare și
          abordări diferite pot schimba semnificativ parcursul unui pacient.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          A doua opinie medicală îți oferă acces la aceste opțiuni, prin
          evaluarea cazului de către echipe multidisciplinare, în centre medicale
          avansate.
          <br />
          <br />
          Îți ofer acces rapid la medici și spitale de referință.
        </motion.p>
      </div>
    </motion.section>
  );
}
