"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Phone } from "lucide-react"

export function Booking() {
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
    <section id="agendamento" ref={sectionRef} className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-primary-foreground text-balance">Agende Seu Horário</h2>
            <div className="w-20 h-1 bg-primary-foreground mx-auto" />
            <p className="text-lg text-foreground max-w-2xl mx-auto text-pretty">
              Entre em contato conosco e garanta seu horário com os melhores profissionais
            </p>
          </div>

          <Card className="bg-card border-none shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Telefone</h3>
                      <p className="text-muted-foreground">(11) 98765-4321</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Endereço</h3>
                      <p className="text-muted-foreground">Rua da Elegância, 123 - São Paulo, SP</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Horário</h3>
                      <p className="text-muted-foreground">Seg - Sex: 9h às 20h</p>
                      <p className="text-muted-foreground">Sábado: 9h às 18h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Agendamento</h3>
                      <p className="text-muted-foreground">Online ou por telefone</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gold-glow-hover rounded-full px-8"
                  asChild
                >
                  <a href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer">
                    Agendar via WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-8 bg-transparent"
                  asChild
                >
                  <a href="tel:+5511987654321">Ligar Agora</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
