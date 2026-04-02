"use client";
import { motion } from "framer-motion";
import { Stethoscope, Users, HeadsetIcon } from "lucide-react";

const features = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Spitale de Excelență",
    description: "Colaborăm cu cele mai prestigioase spitale din Turcia, echipate cu tehnologie de ultimă generație și medici de renume internațional."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Echipă Multidisciplinară",
    description: "Cazul tău este analizat de o echipă completă de specialiști care colaborează pentru a-ți oferi un plan de investigare complet și un tratament adecvat."
  },
  {
    icon: <HeadsetIcon className="w-8 h-8" />,
    title: "Suport în Limba Română",
    description: "Pe tot parcursul procesului, vei avea parte de ghidare și suport în limba română, pentru a înțelege fiecare pas."
  }
];

export function FeaturesSection() {
  return (
    <motion.section
      id="cum-te-ajutam"
      className="py-20 bg-[var(--bg)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6 text-balance">
            Cum te ajutăm
          </h2>
          <div className="text-lg text-[var(--text)]/70 max-w-3xl mx-auto leading-relaxed space-y-3">
            <p>Avem acces la centre medicale de excelență din Turcia, cu echipe medicale multidisciplinare dedicate fiecărui caz.</p>
            <p>Obținem pentru tine a doua opinie medicală gratuită pe baza dosarului medical sau a informațiilor pe care le poți oferi.</p>
            <p>Dosarul tău este discutat în comisii medicale formate din profesori doctori specialiști.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[var(--bg)] p-8 rounded-xl border-l-4 border-l-[var(--primary)] shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-[var(--primary)] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--text)]/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
