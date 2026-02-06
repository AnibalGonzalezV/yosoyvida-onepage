import { Sparkles, Clock, Globe, BookOpen, Award } from "lucide-react"
import { FadeIn } from "./ui/FadeIn"

const COURSE_IMAGE = "/images/reiki-curso-square.webp"; 

export function CoursesSection() {
  return (
    <section id="cursos" className="bg-[#E8DED5] py-16 md:py-24 px-6 md:px-12 -mt-[2px] relative z-10">
      <div className="max-w-7xl mx-auto"> 
        <div className="bg-cream rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
          
          {/* --- COLUMNA TEXTO (Izquierda) --- */}
          <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center order-2 lg:order-1">
            
            <FadeIn delay={0.1}>
                <div className="flex items-start gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-terracotta mt-1 shrink-0" />
                    <p className="font-serif italic text-xl text-terracotta leading-tight">
                        ¿Sientes cansancio, estrés o bloqueo emocional?
                    </p>
                </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-brown mb-6 leading-tight">
                   Curso de Reiki <br/>
                   <span className="text-terracotta/80 text-2xl md:text-3xl block mt-2">Nivel 1: Despertar del Ser</span>
                </h2>
            </FadeIn>

            <div className="font-sans text-dark-brown/80 leading-relaxed space-y-4 mb-8 text-base md:text-lg">
                <FadeIn delay={0.3}>
                    <p>
                        El Reiki es una técnica de canalización de energía que nace de una búsqueda profunda: redescubrir el método detrás de las sanaciones de Jesús. Fue <strong>Mikao Usui</strong> quien en 1870 recuperó esta técnica milenaria.
                    </p>
                </FadeIn>
                <FadeIn delay={0.4}>
                    <p>
                        Esta disciplina restaura tu armonía natural. <span className="italic text-dark-brown font-medium">No necesitas dones especiales</span>; todos tenemos la capacidad de conectar con la energía universal. En este curso teórico-práctico, aprenderás a sanarte a ti mismo desde el primer día.
                    </p>
                </FadeIn>
            </div>

            <FadeIn delay={0.5}>
                <div className="bg-white/50 rounded-2xl p-6 mb-8 border border-white/60">
                    <h3 className="font-bold text-dark-brown text-sm uppercase tracking-widest mb-4 border-b border-dark-brown/10 pb-2">
                        Detalles del Curso
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-terracotta shrink-0" />
                            <span className="text-sm font-medium text-dark-brown">4 Horas Intensivas</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Globe className="w-5 h-5 text-terracotta shrink-0" />
                            <span className="text-sm font-medium text-dark-brown">Online o Presencial</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <BookOpen className="w-5 h-5 text-terracotta shrink-0" />
                            <span className="text-sm font-medium text-dark-brown">Manual Completo</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Award className="w-5 h-5 text-terracotta shrink-0" />
                            <span className="text-sm font-medium text-dark-brown">Certificado Incluido</span>
                        </div>
                    </div>
                </div>
            </FadeIn>

             <FadeIn delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <a
                    href="https://wa.me/56912345678?text=Hola! Me interesa inscribirme en el Curso de Reiki Nivel 1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-terracotta text-cream font-sans uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-dark-brown transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                    ¡Quiero Iniciar el Viaje!
                    </a>
                    <span className="text-sm text-dark-brown/60 italic">
                        Cupos limitados
                    </span>
                </div>
             </FadeIn>
          </div>

          {/* --- COLUMNA IMAGEN (Derecha) - RECTIFICADA Y OPTIMIZADA --- */}
          <FadeIn direction="left" delay={0.2} className="relative min-h-[300px] lg:min-h-full order-1 lg:order-2 bg-[#F5EFE9] flex items-center justify-center p-8 lg:p-12 overflow-hidden">
             
             <div className="absolute w-[120%] h-[120%] bg-terracotta/5 rounded-full blur-3xl" />
             
             {/* Imagen RECTA (Sin rotación) y Responsive */}
             <div className="relative z-10 w-full max-w-[450px] aspect-square group">
                 <img 
                   src={COURSE_IMAGE} 
                   alt="Clase de Reiki"
                   className="w-full h-full object-cover rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                 />
                 
                 <div className="absolute -bottom-6 -right-4 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg border border-terracotta/20 max-w-[200px] transition-transform duration-500 group-hover:-translate-y-2">
                     <p className="font-serif text-lg text-terracotta italic leading-tight text-center">
                        "La energía no conoce distancias"
                     </p>
                 </div>
             </div>

          </FadeIn>

        </div>
      </div>
    </section>
  )
}