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
          Un diagnostic deschide{" "}
          <span className="text-blue-400 font-medium">direcții</span>. A doua
          opinie le{" "}
          <span className="text-blue-400 font-medium">clarifică</span>.
          <br />
          <br />
          Medicina evoluează constant —{" "}
          <span className="text-blue-400 font-medium">tehnologii noi</span>,{" "}
          <span className="text-blue-400 font-medium">tratamente inovatoare</span>{" "}
          și{" "}
          <span className="text-blue-400 font-medium">abordări diferite</span> pot
          schimba semnificativ parcursul unui pacient.
          <br />
          <br />
          A doua opinie medicală îți oferă acces la aceste opțiuni, prin
          evaluarea cazului de către{" "}
          <span className="text-blue-400 font-medium">
            echipe multidisciplinare
          </span>
          , în{" "}
          <span className="text-blue-400 font-medium">
            centre medicale avansate
          </span>
          .
          <br />
          <br />
          Îți ofer acces rapid la{" "}
          <span className="text-blue-400 font-medium">
            medici și spitale de referință
          </span>
          .
        </p>
      </div>
    </motion.section>
  );
}
