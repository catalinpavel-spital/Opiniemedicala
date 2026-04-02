"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageCard {
  id: string
  src: string
  alt: string
  rotation: number
}

interface ImageCarouselHeroProps {
  title?: string
  subtitle?: string
  description?: string
  ctaText?: string
  onCtaClick?: () => void
  images?: ImageCard[]
  features?: Array<{
    title: string
    description: string
  }>
}

export function ImageCarouselHero({
  title = "A doua opinie medicală din Turcia",
  subtitle = "Spitale Străinătate · Second Opinion",
  description = "Uneori, un diagnostic ridică întrebări. Alteori, simți nevoia unei confirmări. Obține a doua opinie medicală gratuită de la o echipă multidisciplinară de specialiști.",
  ctaText = "Solicită acum — Gratuit",
  onCtaClick,
  images = [
    { id: "1", src: "/2.png", alt: "Comisie medicala Istanbul", rotation: -5 },
    { id: "2", src: "/IMG_0983.png", alt: "Eva Pavel Istanbul", rotation: 8 },
    { id: "3", src: "/2.png", alt: "Spital Turcia", rotation: -3 },
    { id: "4", src: "/IMG_0983.png", alt: "Echipa medicala", rotation: 6 },
  ],
  features = [
    {
      title: "Spitale de Excelență",
      description: "Colaborăm cu cele mai prestigioase spitale din Turcia, echipate cu tehnologie de ultimă generație.",
    },
    {
      title: "Echipă Multidisciplinară",
      description: "Cazul tău este analizat de o echipă completă de specialiști care colaborează pentru planul tău de tratament.",
    },
    {
      title: "Suport în Limba Română",
      description: "Pe tot parcursul procesului, vei avea ghidare și suport complet în limba română.",
    },
  ],
}: ImageCarouselHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [rotatingCards, setRotatingCards] = useState<number[]>([])

  // Continuous rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingCards((prev) => prev.map((_, i) => (prev[i] + 0.5) % 360))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Initialize rotating cards
  useEffect(() => {
    setRotatingCards(images.map((_, i) => i * (360 / images.length)))
  }, [images.length])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/Eve-Video-Hero__1_.mp4"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <div
          className="relative w-full max-w-6xl h-96 sm:h-[500px] mb-12 sm:mb-16 z-10"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Rotating Image Cards */}
          <div className="absolute inset-0 flex items-center justify-center perspective">
            {images.map((image, index) => {
              const totalCards = images.length
              const angle = (rotatingCards[index] || 0) * (Math.PI / 180)
              const radius = 180
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              // 3D perspective effect based on mouse position
              const perspectiveX = (mousePosition.x - 0.5) * 20
              const perspectiveY = (mousePosition.y - 0.5) * 20

              return (
                <div
                  key={image.id}
                  className="absolute w-32 h-40 sm:w-40 sm:h-48 transition-all duration-300"
                  style={{
                    transform: `
                      translate(${x}px, ${y}px)
                      rotateX(${perspectiveY}deg)
                      rotateY(${perspectiveX}deg)
                      rotateZ(${image.rotation}deg)
                    `,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className={cn(
                      "relative w-full h-full rounded-2xl overflow-hidden shadow-2xl",
                      "transition-all duration-300 hover:shadow-3xl hover:scale-110",
                      "cursor-pointer group",
                    )}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      priority={index < 3}
                    />
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-20 text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-sm sm:text-base text-white/60 uppercase tracking-widest mb-4">{subtitle}</p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 sm:mb-6 text-balance leading-tight">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-8 text-balance">{description}</p>

          {/* CTA Button */}
          <button
            onClick={onCtaClick}
            className={cn(
              "inline-flex items-center gap-2 px-8 py-3 rounded-full",
              "bg-primary text-primary-foreground font-medium",
              "hover:shadow-lg hover:scale-105 transition-all duration-300",
              "active:scale-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "group",
            )}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Features Section */}
        <div className="relative z-20 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "text-center p-6 rounded-xl",
                "bg-black/30 backdrop-blur-sm border border-white/10",
                "hover:bg-black/40 hover:border-white/20 transition-all duration-300",
                "group",
              )}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
