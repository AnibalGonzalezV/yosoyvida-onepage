import { Heart, Sparkles } from "lucide-react"
import { FadeIn } from "./ui/FadeIn"

export function AboutSection() {
  return (
    <section id="about" className="relative bg-cream pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden -mt-[2px] z-10">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- COLUMNA IMAGEN (Se mantiene igual de bonita) --- */}
          <FadeIn direction="right" className="w-full lg:w-1/2 relative group">
            <div className="absolute top-4 -left-4 w-full h-full bg-terracotta/10 rounded-[4rem] rounded-tr-none transform -rotate-2 transition-transform duration-500 group-hover:rotate-0" />
            <div className="relative overflow-hidden rounded-[4rem] rounded-tr-none shadow-xl">
              <img 
                src="/images/bio-transparent2.webp" 
                alt="Retrato Jesarela"
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl max-w-[240px]">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-terracotta" />
                  <span className="text-sm font-bold text-dark-brown uppercase tracking-wider">Mi Propósito</span>
                </div>
                <p className="text-base text-earthy-brown font-serif leading-snug italic">
                  "Ayudarte a recordar tu propia luz."
                </p>
              </div>
            </div>
          </FadeIn>

          {/* --- COLUMNA TEXTO (Contenido Actualizado) --- */}
          <div className="w-full lg:w-1/2 space-y-6">
            
            {/* Badge */}
            <FadeIn delay={0.2}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-earthy-brown/10 mb-2 shadow-sm">
                   <Heart className="w-4 h-4 text-terracotta fill-terracotta" />
                   <span className="text-xs font-sans uppercase tracking-widest text-earthy-brown">Mi Historia</span>
                </div>
            </FadeIn>

            {/* Título Principal */}
            <FadeIn delay={0.3}>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-6 leading-tight">
                   Hola!! Soy <span className="italic text-terracotta">Jesarela</span>
                </h2>
            </FadeIn>

            {/* Cuerpo del Texto - Dividido para lectura fácil */}
            <div className="font-sans text-base md:text-lg text-dark-brown/80 space-y-4 leading-relaxed text-pretty">
              <FadeIn delay={0.4}>
                  <p>
                    Tras mucho dolor y una incansable búsqueda de Dios, pasé por diversas terapias y estudios que me permitieron confirmar mi <span className="font-medium text-terracotta">verdadera fe</span>. 
                    Viví un momento de quiebre que se convirtió en mi mayor regalo: una paz profunda que me enseñó a ver la vida con otros ojos.
                  </p>
              </FadeIn>
              
              <FadeIn delay={0.5}>
                  <p>
                    Aprendí que la vida no deja de presentarnos retos, pero el secreto está en transitarlos desde la <span className="italic font-serif text-dark-brown">calma y la fe</span>. 
                    No es que los problemas se acaben, es que ahora sabemos cómo enfrentarlos.
                  </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                  <p>
                    Hoy comparto este camino de bienestar, porque he comprobado que el cambio empieza dentro: cuando uno está bien consigo mismo, todo el entorno florece y así, contribuimos a una <span className="font-medium text-dark-brown">sociedad más sana</span>.
                  </p>
              </FadeIn>

              <FadeIn delay={0.7}>
                  <p className="pt-2 border-l-4 border-terracotta/30 pl-4 italic text-dark-brown/90">
                    Y así nace <strong className="text-terracotta font-serif not-italic text-xl">Yo Soy Vida</strong>, desde mi experiencia personal de pasar de estar condicionada por una enfermedad crónica sin cura, a ser una persona saludable y energética.
                  </p>
              </FadeIn>
            </div>

            {/* Firma */}
            <FadeIn delay={0.8}>
                <div className="mt-8 pt-6 border-t border-dark-brown/10 flex flex-col items-start gap-1">
                    <p className="font-sans text-sm tracking-widest text-dark-brown/60 uppercase">
                        Con amor y gratitud,
                    </p>
                    <p className="font-cursive text-4xl text-terracotta transform -rotate-2">
                        Jesarela
                    </p>
                </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}