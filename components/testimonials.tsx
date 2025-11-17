"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Silva",
    text: "Excelente atendimento e profissionais muito qualificados. Sempre saio satisfeito com o resultado!",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    text: "O melhor salão da região! Ambiente agradável e serviços de primeira qualidade.",
    rating: 5,
  },
  {
    name: "Fernando Costa",
    text: "Frequento há anos e nunca me decepcionei. Recomendo para todos os amigos!",
    rating: 5,
  },
]

export function Testimonials() {
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
    <section ref={sectionRef} className="py-24 bg-[#C4BAB3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-[#52130C] text-balance">Depoimentos</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
          <p className="text-lg text-[#603A30] max-w-2xl mx-auto text-pretty">O que nossos clientes dizem sobre nós</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed text-pretty">"{testimonial.text}"</p>
                <p className="font-semibold text-accent">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
