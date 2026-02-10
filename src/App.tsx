import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';

// Páginas
import Home from './pages/Home';
import CatalogoPage from './pages/Catalogo';

// Configuración
import { SITE_CONFIG } from './config/site';

function App() {
  return (
    <>
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
          {/* Si creas la página de cursos después, la agregas aquí:
              <Route path="/cursos" element={<CursosPage />} /> 
          */}
        </Routes>
      </main>

    </>
  );
}

export default App;