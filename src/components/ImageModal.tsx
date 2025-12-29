import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  imageIndex: number;
  isHomepageGalleryImage?: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  isOpen, 
  onClose, 
  imageSrc, 
  imageAlt, 
  imageIndex,
  isHomepageGalleryImage = false
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Determine the full-size image URL based on the source
  let fullSizeImageSrc = imageSrc; // Default to original image
  
  if (isHomepageGalleryImage) {
    // For homepage gallery images (a1-min.jpg, a3-min.jpg, etc.)
    // Extract the number from the original src and create full-size URL
    const match = imageSrc.match(/\/a(\d+)-min\.jpg$/);
    if (match) {
      fullSizeImageSrc = `https://aislike.rs/panic/a${match[1]}.jpg`;
    }
  } else if (imageSrc.includes('-min.jpg') && !imageSrc.includes('/a')) {
    // For regular gallery images (1-min.jpg, 2-min.jpg, etc.)
    fullSizeImageSrc = `https://aislike.rs/panic/${imageIndex + 1}.jpg`;
  }

  const modalContent = (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: 9999 
      }}
      onClick={handleBackdropClick}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors bg-black/50 rounded-full p-2"
          style={{ zIndex: 10000 }}
        >
          <X size={32} />
        </button>
        
        <img
          src={fullSizeImageSrc}
          alt={imageAlt}
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );

  // Use React Portal to render modal outside of current DOM tree
  return createPortal(modalContent, document.body);
};

export default ImageModal;