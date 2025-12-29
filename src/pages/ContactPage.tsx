import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import { sendContactEmail, ContactFormData } from '../utils/emailService';
import SEOHead from '../components/SEOHead';

interface ContactPageProps {
  navigateToPage: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ navigateToPage }) => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Molimo popunite sva obavezna polja (ime, email, poruka)');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendContactEmail(formData);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "IN-STAN Stolarija",
      "telephone": "+381631125490",
      "email": "instanstolarija@gmail.com",
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
        title="Kontakt - IN-STAN Stolarija Vrnjačka Banja | ☎ 063/1125490"
        description="Kontaktirajte IN-STAN stolariju u Vrnjačkoj Banji. Telefon: 063/1125490, Email: instanstolarija@gmail.com. Besplatna konsultacija za nameštaj po meri."
        keywords="kontakt in-stan stolarija, telefon stolarija vrnjačka banja, email stolarija, adresa stolarija vrnjačka banja, konsultacija nameštaj"
        canonical="https://in-stan.rs/#/contact"
        structuredData={structuredData}
      />
      <div 
      ref={ref}
      className={`py-20 min-h-screen transition-all duration-1000 relative ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        backgroundImage: `url('https://aislike.rs/panic/e.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              KONTAKTIRAJTE NAS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">Kontakt - Stolarija Vrnjačka Banja</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              IN-STAN stolarija Vrnjačka Banja - spremni smo da realizujemo vaše ideje za nameštaj po meri. Pozovite nas za besplatnu konsultaciju.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500 p-3 rounded-lg mr-4">
                    <Send className="text-white" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Pošaljite nam poruku</h2>
                </div>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ime i prezime"
                        className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all"
                        required
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email adresa"
                        className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Broj telefona"
                      className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all"
                    />
                  </div>
                  
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-gray-400" size={20} />
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Opišite vaš projekat ili postavite pitanje..."
                      className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                      Poruka je uspešno poslata! Odgovorićemo vam u najkraćem roku.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                      Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo ili nas kontaktirajte direktno.
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-semibold py-4 rounded-lg transition-all duration-300 transform shadow-lg hover:shadow-xl ${
                      isSubmitting 
                        ? 'bg-gray-500 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:scale-105'
                    } text-white`}
                  >
                    {isSubmitting ? 'Šalje se...' : 'Pošalji poruku'}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Kontakt informacije</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-4 rounded-xl">
                      <Phone className="text-orange-500" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-xl mb-2">Telefon</h3>
                      <a 
                        href="tel:+381631125490"
                        className="text-gray-600 text-lg hover:text-orange-500 transition-colors"
                      >
                        +381 63 1125490
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Pozovite nas radnim danima 07:00-16:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-4 rounded-xl">
                      <Mail className="text-orange-500" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-xl mb-2">Email</h3>
                      <a 
                        href="mailto:instanstolarija@gmail.com"
                        className="text-gray-600 text-base hover:text-orange-500 transition-colors"
                      >
                        instanstolarija@gmail.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Odgovaramo u roku od 24h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-4 rounded-xl">
                      <MapPin className="text-orange-500" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-xl mb-2">Adresa</h3>
                      <p className="text-gray-600 text-lg">Витојевачки Пут 10</p>
                      <p className="text-gray-600 text-lg">36210 Vrnjačka Banja, Srbija</p>
                      <button 
                        onClick={() => navigateToPage('location')}
                        className="text-orange-500 hover:text-orange-600 text-sm font-medium mt-1 transition-colors"
                      >
                        Pogledaj na mapi →
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-4 rounded-xl">
                      <Clock className="text-orange-500" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-xl mb-2">Radno vreme</h3>
                      <div className="space-y-1 text-gray-600">
                        <p>Ponedeljak - Petak: 07:00 - 16:00</p>
                        <p>Subota: 07:00 - 14:00</p>
                        <p>Nedelja: Zatvoreno</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                  <h4 className="text-orange-800 font-bold text-lg mb-2">💡 Besplatna konsultacija</h4>
                  <p className="text-orange-800">
                    Pozovite nas za besplatnu konsultaciju i procenu vašeg projekta. Dolazimo na teren!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              onClick={() => navigateToPage('home')}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/50 hover:border-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Nazad na početnu
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;