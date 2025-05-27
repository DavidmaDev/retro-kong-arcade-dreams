
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      title: "Gabinete en construcción",
      description: "Estructura de madera reciclada siendo ensamblada",
      placeholder: "🎮"
    },
    {
      id: 2,
      title: "Monitor CRT restaurado",
      description: "Pantalla vintage completamente funcional",
      placeholder: "📺"
    },
    {
      id: 3,
      title: "Controles arcade",
      description: "Joystick y botones originales de arcade",
      placeholder: "🕹️"
    },
    {
      id: 4,
      title: "Circuitería interna",
      description: "Raspberry Pi y sistema de audio instalados",
      placeholder: "🔧"
    },
    {
      id: 5,
      title: "Acabado final",
      description: "Máquina terminada con gráficos retro",
      placeholder: "✨"
    },
    {
      id: 6,
      title: "Pruebas de juego",
      description: "Primera partida de Donkey Kong",
      placeholder: "🐒"
    }
  ];

  return (
    <div className="py-20 bg-retro-bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-retro-yellow neon-text font-pixel mb-6">
            GALERÍA
          </h2>
          <p className="text-xl text-retro-yellow-light font-retro max-w-3xl mx-auto">
            El proceso de construcción paso a paso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Card 
              key={image.id}
              className="bg-retro-bg-darker border-2 border-retro-yellow pixel-border cursor-pointer transform transition-all hover:scale-105 hover:border-retro-yellow-light"
              onClick={() => setSelectedImage(index)}
            >
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-retro-yellow-dark to-retro-orange flex items-center justify-center text-8xl mb-4">
                  {image.placeholder}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-retro-yellow mb-2 font-pixel">
                    {image.title}
                  </h3>
                  <p className="text-retro-yellow-light font-retro">
                    {image.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-retro-green text-center mb-12 font-pixel">
            TIMELINE DEL PROYECTO
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-retro-yellow"></div>
            
            <div className="space-y-12">
              {[
                { phase: "FASE 1", title: "Recolección de materiales", date: "Semana 1-2" },
                { phase: "FASE 2", title: "Diseño y planificación", date: "Semana 3" },
                { phase: "FASE 3", title: "Construcción del gabinete", date: "Semana 4-6" },
                { phase: "FASE 4", title: "Instalación electrónica", date: "Semana 7-8" },
                { phase: "FASE 5", title: "Programación y testing", date: "Semana 9" },
                { phase: "FASE 6", title: "Acabados finales", date: "Semana 10" }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="bg-retro-bg-darker border-2 border-retro-green pixel-border p-6">
                      <div className="text-retro-green font-pixel font-bold text-lg mb-2">
                        {item.phase}
                      </div>
                      <div className="text-retro-yellow font-pixel text-xl mb-2">
                        {item.title}
                      </div>
                      <div className="text-retro-yellow-light font-retro">
                        {item.date}
                      </div>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-retro-yellow border-4 border-retro-bg-dark rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
