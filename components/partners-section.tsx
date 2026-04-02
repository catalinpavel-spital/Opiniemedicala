"use client";
import { motion } from "framer-motion";

import Image from "next/image";

const partners = [
  { 
    name: "Hisar Intercontinental Hospital", 
    logo: "/logos/hisar-hospital.png",
    size: "normal",
    needsInvert: true
  },
  { 
    name: "Liv Hospital", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Liv-Logo-removebg-preview-tcgIAXEgiT5K4xF5f0AhvXgfS2j85t.png",
    size: "normal",
    needsInvert: false
  },
  { 
    name: "Istinye University Hospital", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Istinye-Logo-removebg-preview-gG9gy5OEvPsbCs7z52CcYWQq2r5QK5.png",
    size: "normal",
    needsInvert: false
  },
  { 
    name: "Medicana Health Group", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Med-Fgr03Dbo2l1wtNklvx4ZagVEp6YJ6v.png",
    size: "small",
    needsInvert: true
  },
];



function PartnerCard({ name, logo, size, needsInvert }: { name: string; logo: string; size: string; needsInvert: boolean }) {
  const maxHeight = size === "small" ? 40 : 64;
  const maxWidth = size === "small" ? 100 : 160;
  
  return (
    <div className="partner-card flex items-center justify-center">
      <Image 
        src={logo} 
        alt={name} 
        width={maxWidth} 
        height={maxHeight} 
        className={`object-contain ${needsInvert ? "brightness-0 invert" : ""}`}
        style={{ width: 'auto', height: 'auto', maxWidth, maxHeight }}
        unoptimized
      />
    </div>
  );
}

export function PartnersSection() {
  // Duplicate partners for seamless marquee
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <motion.section
      id="parteneri"
      className="partners"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="partners-header max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-4 text-balance">
            Spitale Partenere
          </h2>
          <p className="text-lg text-[#f5f0e8]/60">
            Colaborăm cu cele mai prestigioase instituții medicale
          </p>
        </div>
        <p className="partners-intro">
          Prin parteneriatele noastre cu spitale de top din Turcia, oferim acces la echipe medicale de elită, echipamente de ultimă generație și standarde internaționale de îngrijire medicală.
        </p>
      </div>

      {/* First Marquee Row */}
      <div className="partners-marquee-wrap">
        <div className="partners-track">
          {duplicatedPartners.map((partner, index) => (
            <PartnerCard key={`row1-${index}`} name={partner.name} logo={partner.logo} size={partner.size} needsInvert={partner.needsInvert} />
          ))}
        </div>
      </div>

      {/* Second Marquee Row - Reverse Direction */}
      <div className="partners-marquee-wrap">
        <div className="partners-track partners-track-reverse">
          {duplicatedPartners.map((partner, index) => (
            <PartnerCard key={`row2-${index}`} name={partner.name} logo={partner.logo} size={partner.size} needsInvert={partner.needsInvert} />
          ))}
        </div>
      </div>

      
    </motion.section>
  );
}
