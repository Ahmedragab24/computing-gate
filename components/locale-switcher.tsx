"use client"

import { useLocale } from "next-intl"
import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocaleSwitcher() {
  const locale = useLocale()

  const switchLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en"
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`
    window.location.reload()
  }

  return (
    <Button variant="ghost" size="icon" onClick={switchLocale} className="relative" aria-label="Switch language">
      <Languages className="h-5 w-5" />
      <span className="absolute -bottom-1 -right-1 text-[10px] font-bold">{locale === "en" ? "ع" : "EN"}</span>
    </Button>
  )
}
