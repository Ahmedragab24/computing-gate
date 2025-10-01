"use client"

import { useTranslations } from "next-intl"
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const t = useTranslations("footer")
  const tNav = useTranslations("nav")
  const tServices = useTranslations("services")

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  const quickLinks = [
    { label: tNav("home"), href: "#home" },
    { label: tNav("about"), href: "#about" },
    { label: tNav("services"), href: "#services" },
    { label: tNav("projects"), href: "#projects" },
    { label: tNav("contact"), href: "#contact" },
  ]

  const serviceLinks = [
    { label: tServices("web.title"), href: "#services" },
    { label: tServices("mobile.title"), href: "#services" },
    { label: tServices("software.title"), href: "#services" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">CG</span>
              </div>
              <span className="font-bold text-xl">Computing Gate</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{t("description")}</p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-gradient-to-br hover:from-cyan-500 hover:to-emerald-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-cyan-500 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">{t("services")}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-cyan-500 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">{t("legal")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-cyan-500 transition-colors inline-flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-cyan-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-cyan-500 transition-colors inline-flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-cyan-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                  {t("terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Computing Gate. {t("rights")}.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span className="text-sm text-muted-foreground">by Computing Gate Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
