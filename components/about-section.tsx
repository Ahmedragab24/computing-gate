"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Target, Eye, Lightbulb, Shield, Award, Users } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

export function AboutSection() {
  const t = useTranslations("about");
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // Content animation
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      // Mission & Vision cards stagger
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      // Values cards stagger
      if (valuesRef.current) {
        gsap.from(valuesRef.current.children, {
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          scale: 0.8,
          stagger: 0.15,
          duration: 0.6,
          ease: "back.out(1.7)",
        });
      }
    },
    { scope: sectionRef }
  );

  const values = [
    {
      icon: Lightbulb,
      key: "innovation",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
    },
    {
      icon: Shield,
      key: "trust",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Award,
      key: "excellence",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: Users,
      key: "collaboration",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative  py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/5 to-background dark:via-cyan-900/10" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10 px-4">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
              {t("title")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
              {t("subtitle")}
            </span>
          </h2>
          <p
            ref={contentRef}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {t("description")}
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20"
        >
          {/* Mission Card */}
          <div className="group relative glass rounded-3xl p-8 hover:glow transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {t("mission.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("mission.description")}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative glass rounded-3xl p-8 hover:glow transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {t("vision.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("vision.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                Core Values
              </span>
            </h3>
          </div>

          <div
            ref={valuesRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.key}
                  className={`group relative glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${value.bgColor} border ${value.borderColor}`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">
                    {t(`values.${value.key}.title`)}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`values.${value.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 border-2 border-cyan-500/20 rounded-full animate-float" />
        <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-emerald-500/20 rounded-lg rotate-45 animate-float" />
      </div>
    </section>
  );
}
