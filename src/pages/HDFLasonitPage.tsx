import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowLeft, Package, ChevronLeft, ChevronRight } from 'lucide-react';
import ImageModal from '../components/ImageModal';

interface HDFLasonitPageProps {
  navigateToPage: (page: string) => void;
}

const HDFLasonitPage: React.FC<HDFLasonitPageProps> = ({ navigateToPage }) => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isChangingPage, setIsChangingPage] = React.useState(false);
  const productsPerPage = 24;
  const [selectedImage, setSelectedImage] = React.useState<{
    src: string;
    alt: string;
    index: number;
  } | null>(null);

  // HDF i lesonit products - you can replace these with actual product data
  const hdfLasonitProducts = [
    { name: 'HDF antracit', image: 'HDF antracit.jpg' },
    { name: 'HDF beli', image: 'HDF beli.jpg' },
    { name: 'HDF bež', image: 'HDF bež.jpg' },
    { name: 'HDF bukva', image: 'HDF bukva.jpg' },
    { name: 'HDF crni', image: 'HDF crni.jpg' },
    { name: 'HDF hrast svetli', image: 'HDF hrast svetli.jpg' },
    { name: 'HDF Hrast zlatni craft K003PW', image: 'HDF Hrast zlatni craft K003PW.jpg' },
    { name: 'HDF orah', image: 'HDF orah.jpg' },
    { name: 'HDF sivi', image: 'HDF sivi.jpg' },
    { name: 'HDF trešnja', image: 'HDF trešnja.jpg' },
    { name: 'HDF wenge', image: 'HDF wenge.jpg' }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(hdfLasonitProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = hdfLasonitProducts.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setIsChangingPage(true);
    setCurrentPage(page);
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Reset animation state after a short delay
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
      src: `https://aislike.rs/panic/${product.image}`,
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
        backgroundImage: `url('https://aislike.rs/panic/s.jpg')`,
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
              <Package className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">HDF i Lesonit</h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
                Kompletna kolekcija HDF i lesonit materijala
              </p>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className={`mb-8 text-center transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-gray-700 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            Visokokvalitetni HDF i lesonit materijali za različite primene u stolariji i dizajnu enterijera. Za kompletnu ponudu kontaktirajte nas.
          </p>
        </div>

        {/* Pagination Info */}
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

        {/* Products Grid */}
        <div className={`products-grid grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 transition-all duration-500 ${
          isChangingPage ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          {currentProducts.map((product, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                isVisible && !isChangingPage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isChangingPage ? '0ms' : `${400 + (index % 24) * 30}ms`
              }}
            >
              <div className="relative h-32 sm:h-40 md:h-64 overflow-hidden cursor-pointer" onClick={() => handleImageClick(product, index)}>
                <img 
                  src={`https://aislike.rs/panic/${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              <div className="p-2 sm:p-3 md:p-6">
                <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination */}
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

        {/* Info Section */}
        <div className={`mt-16 bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">O HDF i lesonit materijalima</h2>
          <p className="text-gray-600 mb-4">
            HDF (High Density Fiberboard) i lesonit su visokokvalitetni pločasti materijali koji se koriste 
            u stolariji za različite primene. Karakterišu ih visoka gustina, glatka površina i odlična obradivost.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="text-orange-500" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Visoka gustina</h3>
              <p className="text-gray-600 text-sm">Kompaktna struktura za maksimalnu čvrstoću</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="text-orange-500" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Glatka površina</h3>
              <p className="text-gray-600 text-sm">Idealna za lakiranje i laminiranje</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="text-orange-500" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Univerzalna primena</h3>
              <p className="text-gray-600 text-sm">Pogodni za različite stolarijske radove</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Zainteresovani ste za neki od materijala?</h3>
            <p className="mb-6">Kontaktirajte nas za cene, dostupnost i dodatne informacije</p>
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

export default HDFLasonitPage;