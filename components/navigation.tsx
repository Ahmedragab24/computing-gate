"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Navigation() {
  const t = useTranslations("nav")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">CG</span>
            </div>
            <span className="font-bold text-xl hidden md:block">Computing Gate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground/80 hover:text-cyan-500 transition-colors font-medium relative group"
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LocaleSwitcher />
            <Button className="hidden md:inline-flex bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
              {t("getStarted")}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 glass rounded-2xl">
            <div className="flex flex-col gap-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-foreground/80 hover:text-cyan-500 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white mt-2">
                {t("getStarted")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
