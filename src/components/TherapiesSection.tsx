import { Dna, Sparkles, User, Clock } from "lucide-react"
import { WaveDivider } from "./WaveDivider"

// SVG4 (Top - Invertido)
const TOP_WAVE = "M0,288L48,282.7C96,277,192,267,288,250.7C384,235,480,213,576,186.7C672,160,768,128,864,144C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

// SVG5 (Bottom)
const BOTTOM_WAVE = "M0,128L48,154.7C96,181,192,235,288,218.7C384,203,480,117,576,122.7C672,128,768,224,864,240C960,256,1056,192,1152,149.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

const therapies = [
    { icon: Dna, title: "Biodecodificación", description: "Transforma memorias emocionales que afectan tu bienestar." },
    { icon: Sparkles, title: "Sanación Energética", description: "Libera bloqueos energéticos y armoniza tu campo." },
    { icon: User, title: "Cuerpo Sutil", description: "Reconecta con tu esencia más profunda." },
]

export function TherapiesSection() {
  return (
    <section id="terapias" className="relative bg-terracotta text-cream">
       {/* OLA SUPERIOR (Cream fluyendo hacia Terracotta) */}
       <WaveDivider path={TOP_WAVE} className="text-cream" position="top" />
       
       <div className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* ... (Contenido de Terapias sin cambios) ... */}
           {/* Intro con FOTO 3 (Óvalo) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
             {/* Texto */}
             <div className="order-2 lg:order-1">
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                  Terapia Integral
                </h2>
                <p className="font-sans text-lg md:text-xl text-cream/90 leading-relaxed mb-8 text-pretty">
                  ¿Sabías que la energía se puede medir? Realizamos una medición de tu energía 
                  para entregarte herramientas concretas para elevar tu frecuencia vibratoria.
                </p>
                <div className="bg-earthy-brown/30 rounded-xl p-8 border border-cream/20 backdrop-blur-sm">
                   <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-6 h-6 text-cream" />
                      <span className="uppercase tracking-widest text-sm font-bold">Sesión de 2 Horas</span>
                   </div>
                   <p className="text-base md:text-lg opacity-90 font-light">
                     Incluye conversación profunda, chequeo energético y limpieza con productos naturales.
                   </p>
                </div>
             </div>
             
             {/* La Foto Ovalada */}
             <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <img 
                  src="/images/therapies-oval.webp" 
                  alt="Terapia Integral"
                  className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl hover:brightness-110 transition duration-500"
                />
             </div>
          </div>

          {/* Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {therapies.map((therapy, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:bg-white/20 hover:-translate-y-1 transition duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cream/20 text-cream mb-6">
                  <therapy.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl mb-3">{therapy.title}</h3>
                <p className="font-sans text-base opacity-80 leading-relaxed">{therapy.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* OLA INFERIOR (Transición hacia Products que es Cream) */}
      <WaveDivider path={BOTTOM_WAVE} className="text-cream" />
    </section>
  )
}