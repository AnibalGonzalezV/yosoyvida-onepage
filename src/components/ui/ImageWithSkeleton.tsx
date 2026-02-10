import { useState } from "react";

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export function ImageWithSkeleton({ src, alt, className, ...props }: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      
      {/* 1. SKELETON (Cargando...) */}
      {/* Se muestra mientra isLoaded sea falso */}
      <div 
        className={`absolute inset-0 bg-gray-200 animate-pulse z-10 flex items-center justify-center transition-opacity duration-500 ${
            isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
         {/* Icono de "imagen" sutil mientras carga */}
         <svg className="w-10 h-10 text-gray-300/50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
         </svg>
      </div>

      {/* 2. IMAGEN REAL */}
      <img
        src={src}
        alt={alt}
        // 👇 AQUÍ ESTÁ LA IMPLEMENTACIÓN TÉCNICA DEL LAZY LOAD
        loading="lazy"      // El navegador gestiona la carga diferida
        decoding="async"    // Descodificación asíncrona para no bloquear el scroll
        
        // Cuando el navegador termina de descargarla, cambiamos el estado
        onLoad={() => setIsLoaded(true)}
        
        className={`w-full h-full object-contain transition-all duration-700 ease-in-out ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
        {...props}
      />
    </div>
  );
}