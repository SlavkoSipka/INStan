import React from 'react';
import { Menu, X, Phone, Mail, Hammer, ChevronDown } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  currentPage: string;
  navigateToPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu, currentPage, navigateToPage }) => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = React.useState(false);
  const [isPlateDropdownOpen, setIsPlateDropdownOpen] = React.useState(false);
  const [isWorkSurfaceDropdownOpen, setIsWorkSurfaceDropdownOpen] = React.useState(false);

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const closeProductsDropdown = () => {
    setIsProductsDropdownOpen(false);
    setIsPlateDropdownOpen(false);
    setIsWorkSurfaceDropdownOpen(false);
  };

  const togglePlateDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPlateDropdownOpen(!isPlateDropdownOpen);
    setIsWorkSurfaceDropdownOpen(false);
  };

  const toggleWorkSurfaceDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWorkSurfaceDropdownOpen(!isWorkSurfaceDropdownOpen);
    setIsPlateDropdownOpen(false);
  };
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-gray-50 text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+381 63 1125490</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>instanstolarija@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer flex-shrink-0" onClick={() => navigateToPage('home')}>
            <img 
              src="/images/logo.png" 
              alt="IN-STAN Logo" 
              className="w-20 h-20 mr-3 object-contain"
            />
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => navigateToPage('home')} 
              className={`font-medium transition-colors ${
                currentPage === 'home' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              POČETNA
            </button>
            <div className="relative">
              <button 
                onClick={toggleProductsDropdown}
                className="flex items-center text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                PROIZVODI
                <ChevronDown 
                  size={16} 
                  className={`ml-1 transition-transform duration-200 ${
                    isProductsDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="relative">
                    <button 
                      onClick={togglePlateDropdown}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors font-medium"
                    >
                      Pločasti materijali
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${
                          isPlateDropdownOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {isPlateDropdownOpen && (
                      <div className="ml-4 border-l-2 border-orange-100">
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            navigateToPage('univer');
                            closeProductsDropdown();
                          }}
                          className="block px-4 py-2 text-base text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                        >
                          Univer
                        </a>
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            navigateToPage('hdf-lesonit');
                            closeProductsDropdown();
                          }}
                          className="block px-4 py-2 text-base text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                        >
                          HDF i lesonit
                        </a>
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            navigateToPage('mdf');
                            closeProductsDropdown();
                          }}
                          className="block px-4 py-2 text-base text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                        >
                          MDF visoki sjaj i mat
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <div className="relative">
                    <button 
                      onClick={toggleWorkSurfaceDropdown}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors font-medium"
                    >
                      Radne površine
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${
                          isWorkSurfaceDropdownOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {isWorkSurfaceDropdownOpen && (
                      <div className="ml-4 border-l-2 border-orange-100">
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            navigateToPage('work-surfaces');
                            closeProductsDropdown();
                          }}
                          className="block px-4 py-2 text-base text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                        >
                          Radne ploče
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <button 
              onClick={() => navigateToPage('services')} 
              className={`font-medium transition-colors ${
                currentPage === 'services' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              USLUGE
            </button>
            <button 
              onClick={() => navigateToPage('gallery')} 
              className={`font-medium transition-colors ${
                currentPage === 'gallery' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              GALERIJA
            </button>
            <button 
              onClick={() => navigateToPage('about')} 
              className={`font-medium transition-colors ${
                currentPage === 'about' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              O NAMA
            </button>
            <button 
              onClick={() => navigateToPage('location')} 
              className={`font-medium transition-colors ${
                currentPage === 'location' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              LOKACIJA
            </button>
            <button 
              onClick={() => navigateToPage('contact')} 
              className={`font-medium transition-colors ${
                currentPage === 'contact' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              KONTAKT
            </button>
          </nav>
          
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 mt-4 py-4' 
            : 'max-h-0 opacity-0 mt-0 py-0'
        }`}>
          <div className={`transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}>
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => navigateToPage('home')} 
                className={`text-left font-medium transition-colors ${
                  currentPage === 'home' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                POČETNA
              </button>
              <div>
                <button 
                  onClick={toggleProductsDropdown}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >
                  PROIZVODI
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${
                      isProductsDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {isProductsDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <div>
                      <button 
                        onClick={togglePlateDropdown}
                        className="flex items-center justify-between w-full text-left text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        Pločasti materijali
                        <ChevronDown 
                          size={14} 
                          className={`transition-transform duration-200 ${
                            isPlateDropdownOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {isPlateDropdownOpen && (
                        <div className="mt-1 ml-4 space-y-1">
                          <a 
                            href="#" 
                            onClick={(e) => {
                              e.preventDefault();
                              navigateToPage('univer');
                              closeProductsDropdown();
                            }}
                            className="block py-2 text-base text-gray-500 hover:text-orange-500 transition-colors"
                          >
                            Univer
                          </a>
                          <a 
                            href="#" 
                            onClick={(e) => {
                              e.preventDefault();
                              navigateToPage('hdf-lesonit');
                              closeProductsDropdown();
                            }}
                            className="block py-2 text-base text-gray-500 hover:text-orange-500 transition-colors"
                          >
                            HDF i lesonit
                          </a>
                          <a 
                            href="#" 
                            onClick={(e) => {
                              e.preventDefault();
                              navigateToPage('mdf');
                              closeProductsDropdown();
                            }}
                            className="block py-2 text-base text-gray-500 hover:text-orange-500 transition-colors"
                          >
                            MDF visoki sjaj i mat
                          </a>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <button 
                        onClick={toggleWorkSurfaceDropdown}
                        className="flex items-center justify-between w-full text-left text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        Radne površine
                        <ChevronDown 
                          size={14} 
                          className={`transition-transform duration-200 ${
                            isWorkSurfaceDropdownOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {isWorkSurfaceDropdownOpen && (
                        <div className="mt-1 ml-4">
                          <a 
                            href="#" 
                            onClick={(e) => {
                              e.preventDefault();
                              navigateToPage('work-surfaces');
                              closeProductsDropdown();
                            }}
                            className="block py-2 text-base text-gray-500 hover:text-orange-500 transition-colors"
                          >
                            Radne ploče
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <button 
                onClick={() => navigateToPage('services')} 
                className={`text-left font-medium transition-colors ${
                  currentPage === 'services' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                USLUGE
              </button>
              <button 
                onClick={() => navigateToPage('gallery')} 
                className={`text-left font-medium transition-colors ${
                  currentPage === 'gallery' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                GALERIJA
              </button>
              <button 
                onClick={() => navigateToPage('about')} 
                className={`text-left font-medium transition-colors ${
                  currentPage === 'about' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                O NAMA
              </button>
              <button 
                onClick={() => navigateToPage('location')} 
                className={`text-left font-medium transition-colors ${
                  currentPage === 'location' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                LOKACIJA
              </button>
              <button 
                onClick={() => navigateToPage('contact')} 
                className={`text-left font-medium transition-colors ${
                  currentPage === 'contact' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                KONTAKT
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;