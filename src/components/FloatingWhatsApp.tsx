import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  // Reemplaza con tu número real
  const PHONE_NUMBER = "56940616469" 
  const MESSAGE = "Hola, vengo de tu página web y me gustaría más información."

  return (
    <a
      href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 animate-bounce-slow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  )
}