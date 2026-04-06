"use client";
import { motion } from "framer-motion";
import { MessageCircle, FileText, Clock, Shield } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Trimite un mesaj",
    description: "Deschide WhatsApp și trimite-ne un mesaj cu detaliile tale",
  },
  {
    icon: FileText,
    title: "Atașează documentele",
    description: "Trimite investigațiile, analizele și diagnosticul actual",
  },
  {
    icon: Clock,
    title: "Primești răspuns rapid",
    description: "Echipa noastră îți va răspunde în cel mai scurt timp",
  },
  {
    icon: Shield,
    title: "Confidențialitate garantată",
    description: "Datele tale sunt protejate conform GDPR",
  },
];

export function WhatsAppCTASection() {
  return (
    <motion.section
      id="contact"
      className="py-24 px-6 relative overflow-hidden bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            Contactează-ne pe WhatsApp
          </h2>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          className="rounded-3xl p-8 md:p-12 text-center bg-white shadow-lg border border-[var(--primary)]/20 mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
              Începe conversația acum
            </h3>
            <p className="text-[var(--text)]/70 mb-8 text-lg">
              Apasă butonul de mai jos pentru a ne trimite documentele tale medicale. Răspundem în cel mai scurt timp posibil.
            </p>

            <div className="flex justify-center">
              <motion.a
                href="https://wa.me/40738272835?text=Bună%20ziua!%20Doresc%20să%20solicit%20o%20a%20doua%20opinie%20medicală."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fbd5a] text-white font-bold px-10 py-5 rounded-full text-xl shadow-xl shadow-[#25D366]/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Deschide WhatsApp
              </motion.a>
            </div>

            <p className="mt-6 text-[var(--text)]/50 text-sm">
              Sau sună direct la: <a href="tel:+40738272835" className="text-[var(--primary)] hover:underline">+40 738 272 835</a>
            </p>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="text-center p-6 rounded-2xl bg-white shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--bg)] border-2 border-[var(--primary)] flex items-center justify-center">
                <step.icon className="w-7 h-7 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--text)]/60">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
