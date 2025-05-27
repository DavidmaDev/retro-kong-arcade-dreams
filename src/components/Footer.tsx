
const Footer = () => {
  return (
    <footer className="bg-retro-bg-darker border-t-2 border-retro-yellow py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-retro-yellow neon-text font-pixel mb-4">
              DONKEY KONG ARCADE
            </h3>
            <p className="text-retro-yellow-light font-retro">
              Reviviendo la magia de los 80 con conciencia ecológica
            </p>
          </div>

          {/* Enlaces */}
          <div className="text-center">
            <h4 className="text-lg font-bold text-retro-green font-pixel mb-4">
              PROYECTO
            </h4>
            <div className="space-y-2">
              <div className="text-retro-yellow-light font-retro">Materiales reciclados</div>
              <div className="text-retro-yellow-light font-retro">Proceso de construcción</div>
              <div className="text-retro-yellow-light font-retro">Especificaciones técnicas</div>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold text-retro-red font-pixel mb-4">
              IMPACTO
            </h4>
            <div className="space-y-2">
              <div className="text-retro-yellow-light font-retro">85% materiales reciclados</div>
              <div className="text-retro-yellow-light font-retro">12kg residuos evitados</div>
              <div className="text-retro-yellow-light font-retro">100% funcional</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-retro-yellow/30 text-center">
          <p className="text-retro-yellow-light font-retro">
            © 2024 DONKEY KONG ARCADE PROJECT - Hecho con ❤️ y materiales reciclados
          </p>
          <div className="mt-4 flex justify-center space-x-8 font-pixel text-sm">
            <span className="text-retro-green">ECO-FRIENDLY</span>
            <span className="text-retro-yellow">RETRO GAMING</span>
            <span className="text-retro-red">DIY PROJECT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
