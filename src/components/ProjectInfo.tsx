
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectInfo = () => {
  return (
    <div className="py-20 bg-retro-bg-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-retro-yellow neon-text font-pixel mb-6">
            EL PROYECTO
          </h2>
          <p className="text-xl text-retro-yellow-light font-retro max-w-3xl mx-auto">
            Un homenaje a los clásicos arcade de los 80, construido con amor por el planeta
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto principal */}
          <div className="space-y-8">
            <div className="border-2 border-retro-yellow pixel-border p-8 bg-retro-bg-dark/50">
              <h3 className="text-2xl font-bold text-retro-green mb-4 font-pixel">
                ♻️ MATERIALES RECICLADOS
              </h3>
              <p className="text-retro-yellow-light font-retro leading-relaxed">
                Cada componente de nuestra máquina arcade ha sido cuidadosamente seleccionado 
                de materiales reciclados. Desde la madera recuperada del gabinete hasta los 
                componentes electrónicos restaurados, este proyecto demuestra que la 
                sostenibilidad y la diversión pueden ir de la mano.
              </p>
            </div>

            <div className="border-2 border-retro-red pixel-border p-8 bg-retro-bg-dark/50">
              <h3 className="text-2xl font-bold text-retro-red mb-4 font-pixel">
                🎮 EXPERIENCIA AUTÉNTICA
              </h3>
              <p className="text-retro-yellow-light font-retro leading-relaxed">
                Recreamos fielmente la experiencia de juego original de Donkey Kong de 1981. 
                Cada detalle, desde los controles hasta la pantalla CRT restaurada, ha sido 
                diseñado para transportarte de vuelta a los gloriosos días de los salones arcade.
              </p>
            </div>
          </div>

          {/* Características */}
          <div className="space-y-6">
            <Card className="bg-retro-bg-dark border-2 border-retro-yellow pixel-border">
              <CardHeader>
                <CardTitle className="text-retro-yellow font-pixel text-xl">
                  CARACTERÍSTICAS PRINCIPALES
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-retro-green"></div>
                  <span className="text-retro-yellow-light font-retro">Gabinete de madera reciclada</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-retro-green"></div>
                  <span className="text-retro-yellow-light font-retro">Monitor CRT restaurado</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-retro-green"></div>
                  <span className="text-retro-yellow-light font-retro">Controles arcade originales</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-retro-green"></div>
                  <span className="text-retro-yellow-light font-retro">Sistema Raspberry Pi</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-retro-green"></div>
                  <span className="text-retro-yellow-light font-retro">Audio estéreo vintage</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-retro-bg-dark border-2 border-retro-purple pixel-border">
              <CardHeader>
                <CardTitle className="text-retro-purple font-pixel text-xl">
                  IMPACTO AMBIENTAL
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-retro-green font-pixel mb-2">85%</div>
                  <div className="text-retro-yellow-light font-retro">Materiales reciclados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-retro-green font-pixel mb-2">12kg</div>
                  <div className="text-retro-yellow-light font-retro">Residuos evitados</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
