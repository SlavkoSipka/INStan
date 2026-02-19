import React from 'react';
import { Award, Hammer, Home } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1, true);

  return (
    <section 
      ref={ref}
      id="o-nama" 
      className={`py-20 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" itemProp="name">
              20 godina <span className="text-orange-500">iskustva</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" itemProp="description">
              IN-STAN stolarija u Vrnjačkoj Banji posluje već više od dve decenije, pružajući vrhunski kvalitet 
              u izradi nameštaja po meri, kantovanju i rezanju MDF/HDF ploča. Kombinujemo tradicionalne tehnike stolarije sa 
              modernim CNC tehnologijama za preciznu obradu materijala.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Award className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Garancija kvaliteta</h4>
                  <p className="text-gray-600">5 godina garancije na sve naše proizvode</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Hammer className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Ručna izrada</h4>
                  <p className="text-gray-600">Svaki komad pažljivo izrađen po meri</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Home className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Besplatna konsultacija</h4>
                  <p className="text-gray-600">Dolazimo na teren i dajemo stručni savet</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <img 
              src="/images/a22-min.jpg" 
              alt="Stolarija radionica"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Zadovoljnih klijenata</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;