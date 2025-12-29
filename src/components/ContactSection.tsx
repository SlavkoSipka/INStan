import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { sendContactEmail, ContactFormData } from '../utils/emailService';

const ContactSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1, true);
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

  return (
    <section 
      ref={ref}
      id="kontakt" 
      className={`py-20 bg-gray-900 text-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Kontaktirajte nas</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Spremni smo da realizujemo vaše ideje. Pozovite nas ili pošaljite upit.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold mb-8">Pošaljite nam poruku</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ime i prezime"
                  className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email adresa"
                  className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Broj telefona"
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors"
              />
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Opišite vaš projekat..."
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                required
              ></textarea>
              
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
                className={`w-full font-semibold py-4 rounded-lg transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-orange-500 hover:bg-orange-600'
                } text-white`}
              >
                {isSubmitting ? 'Šalje se...' : 'Pošalji poruku'}
              </button>
            </form>
          </div>
          
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold mb-8">Kontakt informacije</h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Telefon</h4>
                  <p className="text-gray-300">+381 63 1125490</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Email</h4>
                  <p className="text-gray-300">instanstolarija@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Adresa</h4>
                  <p className="text-gray-300">Витојевачки Пут 10</p>
                  <p className="text-gray-300">36210 Vrnjačka Banja, Srbija</p>
                </div>
              </div>
              
              <div className="pt-8">
                <h4 className="font-semibold text-lg mb-4">Radno vreme</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Ponedeljak - Petak: 07:00 - 16:00</p>
                  <p>Subota: 07:00 - 14:00</p>
                  <p>Nedelja: Zatvoreno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;