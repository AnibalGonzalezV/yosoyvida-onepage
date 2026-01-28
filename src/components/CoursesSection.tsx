import { Sparkles } from "lucide-react"


export function CoursesSection() {
  return (
    // Quitamos 'relative' ya que no hay ola absoluta aquí
    <section id="cursos" className="bg-[#E8DED5] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto"> 
        <div className="bg-cream rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
          
          {/* Columna Izquierda: Texto */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-terracotta" />
              <span className="font-sans uppercase tracking-widest text-sm text-terracotta">Próximamente</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-brown mb-6">
              Cursos de Iniciación a Reiki
            </h2>
            <p className="font-sans text-lg text-dark-brown/80 leading-relaxed mb-8">
              Descubre el poder sanador de tus manos. Aprende las técnicas ancestrales del Reiki 
              en un ambiente cálido y de apoyo, guiado por instructores certificados.
            </p>

             <a
              href="https://wa.me/56912345678?text=Hola! Me interesa información sobre los cursos de Reiki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-terracotta text-cream font-sans uppercase tracking-widest text-sm px-8 py-4 hover:bg-dark-brown transition-colors duration-300 w-fit"
            >
              Solicitar Información
            </a>
          </div>

          {/* Columna Derecha: FOTO 2 (Reiki) */}
          <div className="relative bg-terracotta/40 min-h-[300px] lg:min-h-full flex items-center justify-center p-8">
             <img 
               src="/images/reiki-transparent.webp" 
               alt="Curso de Reiki"
               className="w-full h-auto object-contain drop-shadow-lg transform hover:scale-105 transition duration-700"
             />
          </div>

        </div>
      </div>
    </section>
  )
}