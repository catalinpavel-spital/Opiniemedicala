"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

type PresetType = "blur" | "fade" | "scale" | "slide";

interface TextEffectProps {
  children: string;
  per?: "word" | "char";
  delay?: number;
  className?: string;
  preset?: PresetType;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
}

const presetVariants: Record<PresetType, { container: Variants; item: Variants }> = {
  blur: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
      },
    },
    item: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.4 },
      },
    },
  },
  fade: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
      },
    },
    item: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.3 },
      },
    },
  },
  scale: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
      },
    },
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3 },
      },
    },
  },
  slide: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
      },
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 },
      },
    },
  },
};

const defaultVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  },
  item: {
    hidden: { opacity: 0, rotateX: 90, y: 10 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: { duration: 0.2 },
    },
  },
};

export function TextEffect({
  children,
  per = "char",
  delay = 0,
  className = "",
  preset,
  variants,
}: TextEffectProps) {
  const selectedVariants = variants || (preset ? presetVariants[preset] : defaultVariants);
  
  const elements = per === "word" ? children.split(" ") : children.split("");

  return (
    <motion.span
      className={`inline-flex flex-wrap justify-center ${className}`}
      variants={selectedVariants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delayChildren: delay }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={selectedVariants.item}
          className="inline-block"
          style={{ 
            whiteSpace: per === "word" ? "pre" : "pre-wrap",
            marginRight: per === "word" ? "0.25em" : undefined 
          }}
        >
          {element === " " ? "\u00A0" : element}
        </motion.span>
      ))}
    </motion.span>
  );
}
