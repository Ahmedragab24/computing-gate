"use client";

import type React from "react";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { gsap, useGSAP } from "@/lib/gsap";

export function ContactSection() {
  const t = useTranslations("contact");
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useGSAP(
    () => {
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

      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(infoRef.current, {
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("info.email"),
      value: "info@computinggate.com",
      href: "mailto:info@computinggate.com",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: Phone,
      label: t("info.phone"),
      value: "+966 50 729 9999",
      href: "tel:+966507299999",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: MapPin,
      label: t("info.address"),
      value: "Riyadh, Saudi Arabia",
      href: "#",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/5 to-background dark:via-cyan-900/10" />
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

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
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div ref={formRef} className="glass rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              {t("form.title")}
            </h3>
            <p className="text-muted-foreground mb-8">{t("form.subtitle")}</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder={t("form.name")}
                  required
                  className="h-12 bg-background/50 border-border/50 focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder={t("form.email")}
                  required
                  className="h-12 bg-background/50 border-border/50 focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder={t("form.phone")}
                  className="h-12 bg-background/50 border-border/50 focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <Textarea
                  placeholder={t("form.message")}
                  required
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox id="privacy" required className="mt-1" />
                <label
                  htmlFor="privacy"
                  className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                >
                  {t("form.privacy")}
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    {t("form.submit")}
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-6">
            <div className="glass rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                {t("info.title")}
              </h3>
              <p className="text-muted-foreground mb-8">{t("info.subtitle")}</p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-all duration-300"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        <p className="text-lg font-semibold text-foreground group-hover:text-cyan-500 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass rounded-3xl overflow-hidden h-64">
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-emerald-500/10 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-cyan-500/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
