import { Header } from "@/components/header";
import { ImageCarouselHero } from "@/components/ui/image-carousel-hero";
import { IntroSection } from "@/components/intro-section";
import { StatisticsStrip } from "@/components/statistics-strip";
import { FeaturesSection } from "@/components/features-section";
import { TimelineSection } from "@/components/timeline-section";
import { PartnersSection } from "@/components/partners-section";
import { WhatsAppCTASection } from "@/components/whatsapp-cta-section";
import { SignatureSection } from "@/components/signature-section";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { Toaster } from "sonner";

const heroImages = [
  {
    id: "1",
    src: "/PozaTopLeft.png",
    alt: "Comisie medicală multidisciplinară",
    rotation: -12,
  },
  {
    id: "2",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0983.png-pu0ECRLozvceaJ7nRcIIjmwDkskx3r.jpeg",
    alt: "Eva Pavel la Istanbul",
    rotation: 8,
  },
  {
    id: "3",
    src: "/PozaTopRight.png",
    alt: "Eva Pavel - Spitale Străinătate",
    rotation: -5,
  },
  {
    id: "4",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pozq.png-kGj2RrgnBbxYR9rikCu7WZzlLtjlpk.jpeg",
    alt: "Consultație medicală",
    rotation: 10,
  },
];

export default function HomePage() {
  return (
    <main style={{ background: "#ffffff" }}>
      <Header />
      <Toaster position="top-center" richColors />
      <StickyWhatsApp />
      <ImageCarouselHero
        title="A doua opinie medicală"
        subtitle="Cu grijă și profesionalism"
        description="Obține gratuit o a doua opinie medicală de la specialiști cu experiență din cele mai bune spitale din Turcia."
        videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eve-Video-Hero%20%281%29-xJMQ4C3dvwgQvuMTG1vdK4x2r4vZTA.mp4"
        images={heroImages}
      />
      <IntroSection />
      <StatisticsStrip />
      <FeaturesSection />
      <TimelineSection />
      <PartnersSection />
      <WhatsAppCTASection />
      <SignatureSection />
      <Footer />
      <CookieBanner />
    </main>
  );
}
