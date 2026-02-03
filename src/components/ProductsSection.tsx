import { useState } from "react"
import { Link } from "react-router-dom"
import { MessageCircle, ArrowRight, Eye } from "lucide-react"
import { WaveDivider } from "./WaveDivider"
import { topProducts, generalCatalog, type Product } from "../data/product"
import { ProductModal } from "./ProductModal"

const BOTTOM_WAVE = "M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,144C672,171,768,213,864,197.3C960,181,1056,107,1152,85.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
const WHATSAPP_NUMBER = "56912345678" 

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  }

  const allItems = [...topProducts, ...generalCatalog];
  const selectedIds = [2, 9, 4, 3]; 

  const homeProducts = selectedIds.map(id => 
    allItems.find(item => item.id === id)
  ).filter((item): item is Product => item !== undefined);

  return (
    // CORREGIDO: -mt-[2px] y z-10
    <section className="bg-terracotta pt-8 pb-16 md:pt-12 md:pb-24 px-6 md:px-12 relative text-cream -mt-[2px] z-10">
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20 px-4">
          <h2 className="text-cream mb-8 flex flex-wrap justify-center items-baseline gap-3 md:gap-4">
            <span className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide opacity-90">
              Medicina
            </span>
            <span className="font-cursive text-4xl md:text-5xl lg:text-6xl transform -rotate-2 relative top-1">
              Natural
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="font-sans text-lg md:text-xl text-cream/90 leading-relaxed font-light text-pretty drop-shadow-sm">
              En <span className="font-semibold">Yo Soy Vida</span> creemos que la verdadera medicina está en la naturaleza, 
              en la energía y en la perfección de la creación de Dios. 
              Cada producto que ofrecemos nace del respeto por la vida, la salud 
              y el equilibrio natural del cuerpo y del espíritu.
            </p>
            <div className="pt-4">
               <span className="inline-block border-t border-cream/30 w-12 mb-4"></span>
               <p className="font-serif italic text-xl md:text-2xl text-cream font-medium tracking-wide">
                 "Descubre la fuerza sanadora de la naturaleza"
               </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {homeProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => openModal(product)}
              className="group bg-white rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-white p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark-brown/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                   <div className="bg-white text-dark-brown px-3 py-1.5 rounded-full font-bold text-xs flex items-center gap-1 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                     <Eye className="w-3 h-3" /> Ver Detalle
                   </div>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-serif text-sm md:text-base text-dark-brown mb-1 line-clamp-2 min-h-[2.5em] group-hover:text-terracotta transition-colors">
                  {product.name}
                </h3>
                <p className="font-sans text-earthy-brown font-medium mb-4">{product.price}</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Me interesa el producto: ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} 
                  className="mt-auto inline-flex items-center gap-2 bg-[#25D366] text-white text-xs md:text-sm px-3 py-2.5 rounded-full hover:bg-[#128C7E] transition-colors duration-300 w-full justify-center shadow-sm hover:shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-3 bg-dark-brown text-cream border border-cream/20 font-sans uppercase tracking-widest text-sm md:text-base px-8 md:px-10 py-4 hover:bg-cream hover:text-dark-brown transition-all duration-300 rounded-full shadow-lg"
          >
            Ver Catálogo Completo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <WaveDivider path={BOTTOM_WAVE} className="text-[#E8DED5]" position="bottom" />

      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  )
}