
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "@/components/Hero";
import ProjectInfo from "@/components/ProjectInfo";
import Gallery from "@/components/Gallery";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-retro-bg-dark overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-retro-bg-darker/90 backdrop-blur-sm border-b-2 border-retro-yellow z-50 animate-slide-down">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-retro-yellow neon-text font-pixel">
              DONKEY KONG ARCADE
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#inicio" className="text-retro-yellow hover:text-retro-yellow-light transition-colors font-pixel">
                INICIO
              </a>
              <a href="#proyecto" className="text-retro-yellow hover:text-retro-yellow-light transition-colors font-pixel">
                PROYECTO
              </a>
              <a href="#galeria" className="text-retro-yellow hover:text-retro-yellow-light transition-colors font-pixel">
                GALERÍA
              </a>
              <a href="#specs" className="text-retro-yellow hover:text-retro-yellow-light transition-colors font-pixel">
                SPECS
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <section id="inicio">
          <Hero />
        </section>
        
        <section id="proyecto">
          <ProjectInfo />
        </section>
        
        <section id="galeria">
          <Gallery />
        </section>
        
        <section id="specs">
          <TechnicalSpecs />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
