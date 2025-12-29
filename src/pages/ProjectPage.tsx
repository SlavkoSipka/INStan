import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code, Zap, Smartphone, Search, TrendingUp, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface ProjectPageProps {
  navigateToPage: (page: string) => void;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ navigateToPage }) => {
  const { ref, isVisible } = useScrollAnimation();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "O projektu - IN-STAN Stolarija",
    "description": "Detalji o izradi web sajta za IN-STAN stolariju iz Vrnjačke Banje",
    "mainEntity": {
      "@type": "CreativeWork",
      "name": "IN-STAN Web Sajt",
      "creator": {
        "@type": "Organization",
        "name": "AiSajt"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="O projektu - IN-STAN Stolarija | Kako je rađen sajt"
        description="Saznajte više o procesu izrade web sajta za IN-STAN stolariju. Moderni dizajn, optimizovane performanse i SEO pristup koji je pomogao u online prisutnosti kompanije."
        keywords="izrada sajta in-stan, web dizajn stolarija, razvoj sajta vrnjačka banja, SEO optimizacija"
        canonical="https://in-stan.rs/#/o-projektu"
        structuredData={structuredData}
      />
      <div 
        ref={ref}
        className={`py-20 min-h-screen transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              O PROJEKTU
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kako je rađen sajt IN-STAN stolarije
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Priča o transformaciji online prisutnosti tradicionalne stolarije iz Vrnjačke Banje
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Client Description */}
            <section className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">O klijentu</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                IN-STAN je stolarija sa preko 20 godina iskustva u izradi nameštaja po meri, 
                smeštena u Vrnjačkoj Banji. Kompanija se specijalizuje za izradu kuhinja, 
                spavaćih soba, kantovanje i CNC obradu MDF/HDF ploča. Sa velikim brojem 
                zadovoljnih klijenata i dugogodišnjom tradicijom, IN-STAN je tražio način 
                da proširi svoju online prisutnost i privuče nove klijente.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Glavni izazov je bio kreirati sajt koji će profesionalno predstaviti 
                kvalitet njihovog rada, istovremeno pružajući jednostavan način za klijente 
                da se informišu o uslugama i kontaktiraju kompaniju.
              </p>
            </section>

            {/* Project Goals */}
            <section className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ciljevi projekta</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Search className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">SEO optimizacija</h3>
                    <p className="text-gray-600">Poboljšanje vidljivosti u Google pretrazi za ključne termine vezane za stolariju u Vrnjačkoj Banji</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Smartphone className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">Responsive dizajn</h3>
                    <p className="text-gray-600">Potpuno prilagođen prikaz na svim uređajima - desktop, tablet i mobilni telefoni</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Zap className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">Brze performanse</h3>
                    <p className="text-gray-600">Optimizovano učitavanje stranica i brz odziv za bolje korisničko iskustvo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <TrendingUp className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">Povećanje konverzija</h3>
                    <p className="text-gray-600">Jasne pozive na akciju i jednostavne kontakt forme za lakše generisanje upita</p>
                  </div>
                </div>
              </div>
            </section>

            {/* What Was Done */}
            <section className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Šta je urađeno</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Dizajn i korisničko iskustvo</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Kreiran je moderan, čist dizajn koji odražava profesionalizam IN-STAN stolarije. 
                    Paleta boja bazirana na narandžastoj akcentnoj boji kompanije, kombinovana sa 
                    neutralnim tonovima, stvara prijatan vizuelni identitet. Navigacija je intuitivna, 
                    sa jasnom hijerarhijom informacija koja vodi posetioce kroz različite sekcije sajta.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Implementirana je galerija sajta sa modalnim pregledom fotografija, omogućavajući 
                    klijentima da detaljno vide kvalitet izrade nameštaja. Svaka stranica je optimizovana 
                    za brzo učitavanje, sa optimizovanim slikama i efikasnim kodom.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Razvoj i tehnologija</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Sajt je izrađen koristeći React i TypeScript, što garantuje stabilnost i održivost 
                    koda. Implementirana je moderna arhitektura sa komponentnim pristupom, omogućavajući 
                    lako održavanje i buduće proširenje funkcionalnosti. Za stilizovanje je korišćen 
                    Tailwind CSS, što omogućava brz razvoj i konzistentan dizajn kroz ceo sajt.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Kontakt forme su integrisane sa EmailJS servisom, omogućavajući automatsko slanje 
                    upita direktno na email kompanije. Implementirana je i validacija formi sa jasnim 
                    porukama o greškama, poboljšavajući korisničko iskustvo.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">SEO optimizacija</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Implementirana je sveobuhvatna SEO strategija koja uključuje optimizaciju meta tagova, 
                    strukturisanih podataka (Schema.org), i semantički ispravan HTML. Svaka stranica ima 
                    jedinstven title, description i canonical URL, što pomaže Google-u da bolje indeksira 
                    sadržaj. Dodati su i Open Graph tagovi za bolje deljenje na društvenim mrežama.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Kreiran je robots.txt fajl i XML sitemap koji olakšavaju pretraživačima da efikasno 
                    obilaze sajt. Lokalni SEO je posebno naglašen, sa strukturisanim podacima za LocalBusiness 
                    koji pomažu u prikazu u Google Maps i lokalnim pretragama. Za ovu implementaciju smo 
                    saradivali sa <a href="https://aisajt.com" className="text-orange-500 hover:text-orange-600 underline">AiSajt</a>, 
                    koji je pružio stručnu podršku u optimizaciji performansi i SEO aspekata sajta.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Performanse</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sajt je optimizovan za brzinu učitavanja kroz različite tehnike: kompresiju slika, 
                    lazy loading, i efikasno kodiranje. Rezultat je sajt koji se učitava za manje od 2 
                    sekunde na većini uređaja, što značajno poboljšava korisničko iskustvo i pozitivno 
                    utiče na SEO rangiranje.
                  </p>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className={`bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Konkretni rezultati</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    <strong>Brzo učitavanje:</strong> Sajt se učitava za manje od 2 sekunde, što je 
                    značajno ispod industrijskog proseka od 3 sekunde.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    <strong>Poboljšan UX:</strong> Intuitivna navigacija i jasne pozive na akciju 
                    olakšavaju klijentima da pronađu informacije i kontaktiraju kompaniju.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    <strong>SEO optimizacija:</strong> Strukturisani podaci i optimizovani meta tagovi 
                    poboljšavaju vidljivost u Google pretrazi za ključne termine.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    <strong>Mobilna prilagođenost:</strong> Potpuno responsive dizajn osigurava odlično 
                    iskustvo na svim uređajima, što je posebno važno jer većina korisnika pristupa sajtu 
                    sa mobilnih telefona.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    <strong>Profesionalan izgled:</strong> Moderan dizajn koji odražava kvalitet usluga 
                    IN-STAN stolarije i gradi poverenje kod potencijalnih klijenata.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Zaključak</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kreiranje web sajta za IN-STAN stolariju predstavljao je uspešan projekat koji je 
                kombinovao moderne web tehnologije sa fokusom na korisničko iskustvo i SEO optimizaciju. 
                Rezultat je profesionalan, brz i lako upotrebljiv sajt koji efikasno predstavlja 
                usluge kompanije i olakšava komunikaciju sa klijentima.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Implementacija je urađena uz pažljivo planiranje svakog aspekta - od dizajna do 
                tehničke optimizacije. Saradnja sa <a href="https://aisajt.com/izrada-sajtova" className="text-orange-500 hover:text-orange-600 underline">agencijom za izradu web sajtova</a> 
                omogućila je da se projekat realizuje sa fokusom na dugoročne rezultate i održivost. 
                Sajt je sada spreman da služi kao efikasna online platforma za IN-STAN stolariju, 
                pomažući kompaniji da privuče nove klijente i proširi svoju online prisutnost.
              </p>
            </section>

            {/* CTA */}
            <div className={`text-center transition-all duration-1000 delay-1400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Zainteresovani za sličan projekat?</h3>
                <p className="mb-6">Kontaktirajte nas za besplatnu konsultaciju</p>
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

export default ProjectPage;

