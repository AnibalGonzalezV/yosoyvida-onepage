import { MessageCircle } from "lucide-react"

// 1. Definimos la "Interface" para que el componente acepte los datos que le envía App.tsx
interface FloatingWhatsAppProps {
  phoneNumber: string;
  chatMessage?: string;
  // Estas dos props las envía App.tsx, las declaramos para evitar el error, 
  // aunque en esta versión "botón simple" no las usaremos visualmente.
  accountName?: string; 
  placeholder?: string;
}

export function FloatingWhatsApp({ 
  phoneNumber, 
  chatMessage = "Hola, vengo de tu página web y me gustaría más información." 
}: FloatingWhatsAppProps) {

  // 2. Usamos las props para crear el enlace dinámico
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(chatMessage)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // Mantenemos tus estilos originales
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 animate-bounce-slow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  )
}