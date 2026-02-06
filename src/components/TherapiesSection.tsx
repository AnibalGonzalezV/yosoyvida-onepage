import { Clock, CheckCircle2, CalendarDays, Sparkles } from "lucide-react"
import { WaveDivider } from "./WaveDivider"
import { FadeIn } from "./ui/FadeIn"

const TOP_WAVE = "M0,288L48,282.7C96,277,192,267,288,250.7C384,235,480,213,576,186.7C672,160,768,128,864,144C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
const BOTTOM_WAVE = "M0,128L48,154.7C96,181,192,235,288,218.7C384,203,480,117,576,122.7C672,128,768,224,864,240C960,256,1056,192,1152,149.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

const TEXTURE_BG = "/images/background-component.webp"

export function TherapiesSection() {
  return (
    <section id="terapias" className="relative bg-terracotta text-cream overflow-hidden">
       
       <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={TEXTURE_BG} 
            alt="Textura de arena" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-terracotta/80 via-transparent to-terracotta/80"></div>
       </div>

       <div className="-mt-[2px] relative z-10">
         <WaveDivider path={TOP_WAVE} className="text-cream" position="top" />
       </div>
       
       <div className="py-20 md:py-32 px-6 md:px-12 flex items-center justify-center relative z-10">
        <div className="max-w-5xl w-full mx-auto">
          
          <FadeIn>
             <div className="bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-16 items-center">
                    
                    {/* LADO IZQUIERDO */}
                    <div className="text-center md:text-left space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/20 border border-cream/30 backdrop-blur-sm mx-auto md:mx-0">
                            <Sparkles className="w-4 h-4 text-white" />
                            <span className="text-xs font-bold tracking-[0.2em] text-white uppercase shadow-sm">Experiencia Completa</span>
                        </div>

                        <div>
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-3 leading-tight drop-shadow-md">
                                Tu Sesión
                            </h2>
                            <p className="font-sans text-white text-lg font-medium drop-shadow-md opacity-100">
                                Un espacio seguro diseñado para tu transformación.
                            </p>
                        </div>

                        <div className="flex flex-col items-center md:items-start gap-2">
                             <div className="flex items-center gap-3">
                                <Clock className="w-8 h-8 text-white drop-shadow-md" strokeWidth={2} />
                                <span className="text-4xl md:text-5xl font-serif italic text-white font-medium drop-shadow-md">
                                    2 Horas
                                </span>
                             </div>
                             <p className="text-sm uppercase tracking-widest text-white font-bold pl-1 drop-shadow-md opacity-100">
                                 De dedicación exclusiva
                             </p>
                        </div>
                    </div>

                    {/* LADO DERECHO */}
                    <div className="bg-black/10 rounded-2xl p-6 md:p-8 border border-white/5 shadow-inner">
                        <div className="flex items-center gap-3 mb-6">
                            <CalendarDays className="w-5 h-5 text-cream/80" />
                            <span className="text-sm font-bold uppercase tracking-widest text-cream/90">
                                ¿Qué incluye?
                            </span>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 group/item">
                                <CheckCircle2 className="w-6 h-6 text-cream shrink-0 group-hover/item:scale-110 transition-transform" />
                                <div>
                                    <span className="block font-serif text-xl text-white">Conversación Profunda</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 group/item">
                                <CheckCircle2 className="w-6 h-6 text-cream shrink-0 group-hover/item:scale-110 transition-transform" />
                                <div>
                                    <span className="block font-serif text-xl text-white">Chequeo Energético</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 group/item">
                                <CheckCircle2 className="w-6 h-6 text-cream shrink-0 group-hover/item:scale-110 transition-transform" />
                                <div>
                                    {/* CAMBIO: whitespace-normal en móvil, nowrap en desktop */}
                                    <span className="block font-serif text-xl text-white whitespace-normal md:whitespace-nowrap">
                                        Análisis de Biodescodificación
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 group/item">
                                <CheckCircle2 className="w-6 h-6 text-cream shrink-0 group-hover/item:scale-110 transition-transform" />
                                <div>
                                    <span className="block font-serif text-xl text-white">Plan de Acción</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
             </div>
          </FadeIn>

        </div>
       </div>

       <WaveDivider path={BOTTOM_WAVE} className="text-cream" />
    </section>
  )
}