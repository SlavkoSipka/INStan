import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ImageModal from './ImageModal';

interface ProductsGalleryProps {
  navigateToPage: (page: string) => void;
}

const ProductsGallery: React.FC<ProductsGalleryProps> = ({ navigateToPage }) => {
  const { ref, isVisible } = useScrollAnimation(0.1, true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isChangingPage, setIsChangingPage] = React.useState(false);
  const imagesPerPage = 6;
  const [selectedImage, setSelectedImage] = React.useState<{
    src: string;
    alt: string;
    index: number;
  } | null>(null);

  // Representative gallery images - only 6 for homepage
  const representativeGalleryImages = [
    '/images/a1-min.jpg',
    '/images/a10-min.jpg',
    '/images/a20-min.jpg',
    '/images/a29-min.jpg',
    '/images/a40-min.jpg',
    '/images/a52-min.jpg'
  ];

  // Calculate pagination
  const totalPages = Math.ceil(representativeGalleryImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = representativeGalleryImages.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setIsChangingPage(true);
    setCurrentPage(page);
    setTimeout(() => {
      setIsChangingPage(false);
    }, 300);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const handleImageClick = (img: string, index: number) => {
    setSelectedImage({
      src: img,
      alt: `Projekat ${index + 1}`,
      index: index,
      isHomepageGalleryImage: true
    });
  };

  const getImageNumber = (imageSrc: string) => {
    // Extract the number from the image URL for modal display
    const match = imageSrc.match(/\/a(\d+)-min\.jpg$/);
    return match ? parseInt(match[1]) : 0;
  };

  return (
    <>
      <section 
        ref={ref}
        id="proizvodi" 
        className={`py-20 bg-gray-50 relative transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          backgroundImage: `url('/images/l.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background overlay for better readability */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-sm"></div>
        
        {/* Content */}
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Naši radovi - Nameštaj Vrnjačka Banja</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pogledajte primere izrade nameštaja po meri, kantovanja i rezanja u Vrnjačkoj Banji
            </p>
          </div>
          
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {representativeGalleryImages.map((img, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
                onClick={() => handleImageClick(img, index)}
              >
                <img 
                  src={img} 
                  alt=""
                  className="w-full h-32 sm:h-48 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              onClick={() => navigateToPage('gallery')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Pogledaj kompletnu galeriju
            </button>
          </div>
        </div>
        </div>
      </section>
      
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

export default ProductsGallery;