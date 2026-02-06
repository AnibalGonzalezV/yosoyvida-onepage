import { useState, useMemo } from "react"
import { Star, Eye, Sparkles, BookOpen } from "lucide-react"
import { FooterSection } from "../components/FooterSection"
import { WaveDivider } from "../components/WaveDivider"
import { ProductModal } from "../components/ProductModal" 
import { topProducts, generalCatalog, type Product } from "../data/product"
import { FadeIn } from "../components/ui/FadeIn"

// 👇 RUTA DEL LOGO (Confirma que este sea el nombre exacto de tu archivo en public/images/)
const BRAND_LOGO = "/images/cropped-Logo.png";

const HERO_WAVE = "M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,144C672,171,768,213,864,197.3C960,181,1056,107,1152,85.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
const MID_WAVE = "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,208C672,192,768,128,864,122.7C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

interface CardProps {
  product: Product;
  onOpen: (p: Product) => void;
}

function ProductCard({ product, onOpen }: CardProps) {
  const isBook = product.type === 'book';
  
  return (
    <div 
      onClick={() => onOpen(product)}
      className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full border border-black/5 cursor-pointer relative"
    >
      {/* Imagen */}
      <div className={`relative overflow-hidden bg-gray-50 ${isBook ? "aspect-[3/4]" : "aspect-square"}`}>
        
        {/* --- LOGO DE MARCA (Sin caja, más grande) --- */}
        {!isBook && (
             <div className="absolute top-2 left-2 z-20 pointer-events-none">
                <img 
                  src={BRAND_LOGO} 
                  alt="Pro Natural" 
                  // w-20 h-20 es más grande. drop-shadow-md le da el toque flotante.
                  className="w-20 h-20 object-contain drop-shadow-md opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
             </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Badges */}
        {product.bestseller && (
          <div className="absolute top-3 right-3 bg-terracotta text-cream text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md z-10 animate-fade-in">
            <Star className="w-3 h-3 fill-current" />
            <span>TOP</span>
          </div>
        )}
        {isBook && (
           <div className="absolute top-3 right-3 bg-white/90 text-dark-brown text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm z-10 animate-fade-in">
             <BookOpen className="w-3 h-3" />
             <span>LIBRO</span>
           </div>
        )}
        
        {/* Overlay "Ver Detalle" */}
        <div className="absolute inset-0 bg-dark-brown/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
           <div className="bg-white text-dark-brown px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
             <Eye className="w-4 h-4" /> Ver Detalle
           </div>
        </div>
      </div>
      
      {/* Info Resumida */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-lg text-dark-brown mb-1 line-clamp-1 group-hover:text-terracotta transition-colors">
          {product.name}
        </h3>
        {isBook && <p className="text-xs text-dark-brown/50 uppercase mb-1">{product.author}</p>}
        
        <p className="font-sans text-sm text-dark-brown/60 mb-4 line-clamp-2 leading-relaxed">
            {product.shortDescription}
        </p>
        
        <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-3">
            <p className="font-sans text-earthy-brown font-bold text-lg">
                {product.price}
            </p>
            <span className="text-xs font-bold text-terracotta uppercase tracking-wider group-hover:underline">
                + Info
            </span>
        </div>
      </div>
    </div>
  )
}

export default function CatalogoPage() {
  const [filter, setFilter] = useState<'all' | 'product' | 'book'>('all');
  const [visibleCount, setVisibleCount] = useState(8); 
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (filter === 'all') return generalCatalog;
    return generalCatalog.filter(item => item.type === filter);
  }, [filter]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleItems.length < filteredItems.length;

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300); 
  }
  const handleFilterChange = (newFilter: 'all' | 'product' | 'book') => {
      setFilter(newFilter);
      setVisibleCount(8); 
  };

  return (
    <main className="min-h-screen bg-cream">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
             <img 
               src="/images/hero-lifestyle2.jpg" 
               alt="Productos Naturales"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-dark-brown/40 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <FadeIn direction="up" delay={0.2}>
                <span className="block font-sans uppercase tracking-[0.2em] text-cream/80 text-sm mb-4">
                Bienestar & Armonía
                </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream mb-6 drop-shadow-lg">
                Catálogo Integral
                </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
                <p className="font-sans text-lg md:text-xl text-cream/90 max-w-2xl mx-auto leading-relaxed">
                Una cuidadosa selección de elementos naturales y sabiduría escrita para acompañar tu proceso.
                </p>
            </FadeIn>
        </div>
        <WaveDivider path={HERO_WAVE} className="text-[#E8DED5]" />
      </section>

      {/* TOP 5 FAVORITOS */}
      <section className="bg-[#E8DED5] py-16 md:py-24 px-6 md:px-12 relative -mt-[2px] z-10">
        <div className="max-w-7xl mx-auto">
          
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-12">
                <div className="p-3 bg-terracotta/20 rounded-full">
                    <Star className="w-8 h-8 text-terracotta fill-terracotta" />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="font-serif text-3xl md:text-4xl text-dark-brown">Los Favoritos</h2>
                    <p className="text-dark-brown/70 text-sm">Lo más buscado para tu botiquín natural</p>
                </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {topProducts.map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.1} className="h-full">
                  <ProductCard product={product} onOpen={openModal} />
              </FadeIn>
            ))}
          </div>
        </div>
        <WaveDivider path={MID_WAVE} className="text-cream" />
      </section>

      {/* CATÁLOGO GENERAL */}
      <section className="bg-cream py-16 md:py-24 px-6 md:px-12 -mt-[2px] z-10 relative">
        <div className="max-w-7xl mx-auto">
          
          <FadeIn>
              <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                <h2 className="font-serif text-2xl md:text-3xl text-dark-brown pl-4 border-l-4 border-earthy-brown">
                    Explora la Colección
                </h2>

                <div className="flex flex-wrap gap-2 justify-center">
                    {[
                        { key: 'all', label: 'Ver Todo' },
                        { key: 'product', label: 'Bienestar' },
                        { key: 'book', label: 'Libros' }
                    ].map((btn) => (
                        <button
                            key={btn.key}
                            onClick={() => handleFilterChange(btn.key as any)}
                            className={`px-5 py-2 rounded-full text-sm font-sans uppercase tracking-wider transition-all duration-300 ${
                                filter === btn.key 
                                ? "bg-terracotta text-cream shadow-md transform scale-105 font-bold" 
                                : "bg-white text-dark-brown border border-dark-brown/10 hover:border-terracotta"
                            }`}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
              </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {visibleItems.map((product, index) => (
              <FadeIn key={product.id} delay={index % 4 * 0.1} className="h-full">
                 <ProductCard product={product} onOpen={openModal} />
              </FadeIn>
            ))}
          </div>

          {hasMore && (
            <FadeIn delay={0.2} className="flex justify-center pt-8">
                  <button 
                    onClick={() => setVisibleCount(prev => prev + 8)}
                    className="group flex flex-col items-center gap-2 text-dark-brown hover:text-terracotta transition-colors duration-300"
                  >
                      <span className="font-sans text-sm uppercase tracking-widest font-bold">Ver más</span>
                      <div className="p-3 rounded-full bg-white border border-dark-brown/10 shadow-sm group-hover:shadow-md group-hover:border-terracotta transition-all animate-bounce-slow">
                        <Sparkles className="w-5 h-5" />
                      </div>
                  </button>
            </FadeIn>
          )}

           {!hasMore && visibleItems.length > 0 && (
               <FadeIn delay={0.2}>
                   <p className="text-center text-dark-brown/40 text-sm mt-8 font-cursive">
                       Fin de la colección ✨
                   </p>
               </FadeIn>
           )}
        </div>
      </section>

      <FooterSection topWaveColor="text-cream" />

      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </main>
  )
}