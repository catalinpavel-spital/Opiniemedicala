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
          <span style={{ color: "rgb(37, 150, 190)", fontWeight: 500 }}>
            direcții
          </span>
          . A doua opinie le{" "}
          <span style={{ color: "rgb(37, 150, 190)", fontWeight: 500 }}>
            clarifică
          </span>
          .
          <br />
          <br />
          Medicina evoluează constant —{" "}
          <span style={{ color: "rgb(37, 150, 190)", fontWeight: 500 }}>
            tehnologii noi
          </span>
          ,{" "}
          <span style={{ color: "rgb(37, 150, 190)", fontWeight: 500 }}>
            tratamente inovatoare
          </span>{" "}
          și{" "}
          <span style={{ color: "rgb(37, 150, 190)", fontWeight: 500 }}>
            abordări diferite
          </span>{" "}
          pot
          schimba semnificativ parcursul unui pacient.
          <br />
          <br />
          A doua opinie medicală îți oferă acces la aceste opțiuni, prin
          evaluarea cazului de către{" "}
          <span style={{ color: "rgb(37, 150, 190)", fontWeight: 500 }}>
            echipe multidisciplinare
          </span>
          , în{" "}
          <span style={{ color: "rgb(37, 150, 190)", fontWeight: 500 }}>
            centre medicale avansate
          </span>
          .
          <br />
          <br />
          Îți ofer acces rapid la{" "}
          <span style={{ color: "rgb(37, 150, 190)", fontWeight: 500 }}>
            medici și spitale de referință
          </span>
          .
        </p>
      </div>
    </motion.section>
  );
}
