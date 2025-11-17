"use client"

import { useEffect, useRef } from "react"

const galleryImages = [
  { id: 1, query: "modern+mens+haircut+barbershop" },
  { id: 2, query: "professional+beard+trim+luxury" },
  { id: 3, query: "stylish+mens+hairstyle+salon" },
  { id: 4, query: "barbershop+interior+luxury+design" },
  { id: 5, query: "mens+grooming+professional+barber" },
  { id: 6, query: "classic+barbershop+service" },
]

export function Gallery() {
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
    <section id="galeria" ref={sectionRef} className="py-24 bg-[#603A30]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance">Galeria</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Confira alguns dos nossos trabalhos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src={`/.jpg?height=400&width=400&query=${image.query}`}
                alt={`Galeria ${image.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 sepia-[0.3] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
