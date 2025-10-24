"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Sparkles, Hand, Palette } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Cabelo",
    description: "Cortes, coloração, mechas e tratamentos capilares que realçam sua beleza natural",
    price: "A partir de R$ 80",
  },
  {
    icon: Hand,
    title: "Unhas",
    description: "Manicure e pedicure com esmaltação tradicional, gel e nail art personalizada",
    price: "A partir de R$ 45",
  },
  {
    icon: Sparkles,
    title: "Pele",
    description: "Tratamentos faciais, limpeza de pele e procedimentos para revitalizar sua aparência",
    price: "A partir de R$ 120",
  },
  {
    icon: Palette,
    title: "Maquiagem",
    description: "Maquiagem profissional para eventos especiais e dia a dia que destaca sua beleza",
    price: "A partir de R$ 100",
  },
]

export function Services() {
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
    <section id="servicos" ref={sectionRef} className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-card-foreground text-balance">
            Nossos Serviços
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Serviços pensados para elevar sua autoestima e bem-estar
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 group"
            >
              <CardContent className="p-5 md:p-6 space-y-3 md:space-y-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-serif text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                <p className="text-accent font-semibold text-base md:text-lg">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
