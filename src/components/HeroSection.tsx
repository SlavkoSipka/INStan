import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HeroSectionProps {
  heroImages: string[];
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  navigateToPage: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  heroImages, 
  currentImageIndex, 
  setCurrentImageIndex,
  navigateToPage
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1, true);

  return (
    <section 
      ref={ref}
      id="pocetna" 
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      {/* Image Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
              index === currentImageIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url('${image}')`
            }}
          />
        ))}
      </div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-orange-500 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-white w-full px-4">
        <div className="max-w-full mx-4 md:max-w-2xl md:mx-0 md:ml-16 lg:ml-24 bg-black/40 backdrop-blur-sm p-3 md:p-6 rounded-2xl">

          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 leading-tight drop-shadow-2xl text-left">
            <span className="text-orange-400 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">IN-STAN STOLARIJA</span><br />
            <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">VRNJAČKA BANJA #1</span><br />
            <span className="text-gray-100 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">Nameštaj • Kantovanje • CNC</span>
          </h1>
          <p className="hidden md:block text-base md:text-xl mb-6 md:mb-8 text-gray-100 max-w-full md:max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium leading-relaxed text-center md:text-left">
            🏆 IN-STAN - Najbolja stolarija u Vrnjačkoj Banji! Profesionalna izrada nameštaja po meri, kantovanje, rezanje MDF/HDF ploča, CNC obrada. 20+ godina iskustva, 500+ zadovoljnih klijenata.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
            <button 
              onClick={() => navigateToPage('gallery')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-6 md:px-8 py-2 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl drop-shadow-lg"
            >
              Pogledaj naše radove
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-800 text-white px-3 sm:px-6 md:px-8 py-2 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 backdrop-blur-sm shadow-2xl drop-shadow-lg">
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;