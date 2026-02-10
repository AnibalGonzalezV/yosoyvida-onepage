// src/data/product.ts

export interface ProductFormat {
  name: string;
  price: string;
}

export interface Product {
  id: number;
  name: string;
  price: string; // Precio principal
  image: string;
  type: 'product' | 'book';
  bestseller?: boolean;
  author?: string; // Solo para libros
  shortDescription: string;
  description: string; // Beneficios detallados
  technicalInfo?: string; // Info técnica (Envase, contenido, etc.)
  formats?: ProductFormat[]; // Alternativas de precios
}

// --- TOP 5 FAVORITOS ---
export const topProducts: Product[] = [
  { 
    id: 1, 
    name: "Aceite de Ricino", 
    price: "$14.990", 
    image: "/images/products/aceite-de-ricino.png",
    bestseller: true, 
    type: 'product',
    shortDescription: "El Regenerador Total: Pestañas, cabello y piel.",
    technicalInfo: "500 ML. GRADO ALIMENTICIO EN FRASCO DE VIDRIO.",
    description: "Pestañas y Cejas: Estimula el crecimiento para que se vean más largas y tupidas.\nCabello: Sella las puntas partidas y combate la caspa.\nPiel: Hidratación profunda ideal para atenuar estrías y cicatrices.\nDolores: Excelente antiinflamatorio para masajes en articulaciones.\n\nEn resumen: Nutre, repara y fortalece donde lo pongas. ✨",
    formats: [
      { name: "500ml Vidrio (Principal)", price: "$14.990" },
      { name: "30ml Oftálmico/Gotario", price: "$3.500" }
    ]
  },
  { 
    id: 2, 
    name: "Agua de Mar", 
    price: "$7.000", 
    image: "/images/products/aguademar.png", 
    bestseller: true, 
    type: 'product',
    shortDescription: "Nutrición Celular Completa.",
    technicalInfo: "BIDÓN DE 5 LITROS. AGUA PURA, VIVA, HIPERTÓNICA, FILTRADA, SIN ADITIVOS.",
    description: "Recarga Mineral: Contiene todos los minerales de la tabla periódica.\nAlcalinizante: Regula el pH y combate la acidez.\nPiel Sanadora: Potente antiséptico y cicatrizante.\nEnergía Natural: Combate la fatiga crónica.\n\nEn resumen: Plasma marino que limpia y revitaliza. 💧"
  },
  { 
    id: 3, 
    name: "CDS Profesional", 
    price: "$20.000", 
    image: "/images/products/cdsprofesional.png", 
    bestseller: true, 
    type: 'product',
    shortDescription: "El Gran Purificador y oxigenador celular.",
    technicalInfo: "500 ML TESTADO A >3000 P.P.M. PRODUCIDO CON GENERADOR DE ANDREAS KALCKER.",
    description: "Oxigenación Celular: Libera oxígeno y reactiva mitocondrias.\nAcción Antimicrobiana: Elimina patógenos sin generar resistencia.\nDesintoxicación: Oxida metales pesados.\n\nEn resumen: Limpia el terreno biológico y sube defensas. ⚡",
    formats: [
      { name: "500ml Vidrio (Principal)", price: "$20.000" },
      { name: "500ml Plástico", price: "$17.000" }
    ]
  },
  { 
    id: 4, 
    name: "Trementina Vegetal", 
    price: "$24.000", 
    image: "/images/products/trementina.png", 
    bestseller: true, 
    type: 'product',
    shortDescription: "Antiparasitario potente y limpieza profunda.",
    technicalInfo: "BOTELLA DE VIDRIO FARMACÉUTICA DE 100 ML + PIPETA PASTEUR.",
    description: "Adiós Parásitos: Elimina parásitos y Cándida.\nLimpieza Intestinal: Despeja mucosidad y toxinas.\nRespiratorio: Excelente expectorante.\nDolores: Alivia dolores reumáticos.\n\nEn resumen: La limpieza profunda para sacar toxinas antiguas. 🧹",
    formats: [
      { name: "100ml Vidrio (Principal)", price: "$24.000" },
      { name: "50ml Vidrio", price: "$11.000" },
      { name: "30ml Vidrio", price: "$7.000" }
    ]
  },
  { 
    id: 5, 
    name: "Moringa Oleifera", 
    price: "$33.000", 
    image: "/images/products/moringa.png", 
    bestseller: true, 
    type: 'product',
    shortDescription: "El Árbol de la Vida: Multivitamínico potente.",
    technicalInfo: "600 CÁPSULAS VEGETALES DE 360 MG. CERTIFICADA ORGÁNICA DE INDIA.",
    description: "Multivitamínico: Cargado de calcio, hierro y proteínas.\nAliada de Diabéticos: Regula azúcar y presión.\nAntiinflamatorio: Alivia dolores articulares.\n\nEn resumen: La 'pastilla multivitamínica' de la naturaleza. 🥗",
    formats: [
      { name: "600 Cápsulas", price: "$33.000" },
      { name: "240 Cápsulas", price: "$17.000" }
    ]
  }
];

// --- CATÁLOGO GENERAL (Productos 6 al 18 + Libros) ---
export const generalCatalog: Product[] = [
  { 
    id: 6, 
    name: "Artemisa Annua", 
    price: "$15.000", 
    image: "/images/products/artemisa.png", 
    type: 'product',
    shortDescription: "El Escudo Celular: Antiviral y regenerador.",
    technicalInfo: "TINTURA MADRE 30 ML EN FRASCO GOTARIO.",
    description: "Antiviral: Limpia la sangre de agentes resistentes.\nSalud Celular: Detecta y ataca células dañadas.\nRefuerzo Inmune: Estimula defensas.\n\nEn resumen: Defensa extrema y regeneración. 🛡️"
  },
  { 
    id: 7, 
    name: "MMS (Solución Mineral)", 
    price: "$15.000", 
    image: "/images/products/mms-solo.png",
    type: 'product',
    shortDescription: "La Fórmula Original (Kit A+B).",
    technicalInfo: "FRASCO DE CLORITO DE SODIO SIN ACTIVAR. CON PIPETA DOSIFICADORA.",
    description: "Kit A+B: Para preparar tu mezcla al instante.\nPotencia de Choque: Ideal para usos externos.\nPurificador Total: Elimina patógenos por oxidación.\n\nEn resumen: Opción potente y económica para preparar en casa. 🥣"
  },
  { 
    id: 8, 
    name: "Cápsulas de Sal", 
    price: "$16.000", 
    image: "/images/products/capsulas-con-sal.png",
    type: 'product',
    shortDescription: "El Salvavidas de tus Electrolitos.",
    technicalInfo: "PACK 960 UNIDADES. CÁPSULAS DE 310 MG.",
    description: "Combate Hiponatremia: Restaura sodio y evita mareos.\nAdiós Calambres: Evita espasmos musculares.\nHidratación Real: Retiene el agua celular.\n\nEn resumen: Hidratación inteligente en una cápsula. ⚡"
  },
  { 
    id: 9, 
    name: "Kit Limpieza Hepática", 
    price: "$23.000", 
    image: "/images/products/kit-limpieza.png",
    type: 'product', 
    shortDescription: "El 'Reset' de tu Cuerpo.", 
    technicalInfo: "INCLUYE: JARRO IRRIGADOR, SULFATO DE MAGNESIO (100G) Y ÁCIDO MÁLICO (100G).",
    description: "Adiós Piedras: Limpia hígado y vesícula.\nÁcido Málico: Ablanda las piedras.\nSulfato de Magnesio: Dilata conductos.\nJarro Irrigador: Limpieza profunda de colon.\n\nEn resumen: Pack completo para desatascar tu filtro principal. 🚀" 
  },
  { 
    id: 10, 
    name: "Carbón Activado", 
    price: "$9.000", 
    image: "/images/products/carbon-vegetal.png",
    type: 'product', 
    shortDescription: "El Imán de Toxinas.", 
    technicalInfo: "FRASCO DE 120 CÁPSULAS.",
    description: "Adiós Hinchazón: Atrapa gases y reduce distensión.\nS.O.S. Digestivo: Corta diarrea y absorbe toxinas.\nDetox Profundo: Atrapa metales pesados.\n\nEn resumen: Tu filtro de emergencia para sentirte liviano. 🧲" 
  },
  { 
    id: 11, 
    name: "Tiras Lamotte", 
    price: "$57.000", 
    image: "/images/products/insta-test.png",
    type: 'product', 
    shortDescription: "Tu Seguridad Primero: Mide tu CDS.", 
    technicalInfo: "FRASCO DE 50 TIRAS (RANGO 0-500 PPM). SE PUEDEN CORTAR PARA OBTENER 100.",
    description: "Adiós al 'Ojímetro': Mide la concentración exacta.\nRango Completo: Desde mantenimiento hasta choque.\nVerificación: Asegura la potencia de tu preparado.\n\nEn resumen: Tu control de calidad personal. ✅" 
  },
  { 
    id: 12, 
    name: "NAC (N-Acetilcisteína)", 
    price: "$20.000", 
    image: "/images/products/nac-1.png",
    type: 'product', 
    shortDescription: "El Fabricante de Defensas.", 
    technicalInfo: "FRASCO DE 100 CÁPSULAS.",
    description: "Activa Glutatión: Fabrica el antioxidante maestro.\nLimpiaparabrisas Pulmonar: Mucolítico natural para pulmones.\nEscudo del Hígado: Protege de daños por toxinas.\n\nEn resumen: Bencina para antioxidantes y pulmones limpios. 🫁" 
  },
  { 
    id: 13, 
    name: "Kit MMS 120ml", 
    price: "$33.000", 
    image: "/images/products/kit-mms.png",
    type: 'product', 
    shortDescription: "Calidad Superior en Vidrio.", 
    technicalInfo: "FRASCO VIDRIO FARMACÉUTICO CON AMBOS REACTIVOS CERTIFICADOS.",
    description: "Pureza Garantizada: Vidrio ámbar protege de luz y plástico.\nFormato Familiar: Cantidad enorme de dosis.\nPotencia al Instante: Activa gota a gota.\n\nEn resumen: Formato pro de máxima pureza y duración. 🛡️" 
  },
  { 
    id: 14, 
    name: "Suramina de Pino", 
    price: "$17.000", 
    image: "/images/products/supramina.png", 
    type: 'product', 
    shortDescription: "El Escudo Anti-Transmisión.", 
    technicalInfo: "FRASCO GOTARIO DE 30 ML. EXTRACTO DE HOJAS DE PINO.",
    description: "Protección Anti-Shedding: Protege de efectos externos.\nÁcido Shikímico: Detiene replicación viral.\nSuper Inmunidad: 5 veces más Vitamina C que limones.\n\nEn resumen: Tu chaleco antibalas biológico. 🌲",
    formats: [
      { name: "30ml Gotario (Principal)", price: "$17.000" },
      { name: "60ml Vidrio", price: "$20.000" },
      { name: "60ml Plástico", price: "$17.000" },
      { name: "100ml Plástico", price: "$25.000" }
    ]
  },
  { 
    id: 15, 
    name: "MSM (Azufre)", 
    price: "$12.000", 
    image: "/images/products/msn.png", 
    type: 'product', 
    shortDescription: "Mineral de Belleza y Flexibilidad.", 
    technicalInfo: "COMPUESTO DE AZUFRE ORGÁNICO. INDISPENSABLE PARA TENDONES Y HUESOS.",
    description: "Adiós Dolor Articular: Desinflama rodillas y espalda.\nBelleza: Materia prima de colágeno y queratina.\nPermeabilidad: Facilita entrada de nutrientes.\n\nEn resumen: Cemento flexible para reparar tejidos. 💎" 
  },
  { 
    id: 16, 
    name: "Magnesio Quelado", 
    price: "$12.000", 
    image: "/images/products/fdc.png", 
    type: 'product', 
    shortDescription: "El que SÍ se absorbe.", 
    technicalInfo: "FRASCO DE 100 CÁPSULAS DE 500MG.",
    description: "Absorción Total: Tu cuerpo lo reconoce como alimento.\nEstómago Feliz: No da acidez ni efecto laxante.\nDescanso: Calma el sistema nervioso y mejora el sueño.\n\nEn resumen: Versión premium para relajación real. 🧠" 
  },
  { 
    id: 17, 
    name: "Zeolita Micronizada", 
    price: "$12.000", 
    image: "/images/products/zeolita.png", 
    type: 'product', 
    shortDescription: "Imán de Metales Pesados.", 
    technicalInfo: "DOYPACK DE 200 GRAMOS EN POLVO.",
    description: "Atrapa Metales: Jaula que saca mercurio y plomo.\nLimpieza Radiación: Limpia restos de químicos y radiación.\nSeguridad: No se absorbe, solo entra y limpia.\n\nEn resumen: Aspiradora inteligente de toxinas. 🪨" 
  },
  { 
    id: 18, 
    name: "Sal de Epsom", 
    price: "$6.000", 
    image: "/images/products/sal-de-epson.png", 
    type: 'product', 
    shortDescription: "Relajante y Detox Muscular.", 
    technicalInfo: "BOLSA DE 1 KILO. SULFATO DE MAGNESIO.",
    description: "Adiós Dolor: Baños de tina para soltar músculos.\nLimpieza Hepática: Dilata conductos biliares.\nAnti-Estrés: Baja el cortisol.\n\nEn resumen: Spa en casa y herramienta detox. 🛁" 
  },
  // --- LIBROS ---
  {
    id: 101,
    name: "Salud Prohibida: Incurable era ayer",
    price: "$26.000",
    image: "/images/products/salud-prohibida.jpg",
    type: "book",
    author: "Andreas Kalcker",
    bestseller: true,
    shortDescription: "La guía definitiva con protocolos de la A a la Z.",
    description: "Después de cuatro años de trabajo por fin se ha podido terminar el libro nuevo de Andreas titulado «Salud prohibida, incurable era ayer», donde en más de 400 páginas lista enfermedades de la A hasta la Z con protocolos incluidos, testimonios reales de cada enfermedad y nuevos datos científicos.\n\nEs una herramienta indispensable para quienes buscan tomar las riendas de su propia salud con conocimiento y responsabilidad.",
    formats: []
  },
  {
    id: 102,
    name: "Mini Guía: Salud Prohibida",
    price: "$8.000",
    image: "/images/products/lo-esencial.jpg",
    type: "book",
    author: "Andreas Kalcker",
    shortDescription: "Lo esencial y los protocolos de bolsillo.",
    description: "Esta mini guía es un extracto del libro «Salud Prohibida» y va dirigida a las personas que estén interesadas solo en «lo esencial y los protocolos».\n\nEspero que le sea útil y que logre mejorar el estado de salud suyo o de las personas que más quiere. Ideal para tener siempre a mano como referencia rápida.",
    formats: []
  },
  {
    id: 103,
    name: "Bye Bye Covid",
    price: "$18.000",
    image: "/images/products/to-you.png",
    type: "book",
    author: "Varios Especialistas",
    shortDescription: "Testimonios que cuestionan el discurso oficial.",
    description: "Un libro que rescata, para la historia, los testimonios de especialistas de primer nivel y divulgadores que cuestionaron el discurso mediático sobre la actualidad ilegal mundial.\n\nDesde un enfoque científico, empírico y humanista que cambiará para siempre nuestra perspectiva sobre aquellos que nos gobiernan. Una obra valiente y necesaria.",
    formats: []
  }
];