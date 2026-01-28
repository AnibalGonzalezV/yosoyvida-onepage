
export function BioSection() {
  return (
    <section id="sobre-mi" className="bg-cream py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-lg aspect-[3/4]">
              <img
                src="/images/bio-transparent.webp" 
                alt="Retrato de la coach"
                className="w-full h-full object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-dark-brown leading-tight text-balance">
              Underneath worry, desire...
            </h2>
            
            <div className="space-y-6 text-dark-brown/90 font-sans text-lg md:text-xl leading-relaxed">
                <p>
                  It trusts, it knows joy. There is a place within you that has never been wounded, 
                  that is incapable of suffering. A place of deep stillness that remembers your true nature.
                </p>
                <p>
                  This is the essence of contentment—not the absence of challenges, but the presence 
                  of peace regardless of circumstances.
                </p>
            </div>

            <div className="pt-6 border-t border-earthy-brown/20 flex items-center gap-4">
              <span className="h-px w-12 bg-earthy-brown"></span>
              <p className="font-cursive text-3xl text-earthy-brown italic">
                Santosha means contentment
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}