"use client"

import { useEffect, useRef } from "react"

const galleryImages = [
  { id: 1, src: "/gallery/haircut-1.jpg", alt: "Corte masculino moderno" },
  { id: 2, src: "/gallery/beard-trim.jpg", alt: "Aparar e cuidar da barba" },
  { id: 3, src: "/gallery/hairstyle.jpg", alt: "Penteado estiloso com fade" },
  { id: 4, src: "/gallery/salon-interior.jpg", alt: "Interior luxuoso do salão" },
  { id: 5, src: "/gallery/grooming.jpg", alt: "Serviço de grooming premium" },
  { id: 6, src: "/gallery/classic-cut.jpg", alt: "Corte clássico de barbearia" },
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
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
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
