import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProductsGallery from '../components/ProductsGallery';
import AboutSection from '../components/AboutSection';
import LocationSection from '../components/LocationSection';
import ContactSection from '../components/ContactSection';
import SEOHead from '../components/SEOHead';

interface HomePageProps {
  heroImages: string[];
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  navigateToPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  heroImages,
  currentImageIndex,
  setCurrentImageIndex,
  navigateToPage
}) => {
  return (
    <>
      <SEOHead
        title="🏆 IN-STAN Stolarija Vrnjačka Banja #1 | Nameštaj po meri | Kantovanje MDF/HDF"
        description="🏆 IN-STAN - Najbolja stolarija u Vrnjačkoj Banji! ✅ Nameštaj po meri ✅ Kantovanje ✅ Rezanje MDF/HDF ✅ CNC obrada ✅ Kuhinje ✅ Spavaće sobe ✅ 20+ godina iskustva ✅ 500+ zadovoljnih klijenata ☎ 063/1125490"
        keywords="IN-STAN, in stan, in-stan, stolarija vrnjačka banja, najbolja stolarija vrnjačka banja, nameštaj po meri vrnjačka banja, kantovanje vrnjačka banja, rezanje MDF HDF vrnjačka banja, CNC obrada vrnjačka banja, kuhinje po meri vrnjačka banja, spavaće sobe vrnjačka banja"
        canonical="https://in-stan.rs/"
      />
      <HeroSection 
        heroImages={heroImages}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        navigateToPage={navigateToPage}
      />
      <ServicesSection navigateToPage={navigateToPage} />
      <ProductsGallery navigateToPage={navigateToPage} />
      <AboutSection />
      <LocationSection />
      <ContactSection />
    </>
  );
};

export default HomePage;