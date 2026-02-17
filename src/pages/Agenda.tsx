import { FadeIn } from "../components/ui/FadeIn"
import { WaveDivider } from "../components/WaveDivider"
import { FooterSection } from "../components/FooterSection"
import { Clock, MapPin, Info, MousePointerClick } from "lucide-react"

// 👇 TU LINK DE CALENDLY
const CALENDLY_URL = "https://calendly.com/jesarelareiki/sesion-terapeutica-integral"; 

const HERO_WAVE = "M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,144C672,171,768,213,864,197.3C960,181,1056,107,1152,85.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

export default function AgendaPage() {
  // Optimizaciones de URL para móvil: ocultamos detalles redundantes para ganar espacio
  const cleanUrl = `${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&text_color=4A3B32&primary_color=D08C8C`;

  return (
    <main className="min-h-screen bg-cream animate-fade-in">

      {/* --- HERO HEADER --- */}
      {/* Ajuste: h-[35vh] está bien, pero en móviles apaisados puede quedar corto. min-h-[300px] protege bien. */}
      <section className="relative w-full h-[35vh] min-h-[300px] flex items-center justify-center bg-terracotta">
        <div className="absolute inset-0 bg-[url('/images/hero-lifestyle2.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/60 to-terracotta/90" />
        
        <div className="relative z-10 text-center px-6 mt-8">
            <FadeIn direction="up">
                <span className="block font-sans uppercase tracking-[0.2em] text-cream/80 text-xs md:text-sm mb-3">
                    Tu espacio sagrado
                </span>
                <h1 className="font-serif text-3xl md:text-5xl text-cream drop-shadow-md mb-2">
                    Agenda tu Sesión
                </h1>
            </FadeIn>
        </div>
        
        <div className="absolute bottom-0 w-full text-cream">
            <WaveDivider path={HERO_WAVE} className="text-cream" />
        </div>
      </section>

      {/* --- INFO & CALENDARIO --- */}
      <section className="relative px-4 md:px-12 py-8 md:py-16 -mt-[2px] bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
            
            {/* LADO IZQUIERDO: INFORMACIÓN */}
            <FadeIn delay={0.2} className="space-y-6">
                {/* 🔥 CORRECCIÓN CLAVE: 
                   Cambié 'sticky top-24' por 'lg:sticky lg:top-24'.
                   En móvil (sin lg) será 'static', evitando que se coma la pantalla al hacer scroll.
                */}
                <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-dark-brown/5 lg:sticky lg:top-24">
                    <h3 className="font-serif text-2xl text-dark-brown mb-6 border-b border-terracotta/20 pb-4">
                        Detalles de la Cita
                    </h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-terracotta/10 rounded-full text-terracotta shrink-0">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-bold text-dark-brown text-sm uppercase tracking-wide">Duración</p>
                                <p className="text-dark-brown/70 text-sm mt-1 font-medium">
                                    2 Horas de dedicación exclusiva.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-terracotta/10 rounded-full text-terracotta shrink-0">
                                <MousePointerClick className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-bold text-dark-brown text-sm uppercase tracking-wide">¿Online o Presencial?</p>
                                <p className="text-dark-brown/70 text-sm mt-1">
                                    Podrás seleccionar tu preferencia (Zoom o Consulta Presencial) <strong>después de elegir la hora</strong> en el calendario.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-terracotta/10 rounded-full text-terracotta shrink-0">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-bold text-dark-brown text-sm uppercase tracking-wide">Ubicación</p>
                                <div className="mt-1 text-dark-brown/70 text-sm space-y-1">
                                    <p>• <strong>Online:</strong> Recibirás el link automáticamente.</p>
                                    <p>• <strong>Presencial:</strong> La dirección exacta llegará a tu correo.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-terracotta/5 rounded-xl border border-terracotta/10 flex gap-3">
                            <Info className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                            <p className="text-xs text-dark-brown/80 leading-relaxed">
                                Horarios: Lun-Vie (18:00-20:00) y Sábados (10:00-19:00).
                            </p>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* LADO DERECHO: IFRAME CALENDLY */}
            {/* 🔥 CORRECCIÓN CLAVE 2: 
                min-h-[650px] en móvil y min-h-[750px] en md. 
                Esto evita que en pantallas de celular pequeñas el bloque sea excesivamente largo sin necesidad.
            */}
            <FadeIn delay={0.3} className="w-full min-h-[650px] md:min-h-[750px]">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full border border-gray-100 relative">
                    <iframe 
                      src={cleanUrl} 
                      // 'scrolling="yes"' permite que si el calendario es más largo que el contenedor, se pueda bajar dentro de él.
                      className="w-full h-full border-none"
                      style={{ minHeight: "650px" }} 
                      title="Agendar Sesión con Yo Soy Vida"
                    ></iframe>
                </div>
            </FadeIn>

        </div>
      </section>

      <FooterSection topWaveColor="text-cream" />
    </main>
  )
}