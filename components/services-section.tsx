"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Globe,
  Smartphone,
  Code,
  Palette,
  Cloud,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap, useGSAP } from "@/lib/gsap";

export function ServicesSection() {
  const t = useTranslations("services");
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // Cards stagger animation
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 60,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    },
    { scope: sectionRef }
  );

  const services = [
    {
      icon: Globe,
      key: "web",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-500/10 to-blue-600/10",
      iconBg: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
    },
    {
      icon: Smartphone,
      key: "mobile",
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-500/10 to-green-600/10",
      iconBg: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    {
      icon: Code,
      key: "software",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-600/10",
      iconBg: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: Palette,
      key: "ux",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-500/10 to-red-600/10",
      iconBg: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      icon: Cloud,
      key: "cloud",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/10 to-indigo-600/10",
      iconBg: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: BarChart3,
      key: "analytics",
      gradient: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-500/10 to-cyan-600/10",
      iconBg: "bg-teal-500/10",
      borderColor: "border-teal-500/20",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-950/5 to-background dark:via-emerald-900/10" />
      <div className="grid-pattern absolute inset-0 opacity-20" />

      <div className="container mx-auto relative z-10 px-4">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              {t("title")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              {t("subtitle")}
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.key}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative glass rounded-3xl p-8 transition-all duration-500 cursor-pointer border ${
                  service.borderColor
                } ${isHovered ? "scale-105 glow" : ""}`}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-500 group-hover:to-emerald-500 transition-all duration-300">
                    {t(`${service.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t(`${service.key}.description`)}
                  </p>

                  {/* Learn More Link */}
                  <Button
                    variant="ghost"
                    className={`group/btn p-0 h-auto font-semibold text-cyan-600 dark:text-cyan-400 hover:bg-transparent ${
                      isHovered ? "translate-x-2" : ""
                    } transition-transform duration-300`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-cyan-500/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-emerald-500/5 to-blue-500/5" />
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let our professional team provide comprehensive consultations
                and turn your ideas into leading technical solutions.
              </p>
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-500 to-emerald-600 hover:from-cyan-600 hover:to-emerald-700 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
              >
                Start Your Digital Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-40 left-10 w-24 h-24 border-2 border-emerald-500/20 rounded-full animate-float" />
      <div className="absolute bottom-40 right-10 w-20 h-20 border-2 border-cyan-500/20 rounded-lg rotate-45 animate-float" />
    </section>
  );
}
