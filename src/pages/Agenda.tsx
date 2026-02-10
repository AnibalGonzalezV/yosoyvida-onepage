import { FadeIn } from "../components/ui/FadeIn"
import { WaveDivider } from "../components/WaveDivider"
import { FooterSection } from "../components/FooterSection"
import { Calendar, Clock, MapPin } from "lucide-react"

const HERO_WAVE = "M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,144C672,171,768,213,864,197.3C960,181,1056,107,1152,85.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

export default function AgendaPage() {
  return (
    <main className="min-h-screen bg-cream animate-fade-in">

      {/* --- HERO HEADER --- */}
      <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center bg-terracotta">
        <div className="absolute inset-0 bg-[url('/images/hero-lifestyle2.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/60 to-terracotta/90" />
        
        <div className="relative z-10 text-center px-6">
            <FadeIn direction="up">
                <span className="block font-sans uppercase tracking-[0.2em] text-cream/80 text-sm mb-4">
                    Tu momento es ahora
                </span>
                <h1 className="font-serif text-4xl md:text-6xl text-cream drop-shadow-md mb-2">
                    Agenda tu Sesión
                </h1>
                <p className="font-sans text-cream/90 text-lg max-w-xl mx-auto">
                    Selecciona el horario que mejor fluya contigo.
                </p>
            </FadeIn>
        </div>
        
        <div className="absolute bottom-0 w-full text-cream">
            <WaveDivider path={HERO_WAVE} className="text-cream" />
        </div>
      </section>

      {/* --- INFO & CALENDARIO --- */}
      <section className="relative px-6 md:px-12 py-12 md:py-20 -mt-[2px] bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
            
            {/* LADO IZQUIERDO: INFORMACIÓN */}
            <FadeIn delay={0.2} className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-dark-brown/5">
                    <h3 className="font-serif text-2xl text-dark-brown mb-6 border-b border-terracotta/20 pb-4">
                        Horarios de Atención
                    </h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-terracotta/10 rounded-full text-terracotta">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-dark-brown">Lunes a Viernes</p>
                                <p className="text-dark-brown/70">18:00 hrs — 20:00 hrs</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-terracotta/10 rounded-full text-terracotta">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-dark-brown">Sábados</p>
                                <p className="text-dark-brown/70">10:00 hrs — 19:00 hrs</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-terracotta/10 rounded-full text-terracotta">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-dark-brown">Modalidad</p>
                                <p className="text-dark-brown/70">Online o Presencial</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-[#607D68]/10 rounded-xl border border-[#607D68]/20">
                        <p className="text-sm text-dark-brown/80 italic text-center">
                            "Regálate el tiempo para sanar y reconectar con tu esencia."
                        </p>
                    </div>
                </div>
            </FadeIn>

            {/* LADO DERECHO: WIDGET DE CALENDARIO */}
            <FadeIn delay={0.3} className="w-full">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px] border border-gray-100 relative">
                    
                    {/* AQUÍ VA EL EMBED DE CALENDLY O CAL.COM */}
                    {/* INSTRUCCIÓN:
                        1. Crea tu cuenta gratis en Cal.com o Calendly.
                        2. Configura tus horarios.
                        3. Ve a "Compartir" -> "Incrustar" (Embed).
                        4. Copia el código iframe y pégalo aquí abajo.
                    */}
                    
                    <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400 p-10 text-center">
                        {/* 👇 REEMPLAZA ESTE DIV POR EL IFRAME DE CALENDLY/CAL.COM */}
                        <div className="space-y-4">
                            <p>Aquí cargará el calendario de reservas.</p>
                            <p className="text-xs">
                                (Debes pegar el código iframe de Cal.com o Calendly aquí en el código)
                            </p>
                        </div>
                    </div>

                </div>
            </FadeIn>

        </div>
      </section>

      <FooterSection topWaveColor="text-cream" />
    </main>
  )
}