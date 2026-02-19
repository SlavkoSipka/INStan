import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowLeft, Package, ChevronLeft, ChevronRight } from 'lucide-react';
import ImageModal from '../components/ImageModal';

interface UniverPageProps {
  navigateToPage: (page: string) => void;
}

const UniverPage: React.FC<UniverPageProps> = ({ navigateToPage }) => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isChangingPage, setIsChangingPage] = React.useState(false);
  const productsPerPage = 24;
  const [selectedImage, setSelectedImage] = React.useState<{
    src: string;
    alt: string;
    index: number;
  } | null>(null);

  // All Univer products based on the provided image names
  const univerProducts = [
    { name: 'Kastamonu A316 Nairobi Wenge PS11', image: 'UNIVER KASTAMONU A316 NAIROBI WENGE PS11.webp' },
    { name: 'Kastamonu A353 Teak PS17', image: 'UNIVER KASTAMONU A353 TEAK PS17.webp' },
    { name: 'Kastamonu A357 SMRČA Bela PS19', image: 'UNIVER KASTAMONU A357 SMRČA BELA PS19webp.webp' },
    { name: 'Kastamonu A359 TREŠNJA Morello PS17', image: 'UNIVER KASTAMONU A359 TREŠNJA MORELLO PS17.webp' },
    { name: 'Kastamonu A395 Kordoba PS19', image: 'UNIVER KASTAMONU A395 KORDOBA PS19.webp' },
    { name: 'Kastamonu A396 Jasen Pesak PS19', image: 'UNIVER KASTAMONU A396 JASEN PESAK PS19.webp' },
    { name: 'Kastamonu A397 Atlantis PS19', image: 'UNIVER KASTAMONU A397 ATLANTIS PS19.webp' },
    { name: 'Kastamonu A411 Sakaria PS19', image: 'UNIVER KASTAMONU A411 SAKARIA PS19.webp' },
    { name: 'Kastamonu A414 Antracit Hrast PS19', image: 'UNIVER KASTAMONU A414 ANTRACIT HRAST PS19.webp' },
    { name: 'Kastamonu A415 Bianco PS19', image: 'UNIVER KASTAMONU A415 BIANCO PS19.webp' },
    { name: 'Kastamonu A417 Havana PS29', image: 'UNIVER KASTAMONU A417 HAVANA PS29.webp' },
    { name: 'Kastamonu A423 San Remo PS29', image: 'UNIVER KASTAMONU A423 SAN REMO PS29.webp' },
    { name: 'Kastamonu A427 PS29 Hrast Barok', image: 'UNIVER KASTAMONU A427 PS29 HRAST BAROK.webp' },
    { name: 'Kastamonu A428 PS19 Antique Pine', image: 'UNIVER KASTAMONU A428 PS19 ANTIQUE PINE.webp' },
    { name: 'Kastamonu A429 PS29 Etna', image: 'UNIVER KASTAMONU A429 PS29 ETNA.webp' },
    { name: 'Kastamonu A431 Monza PS29', image: 'UNIVER KASTAMONU A431 MONZA PS29.webp' },
    { name: 'Kastamonu A439 Ibica PS11', image: 'UNIVER KASTAMONU A439 IBICA PS11.webp' },
    { name: 'Kastamonu A440 PS29 Alabama Oak', image: 'UNIVER KASTAMONU A440 PS29 ALABAMA OAK.webp' },
    { name: 'Kastamonu A458 PS 29 Charleston Oak', image: 'UNIVER KASTAMONU A458 PS 29 CHARLESTON OAK.webp' },
    { name: 'Kastamonu A474 PS19 Soho', image: 'UNIVER KASTAMONU A474 PS19 SOHO.webp' },
    { name: 'Kastamonu A480 PS29 Capri', image: 'UNIVER KASTAMONU A480 PS29 CAPRI.webp' },
    { name: 'Kastamonu A506 Petra Oak PS19', image: 'UNIVER KASTAMONU A506 PETRA OAK PS19.webp' },
    { name: 'Kastamonu A525 Wotak Oak PS29', image: 'UNIVER KASTAMONU A525 WOTAK OAK PS29.webp' },
    { name: 'Kastamonu A566 PS29 Artisan', image: 'UNIVER KASTAMONU A566 PS29 ARTISAN.webp' },
    { name: 'Kastamonu A800 Trešnja PS17', image: 'UNIVER KASTAMONU A800 TREŠNJA PS17.webp' },
    { name: 'Kastamonu A802 Samerberg Bukva PS17', image: 'UNIVER KASTAMONU A802 SAMERBERG BUKVA PS17.webp' },
    { name: 'Kastamonu A804 Sonoma Hrast PS17', image: 'UNIVER KASTAMONU A804 SONOMA HRAST PS17.webp' },
    { name: 'Kastamonu A805 Canterbury Hrast PS17', image: 'UNIVER KASTAMONU A805 CANTERBURY HRAST PS17.webp' },
    { name: 'Kastamonu A806 Marburg Hrast PS11', image: 'UNIVER KASTAMONU A806 MARBURG HRAST PS11.webp' },
    { name: 'Kastamonu A808 Windsor Hrast PS11', image: 'UNIVER KASTAMONU A808 WINDSOR HRAST PS11.webp' },
    { name: 'Kastamonu A809 Bagrem PS11', image: 'UNIVER KASTAMONU A809 BAGREM PS11.webp' },
    { name: 'Kastamonu A810 Trešnja Morgana PS11', image: 'UNIVER KASTAMONU A810 TREŠNJA MORGANA PS11.webp' },
    { name: 'Kastamonu A811 PS11 Aida Orah', image: 'UNIVER KASTAMONU A811 PS11 AIDA ORAH.webp' },
    { name: 'Kastamonu A817 Yorkshir Hrast PS11', image: 'UNIVER KASTAMONU A817 YORKSHIR HRAST PS11.webp' },
    { name: 'Kastamonu A818 Bavarska Bukva PS17', image: 'UNIVER KASTAMONU A818 BAVARSKA BUKVA PS17.webp' },
    { name: 'Kastamonu A819 Miami Hrast PS17', image: 'UNIVER KASTAMONU A819 MIAMI HRAST PS17.webp' },
    { name: 'Kastamonu A820 Rift Hrast PS19', image: 'UNIVER KASTAMONU A820 RIFT HRAST PS19.webp' },
    { name: 'Kastamonu A821 Šampanj Hrast PS17', image: 'UNIVER KASTAMONU A821 ŠAMPANJ HRAST PS17.webp' },
    { name: 'Kastamonu A822 Adria Orah PS11', image: 'UNIVER KASTAMONU A822 ADRIA ORAH PS11.webp' },
    { name: 'Kastamonu A824 Landino Hrast PS17', image: 'UNIVER KASTAMONU A824 LANDINO HRAST PS17.webp' },
    { name: 'Kastamonu A825 Karme Orah PS17', image: 'UNIVER KASTAMONU A825 KARME ORAH PS17.webp' },
    { name: 'Kastamonu A827 Breza PS11', image: 'UNIVER KASTAMONU A827 BREZA PS11.webp' },
    { name: 'Kastamonu A829 Perrier Hrast Svetli PS19', image: 'UNIVER KASTAMONU A829 PERRIER HRAST SVETLI PS19.webp' },
    { name: 'Kastamonu A830 Perrier Hrast Tamni PS19', image: 'UNIVER KASTAMONU A830 PERRIER HRAST TAMNI PS19.webp' },
    { name: 'Kastamonu A831 Cantori Hrast PS29', image: 'UNIVER KASTAMONU A831 CANTORI HRAST PS29.webp' },
    { name: 'Kastamonu A832 Mahagony PS17', image: 'UNIVER KASTAMONU A832 MAHAGONY PS17.webp' },
    { name: 'Kastamonu A833 Hrast Grande PS17', image: 'UNIVER KASTAMONU A833 HRAST GRANDE PS17.webp' },
    { name: 'Kastamonu A835 Divlja Kruška PS11', image: 'UNIVER KASTAMONU A835 DIVLJA KRUŠKA PS11.webp' },
    { name: 'Kastamonu A836 Čoko Bukva PS11', image: 'UNIVER KASTAMONU A836 ČOKO BUKVA PS11.webp' },
    { name: 'Kastamonu A838 Nero PS19', image: 'UNIVER KASTAMONU A838 NERO PS19.webp' },
    { name: 'Kastamonu A839 Ariš Krem PS19', image: 'UNIVER KASTAMONU A839 ARIŠ KREM PS19.webp' },
    { name: 'Kastamonu A842 Svetla Sonoma PS19', image: 'UNIVER KASTAMONU A842 SVETLA SONOMA PS19.webp' },
    { name: 'Kastamonu A845 Brest PS29', image: 'UNIVER KASTAMONU A845 BREST PS29.webp' },
    { name: 'Kastamonu A847 Canyon Hrast PS19', image: 'UNIVER KASTAMONU A847 CANYON HRAST PS19.webp' },
    { name: 'Kastamonu A859 Bukva Viktoria PS29', image: 'UNIVER KASTAMONU A859 BUKVA VIKTORIA PS29.webp' },
    { name: 'Kastamonu A860 Korona Hrast PS29', image: 'UNIVER KASTAMONU A860 KORONA HRAST PS29.webp' },
    { name: 'Kastamonu A865 Sherwood Hrast PS19', image: 'UNIVER KASTAMONU A865 SHERWOOD HRAST PS19.webp' },
    { name: 'Kastamonu A866 Sonoma Hrast Tamni PS19', image: 'UNIVER KASTAMONU A866 SONOMA HRAST TAMNI PS19.webp' },
    { name: 'Kastamonu A869 PS29 Virginia', image: 'UNIVER KASTAMONU A869 PS29 VIRGINIA.webp' },
    { name: 'Kastamonu A874 PS22 Brown Kitami', image: 'UNIVER KASTAMONU A874 PS22 BROWN KITAMI.webp' },
    { name: 'Kastamonu A905 PS29 Celtic Oak', image: 'UNIVER KASTAMONU A905 PS29 CELTIC OAK.webp' },
    { name: 'Kastamonu A906 PS29 Dark Celtic', image: 'UNIVER KASTAMONU A906 PS29 DARK CELTIC.webp' },
    { name: 'Kastamonu D102 Bez PS30', image: 'UNIVER KASTAMONU D102 BEŽ PS30.webp' },
    { name: 'Kastamonu D107 Crna PS14 Kora', image: 'UNIVER KASTAMONU D107 CRNA PS14 KORA.webp' },
    { name: 'Kastamonu D107 Crna-Sjaj PS12', image: 'UNIVER KASTAMONU D107 CRNA-SJAJ PS12.webp' },
    { name: 'Kastamonu D108 Plava PS11', image: 'UNIVER KASTAMONU D108 PLAVA PS11.webp' },
    { name: 'Kastamonu D114 Narandžasta PS11', image: 'UNIVER KASTAMONU D114 NARANDŽASTA PS11.webp' },
    { name: 'Kastamonu D116 Metalik Siva PS14', image: 'UNIVER KASTAMONU D116 METALIK SIVA PS14.webp' },
    { name: 'Kastamonu D117 Crvena PS11', image: 'UNIVER KASTAMONU D117 CRVENA PS11.webp' },
    { name: 'Kastamonu D118 Vanila PS30', image: 'UNIVER KASTAMONU D118 VANILA PS30.webp' },
    { name: 'Kastamonu D122 Bez Pesak PS30', image: 'UNIVER KASTAMONU D122 BEŽ PESAK PS30.webp' },
    { name: 'Kastamonu D123 Svetlo Siva PS30', image: 'UNIVER KASTAMONU D123 SVETLO SIVA PS30.webp' },
    { name: 'Kastamonu D125 Pink PS11', image: 'UNIVER KASTAMONU D125 PINK PS11.webp' },
    { name: 'Kastamonu D126 Kapućino PS14', image: 'UNIVER KASTAMONU D126 KAPUĆINO PS14.webp' },
    { name: 'Kastamonu D129 Bela Front-Glat PS10', image: 'UNIVER KASTAMONU D129 BELA FRONT-GLAT PS10.webp' },
    { name: 'Kastamonu D129 Bela Front-Kora PS14', image: 'UNIVER KASTAMONU D129 BELA FRONT-KORA PS14.webp' },
    { name: 'Kastamonu D129 Bela Sjaj PS12', image: 'UNIVER KASTAMONU D129 BELA SJAJ PS12.webp' },
    { name: 'Kastamonu D133 Žuta PS11', image: 'UNIVER KASTAMONU D133 ŽUTA PS11.webp' },
    { name: 'Kastamonu D134 Pastel Zelena PS11', image: 'UNIVER KASTAMONU D134 PASTEL ZELENA PS11.webp' },
    { name: 'Kastamonu D137 Violet PS11', image: 'UNIVER KASTAMONU D137 VIOLET PS11.webp' },
    { name: 'Kastamonu D143 Antracit PS14', image: 'UNIVER KASTAMONU D143 ANTRACIT PS14.webp' },
    { name: 'Kastamonu D149 Merlo PS14', image: 'UNIVER KASTAMONU D149 MERLO PS14.webp' },
    { name: 'Kastamonu D152 Bela Kora PS14', image: 'UNIVER KASTAMONU D152 BELA KORA PS14.webp' },
    { name: 'Kastamonu D152 Bela Korpus-Glat PS10', image: 'UNIVER KASTAMONU D152 BELA KORPUS-GLAT PS10.webp' },
    { name: 'Kastamonu D158 Galaxy PS11', image: 'UNIVER KASTAMONU D158 GALAXY PS11.webp' },
    { name: 'Kastamonu D164 PS11 Luna', image: 'UNIVER KASTAMONU D164 PS11 LUNA.webp' },
    { name: 'Kastamonu D165 PS11 Basalt', image: 'UNIVER KASTAMONU D165 PS11 BASALT.webp' },
    { name: 'Kastamonu D166 PS11 Kuba', image: 'UNIVER KASTAMONU D166 PS11 KUBA.webp' },
    { name: 'Kastamonu D169 PS10 Bela Glat', image: 'UNIVER KASTAMONU D169 PS10 BELA GLAT.webp' },
    { name: 'Kastamonu D175 Super Bela Gloss Max', image: 'UNIVER KASTAMONU D175 SUPER BELA GLOSS MAX.webp' },
    { name: 'Kastamonu D301 Silver PS11', image: 'UNIVER KASTAMONU D301 SILVER PS11.webp' },
    { name: 'Kastamonu F255 PS42 Carrara', image: 'UNIVER KASTAMONU F255 PS42 CARRARA.webp' },
    { name: 'Kastamonu F272 PS42 Atena', image: 'UNIVER KASTAMONU F272 PS42 ATENA.webp' }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(univerProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = univerProducts.slice(startIndex, endIndex);

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
      src: `/images/${product.image}`,
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Univer Materijali</h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
                Kompletna kolekcija Univer pločastih materijala
              </p>
            </div>
          </div>
        </div>

        {/* Additional brands info */}
        <div className={`mb-8 text-center transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-gray-700 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            Kompletna ponuda Kastamonu prikazana, pored imamo u ponudi <span className="font-semibold text-orange-600">Egger</span>, <span className="font-semibold text-orange-600">Fundermax</span>, <span className="font-semibold text-orange-600">Kronospan</span>
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
                  src={`/images/${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Special badges for certain products */}
                {product.name.includes('Acapulco') && (
                  <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">
                    NOVO!
                  </div>
                )}
                {product.name.includes('Aluminijum') && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    RASPRODAJA!
                  </div>
                )}
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">O Univer materijalima</h2>
          <p className="text-gray-600 mb-4">
            Univer pločasti materijali predstavljaju vrhunski kvalitet u industriji nameštaja. 
            Naša kolekcija obuhvata širok spektar dezena i tekstura, od klasičnih do modernih rešenja.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="text-orange-500" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Veliki izbor</h3>
              <p className="text-gray-600 text-sm">Preko 35 različitih dezena i tekstura</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="text-orange-500" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Vrhunski kvalitet</h3>
              <p className="text-gray-600 text-sm">Otporni na habanje i vlagu</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="text-orange-500" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Profesionalna obrada</h3>
              <p className="text-gray-600 text-sm">Precizno sečenje i kantovanje</p>
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

export default UniverPage;