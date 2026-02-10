import { Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react'; // 👈 1. Importar Lenis
import { Navbar } from './components/Navbar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';

// Páginas
import Home from './pages/Home';
import CatalogoPage from './pages/Catalogo';

// Configuración
import { SITE_CONFIG } from './config/site';
import AgendaPage from './pages/Agenda';

function App() {
  return (
    // 👈 2. Envolver todo con ReactLenis
    // root: Indica que controla el scroll de toda la ventana (html)
    // options: Configuración de inercia (0.1 es el estándar suave)
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      
      <ScrollToTop />
      
      {/* Navegación Global */}
      <Navbar />
      
      {/* Botón Flotante con datos centralizados */}
      <FloatingWhatsApp 
        phoneNumber={SITE_CONFIG.whatsapp}
        accountName={SITE_CONFIG.name}
        chatMessage="Hola! ¿Cómo podemos ayudarte hoy?"
        placeholder="Escribe tu mensaje..."
      />

      {/* Rutas */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
          <Route path="/agenda" element={<AgendaPage />} />
          {/* Si creas la página de cursos después, la agregas aquí:
              <Route path="/cursos" element={<CursosPage />} /> 
          */}
        </Routes>
      </main>

    </ReactLenis>
  );
}

export default App;