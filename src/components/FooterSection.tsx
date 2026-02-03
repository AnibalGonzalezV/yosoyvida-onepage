import { Instagram, Mail } from "lucide-react"
import { WaveDivider } from "./WaveDivider"

// SVG Waves
const TOP_WAVE = "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,208C672,192,768,128,864,122.7C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
const BOTTOM_WAVE = "M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,192C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

interface FooterSectionProps {
  topWaveColor?: string;
}

export function FooterSection({ topWaveColor = "text-[#E8DED5]" }: FooterSectionProps) {
  const currentYear = new Date().getFullYear();

  return (
    // CORRECCIÓN 1: Aumentamos el margen negativo a -mt-1 (4px) para forzar la subida
    <footer className="relative -mt-1 z-20"> 
      
      {/* --- PARALLAX / QUOTE AREA --- */}
      <div className="relative min-h-[450px] md:min-h-[550px] flex items-center justify-center overflow-hidden">
        
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
             <img
              src="/images/footer-nature.jpg"
              alt="Peaceful nature scene"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark-brown/40 backdrop-blur-[1px]" />
        </div>

        {/* Ola Superior */}
        {/* CORRECCIÓN 2: -top-[1px] sube la ola un pixel extra para tapar la grieta */}
        <div className="absolute -top-[1px] w-full transform origin-top scale-y-105 z-10">
            <WaveDivider path={TOP_WAVE} className={topWaveColor} position="top" />
        </div>

        {/* Cita Inspiradora */}
        <div className="relative z-10 px-6 max-w-4xl text-center">
          <blockquote className="space-y-6">
            <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-cream leading-tight italic text-balance drop-shadow-lg">
              "La naturaleza no se apresura, y sin embargo, todo se logra."
            </p>
            <cite className="block font-cursive text-xl md:text-3xl text-cream/90 not-italic transform -rotate-1">
              — Lao Tzu
            </cite>
          </blockquote>
        </div>

        {/* Ola Inferior */}
        <div className="absolute bottom-0 w-full transform origin-bottom scale-y-105 z-10">
            <WaveDivider path={BOTTOM_WAVE} className="text-cream" position="bottom" />
        </div>
      </div>

      {/* --- BOTTOM INFO AREA --- */}
      {/* Mantenemos -mt-1 aquí para sellar la parte de abajo también */}
      <div className="relative bg-cream pt-8 pb-12 px-6 border-t border-dark-brown/5 -mt-1 z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8">
          
          {/* IZQUIERDA: Grupo de Logos */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
             <img 
               src="/images/logo-verde.png" 
               alt="Yo Soy Vida Logo" 
               className="h-14 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
             />
             <div className="hidden sm:block h-10 w-px bg-dark-brown/10"></div>
             <img 
               src="/images/logo-jesarela.png" 
               alt="Jesarela Logo" 
               className="h-12 md:h-14 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-400" 
             />
          </div>

          {/* DERECHA: Redes y Copyright */}
          <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
             <div className="flex gap-4">
                <a 
                  href="https://instagram.com/yosoyvida.cl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-dark-brown hover:text-terracotta transition-colors duration-300"
                >
                  <span className="font-sans text-xs font-bold tracking-widest uppercase hidden sm:block">Síguenos</span>
                  <div className="p-2.5 rounded-full bg-white border border-dark-brown/10 group-hover:border-terracotta group-hover:bg-terracotta/10 transition-all">
                    <Instagram className="w-5 h-5" />
                  </div>
                </a>
                
                <a 
                  href="mailto:contacto@yosoyvida.cl"
                  className="group p-2.5 rounded-full bg-white border border-dark-brown/10 hover:border-terracotta hover:bg-terracotta/10 hover:text-terracotta text-dark-brown transition-all"
                >
                    <Mail className="w-5 h-5" />
                </a>
             </div>

             <div className="space-y-1">
                <p className="font-sans text-xs text-dark-brown/60">
                  © {currentYear} Yo Soy Vida. Todos los derechos reservados.
                </p>
                <p className="font-sans text-[10px] text-dark-brown/40">
                  Medicina Natural & Terapias Integrales
                </p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  )
}