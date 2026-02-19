import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ImageModal from '../components/ImageModal';
import SEOHead from '../components/SEOHead';

interface GalleryPageProps {
  navigateToPage: (page: string) => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ navigateToPage }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [isMobileVisible, setIsMobileVisible] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<{
    src: string;
    alt: string;
    index: number;
  } | null>(null);

  // Activate animation immediately on mobile
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsMobileVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Generate all gallery images (1-52)
  const existingGalleryImages = Array.from({ length: 52 }, (_, i) => 
    `/images/${i + 1}-min.jpg`
  );

  // Homepage gallery images (a1, a3, a6, etc.)
  const homepageGalleryImages = [
    '/images/a1-min.jpg',
    '/images/a3-min.jpg',
    '/images/a6-min.jpg',
    '/images/a8-min.jpg',
    '/images/a9-min.jpg',
    '/images/a10-min.jpg',
    '/images/a13-min.jpg',
    '/images/a14-min.jpg',
    '/images/a15-min.jpg',
    '/images/a16-min.jpg',
    '/images/a17-min.jpg',
    '/images/a19-min.jpg',
    '/images/a20-min.jpg',
    '/images/a21-min.jpg',
    '/images/a26-min.jpg',
    '/images/a27-min.jpg',
    '/images/a28-min.jpg',
    '/images/a29-min.jpg',
    '/images/a33-min.jpg',
    '/images/a34-min.jpg',
    '/images/a36-min.jpg',
    '/images/a38-min.jpg',
    '/images/a40-min.jpg',
    '/images/a41-min.jpg',
    '/images/a42-min.jpg',
    '/images/a44-min.jpg',
    '/images/a45-min.jpg',
    '/images/a46-min.jpg',
    '/images/a48-min.jpg',
    '/images/a49-min.jpg',
    '/images/a50-min.jpg',
    '/images/a52-min.jpg'
  ];

  // Combine all images - existing first, then homepage gallery images
  const allGalleryImages = [...existingGalleryImages, ...homepageGalleryImages];

  const handleImageClick = (img: string, index: number) => {
    // Check if this is a homepage gallery image (a-series)
    const isHomepageImage = img.includes('/a') && img.includes('-min.jpg');
    
    setSelectedImage({
      src: img,
      alt: "",
      index,
      isHomepageGalleryImage: isHomepageImage
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Galerija radova IN-STAN Stolarija",
    "description": "Galerija naših radova - nameštaj po meri, kuhinje, spavaće sobe iz Vrnjačke Banje",
    "creator": {
      "@type": "LocalBusiness",
      "name": "IN-STAN Stolarija"
    }
  };

  return (
    <>
      <SEOHead
        title="Galerija - IN-STAN Stolarija Vrnjačka Banja | Naši radovi nameštaja po meri"
        description="Pogledajte galeriju naših radova - kuhinje po meri, spavaće sobe, nameštaj iz Vrnjačke Banje. Preko 50 fotografija realizovanih projekata."
        keywords="galerija stolarija vrnjačka banja, radovi nameštaj po meri, kuhinje galerija, spavaće sobe fotografije, realizovani projekti stolarija"
        canonical="https://in-stan.rs/#/gallery"
        structuredData={structuredData}
      />
      <div 
        ref={ref}
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isMobileVisible || (window.innerWidth >= 1024 && isVisible) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isMobileVisible || (window.innerWidth >= 1024 && isVisible) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              KOMPLETNA GALERIJA
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Galerija radova - Namestaj IN-STAN Vrnjačka Banja</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pogledajte kompletnu galeriju naših radova - izrada nameštaja po meri u Vrnjačkoj Banji, kuhinje, spavaće sobe, kantovanje i rezanje MDF/HDF ploča
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
            {allGalleryImages.map((img, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  isMobileVisible || (window.innerWidth >= 1024 && isVisible) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + (index % 24) * 30}ms` }}
                onClick={() => handleImageClick(img, index)}
              >
                <img 
                  src={img} 
                  alt=""
                  className="w-full h-32 sm:h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isMobileVisible || (window.innerWidth >= 1024 && isVisible) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              onClick={() => navigateToPage('home')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Nazad na početnu
            </button>
          </div>
        </div>
      </div>
      
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
        imageIndex={selectedImage?.index || 0}
        isHomepageGalleryImage={selectedImage?.isHomepageGalleryImage || false}
      />
    </>
  );
};

export default GalleryPage;