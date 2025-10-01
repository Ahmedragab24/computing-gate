"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export { gsap, ScrollTrigger, useGSAP }

// Animation presets
export const fadeInUp = {
  opacity: 0,
  y: 60,
  duration: 1,
  ease: "power3.out",
}

export const fadeInLeft = {
  opacity: 0,
  x: -60,
  duration: 1,
  ease: "power3.out",
}

export const fadeInRight = {
  opacity: 0,
  x: 60,
  duration: 1,
  ease: "power3.out",
}

export const scaleIn = {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  ease: "power3.out",
}

export const staggerChildren = {
  stagger: 0.2,
}
