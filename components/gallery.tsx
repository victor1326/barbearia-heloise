"use client"

import { useEffect, useRef } from "react"

const galleryImages = [
  { id: 1, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RJmjHnx8x4VEcpR7bNq4eSHdsjOmdc.png", alt: "Serviço de barba profissional" },
  { id: 2, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Qk8ePKRXYHmdFptyzyOv9tqIWgC2Kq.png", alt: "Corte de cabelo masculino" },
  { id: 3, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-33WJtNfuPUws3pDwLyuPXPDpjfGWp6.png", alt: "Styling e escova profissional feminino" },
  { id: 4, src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wPEB7Lpt6WRKlM9nUZmsZpAgeYWYu8.png", alt: "Corte de cabelo feminino" },
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
            Momentos de transformação e beleza
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-[1.08] contrast-[1.12] saturate-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
