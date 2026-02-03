import { MessageCircle, Dna, Zap, Heart } from "lucide-react"

const pillars = [
  { icon: MessageCircle, title: "Conversación Consciente", description: "Diálogo profundo para descubrir tus verdaderas necesidades." },
  { icon: Dna, title: "Biodescodificación", description: "Descubre el origen emocional de tus síntomas físicos." },
  { icon: Zap, title: "Chequeo Energético", description: "Medición y análisis de tu campo energético para identificar bloqueos." },
  { icon: Heart, title: "Bienestar Integral", description: "Equilibrio físico, emocional y espiritual para una vida plena." },
]

export function PillarsSection() {
  return (
    // CORREGIDO: Aseguramos el margen negativo
    <section className="bg-cream py-16 md:py-24 px-6 md:px-12 -mt-[2px] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-dark-brown mb-6">
            Nuestros Pilares
          </h2>
          <p className="font-sans text-xl text-dark-brown/70 max-w-2xl mx-auto">
            Un enfoque holístico que integra mente, cuerpo y espíritu
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-white/60 transition duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta/20 text-terracotta mb-5 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl text-dark-brown mb-3">{pillar.title}</h3>
                <p className="font-sans text-base text-dark-brown/70 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="relative w-full flex items-center justify-center lg:justify-end">
             <img
                src="/images/pillars-feet.webp" 
                alt="Conexión con la tierra"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.01] transition-transform duration-500"
              />
          </div>
        </div>
      </div>
    </section>
  )
}