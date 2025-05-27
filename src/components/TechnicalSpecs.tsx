
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechnicalSpecs = () => {
  return (
    <div className="py-20 bg-retro-bg-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-retro-yellow neon-text font-pixel mb-6">
            ESPECIFICACIONES
          </h2>
          <p className="text-xl text-retro-yellow-light font-retro max-w-3xl mx-auto">
            Detalles técnicos de nuestra máquina arcade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hardware */}
          <Card className="bg-retro-bg-dark border-2 border-retro-yellow pixel-border">
            <CardHeader>
              <CardTitle className="text-retro-yellow font-pixel text-2xl flex items-center">
                <span className="mr-4">⚡</span>
                HARDWARE
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-4">
                  <div className="border border-retro-green p-4 pixel-border">
                    <div className="text-retro-green font-pixel font-bold mb-2">PROCESADOR</div>
                    <div className="text-retro-yellow-light font-retro">Raspberry Pi 4</div>
                    <div className="text-retro-yellow-light font-retro">4GB RAM</div>
                  </div>
                  <div className="border border-retro-green p-4 pixel-border">
                    <div className="text-retro-green font-pixel font-bold mb-2">PANTALLA</div>
                    <div className="text-retro-yellow-light font-retro">CRT 19" restaurado</div>
                    <div className="text-retro-yellow-light font-retro">240p nativo</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border border-retro-green p-4 pixel-border">
                    <div className="text-retro-green font-pixel font-bold mb-2">CONTROLES</div>
                    <div className="text-retro-yellow-light font-retro">Joystick Sanwa</div>
                    <div className="text-retro-yellow-light font-retro">3 botones arcade</div>
                  </div>
                  <div className="border border-retro-green p-4 pixel-border">
                    <div className="text-retro-green font-pixel font-bold mb-2">AUDIO</div>
                    <div className="text-retro-yellow-light font-retro">Altavoces 8Ω</div>
                    <div className="text-retro-yellow-light font-retro">Amplificador 20W</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Software */}
          <Card className="bg-retro-bg-dark border-2 border-retro-red pixel-border">
            <CardHeader>
              <CardTitle className="text-retro-red font-pixel text-2xl flex items-center">
                <span className="mr-4">💾</span>
                SOFTWARE
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="border border-retro-red p-4 pixel-border">
                  <div className="text-retro-red font-pixel font-bold mb-2">SISTEMA OPERATIVO</div>
                  <div className="text-retro-yellow-light font-retro">RetroPie 4.8</div>
                  <div className="text-retro-yellow-light font-retro">Basado en Raspbian</div>
                </div>
                <div className="border border-retro-red p-4 pixel-border">
                  <div className="text-retro-red font-pixel font-bold mb-2">EMULADOR</div>
                  <div className="text-retro-yellow-light font-retro">MAME 2010</div>
                  <div className="text-retro-yellow-light font-retro">Optimizado para arcade</div>
                </div>
                <div className="border border-retro-red p-4 pixel-border">
                  <div className="text-retro-red font-pixel font-bold mb-2">JUEGOS</div>
                  <div className="text-retro-yellow-light font-retro">Donkey Kong (1981)</div>
                  <div className="text-retro-yellow-light font-retro">Donkey Kong Jr.</div>
                  <div className="text-retro-yellow-light font-retro">Mario Bros.</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dimensiones */}
          <Card className="bg-retro-bg-dark border-2 border-retro-purple pixel-border">
            <CardHeader>
              <CardTitle className="text-retro-purple font-pixel text-2xl flex items-center">
                <span className="mr-4">📐</span>
                DIMENSIONES
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6">
                <div className="border-2 border-retro-purple pixel-border p-6 bg-retro-bg-darker/50">
                  <div className="text-4xl font-bold text-retro-purple font-pixel mb-2">165cm</div>
                  <div className="text-retro-yellow-light font-retro">ALTURA</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-retro-purple p-4 pixel-border text-center">
                    <div className="text-2xl font-bold text-retro-purple font-pixel mb-2">65cm</div>
                    <div className="text-retro-yellow-light font-retro">ANCHO</div>
                  </div>
                  <div className="border border-retro-purple p-4 pixel-border text-center">
                    <div className="text-2xl font-bold text-retro-purple font-pixel mb-2">70cm</div>
                    <div className="text-retro-yellow-light font-retro">PROFUNDO</div>
                  </div>
                </div>
                <div className="border border-retro-purple p-4 pixel-border text-center">
                  <div className="text-2xl font-bold text-retro-purple font-pixel mb-2">45kg</div>
                  <div className="text-retro-yellow-light font-retro">PESO TOTAL</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Materiales */}
          <Card className="bg-retro-bg-dark border-2 border-retro-green pixel-border">
            <CardHeader>
              <CardTitle className="text-retro-green font-pixel text-2xl flex items-center">
                <span className="mr-4">♻️</span>
                MATERIALES RECICLADOS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { material: "Madera contrachapada", origen: "Muebles antiguos", porcentaje: "85%" },
                { material: "Monitor CRT", origen: "TV desechada", porcentaje: "100%" },
                { material: "Componentes electrónicos", origen: "Equipos en desuso", porcentaje: "70%" },
                { material: "Cables y conectores", origen: "Instalaciones antiguas", porcentaje: "90%" },
                { material: "Altavoces", origen: "Sistema de audio", porcentaje: "100%" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 border border-retro-green/30 pixel-border">
                  <div>
                    <div className="text-retro-yellow font-pixel font-bold">{item.material}</div>
                    <div className="text-retro-yellow-light font-retro text-sm">{item.origen}</div>
                  </div>
                  <div className="text-retro-green font-pixel font-bold text-lg">
                    {item.porcentaje}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Performance Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6 border-2 border-retro-yellow pixel-border bg-retro-bg-dark">
            <div className="text-3xl font-bold text-retro-yellow font-pixel mb-2 animate-neon-pulse">60</div>
            <div className="text-retro-yellow-light font-pixel">FPS</div>
          </div>
          <div className="text-center p-6 border-2 border-retro-red pixel-border bg-retro-bg-dark">
            <div className="text-3xl font-bold text-retro-red font-pixel mb-2 animate-neon-pulse">0ms</div>
            <div className="text-retro-yellow-light font-pixel">LAG INPUT</div>
          </div>
          <div className="text-center p-6 border-2 border-retro-green pixel-border bg-retro-bg-dark">
            <div className="text-3xl font-bold text-retro-green font-pixel mb-2 animate-neon-pulse">100%</div>
            <div className="text-retro-yellow-light font-pixel">COMPATIBLE</div>
          </div>
          <div className="text-center p-6 border-2 border-retro-purple pixel-border bg-retro-bg-dark">
            <div className="text-3xl font-bold text-retro-purple font-pixel mb-2 animate-neon-pulse">∞</div>
            <div className="text-retro-yellow-light font-pixel">HORAS JUEGO</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs;
