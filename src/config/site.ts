// src/config/site.ts

export const SITE_CONFIG = {
  name: "Yo Soy Vida",
  description: "Terapias Integrales y Productos Naturales para sanar desde la raíz.",
  
  // Contacto Oficial
  whatsapp: "56940616469", // Reemplaza con tu número real si es diferente
  email: "contacto@yosoyvida.cl",
  address: "Santiago, Chile", // Puedes ser más específico si tienes dirección física
  
  // Redes Sociales
  links: {
    instagram: "https://instagram.com/yosoyvidanatural",
    facebook: "https://facebook.com/yosoyvida", // Ajusta si tienes
  },

  // Generador de enlace de WhatsApp automático
  // Esto asegura que todos los botones de "Comprar" lleven el mensaje correcto
  whatsappLink: (message: string = "") => {
    const text = encodeURIComponent(message || "Hola, me gustaría más información.");
    return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${text}`;
  },

  // Navegación Principal
  nav: [
    { name: "Inicio", href: "/" },
    { name: "Sobre Mí", href: "/#about" },
    { name: "Terapias", href: "/#terapias" },
    { name: "Cursos", href: "/#cursos" },
    { name: "Catálogo", href: "/catalogo" },
    { name: "Agenda", href: "/agenda" },
  ]
};