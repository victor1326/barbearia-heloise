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
    <section id="sobre" ref={sectionRef} className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground text-balance">Sobre Nós</h2>
            <div className="w-20 h-1 bg-accent" />
            <p className="text-base md:text-lg text-foreground leading-relaxed text-pretty">
              No <span className="font-semibold text-accent">Beleza Essencial</span>, acreditamos que a beleza vai além
              da estética. Nosso propósito é ajudar você a reconhecer seu próprio valor e beleza, reconstruindo sua
              autoestima e amor próprio.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed text-pretty">
              Oferecemos mais do que serviços de beleza - proporcionamos uma experiência acolhedora e transformadora.
              Cada atendimento é pensado para contribuir com seu bem-estar emocional, não apenas com sua aparência.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed text-pretty">
              Com um atendimento humanizado e empático, nossa missão é fazer você sair daqui se sentindo mais confiante,
              valorizado e pronto para enfrentar o mundo com autoestima renovada.
            </p>
            <div className="bg-primary/10 border-l-4 border-accent p-4 md:p-6 rounded-r-lg">
              <p className="text-sm md:text-base text-foreground/90 italic text-pretty">
                "A aparência dos cabelos tem o poder de refletir como nos sentimos por dentro. Quando eles estão bem,
                nossa confiança e autoestima também florescem."
              </p>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl order-1 lg:order-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5Tcv2PoXxwTBWD3ahVukkXpIdVQsZT.png"
              alt="Interior elegante do Beleza Essencial"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
