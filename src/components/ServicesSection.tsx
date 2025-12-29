import React from 'react';
import { Home, Scissors, Settings, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServicesSectionProps {
  navigateToPage?: (page: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ navigateToPage }) => {
  const { ref, isVisible } = useScrollAnimation(0.1, true);

  return (
    <section 
      ref={ref}
      id="usluge" 
      className={`py-24 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            NAŠA EKSPERTIZA
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Naše usluge</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Pružamo kompletne usluge stolarije i izrade nameštaja po meri u Vrnjačkoj Banji - kantovanje, rezanje, CNC obrada
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } cursor-pointer`} style={{ transitionDelay: '400ms' }} onClick={() => navigateToPage?.('services')}>
            <div className="absolute -top-6 left-8">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Home className="text-white" size={28} />
              </div>
            </div>
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nameštaj po meri</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kuhinje po meri, spavaće sobe, dnevni boravci - sve po vašoj želji i merama prostora u Vrnjačkoj Banji.
              </p>
              <div className="flex items-center text-orange-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Saznaj više</span>
                <ChevronRight size={20} className="ml-2" />
              </div>
            </div>
          </div>
          
          <div className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } cursor-pointer`} style={{ transitionDelay: '600ms' }} onClick={() => navigateToPage?.('services')}>
            <div className="absolute -top-6 left-8">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Scissors className="text-white" size={28} />
              </div>
            </div>
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sečenje i kantovanje</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Precizno pravolinijsko i krivolinijsko rezanje MDF/HDF ploča sa profesionalnim kantovanjem ivica.
              </p>
              <div className="flex items-center text-orange-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Saznaj više</span>
                <ChevronRight size={20} className="ml-2" />
              </div>
            </div>
          </div>
          
          <div className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } cursor-pointer`} style={{ transitionDelay: '800ms' }} onClick={() => navigateToPage?.('services')}>
            <div className="absolute -top-6 left-8">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Settings className="text-white" size={28} />
              </div>
            </div>
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Obrada na CNC mašini</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Najsavremenija CNC tehnologija za precizno bušenje i rezanje MDF/HDF ploča sa milimetarskom tačnošću.
              </p>
              <div className="flex items-center text-orange-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Saznaj više</span>
                <ChevronRight size={20} className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;