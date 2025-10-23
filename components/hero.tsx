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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#603A30] to-[#52130C] pt-20"
    >
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-[url('/luxury-barbershop-interior-dark.jpg')] bg-cover bg-center opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-tight text-balance">
            Estilo, Elegância e Tradição
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Transforme seu visual com os melhores profissionais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gold-glow-hover rounded-full px-8 text-lg"
              asChild
            >
              <a href="#agendamento">Agende Agora</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-8 text-lg bg-transparent"
              asChild
            >
              <a href="#servicos">Nossos Serviços</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  )
}
