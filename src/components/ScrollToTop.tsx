import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react"; // 👈 1. Importar el hook de Lenis

export function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis(); // 👈 2. Obtener la instancia de Lenis

  useEffect(() => {
    // A. Si Lenis está activo, úsalo para frenar y saltar
    if (lenis) {
      // immediate: true mata cualquier inercia previa y salta a 0
      lenis.scrollTo(0, { immediate: true });
    }
    
    // B. Fallback nativo (por si acaso o si Lenis falla)
    window.scrollTo(0, 0);

    // C. Prevención extra: Decirle al navegador que no restaure la posición manual
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

  }, [pathname, lenis]);

  return null;
}