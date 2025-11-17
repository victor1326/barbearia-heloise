import { Instagram, Facebook, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contato" className="bg-[#52130C] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Social */}
          <div className="text-center mb-8">
            <div className="relative w-64 h-20 mx-auto mb-6">
              <Image src="/logo.png" alt="Hairstyling Salão" fill className="object-contain" />
            </div>
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-accent" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-accent" />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-6 h-6 text-accent" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/30 pt-8">
            <p className="text-center text-foreground/70 text-sm">
              © {new Date().getFullYear()} Hairstyling Salão. Todos os direitos reservados.
            </p>
            <p className="text-center text-foreground/50 text-xs mt-2">Desenvolvido com excelência e dedicação</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
