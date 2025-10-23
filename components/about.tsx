"use client"

import { useEffect, useRef } from "react"

export function About() {
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
    <section id="sobre" ref={sectionRef} className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance">Sobre Nós</h2>
            <div className="w-20 h-1 bg-accent" />
            <p className="text-lg text-foreground leading-relaxed text-pretty">
              Há mais de 15 anos, o Hairstyling Salão é referência em estilo e elegância. Nossa equipe de profissionais
              altamente qualificados está comprometida em proporcionar uma experiência única e personalizada para cada
              cliente.
            </p>
            <p className="text-lg text-foreground leading-relaxed text-pretty">
              Combinamos técnicas tradicionais com as tendências mais modernas do mercado, garantindo que você saia do
              nosso salão com um visual impecável e renovado.
            </p>
            <p className="text-lg text-foreground leading-relaxed text-pretty">
              Nosso compromisso é com a excelência, o cuidado e a satisfação de cada cliente que nos confia seu estilo.
            </p>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <img src="/professional-barber-team-luxury-salon.jpg" alt="Nossa equipe" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
