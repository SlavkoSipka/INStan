import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowLeft, Package, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import ImageModal from '../components/ImageModal';

interface WorkSurfacesPageProps {
  navigateToPage: (page: string) => void;
}

const WorkSurfacesPage: React.FC<WorkSurfacesPageProps> = ({ navigateToPage }) => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isChangingPage, setIsChangingPage] = React.useState(false);
  const productsPerPage = 12;
  const [selectedImage, setSelectedImage] = React.useState<{
    src: string;
    alt: string;
    index: number;
  } | null>(null);

  // Sample work surfaces - you can replace with actual data
  const workSurfaces = [
    { 
      name: '5157 Quartz 38mm Springdale Travertine', 
      image: 'https://aislike.rs/panic/Radna ploca 5157 Quartz 38mm Springdale Travertine.jpg', 
      description: 'Elegantna kvarc radna ploča sa travertin teksturom' 
    },
    { 
      name: '3164 Quarz 38mm Kinsale Oak', 
      image: 'https://aislike.rs/panic/Radna ploca 3164 Quarz 38mm Kinsale Oak.jpg', 
      description: 'Kvarc radna ploča sa hrast teksturom' 
    },
    { 
      name: '5191 Quartz 38mm Citrine', 
      image: 'https://aislike.rs/panic/Radna ploca 5191 Quartz 38mm Citrine.jpg', 
      description: 'Svetla kvarc radna ploča Citrine' 
    },
    { 
      name: '5107 Stone 38mm Silverston Stone', 
      image: 'https://aislike.rs/panic/Radna ploca 5107 Stone 38mm Silverston Stone.jpg', 
      description: 'Kamena radna ploča Silverston' 
    },
    { 
      name: '3220 Quarz 38mm Eureka Oak', 
      image: 'https://aislike.rs/panic/Radna ploca 3220 Quarz 38mm Eureka Oak.jpg', 
      description: 'Kvarc radna ploča Eureka Oak' 
    },
    { 
      name: '3152 Quarz 38mm Alexandria Teak', 
      image: 'https://aislike.rs/panic/Radna ploca 3152 Quarz 38mm Alexandria Teak.jpg', 
      description: 'Kvarc radna ploča Alexandria Teak' 
    }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(workSurfaces.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = workSurfaces.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setIsChangingPage(true);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsChangingPage(false);
    }, 100);
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

  const handleImageClick = (product: any, index: number) => {
    setSelectedImage({
      src: product.image,
      alt: product.name,
      index: startIndex + index
    });
  };

  return (
    <div 
      ref={ref}
      className={`py-20 min-h-screen bg-gray-50 transition-all duration-1000 relative ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
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
          {/* Header */}
          <div className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              onClick={() => navigateToPage('home')}
              className="flex items-center text-orange-500 hover:text-orange-600 mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Nazad na početnu
            </button>
            
            <div className="flex items-center mb-6">
              <div className="bg-orange-500 p-3 rounded-lg mr-4">
                <Layers className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Radne ploče</h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
                  Vrhunske radne površine za vašu kuhinju
                </p>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className={`mb-8 text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-lg text-gray-700 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              Nudimo širok izbor radnih ploča od granita, mramora i kvarca. Sve ploče se izrađuju po meri sa profesionalnom ugradnjom.
            </p>
          </div>

          {/* Pagination Info */}
          {totalPages > 1 && (
            <div className={`flex justify-between items-center mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="text-gray-600 text-sm md:text-base">
                Stranica {currentPage} od {totalPages}
              </div>
              <div className="flex items-center space-x-1 md:space-x-2">
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className={`p-1.5 md:p-2 rounded-lg transition-all duration-300 ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-105'
                  }`}
                >
                  <ChevronLeft size={16} className="md:w-5 md:h-5" />
                </button>
                <span className="px-2 py-1 md:px-4 md:py-2 bg-orange-100 text-orange-600 rounded-lg font-semibold text-sm md:text-base">
                  {currentPage}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className={`p-1.5 md:p-2 rounded-lg transition-all duration-300 ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-105'
                  }`}
                >
                  <ChevronRight size={16} className="md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className={`products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${
            isChangingPage ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            {currentProducts.map((product, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                  isVisible && !isChangingPage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isChangingPage ? '0ms' : `${400 + (index % 12) * 50}ms`
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                    loading="lazy"
                    onClick={() => handleImageClick(product, index)}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Pagination */}
          {totalPages > 1 && (
            <div className={`flex justify-center items-center mt-12 space-x-2 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`flex items-center px-3 py-2 md:px-4 md:py-2 rounded-lg transition-all duration-300 text-sm md:text-base ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-105'
                }`}
              >
                <ChevronLeft size={14} className="mr-1 md:w-4 md:h-4" />
                Prethodna
              </button>
              
              {/* Page Numbers */}
              <div className="flex space-x-1 md:space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-2 py-1 md:px-3 md:py-2 rounded-lg transition-all duration-300 text-sm md:text-base ${
                      page === currentPage
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center px-3 py-2 md:px-4 md:py-2 rounded-lg transition-all duration-300 text-sm md:text-base ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-105'
                }`}
              >
                Sledeća
                <ChevronRight size={14} className="ml-1 md:w-4 md:h-4" />
              </button>
            </div>
          )}

          {/* Info Section */}
          <div className={`mt-16 bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">O radnim pločama</h2>
            <p className="text-gray-600 mb-4">
              Radne ploče su srce svake kuhinje. Nudimo vrhunske materijale kao što su granit, mramor i kvarc, 
              koji kombinuju funkcionalnost sa estetskim izgledom. Sve ploče se izrađuju po meri i profesionalno ugrađuju.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="text-orange-500" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Granit</h3>
                <p className="text-gray-600 text-sm">Prirodni kamen, otporan na habanje</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="text-orange-500" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Mramor</h3>
                <p className="text-gray-600 text-sm">Elegantan i luksuzni izgled</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="text-orange-500" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Kvarc</h3>
                <p className="text-gray-600 text-sm">Moderan i praktičan materijal</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className={`text-center mt-12 transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Zainteresovani ste za radne ploče?</h3>
              <p className="mb-6">Kontaktirajte nas za konsultaciju i besplatan merenje prostora</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigateToPage('contact')}
                  className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Kontaktiraj nas
                </button>
                <a 
                  href="tel:+381631125490"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Pozovi odmah
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
        imageIndex={selectedImage?.index || 0}
      />
    </div>
  );
};

export default WorkSurfacesPage;