import { WaveDivider } from "./WaveDivider"

// SVG1 Path
const WAVE_PATH = "M0,96L48,96C96,96,192,96,288,112C384,128,480,160,576,192C672,224,768,256,864,240C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

export function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[450px]">
      
      {/* Imagen de Fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/hero_final.jpeg"

          alt="Serene lifestyle scene"
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 45%" }} 
        />
        <div className="absolute inset-0 bg-dark-brown/30" />
      </div>

      {/* Texto Centrado */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream text-center tracking-wide leading-tight drop-shadow-lg">
          BIENESTAR
          <br />
          <span className="italic font-light">Natural & Terapia Integral</span>
        </h1>
      </div>

      {/* SVG WAVE DIVIDER (Transición a Cream) */}
      <WaveDivider path={WAVE_PATH} className="text-cream" height="h-[40px] md:h-[80px]" />
    </section>
  )
}