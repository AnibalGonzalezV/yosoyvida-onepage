import { MessageCircle, Dna, Zap, ClipboardList, Activity } from "lucide-react"
import { FadeIn } from "./ui/FadeIn"

// Definimos el color verde boho para usarlo consistentemente
const GREEN_ACCENT = "text-[#607D68]"; 
const GREEN_BG = "bg-[#607D68]";
const GREEN_BORDER = "border-[#607D68]";

// --- DATOS DE LOS PILARES ---
const pillars = [
  { 
    id: 1,
    icon: MessageCircle, 
    title: "1. Conversación Consciente", 
    description: (
      <>
        Un <span className={`font-bold ${GREEN_ACCENT}`}>diálogo profundo</span> diseñado para ir más allá de las palabras y descubrir tus <span className="font-serif text-dark-brown font-medium">verdaderas necesidades</span>.
      </>
    )
  },
  { 
    id: 2,
    icon: Dna, 
    title: "2. Biodescodificación", 
    description: (
      <>
        Descubre el <span className={`font-bold ${GREEN_ACCENT}`}>origen emocional</span> oculto detrás de tus síntomas físicos para iniciar la <span className="font-serif text-dark-brown font-medium">sanación</span>.
      </>
    )
  },
  { 
    id: 3,
    icon: Zap, 
    title: "3. Chequeo Energético", 
    description: (
      <>
        Es como un <span className={`font-bold ${GREEN_ACCENT}`}>examen de sangre</span>, pero para tu campo energético. Mide tu "batería" real disponible para <span className="font-serif text-dark-brown font-medium">funcionar y sanar</span>.
      </>
    )
  },
  { 
    id: 4,
    icon: ClipboardList, 
    title: "4. Recomendaciones", 
    description: (
      <>
        Desde la primera sesión te indicamos <span className={`font-bold ${GREEN_ACCENT}`}>qué protocolo usar</span> y los pasos para <span className="font-serif text-dark-brown font-medium">desbloquear</span> las áreas que lo necesitan.
      </>
    )
  },
]

const FEET_IMAGE = "/images/pillars-photo.webp"; 
const BOVIS_BG = "/images/new-bovis.webp";

export function PillarsSection() {
  const leftPillars = pillars.slice(0, 2);
  const rightPillars = pillars.slice(2, 4);

  return (
    <section className="bg-cream py-16 md:py-24 px-6 md:px-12 -mt-[2px] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* --- ENCABEZADO --- */}
        <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeIn>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-8 leading-tight tracking-wide drop-shadow-sm">
                    TERAPIA <span className={`italic ${GREEN_ACCENT}`}>INTEGRAL</span>
                </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
                <div className="mb-8">
                    <p className="font-serif text-xl md:text-2xl text-dark-brown leading-relaxed text-balance font-medium">
                        ¿Alguna vez has entrado a un lugar y te has sentido cansado de golpe? 
                        ¿O has conocido a personas que parecen 'recargarte' las pilas?
                    </p>
                </div>
                
                <p className="font-sans text-lg text-dark-brown/90 leading-relaxed mb-12 text-pretty font-normal">
                    No es tu imaginación. <strong className={`${GREEN_ACCENT} font-bold`}>Es física.</strong> Todo vibra, y esa vibración determina tu salud. 
                    Lo interesante es que <span className={`underline decoration-[#607D68]/40 underline-offset-4 font-medium`}>esa vibración se puede medir</span>.
                </p>
            </FadeIn>

            {/* --- TARJETA BOVIS OPTIMIZADA --- */}
            <FadeIn delay={0.3}>
                <div className={`mx-auto max-w-3xl relative min-h-[400px] md:min-h-[350px] h-auto rounded-3xl overflow-hidden group shadow-2xl border ${GREEN_BORDER}/30`}>
                    <div className="absolute inset-0">
                        <img 
                            src={BOVIS_BG} 
                            alt="Energía vital" 
                            className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-110"
                        />
                        {/* CAMBIO AQUÍ: Filtro verdoso/oscuro mucho más sutil.
                           - Antes: from-dark-brown/95 via-[#4A5D4E]/80
                           - Ahora: from-dark-brown/70 via-[#4A5D4E]/50
                           Esto permite que la imagen de fondo se vea más clara.
                        */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/70 via-[#4A5D4E]/50 to-transparent mix-blend-multiply"></div>
                    </div>

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8 md:p-12">
                        <div className="p-3 bg-white/10 backdrop-blur-md rounded-full mb-4 ring-1 ring-cream/30 animate-pulse-slow">
                            <Activity className="w-8 h-8 text-cream" />
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
                            El Biómetro de Bovis
                        </h3>
                        <p className="font-sans text-white leading-relaxed text-lg md:text-xl max-w-2xl font-medium text-balance drop-shadow-md antialiased">
                            Al igual que un termómetro mide la temperatura, esta herramienta mide tu <span className="font-bold text-[#A4C3A2] border-b border-[#A4C3A2]/50">vitalidad real</span>, tu frecuencia vibratoria. 
                            Si vibras alto, tienes salud; si vibras bajo, el cuerpo enferma.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </div>

        {/* --- ESTRUCTURA "COLUMNA VERTEBRAL" --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center relative mt-20"> 
          
          {/* LADO IZQUIERDO */}
          <div className="flex flex-col gap-12 order-2 lg:order-1">
            {leftPillars.map((pillar, index) => (
              <FadeIn key={pillar.id} delay={0.4 + (index * 0.1)} direction="right"> 
                  <div className="flex flex-col items-center lg:items-end text-center lg:text-right group">
                    {/* Icono con fondo VERDE */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${GREEN_BG} text-cream mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <pillar.icon className="w-6 h-6" />
                    </div>
                    <div className="bg-white/90 p-6 rounded-2xl border border-white shadow-md backdrop-blur-sm w-full lg:w-[95%] hover:bg-white transition-colors duration-300">
                        <h3 className="font-serif text-lg font-bold text-dark-brown mb-2 uppercase tracking-wide">
                            {pillar.title}
                        </h3>
                        <p className="font-sans text-base text-dark-brown leading-relaxed text-pretty font-normal">
                            {pillar.description}
                        </p>
                    </div>
                  </div>
              </FadeIn>
            ))}
          </div>

          {/* COLUMNA CENTRAL (IMAGEN PIES) */}
          <div className="order-1 lg:order-2 flex justify-center h-full py-8 lg:py-0 relative z-0">
              <FadeIn direction="up" delay={0.2} className="relative w-full max-w-[350px] lg:max-w-full h-full flex items-center justify-center">
                  {/* Fondo sutil VERDE detrás */}
                  <div className="absolute inset-0 bg-[#607D68]/10 rounded-full blur-3xl transform scale-90" />
                  
                  <img
                    src={FEET_IMAGE} 
                    alt="Conexión con la tierra"
                    className="w-full h-auto max-h-[500px] lg:max-h-[600px] object-contain drop-shadow-xl z-10 hover:scale-[1.02] transition-transform duration-700"
                  />
              </FadeIn>
          </div>

          {/* LADO DERECHO */}
          <div className="flex flex-col gap-12 order-3 lg:order-3">
            {rightPillars.map((pillar, index) => (
              <FadeIn key={pillar.id} delay={0.5 + (index * 0.1)} direction="left"> 
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                    {/* Icono con fondo VERDE */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${GREEN_BG} text-cream mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <pillar.icon className="w-6 h-6" />
                    </div>
                    <div className="bg-white/90 p-6 rounded-2xl border border-white shadow-md backdrop-blur-sm w-full lg:w-[95%] hover:bg-white transition-colors duration-300">
                        <h3 className="font-serif text-lg font-bold text-dark-brown mb-2 uppercase tracking-wide">
                            {pillar.title}
                        </h3>
                        <p className="font-sans text-base text-dark-brown leading-relaxed text-pretty font-normal">
                            {pillar.description}
                        </p>
                    </div>
                  </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}