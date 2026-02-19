import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronRight, Save as Saw, Scissors, Hammer, Settings, PaintBucket, Layers, Wrench, Ruler } from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface ServicesPageProps {
  navigateToPage: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ navigateToPage }) => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      title: "Pravolinijsko sečenje",
      description: "Precizno pravolinijsko sečenje materijala pomoću najsavremenijih mašina za profesionalne rezultate.",
      icon: Saw,
      image: "/images/a22-min.jpg"
    },
    {
      title: "Krivolinijsko sečenje",
      description: "Složeno krivolinijsko sečenje za kreiranje jedinstvenih oblika i dizajna po vašoj želji.",
      icon: Scissors,
      image: "/images/krivo.jpg"
    },
    {
      title: "Izrada namestaja po meri",
      description: "Kompletna izrada namestaja i elemenata po meri.",
      icon: Ruler,
      image: "https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "CNC usluge bušenja i sečenja",
      description: "Najsavremenija CNC tehnologija za precizno bušenje i sečenje sa milimetarskom tačnošću.",
      icon: Settings,
      image: "/images/a24-min.jpg"
    },
    {
      title: "Kantovanje",
      description: "Profesionalno kantovanje ivica (pravolinisko/krivolinisko) za savršen završetak i dugotrajnost nameštaja.",
      icon: Layers,
      image: "/images/ivica.jpg"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "IN-STAN Stolarija"
    },
    "serviceType": "Stolarijske usluge",
    "areaServed": {
      "@type": "City",
      "name": "Vrnjačka Banja"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Stolarijske usluge",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      <SEOHead
        title="Usluge - IN-STAN Stolarija Vrnjačka Banja | Kantovanje | Rezanje | CNC"
        description="Kompletne stolarijske usluge u Vrnjačkoj Banji: kantovanje, rezanje MDF/HDF, CNC obrada, izrada nameštaja po meri. Profesionalno i precizno."
        keywords="usluge stolarije vrnjačka banja, kantovanje vrnjačka banja, rezanje MDF HDF, CNC obrada, pravolinijsko sečenje, krivolinijsko sečenje"
        canonical="https://in-stan.rs/#/services"
        structuredData={structuredData}
      />
      <div 
        ref={ref}
        className={`py-20 min-h-screen transition-all duration-1000 relative ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          backgroundImage: `url('/images/s.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background overlay for better readability */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            {/* Header Section */}
            <div className={`mb-12 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="text-center lg:text-left lg:flex lg:items-start lg:gap-16">
                <div className="lg:flex-shrink-0 lg:w-80">
                  <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    NAŠA EKSPERTIZA
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 drop-shadow-lg">Sve naše usluge</h1>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 drop-shadow-md mb-8 lg:mb-0">
                    Pružamo kompletne usluge stolarije i izrade nameštaja po meri sa najsavremenijom opremom i dugogodišnjim iskustvom
                  </p>
                </div>
              </div>
            </div>

            {/* Services Grid - Mobile: Single column, Desktop: Original layout */}
            <div className="lg:flex lg:items-start lg:gap-16">
              <div className="hidden lg:block lg:flex-shrink-0 lg:w-80"></div>
              
              <div className="lg:flex-1">
                {/* Mobile: All services in single column */}
                <div className="block lg:hidden space-y-6">
                  {services.map((service, index) => (
                    <div 
                      key={index} 
                      className={`group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <div className="bg-orange-500 text-white p-2 rounded-lg shadow-lg">
                            <service.icon size={20} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop: Original grid layout */}
                <div className="hidden lg:block">
                  {/* First row - 2 services */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {services.slice(0, 2).map((service, index) => (
                      <div 
                        key={index} 
                        className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 min-h-[400px] ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: `${400 + index * 100}ms` }}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <div className="bg-orange-500 text-white p-2 rounded-lg shadow-lg">
                              <service.icon size={24} />
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-8">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Second row - 3 services */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.slice(2).map((service, index) => (
                      <div 
                        key={index + 2} 
                        className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: `${600 + index * 100}ms` }}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <div className="bg-orange-500 text-white p-2 rounded-lg shadow-lg">
                              <service.icon size={24} />
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-8">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 drop-shadow-lg">Usluge stolarije IN-STAN Vrnjačka Banja</h1>
                <p className="text-gray-600 mb-6">
                  Pružamo kompletne usluge stolarije u Vrnjačkoj Banji - izrada nameštaja po meri, kantovanje, rezanje MDF/HDF ploča, CNC obrada
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => navigateToPage('home')}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Kontaktiraj nas
                  </button>
                  <button 
                    onClick={() => navigateToPage('home')}
                    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Nazad na početnu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;