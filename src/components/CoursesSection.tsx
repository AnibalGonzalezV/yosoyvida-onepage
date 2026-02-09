import { Sparkles, Clock, Globe, BookOpen, Award } from "lucide-react"
import { FadeIn } from "./ui/FadeIn"

const COURSE_IMAGE = "/images/reiki-curso-square.webp"; 

export function CoursesSection() {
  return (
    <section id="cursos" className="bg-[#E8DED5] py-16 md:py-24 px-6 md:px-12 -mt-[2px] relative z-10">
      <div className="max-w-7xl mx-auto"> 
        
        {/* CAMBIO 1: bg-cream para todo, sin división de colores */}
        <div className="bg-cream rounded-3xl overflow-hidden shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 md:p-10 lg:p-12">
            
            {/* --- COLUMNA IMAGEN (Ahora integrada y más grande) --- */}
            {/* Ocupa 5 de 12 columnas en escritorio */}
            <FadeIn direction="right" className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center">
                
                {/* Decoración sutil detrás de la imagen (Brillo) */}
                <div className="absolute inset-0 bg-terracotta/10 blur-3xl rounded-full transform scale-90" />
                
                {/* Imagen Completa - Sin recortes, flotando limpia */}
                <img 
                  src={COURSE_IMAGE} 
                  alt="Clase de Reiki"
                  className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                />
            </FadeIn>

            {/* --- COLUMNA TEXTO --- */}
            {/* Ocupa 7 de 12 columnas en escritorio */}
            <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center">
              
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
                      Curso de Reiki Usui <br/>
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
                  {/* Tarjeta de detalles integrada con borde sutil */}
                  <div className="bg-white/60 rounded-2xl p-6 mb-8 border border-dark-brown/5 shadow-sm">
                      <h3 className="font-bold text-dark-brown text-sm uppercase tracking-widest mb-4 border-b border-dark-brown/10 pb-2">
                          Detalles del Curso
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
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
                  <div className="flex flex-col sm:flex-row gap-5 items-center">
                      <a
                      href="https://wa.me/56940616469?text=Hola! Me interesa inscribirme en el Curso de Reiki Usui"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center bg-terracotta text-cream font-sans uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-dark-brown transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                      >
                      ¡Quiero Iniciar el Viaje!
                      </a>
                      <span className="text-sm text-dark-brown/60 italic border-l-2 border-terracotta/30 pl-3">
                          Cupos disponibles
                      </span>
                  </div>
               </FadeIn>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}