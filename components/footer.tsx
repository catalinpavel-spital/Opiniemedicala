"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <motion.footer
      className="text-white"
      style={{
        background: "rgba(26, 26, 46, 0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(37, 150, 190, 0.15)",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div>
            <div className="mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20png%20negru-OqS6D7qK8um70b1xlHg5zrvZJrSpGV.png"
                alt="Spitale Străinătate - Powered by Eva Pavel"
                className="mb-4 h-auto w-[200px] brightness-0 invert"
              />
              <p className="text-white/60">
                A doua opinie medicală gratuită în parteneriat cu spitale de top din Turcia
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Eva Pavel</p>
                <p className="text-white/60 text-sm">Consilier Medical Internațional</p>
              </div>
              <a
                href="tel:+40738272835"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-[var(--primary)]" />
                +40 738 272 835
              </a>
              <a
                href="mailto:office@opiniemedicala.ro"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-[var(--primary)]" />
                office@opiniemedicala.ro
              </a>
              <a
                href="https://wa.me/40738272835"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                WhatsApp: +40 738 272 835
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              © 2026 Opinie Medicală. Toate drepturile rezervate.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
              <Link href="/gdpr" className="text-white/60 hover:text-white transition-colors">
                GDPR
              </Link>
              <Link href="/termeni-si-conditii" className="text-white/60 hover:text-white transition-colors">
                Termeni și Condiții
              </Link>
              <Link href="/politica-cookies" className="text-white/60 hover:text-white transition-colors">
                Politica Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
