"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-center justify-center pt-16 md:pt-20"
    >
      <div className="absolute inset-0 bg-[url('/hero-background.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#603A30]/80 to-[#52130C]/90" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-foreground leading-tight text-balance px-2">
            Beleza que Transforma, Autoestima que Brilha
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty px-4">
            Mais do que estética, uma experiência de renovação e amor próprio
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-4 md:pt-8 px-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gold-glow-hover rounded-full px-6 sm:px-8 text-base sm:text-lg w-full sm:w-auto"
              asChild
            >
              <a href="#agendamento">Agende Sua Transformação</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-6 sm:px-8 text-base sm:text-lg bg-transparent w-full sm:w-auto"
              asChild
            >
              <a href="#servicos">Conheça Nossos Serviços</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
