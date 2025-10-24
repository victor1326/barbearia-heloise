"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="relative w-32 h-12 md:w-48 md:h-16 flex-shrink-0">
            <Image src="/logo.png" alt="Beleza Essencial" fill className="object-contain" priority />
          </div>

          <nav className="hidden lg:flex items-center gap-6">
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

          <Button
            className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 gold-glow-hover rounded-full px-6"
            asChild
          >
            <a href="#agendamento">Agende Agora</a>
          </Button>

          <button
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleMenuClick}
                  className="text-foreground hover:text-accent transition-colors duration-300 text-base font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 gold-glow-hover rounded-full w-full mt-2"
                asChild
              >
                <a href="#agendamento" onClick={handleMenuClick}>
                  Agende Agora
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
