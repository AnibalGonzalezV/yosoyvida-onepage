import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Usamos behavior: "instant" para anular el scroll-behavior: smooth del CSS
    // al cambiar de página. Esto evita conflictos y asegura que la nueva página
    // empiece exactamente desde arriba antes de que arranque la animación FadeIn.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]);

  return null;
}