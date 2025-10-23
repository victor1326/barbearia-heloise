"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Agendamento", href: "#agendamento" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="relative w-48 h-16">
              <Image src="/logo.png" alt="Beauty Saloon" fill className="object-contain" priority />
            </div>

            <nav className="flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-300 text-sm font-medium whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA Button */}
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 gold-glow-hover rounded-full px-6"
            asChild
          >
            <a href="#agendamento">Agende Agora</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
