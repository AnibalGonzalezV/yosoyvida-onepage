import { X, MessageCircle, Package, CheckCircle } from "lucide-react";
import type { Product } from "../data/product";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = "56912345678";

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen || !product) return null;

  const paragraphs = product.description.split('\n');

  return (
    // Z-INDEX ALTO (z-[60]) para estar sobre el Navbar
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in">
      
      {/* Fondo Oscuro Backdrop */}
      <div 
        className="absolute inset-0 bg-dark-brown/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* CONTENEDOR PRINCIPAL:
         - w-[95%]: En móvil ocupa casi todo el ancho.
         - max-h-[85vh]: Deja espacio arriba y abajo para que no se corte.
         - flex-col: En móvil es columna (Foto arriba, Texto abajo).
         - md:flex-row: En escritorio es fila (Foto izq, Texto der).
      */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[95%] md:w-full max-w-3xl max-h-[85vh] md:max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-scale-up">
        
        {/* Botón Cerrar (Flotante) */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-gray-100 transition-colors shadow-md border border-gray-100"
        >
          <X className="w-5 h-5 text-dark-brown" />
        </button>

        {/* COLUMNA IMAGEN:
           - h-48: En móvil altura fija pequeña (aprox 200px) para dejar espacio al texto.
           - md:h-auto: En escritorio altura automática.
           - shrink-0: Evita que se aplaste.
        */}
        <div className="w-full md:w-2/5 h-52 md:h-auto bg-[#F9F4EF] flex items-center justify-center p-6 shrink-0 relative">
           <img 
             src={product.image} 
             alt={product.name} 
             className="w-full h-full object-contain drop-shadow-xl"
           />
        </div>

        {/* COLUMNA INFO (Scrollable):
           - overflow-y-auto: Solo esta parte hace scroll si el texto es largo.
        */}
        <div className="w-full md:w-3/5 p-5 md:p-8 flex flex-col overflow-y-auto">
           
           {/* Header del Producto */}
           <div className="border-b border-gray-100 pb-3 mb-4">
             <span className="text-terracotta text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 block">
               {product.type === 'book' ? 'Libro Recomendado' : 'Producto Natural'}
             </span>
             <h2 className="font-serif text-2xl md:text-3xl text-dark-brown mb-1 leading-tight">
               {product.name}
             </h2>
             <span className="text-lg md:text-xl font-bold text-earthy-brown">{product.price}</span>
           </div>
           
           {/* INFO TÉCNICA */}
           {product.technicalInfo && (
             <div className="bg-earthy-brown/5 p-3 rounded-lg mb-5 flex gap-3 items-start border border-earthy-brown/10">
                <Package className="w-4 h-4 text-earthy-brown flex-shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-dark-brown font-medium uppercase tracking-wide leading-relaxed">
                  {product.technicalInfo}
                </p>
             </div>
           )}

           {/* DESCRIPCIÓN */}
           <div className="space-y-3 mb-6 text-dark-brown/80 font-sans text-sm leading-relaxed">
             {paragraphs.map((line, index) => (
               line.trim() === "" ? <br key={index}/> : 
               <div key={index} className="flex gap-2 items-start">
                 {line.includes(':') && <CheckCircle className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />}
                 <p className={line.includes('En resumen') ? "font-bold text-dark-brown italic bg-cream/50 p-2 rounded-md w-full border-l-2 border-terracotta" : ""}>
                    {line}
                 </p>
               </div>
             ))}
           </div>

           {/* FORMATOS */}
           {product.formats && product.formats.length > 0 && (
             <div className="mb-6">
               <h4 className="font-serif text-dark-brown text-sm mb-2 border-l-4 border-terracotta pl-2">
                 Opciones Disponibles
               </h4>
               <div className="grid gap-2">
                 {product.formats.map((fmt, idx) => (
                   <div key={idx} className="flex justify-between items-center bg-gray-50 p-2 px-3 rounded-lg border border-gray-100">
                     <span className="text-xs md:text-sm font-medium text-dark-brown">{fmt.name}</span>
                     <span className="text-xs md:text-sm font-bold text-earthy-brown">{fmt.price}</span>
                   </div>
                 ))}
               </div>
             </div>
           )}

           {/* ESPACIO VACÍO PARA QUE EL TEXTO NO QUEDE TAPADO POR EL BOTÓN FLOTANTE */}
           <div className="h-16 md:h-0"></div>

           {/* BOTÓN FLOTANTE (Sticky Bottom) */}
           {/* En móvil se pega abajo para estar siempre accesible */}
           <div className="md:relative fixed bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-auto p-4 md:p-0 bg-white md:bg-transparent border-t md:border-t-0 border-gray-100 md:mt-auto shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:shadow-none z-10">
             <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Me interesa: ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium py-3 rounded-xl hover:bg-[#128C7E] transition-colors w-full shadow-lg active:scale-95"
             >
                <MessageCircle className="w-5 h-5" />
                <span>Pedir por WhatsApp</span>
             </a>
           </div>

        </div>
      </div>
    </div>
  )
}