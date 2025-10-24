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
    <section id="agendamento" ref={sectionRef} className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary-foreground text-balance">
              Agende Seu Horário
            </h2>
            <div className="w-20 h-1 bg-primary-foreground mx-auto" />
            <p className="text-base md:text-lg text-foreground max-w-2xl mx-auto text-pretty px-4">
              Entre em contato conosco e garanta seu horário com os melhores profissionais
            </p>
          </div>

          <Card className="bg-card border-none shadow-2xl">
            <CardContent className="p-6 md:p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                <div className="space-y-5 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1 text-sm md:text-base">Telefone</h3>
                      <p className="text-muted-foreground text-sm md:text-base">(11) 98765-4321</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1 text-sm md:text-base">Endereço</h3>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Rua da Elegância, 123 - São Paulo, SP
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-5 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1 text-sm md:text-base">Horário</h3>
                      <p className="text-muted-foreground text-sm md:text-base">Seg - Sex: 9h às 20h</p>
                      <p className="text-muted-foreground text-sm md:text-base">Sábado: 9h às 18h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1 text-sm md:text-base">Agendamento</h3>
                      <p className="text-muted-foreground text-sm md:text-base">Online ou por telefone</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gold-glow-hover rounded-full px-6 md:px-8 w-full sm:w-auto"
                  asChild
                >
                  <a href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer">
                    Agendar via WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-6 md:px-8 bg-transparent w-full sm:w-auto"
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
