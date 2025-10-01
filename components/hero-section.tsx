"use client"

import { useRef } from "react"
import { useTranslations } from "next-intl"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { gsap, useGSAP } from "@/lib/gsap"

export function HeroSection() {
  const t = useTranslations("hero")
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          buttonsRef.current?.children || [],
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4",
        )
    },
    { scope: containerRef },
  )

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-cyan-950/10 dark:to-cyan-900/20"
    >
      <ParticlesBackground />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 px-4 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
              Computing Gate for Information Technology
            </span>
          </div>

          {/* Main Title */}
          <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h1>

          {/* Subtitle */}
          <h2 ref={subtitleRef} className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90">
            {t("subtitle")}
          </h2>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
            >
              {t("cta")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-cyan-500/50 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 bg-transparent"
            >
              {t("ctaSecondary")}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "200+", label: "Happy Clients" },
              { value: "50+", label: "Team Members" },
              { value: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover:glow transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cyan-500/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cyan-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
