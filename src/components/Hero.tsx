
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-retro-bg-dark via-retro-bg-darker to-retro-bg-dark">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 w-full h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border border-retro-yellow/20"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-retro-yellow neon-text animate-neon-pulse font-pixel mb-4">
            DONKEY KONG
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-retro-red animate-pixel-bounce font-pixel">
            ARCADE MACHINE
          </h2>
        </div>

        {/* Subtitle */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-retro-green font-pixel mb-4">
            ● PROYECTO ECOLÓGICO ●
          </p>
          <p className="text-lg md:text-xl text-retro-yellow-light font-retro max-w-3xl mx-auto leading-relaxed">
            Una máquina arcade clásica construida completamente con materiales reciclados, 
            combinando nostalgia retro con conciencia ambiental
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            className="bg-retro-yellow text-retro-bg-dark hover:bg-retro-yellow-light pixel-border text-lg px-8 py-4 font-pixel font-bold transition-all transform hover:scale-105"
            onClick={() => document.getElementById('proyecto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            VER PROYECTO
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-retro-red text-retro-red hover:bg-retro-red hover:text-retro-bg-dark pixel-border text-lg px-8 py-4 font-pixel font-bold transition-all transform hover:scale-105"
            onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
          >
            GALERÍA
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 border-2 border-retro-yellow pixel-border bg-retro-bg-darker/50">
            <div className="text-3xl font-bold text-retro-yellow font-pixel mb-2">100%</div>
            <div className="text-retro-yellow-light font-pixel">RECICLADO</div>
          </div>
          <div className="text-center p-6 border-2 border-retro-green pixel-border bg-retro-bg-darker/50">
            <div className="text-3xl font-bold text-retro-green font-pixel mb-2">1981</div>
            <div className="text-retro-yellow-light font-pixel">ESTILO RETRO</div>
          </div>
          <div className="text-center p-6 border-2 border-retro-red pixel-border bg-retro-bg-darker/50">
            <div className="text-3xl font-bold text-retro-red font-pixel mb-2">DIY</div>
            <div className="text-retro-yellow-light font-pixel">HECHO A MANO</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-6 border-2 border-retro-yellow rotate-45 transform"></div>
      </div>
    </div>
  );
};

export default Hero;
