"use client";
import { motion } from "framer-motion";

export function SignatureSection() {
  const nameLetters = "Eva Pavel".split("");

  return (
    <section className="py-20 bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[var(--text)]/60 text-sm uppercase tracking-widest">
            Cu drag,
          </p>
        </motion.div>

        <div className="flex justify-center items-center">
          <h2
            className="text-4xl md:text-6xl text-[var(--primary)]"
            style={{
              fontFamily: "'RationaleSignature', cursive",
              fontWeight: 400,
              letterSpacing: "0.02em"
            }}
          >
            {nameLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="inline-block"
                style={{
                  marginRight: letter === " " ? "0.25em" : "0.01em"
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h2>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="w-32 h-0.5 bg-[var(--primary)]/30 mx-auto mt-6 origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-[var(--text)]/70 text-base mt-6 max-w-2xl mx-auto"
        >
          Cu peste 15 ani de experiență, compania noastră este singura acreditată de către Ministerul Turciei.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-[var(--text)]/50 text-sm mt-4 max-w-2xl mx-auto"
        >
          Suntem dedicați de 15 ani pacienților români care se tratează în Turcia. Experiența și profesionalismul nostru au fost confirmate prin recunoașterea oficială și titulatura acordată de Ministerul Turciei.
        </motion.p>
      </div>
    </section>
  );
}
