"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap, useGSAP } from "@/lib/gsap";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
}

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ahmed Al-Shammari",
      position: "CEO",
      company: "Future Foundation",
      rating: 5.0,
      text: "The Computing Gate team excelled in providing advanced technical solutions with precision and professionalism, making a noticeable difference in our project performance. I recommend working with them.",
      avatar: "/professional-arab-businessman.png",
    },
    {
      id: 2,
      name: "Sarah Al-Nuaimi",
      position: "Marketing Director",
      company: "Tech Solutions",
      rating: 4.8,
      text: "My experience with the Computing Gate team was exceptional; they provided innovative solutions that improved our operational efficiency and enhanced customer engagement, with continuous technical support.",
      avatar: "/professional-arab-businesswoman.jpg",
    },
    {
      id: 3,
      name: "Mohammed Al-Otaibi",
      position: "Head of Development",
      company: "Software Company",
      rating: 5.0,
      text: "The Computing Gate team's precision in every detail contributed to achieving amazing results that exceeded our expectations. I feel they are true success partners and recommend working with them.",
      avatar: "/professional-arab-tech-executive.jpg",
    },
  ];

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
    },
    { scope: sectionRef }
  );

  // Animate testimonial change
  useGSAP(
    () => {
      if (carouselRef.current) {
        gsap.from(carouselRef.current, {
          opacity: 0,
          x: 50,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    },
    { dependencies: [currentIndex], scope: sectionRef }
  );

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background dark:via-purple-900/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10 px-4">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              {t("title")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              {t("subtitle")}
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={carouselRef}
            className="relative glass rounded-3xl p-12 md:p-16"
          >
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center opacity-20">
              <Quote className="w-8 h-8 text-white" />
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(currentTestimonial.rating)
                      ? "fill-yellow-500 text-yellow-500"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                />
              ))}
              <span className="ml-2 text-lg font-bold text-foreground">
                {currentTestimonial.rating}
              </span>
            </div>

            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl text-center text-foreground/90 leading-relaxed mb-8 font-medium">
              "{currentTestimonial.text}"
            </p>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 p-1 mb-4">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-foreground">
                {currentTestimonial.name}
              </h4>
              <p className="text-muted-foreground">
                {currentTestimonial.position} - {currentTestimonial.company}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-cyan-500"
                        : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Counter */}
          <div className="text-center mt-8 text-muted-foreground">
            <span className="text-lg font-semibold text-cyan-600 dark:text-cyan-400">
              {currentIndex + 1}
            </span>{" "}
            / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}
