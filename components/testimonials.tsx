"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Santos",
    text: "Encontrei no Beleza Essencial muito mais que um salão. Encontrei um lugar que me ajudou a resgatar minha autoestima e me sentir linda novamente!",
    rating: 5,
  },
  {
    name: "Ana Paula",
    text: "Estava passando por um momento difícil e me descuidando. Aqui fui acolhida com carinho e saí renovada, por dentro e por fora!",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    text: "Mais que um tratamento de beleza, é uma experiência de amor próprio. Saio daqui me sentindo confiante e poderosa!",
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
          <h2 className="text-4xl md:text-5xl font-serif text-[#52130C] text-balance">Histórias de Transformação</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
          <p className="text-lg text-[#603A30] max-w-2xl mx-auto text-pretty">
            Veja como ajudamos mulheres a reconhecerem sua própria beleza
          </p>
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
