import React, { useState } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import StructuredData from './components/StructuredData';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import UniverPage from './pages/UniverPage';
import HDFLasonitPage from './pages/HDFLasonitPage';
import MDFPage from './pages/MDFPage';
import AboutPage from './pages/AboutPage';
import WorkSurfacesPage from './pages/WorkSurfacesPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const heroImages = [
    'https://aislike.rs/panic/homepage.webp',
    'https://aislike.rs/panic/homepage1.jpg',
    'https://aislike.rs/panic/homepage2.jpg',
    'https://aislike.rs/panic/homepage3.jpg'
  ];

  // Initial loading effect
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2500); // Show loading for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToPage = (page: string) => {
    setIsLoading(true);
    setCurrentPage(page);
    
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
      setIsMenuOpen(false);
      // Scroll to top when navigating to a new page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'gallery':
        return <GalleryPage navigateToPage={navigateToPage} />;
      case 'services':
        return <ServicesPage navigateToPage={navigateToPage} />;
      case 'location':
        return <LocationPage navigateToPage={navigateToPage} />;
      case 'contact':
        return <ContactPage navigateToPage={navigateToPage} />;
      case 'univer':
        return <UniverPage navigateToPage={navigateToPage} />;
      case 'hdf-lesonit':
        return <HDFLasonitPage navigateToPage={navigateToPage} />;
      case 'mdf':
        return <MDFPage navigateToPage={navigateToPage} />;
      case 'about':
        return <AboutPage navigateToPage={navigateToPage} />;
      case 'work-surfaces':
        return <WorkSurfacesPage navigateToPage={navigateToPage} />;
      case 'o-projektu':
        return <ProjectPage navigateToPage={navigateToPage} />;
      default:
        return (
          <HomePage
            heroImages={heroImages}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            navigateToPage={navigateToPage}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {(isLoading || isInitialLoading) && <LoadingSpinner />}
      <StructuredData />
      
      <Header 
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        currentPage={currentPage}
        navigateToPage={navigateToPage}
      />
      
      {renderCurrentPage()}
      
      <Footer navigateToPage={navigateToPage} />
    </div>
  );
}

export default App;