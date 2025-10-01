"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap, useGSAP } from "@/lib/gsap";
import Image from "next/image";

type ProjectCategory = "all" | "web" | "mobile" | "desktop";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  client: string;
  description: string;
  technologies: string[];
  image: string;
  gradient: string;
}

export function ProjectsSection() {
  const t = useTranslations("projects");
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Digital Education System",
      category: "web",
      client: "Ministry of Education",
      description:
        "A comprehensive digital learning platform that integrates e-learning technologies interactively.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/modern-education-platform-dashboard.jpg",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 2,
      title: "Smart Delivery App",
      category: "mobile",
      client: "Food Delivery Company",
      description:
        "An innovative app that allows ordering delivery services with instant tracking system.",
      technologies: ["Flutter", "Firebase", "Maps API"],
      image: "/food-delivery-app.png",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      id: 3,
      title: "Integrated Sales & Inventory System",
      category: "desktop",
      client: "International Trade Group",
      description:
        "Advanced solution for managing sales and inventory operations with analytical reports.",
      technologies: ["C#", ".NET", "SQL Server"],
      image: "/inventory-management-dashboard.png",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      title: "E-Government Services Platform",
      category: "web",
      client: "Government Services Authority",
      description:
        "Advanced digital platform providing electronic government services with easy and secure interface.",
      technologies: ["Angular", "Java", "Oracle"],
      image: "/government-services-portal.jpg",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: 5,
      title: "Advanced Health & Fitness App",
      category: "mobile",
      client: "Fitness & Health Center",
      description:
        "App integrating digital health technologies to monitor fitness and provide specialized health advice.",
      technologies: ["React Native", "AWS", "Health Kit"],
      image: "/fitness-tracking-app-interface.png",
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: 6,
      title: "Comprehensive E-Commerce Store",
      category: "web",
      client: "E-Commerce Company",
      description:
        "Integrated electronic solution providing safe shopping experience with modern payment and inventory systems.",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      image: "/ecommerce-website-homepage.png",
      gradient: "from-teal-500 to-cyan-600",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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

      // Filters animation
      if (filtersRef.current) {
        gsap.from(filtersRef.current.children, {
          scrollTrigger: {
            trigger: filtersRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    },
    { scope: sectionRef }
  );

  // Animate projects when filter changes
  useGSAP(
    () => {
      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          opacity: 0,
          scale: 0.9,
          y: 30,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    },
    { dependencies: [activeFilter], scope: sectionRef }
  );

  const filters: { key: ProjectCategory; label: string }[] = [
    { key: "all", label: t("filters.all") },
    { key: "web", label: t("filters.web") },
    { key: "mobile", label: t("filters.mobile") },
    { key: "desktop", label: t("filters.desktop") },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/5 to-background dark:via-blue-900/10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10 px-4">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {t("title")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              {t("subtitle")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Filters */}
        <div
          ref={filtersRef}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              variant={activeFilter === filter.key ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:glow"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center`}
                >
                  <Button
                    size="lg"
                    className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-gray-900 hover:bg-gray-100"
                  >
                    {t("viewDetails")}
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
                  <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    {project.client}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-500 group-hover:to-emerald-500 transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="group border-2 border-cyan-500/50 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 bg-transparent"
          >
            {t("viewMore")}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
