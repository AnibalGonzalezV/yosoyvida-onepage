import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home", id: "home" },
  { href: "/#about", label: "Sobre Mí", id: "about" },
  { href: "/#terapias", label: "Terapias", id: "terapias" },
  { href: "/#cursos", label: "Cursos", id: "cursos" },
  { href: "/catalogo", label: "Catálogo", id: "catalogo" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      // Cambiamos el estado si bajamos más de 20px
      setIsScrolled(window.scrollY > 20)

      if (location.pathname === "/") {
        const sections = navLinks.map(link => link.id).filter(id => id !== "home" && id !== "catalogo")
        let current = "home"
        
        if (window.scrollY < 100) {
            current = "home"
        } else {
            for (const section of sections) {
              const element = document.getElementById(section)
              if (element) {
                const rect = element.getBoundingClientRect()
                if (rect.top <= window.innerHeight / 3 && rect.bottom >= 0) {
                  current = section
                  break 
                }
              }
            }
        }
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

  useEffect(() => {
      if (location.pathname === '/catalogo') {
          setActiveSection('catalogo')
      } else if (location.pathname === '/' && window.scrollY < 100) {
          setActiveSection('home')
      }
  }, [location.pathname])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    else if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Clases comunes para ambas imágenes del logo para que tengan el mismo tamaño y posición
  const logoClasses = "h-12 md:h-20 w-auto object-contain transition-all duration-500";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-cream/90 backdrop-blur-md border-dark-brown/5 shadow-sm py-2" // Un poco más compacto al bajar
          : "bg-transparent border-transparent py-4" // Más espacioso arriba
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between transition-all duration-500">
          
          {/* --- AQUÍ ESTÁ EL CAMBIO DEL LOGO --- */}
          <Link 
            to="/" 
            onClick={() => handleNavClick("/")} 
            // Usamos 'grid' para apilar las imágenes una sobre otra
            className="relative z-50 cursor-pointer block grid items-center justify-items-start"
          >
            {/* LOGO 1: Versión Clara (Crema/Blanca) para cuando está arriba */}
            {/* NOTA: Debes subir tu versión clara de la imagen */}
            <img
                src="/images/logo-blanco.png" 
                alt="Yo Soy Vida Logo Claro"
                // Se muestra solo si NO está scrolleado. Se posiciona absoluto para no ocupar doble espacio.
                className={`${logoClasses} absolute top-0 left-0 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
            />

            {/* LOGO 2: Versión Original (Verde/Oscura) para cuando baja */}
            <img
                src="/images/logo-verde.png"
                alt="Yo Soy Vida Logo Original"
                // Se muestra solo SI está scrolleado. Esta imagen define el tamaño del contenedor.
                className={`${logoClasses} relative ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
            />
          </Link>
          {/* ------------------------------------ */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  // Ajustamos los colores del texto según el scroll también
                  className={`relative font-sans text-sm uppercase tracking-widest transition-colors duration-300 py-2 group ${
                    isActive 
                      ? "text-terracotta font-bold"
                      : isScrolled ? "text-dark-brown hover:text-earthy-brown" : "text-cream hover:text-white font-medium drop-shadow-sm"
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-terracotta transform origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                  }`} />
                </Link>
              )
            })}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              // El botón de menú también cambia de color
              isScrolled || isMobileMenuOpen ? "text-dark-brown" : "text-cream drop-shadow-sm"
            }`}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Sin cambios) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-cream/95 backdrop-blur-xl pt-28 px-6 flex flex-col items-center gap-8 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`font-sans text-xl uppercase tracking-widest transition-colors ${
                  activeSection === link.id ? "text-terracotta font-bold" : "text-dark-brown"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}