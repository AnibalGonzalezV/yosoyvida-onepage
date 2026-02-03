import { Sparkles } from "lucide-react"

export function BioSection() {
  return (
    // CORREGIDO: Separamos "lg:px-24" de "-mt-[2px]"
    <section id="bio" className="bg-cream py-8 md:py-12 lg:py-16 px-6 md:px-12 lg:px-24 -mt-[2px] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-lg aspect-[3/4]">
              <img
                src="/images/reiki-transparent.webp" 
                alt="Retrato de la coach"
                className="w-full h-full object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-500 relative z-10" 
              />
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="relative">
                <Sparkles className="absolute -top-6 -left-2 w-6 h-6 text-terracotta/40 animate-pulse" />
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-dark-brown leading-[1.1] text-balance">
                  El arte de sanar desde la <span className="italic text-terracotta font-light">raíz.</span>
                </h2>
            </div>
            
            <div className="text-dark-brown/80 font-sans text-lg md:text-xl leading-relaxed space-y-6">
                <p>
                  <span className="font-bold text-terracotta">Yo Soy Vida</span> es el puente entre la sabiduría de la naturaleza y tu poder interior. 
                  Aquí honramos tu cuerpo físico, abrazamos tus emociones y elevamos tu espíritu.
                </p>

                <div className="border-l-4 border-terracotta/60 pl-6 py-2 font-sans text-dark-brown font-medium text-lg md:text-xl leading-relaxed">
                  "Te invitamos a un viaje donde la ciencia y la conciencia se dan la mano para sanar desde la raíz."
                </div>

                <p>
                  No venimos a curarte, venimos a recordarte cómo despertar tu propia medicina.
                </p>

                <p className="font-cursive text-3xl text-earthy-brown pt-2 transform -rotate-1 origin-left">
                  Restaura tu armonía. Recupera tu equilibrio natural.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}