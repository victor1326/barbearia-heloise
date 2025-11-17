"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Sparkles, Droplet, Eye } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Corte Masculino",
    description: "Cortes modernos e clássicos executados por profissionais experientes",
    price: "A partir de R$ 60",
  },
  {
    icon: Sparkles,
    title: "Barba Premium",
    description: "Tratamento completo com toalha quente, óleos especiais e finalização impecável",
    price: "A partir de R$ 45",
  },
  {
    icon: Droplet,
    title: "Hidratação Capilar",
    description: "Tratamentos profissionais para revitalizar e fortalecer seus cabelos",
    price: "A partir de R$ 80",
  },
  {
    icon: Eye,
    title: "Design de Sobrancelhas",
    description: "Modelagem e design personalizado para realçar seu olhar",
    price: "A partir de R$ 35",
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
    <section id="servicos" ref={sectionRef} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-card-foreground text-balance">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos uma gama completa de serviços para cuidar do seu visual
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                <p className="text-accent font-semibold text-lg">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
