import { WaveDivider } from "./WaveDivider"

// SVG2 (Top)
const TOP_WAVE = "M0,64L48,90.7C96,117,192,171,288,208C384,245,480,267,576,240C672,213,768,139,864,138.7C960,139,1056,213,1152,229.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

// SVG3 (Bottom)
const BOTTOM_WAVE = "M0,32L48,53.3C96,75,192,117,288,149.3C384,181,480,203,576,176C672,149,768,75,864,64C960,53,1056,107,1152,133.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

export function FlowerDivider2() {
  return (
    <div 
      // CORRECCIÓN 1: -mt-[2px] y z-0
      className="relative w-full h-[300px] md:h-[500px] -mt-[2px] z-0"
      style={{ clipPath: "inset(0)" }} 
    >
      
      {/* Imagen de Fondo 2 */}
      <div className="fixed inset-0 w-full h-full">
        <img 
          src="/images/colibries-divider.webp"
          alt="Flowers Background 2"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-brown/10" />
      </div>
      
      {/* Ola Superior (Color Cream) */}
      {/* CORRECCIÓN 2: scale-y-105 */}
      <div className="absolute top-0 w-full transform origin-top scale-y-105">
        <WaveDivider path={TOP_WAVE} className="text-cream" position="top" />
      </div>

      {/* Ola Inferior (Color Terracotta) */}
      {/* CORRECCIÓN 3: scale-y-105 */}
      <div className="absolute bottom-0 w-full transform origin-bottom scale-y-105">
        <WaveDivider path={BOTTOM_WAVE} className="text-terracotta" position="bottom" />
      </div>
      
    </div>
  )
}