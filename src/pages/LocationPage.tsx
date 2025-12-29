import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface LocationPageProps {
  navigateToPage: (page: string) => void;
}

const LocationPage: React.FC<LocationPageProps> = ({ navigateToPage }) => {
  const { ref, isVisible } = useScrollAnimation();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "IN-STAN Stolarija",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Витојевачки Пут 10",
      "addressLocality": "Vrnjačka Banja",
      "postalCode": "36210",
      "addressCountry": "RS"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.635693,
      "longitude": 20.905319
    }
  };

  return (
    <>
      <SEOHead
        title="Lokacija - IN-STAN Stolarija Vrnjačka Banja | Витојевачки Пут 10"
        description="Posetite IN-STAN stolariju u Vrnjačkoj Banji. Adresa: Витојевачки Пут 10, 36210 Vrnjačka Banja. Radno vreme: Pon-Pet 07-16h, Sub 07-14h."
        keywords="lokacija in-stan stolarija, adresa stolarija vrnjačka banja, radno vreme stolarija, kako do stolarije, mapa lokacija"
        canonical="https://in-stan.rs/#/location"
        structuredData={structuredData}
      />
      <div 
      ref={ref}
      className={`py-20 min-h-screen transition-all duration-1000 relative ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        backgroundImage: `url('https://aislike.rs/panic/lokacija.webp')`,
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
              NAŠA LOKACIJA
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 drop-shadow-lg">Lokacija - IN-STAN Stolarija Vrnjačka Banja</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Posetite našu stolariju u Vrnjačkoj Banji - izrada nameštaja po meri, kantovanje, rezanje MDF/HDF ploča
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-xl">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Kontakt informacije</h2>
                
                <div className="space-y-6 lg:space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 lg:p-4 rounded-lg lg:rounded-xl">
                      <MapPin className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg lg:text-xl mb-2 lg:mb-3">Adresa</h3>
                      <p className="text-gray-600 text-base lg:text-lg">Витојевачки Пут 10</p>
                      <p className="text-gray-600 text-base lg:text-lg">36210 Vrnjačka Banja, Srbija</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 lg:p-4 rounded-lg lg:rounded-xl">
                      <Clock className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg lg:text-xl mb-2 lg:mb-3">Radno vreme</h3>
                      <div className="space-y-1 lg:space-y-2 text-gray-600 text-base lg:text-lg">
                        <p>Ponedeljak - Petak: 07:00 - 16:00</p>
                        <p>Subota: 07:00 - 14:00</p>
                        <p>Nedelja: Zatvoreno</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 lg:p-4 rounded-lg lg:rounded-xl">
                      <Phone className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg lg:text-xl mb-2 lg:mb-3">Telefon</h3>
                      <p className="text-gray-600 text-base lg:text-lg">+381 63 1125490</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 lg:p-4 rounded-lg lg:rounded-xl">
                      <Mail className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg lg:text-xl mb-2 lg:mb-3">Email</h3>
                      <p className="text-gray-600 text-base lg:text-lg">instanstolarija@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Navigation className="text-orange-600" size={24} />
                    <h4 className="text-orange-800 font-bold text-base lg:text-lg">Napomena</h4>
                  </div>
                  <p className="text-orange-800 font-medium text-sm lg:text-base">
                    Preporučujemo da nas pozovete pre dolaska kako bismo se pripremili za vaš obilazak i dali vam najbolju uslugu.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-xl">
                <div className="h-64 lg:h-[500px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.234567890123!2d20.905319388099958!3d43.635692903226584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM4JzA4LjUiTiAyMMKwNTQnMTkuMSJF!5e0!3m2!1sen!2srs!4v1753738682257!5m2!1sen!2srs"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="IN-STAN Lokacija - Витојевачки Пут 10, Vrnjačka Banja"
                  ></iframe>
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="font-bold text-gray-800 text-lg lg:text-xl mb-2 lg:mb-3">Kako do nas</h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Nalazimo se u ulici Витојевачки Пут 10 u Vrnjačkoj Banji. Parking je dostupan ispred hale. 
                    Lako nas možete pronaći koristeći GPS navigaciju.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`text-center mt-12 lg:mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Planirate posetu?</h3>
              <p className="text-gray-600 text-sm lg:text-base mb-6">
                Pozovite nas unapred da se dogovorimo oko termina i pripremimo sve potrebno za vaš obilazak
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+381631125490"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 lg:px-8 py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Pozovi nas
                </a>
                <button 
                  onClick={() => navigateToPage('home')}
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 lg:px-8 py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300"
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

export default LocationPage;