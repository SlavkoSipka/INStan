import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Users, Clock, Star, Hammer, Home } from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface AboutPageProps {
  navigateToPage: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ navigateToPage }) => {
  const { ref, isVisible } = useScrollAnimation();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "IN-STAN Stolarija",
      "description": "Stolarija sa više od 20 godina iskustva u izradi nameštaja po meri u Vrnjačkoj Banji",
      "foundingDate": "2000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Витојевачки Пут 10",
        "addressLocality": "Vrnjačka Banja",
        "addressCountry": "RS"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="O nama - IN-STAN Stolarija Vrnjačka Banja | 20+ godina iskustva"
        description="Upoznajte IN-STAN stolariju iz Vrnjačke Banje. Više od 20 godina iskustva u izradi nameštaja po meri, kantovanju i CNC obradi. 500+ zadovoljnih klijenata."
        keywords="o nama in-stan, stolarija vrnjačka banja istorija, iskustvo stolarije, nameštaj po meri iskustvo, stolarija 20 godina"
        canonical="https://in-stan.rs/#/about"
        structuredData={structuredData}
      />
      <div 
      ref={ref}
      className={`py-20 min-h-screen transition-all duration-1000 relative ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              O NAMA
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">IN-STAN Stolarija Vrnjačka Banja</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Više od 20 godina iskustva u izradi nameštaja po meri, kantovanju i rezanju MDF/HDF ploča
            </p>
          </div>
          
          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Naša priča</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  IN-STAN stolarija je osnovana sa vizijom pružanja vrhunskog kvaliteta u izradi nameštaja po meri. 
                  Kroz više od dve decenije rada, izgradili smo reputaciju pouzdanog partnera za sve vaše potrebe 
                  vezane za stolariju.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Naš tim iskusnih majstora kombinuje tradicionalne tehnike stolarije sa najsavremenijom CNC tehnologijom, 
                  omogućavajući nam da realizujemo projekte bilo koje složenosti sa milimetarskom preciznošću.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Specijalizovani smo za izradu kuhinja po meri, spavaćih soba, dnevnih boravaka, kao i za 
                  profesionalno kantovanje i rezanje MDF/HDF ploča.
                </p>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Zašto odabrati nas?</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Award className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg mb-2">20+ godina iskustva</h3>
                      <p className="text-gray-600">Dugogodišnje iskustvo u stolariji i izradi nameštaja</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Users className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg mb-2">500+ zadovoljnih klijenata</h3>
                      <p className="text-gray-600">Veliki broj realizovanih projekata u Vrnjačkoj Banji i okolini</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Clock className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg mb-2">5 godina garancije</h3>
                      <p className="text-gray-600">Dugotrajno jamstvo kvaliteta na sve naše proizvode</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Star className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg mb-2">CNC tehnologija</h3>
                      <p className="text-gray-600">Najsavremenija oprema za preciznu obradu materijala</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services overview */}
          <div className={`mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Naše usluge</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="text-orange-500" size={28} />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">Nameštaj po meri</h3>
                  <p className="text-gray-600">Kuhinje, spavaće sobe, dnevni boravci</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Hammer className="text-orange-500" size={28} />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">Kantovanje i rezanje</h3>
                  <p className="text-gray-600">Profesionalna obrada MDF/HDF ploča</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-orange-500" size={28} />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">CNC obrada</h3>
                  <p className="text-gray-600">Precizno bušenje i sečenje</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className={`mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Naša radionica</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="/images/a22-min.jpg" 
                    alt="IN-STAN stolarija radionica 1"
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="/images/a23-min.jpg" 
                    alt="IN-STAN stolarija radionica 2"
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="/images/a24-min.jpg" 
                    alt="IN-STAN stolarija radionica 3"
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <p className="text-center text-gray-600 mt-6">
                Pogled u našu modernu radionicu opremljenu najsavremenijom tehnologijom
              </p>
            </div>
          </div>
          
          {/* Call to action */}
          <div className={`text-center transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Spremni za vaš sledeći projekat?</h3>
              <p className="mb-6">Kontaktirajte nas za besplatnu konsultaciju i procenu</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigateToPage('contact')}
                  className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Kontaktiraj nas
                </button>
                <button 
                  onClick={() => navigateToPage('home')}
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
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

export default AboutPage;