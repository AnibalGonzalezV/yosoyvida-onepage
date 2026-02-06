import { Heart, Sparkles } from "lucide-react"
import { FadeIn } from "./ui/FadeIn"

const BIO_IMAGE = "/images/bio-transparent.webp";

// --- NUEVA PALETA DE COLORES BASADA EN LAS ROSAS ---
// Rojo Intenso (Acento Principal) para nombre, firma e iconos fuertes
const ROSE_RED = "text-[#C63D3D]";
const ROSE_RED_BG = "bg-[#C63D3D]";
const ROSE_RED_FILL = "fill-[#C63D3D]";

// Rosa Coral/Terracota Suave (Color Secundario) para detalles suaves y bordes
const ROSE_CORAL = "text-[#D08C8C]";
const ROSE_CORAL_BORDER = "border-[#D08C8C]";

export function AboutSection() {
  return (
    <section id="about" className="relative bg-cream pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden -mt-[2px] z-10">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- COLUMNA IMAGEN --- */}
          <FadeIn direction="right" className="w-full lg:w-1/2 relative flex justify-center">
            
            <div className="relative w-full max-w-[550px] lg:max-w-[600px] aspect-square group">
              
              {/* CAMBIO: Sombra difusa detrás ahora es de color ROJO INTENSO para dar calidez */}
              <div className={`absolute inset-4 ${ROSE_RED_BG}/20 rounded-full blur-3xl group-hover:${ROSE_RED_BG}/30 transition-colors duration-700`} />
              
              {/* Imagen Principal */}
              <img 
                src={BIO_IMAGE} 
                alt="Retrato Jesarela"
                className="w-full h-full object-contain relative z-10 transform transition-transform duration-700 hover:scale-105"
              />

              {/* Etiqueta Flotante */}
              <div className="absolute -bottom-4 right-0 left-0 mx-auto w-fit bg-white/95 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-xl z-20 border border-white/50">
                <div className="flex items-center justify-center gap-2 mb-1">
                  {/* CAMBIO: Icono en Rosa Coral */}
                  <Sparkles className={`w-4 h-4 md:w-5 md:h-5 ${ROSE_CORAL}`} />
                  <span className="text-xs md:text-sm font-bold text-dark-brown uppercase tracking-wider">Mi Propósito</span>
                </div>
                <p className="text-sm md:text-base text-earthy-brown font-serif leading-snug text-center">
                  Ayudarte a recordar tu propia luz.
                </p>
              </div>

            </div>
          </FadeIn>

          {/* --- COLUMNA TEXTO --- */}
          <div className="w-full lg:w-1/2 space-y-6">
            
            {/* Badge */}
            <FadeIn delay={0.2}>
                {/* CAMBIO: Borde en Rosa Coral y Corazón en Rojo Intenso */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white ${ROSE_CORAL_BORDER}/30 mb-2 shadow-sm`}>
                   <Heart className={`w-4 h-4 ${ROSE_RED} ${ROSE_RED_FILL}`} />
                   <span className="text-xs font-sans uppercase tracking-widest text-earthy-brown">Mi Historia</span>
                </div>
            </FadeIn>

            {/* Título Principal */}
            <FadeIn delay={0.3}>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-brown mb-6 leading-tight">
                   {/* CAMBIO: Nombre en Rojo Intenso */}
                   Hola!! Soy <span className={`italic ${ROSE_RED}`}>Jesarela</span>
                </h2>
            </FadeIn>

            {/* Cuerpo del Texto */}
            <div className="font-sans text-base md:text-lg text-dark-brown/80 space-y-4 leading-relaxed text-pretty">
              <FadeIn delay={0.4}>
                  <p>
                    Tras mucho dolor y una incansable búsqueda de Dios, pasé por diversas terapias y estudios que me permitieron confirmar mi <span className={`font-medium ${ROSE_RED}`}>verdadera fe</span>. 
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
                    Hoy comparto este camino de bienestar, porque he comprobado que el cambio empieza dentro: cuando uno está bien consigo mismo, todo el entorno florece y así, contribuimos a una <span className={`font-medium ${ROSE_RED}`}>sociedad más sana</span>.
                  </p>
              </FadeIn>

              <FadeIn delay={0.7}>
                  {/* CAMBIO: Borde lateral en Rosa Coral y nombre de marca en Rojo Intenso */}
                  <p className={`pt-2 border-l-4 ${ROSE_CORAL_BORDER}/50 pl-4 italic text-dark-brown/90`}>
                    Y así nace <strong className={`${ROSE_RED} font-serif not-italic text-xl`}>Yo Soy Vida</strong>, desde mi experiencia personal de pasar de estar condicionada por una enfermedad crónica sin cura, a ser una persona saludable y energética. Y todo eso gracias a Dios y su perfecta creación.
                  </p>
              </FadeIn>
            </div>

            {/* Firma */}
            <FadeIn delay={0.8}>
                <div className="mt-8 pt-6 border-t border-dark-brown/10 flex flex-col items-start gap-1">
                    <p className="font-sans text-sm tracking-widest text-dark-brown/60 uppercase">
                        Con amor y gratitud,
                    </p>
                    {/* CAMBIO: Firma en Rojo Intenso */}
                    <p className={`font-cursive text-4xl ${ROSE_RED} transform -rotate-2`}>
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