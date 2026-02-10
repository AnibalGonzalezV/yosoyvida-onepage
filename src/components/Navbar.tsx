import { useState, useEffect, useMemo } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, CalendarCheck } from "lucide-react" // Importamos icono
import { SITE_CONFIG } from "../config/site"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const location = useLocation()

  // --- 1. Transformar datos de SITE_CONFIG ---
  const navItems = useMemo(() => {
    return SITE_CONFIG.nav.map(item => {
      let id = "home";
      if (item.href === "/") id = "home";
      else if (item.href.startsWith("/#")) id = item.href.replace("/#", "");
      else if (item.href.startsWith("/")) id = item.href.replace("/", "");
      
      return { ...item, id };
    });
  }, []);

  // --- LÓGICA SCROLL CRUZADO ---
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.pathname === '/' && !location.hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]); 

  // --- 2. Lógica de Scroll Spy ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      if (location.pathname === "/") {
        const sections = navItems
            .filter(item => item.href.startsWith("/#"))
            .map(item => item.id);

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
  }, [location.pathname, navItems])

  // --- 3. Detectar página activa ---
  useEffect(() => {
      const currentPathId = location.pathname.replace("/", "");
      if (currentPathId && currentPathId !== "") {
          setActiveSection(currentPathId);
      }
  }, [location.pathname])

  // --- 4. Manejo de Clics ---
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname === "/" && href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } 
    else if (location.pathname === "/" && href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Si es /agenda, forzamos scroll top por si acaso (aunque ScrollToTop lo hace)
    else if (href === "/agenda") {
        window.scrollTo(0,0);
    }
  };

  const logoClasses = "h-12 md:h-20 w-auto object-contain transition-all duration-500";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-cream/90 backdrop-blur-md border-dark-brown/5 shadow-sm py-2" 
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between transition-all duration-500">
          
          <Link 
            to="/" 
            onClick={() => handleNavClick("/")} 
            className="relative z-50 cursor-pointer block grid items-center justify-items-start"
          >
            <img
                src="/images/logo-blanco.png" 
                alt={`${SITE_CONFIG.name} Logo Claro`}
                className={`${logoClasses} absolute top-0 left-0 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
            />

            <img
                src="/images/logo-verde.png"
                alt={`${SITE_CONFIG.name} Logo Original`}
                className={`${logoClasses} relative ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((link) => {
              const isActive = activeSection === link.id;
              
              // 👇 LÓGICA ESPECIAL: Si es el botón de Agenda, lo estilizamos diferente
              const isAgenda = link.href === "/agenda";

              if (isAgenda) {
                  return (
                    <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className={`
                            px-5 py-2 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-sm flex items-center gap-2
                            ${isScrolled 
                                ? "bg-terracotta text-cream hover:bg-dark-brown hover:shadow-md" 
                                : "bg-cream text-terracotta hover:bg-white hover:text-dark-brown"
                            }
                        `}
                    >
                        <CalendarCheck className="w-4 h-4" />
                        {link.name}
                    </Link>
                  )
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative font-sans text-sm uppercase tracking-widest transition-colors duration-300 py-2 group ${
                    isActive 
                      ? "text-terracotta font-bold"
                      : isScrolled ? "text-dark-brown hover:text-earthy-brown" : "text-cream hover:text-white font-medium drop-shadow-sm"
                  }`}
                >
                  {link.name}
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
            className={`p-2 transition-colors duration-300 md:hidden ${
              isScrolled || isMobileMenuOpen ? "text-dark-brown" : "text-cream drop-shadow-sm"
            }`}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 flex h-screen w-full flex-col items-center gap-8 bg-cream/95 pt-28 px-6 backdrop-blur-xl animate-fade-in md:hidden">
          {navItems.map((link) => {
              const isAgenda = link.href === "/agenda";
              return (
                <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`font-sans text-xl uppercase tracking-widest transition-colors ${
                        // Si es agenda, lo ponemos más grande y terracota en móvil también
                        isAgenda 
                            ? "bg-terracotta text-cream px-8 py-3 rounded-full font-bold shadow-lg" 
                            : activeSection === link.id ? "text-terracotta font-bold" : "text-dark-brown"
                    }`}
                >
                    {link.name}
                </Link>
              )
          })}
        </div>
      )}
    </nav>
  )
}