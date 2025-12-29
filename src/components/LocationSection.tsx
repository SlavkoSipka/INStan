import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const LocationSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1, true);

  return (
    <section 
      ref={ref}
      id="lokacija" 
      className={`py-20 bg-gray-50 relative transition-all duration-1000 ${
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
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            NAŠA LOKACIJA
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Gde nas možete pronaći</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Posetite našu radionicu
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontakt informacije</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">Adresa</h4>
                    <p className="text-gray-600">Витојевачки Пут 10</p>
                    <p className="text-gray-600">36210 Vrnjačka Banja, Srbija</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">Radno vreme</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Ponedeljak - Petak: 07:00 - 16:00</p>
                      <p>Subota: 07:00 - 14:00</p>
                      <p>Nedelja: Zatvoreno</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Phone className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">Telefon</h4>
                    <p className="text-gray-600">+381 63 1125490</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                <p className="text-orange-800 font-medium">
                  💡 Preporučujemo da nas pozovete pre dolaska kako bismo se pripremili za vaš obilazak.
                </p>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-96 w-full">
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
              <div className="p-6">
                <h4 className="font-semibold text-gray-800 mb-2">Kako do nas</h4>
                <p className="text-gray-600 text-sm">
                  Nalazimo se u ulici Витојевачки Пут 10 u Vrnjačkoj Banji. Parking je dostupan ispred hale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default LocationSection;