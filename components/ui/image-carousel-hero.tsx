"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

interface ImageCard {
  id: string
  src: string
  alt: string
  rotation: number
}

interface ImageCarouselHeroProps {
  title: string
  subtitle: string
  description: string
  videoSrc: string
  images: ImageCard[]
  features?: Array<{
    title: string
    description: string
  }>
}

export function ImageCarouselHero({
  title,
  subtitle,
  description,
  videoSrc,
  images,
  features = [
    {
      title: "Echipă Multidisciplinară",
      description: "Specialiști cu experiență vastă în domenii medicale internaționale",
    },
    {
      title: "Răspuns în 24h",
      description: "Primești a doua opinie medicală rapid și eficient",
    },
    {
      title: "100% Gratuit",
      description: "Opinie medicalǎ gratuitǎ",
    },
  ],
}: ImageCarouselHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const [isMounted, setIsMounted] = useState(false)

  // Set mounted state
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  // Split images into left and right columns
  const midPoint = Math.ceil(images.length / 2)
  const leftImages = images.slice(0, midPoint)
  const rightImages = images.slice(midPoint)

  // Calculate mouse parallax effect
  const perspectiveX = (mousePosition.x - 0.5) * 15
  const perspectiveY = (mousePosition.y - 0.5) * 15

  return (
    <div 
      className="relative w-full min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover md:object-[20%_center] object-[40%_center]"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Left Side Images - Hidden on mobile */}
      {isMounted && (
        <div 
          className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 flex-col gap-4"
          style={{ perspective: '1000px' }}
        >
          {leftImages.map((image, index) => (
            <div
              key={image.id}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 cursor-pointer group"
              style={{
                width: 180,
                height: 220,
                transform: `rotateX(${perspectiveY}deg) rotateY(${perspectiveX}deg) rotateZ(${image.rotation}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.3s ease-out",
              }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                priority={index < 2}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      )}

      {/* Right Side Images - Hidden on mobile */}
      {isMounted && (
        <div 
          className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 flex-col gap-4"
          style={{ perspective: '1000px' }}
        >
          {rightImages.map((image, index) => (
            <div
              key={image.id}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 cursor-pointer group"
              style={{
                width: 180,
                height: 220,
                transform: `rotateX(${perspectiveY}deg) rotateY(${perspectiveX}deg) rotateZ(${image.rotation}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.3s ease-out",
              }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                priority={index < 2}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
        {/* Content Section - Centered with clear middle area */}
        <div className="relative z-20 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <p className="text-white font-bold text-sm sm:text-base mb-2 uppercase tracking-wider">
            {subtitle}
          </p>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-white/80 text-balance max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Features Section */}
        <div className="relative z-20 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 pb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "text-center p-5 sm:p-6 rounded-xl",
                "bg-white/10 backdrop-blur-md border border-white/20",
                "hover:bg-white/20 hover:border-white/30 transition-all duration-300",
                "group",
              )}
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-[#2596be] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
