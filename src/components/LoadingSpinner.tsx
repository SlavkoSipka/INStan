import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="text-center">
        {/* Logo with pulse animation */}
        <div className="mb-8 animate-pulse">
          <img 
            src="https://aislike.rs/panic/logo.png" 
            alt="IN-STAN Logo" 
            className="w-32 h-32 mx-auto object-contain"
          />
        </div>
        
        {/* Spinning circle around logo */}
        <div className="relative">
          <div className="w-16 h-16 mx-auto border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <p className="mt-6 text-gray-600 font-medium animate-pulse">
          Učitava se...
        </p>
        
        {/* Animated dots */}
        <div className="flex justify-center mt-2 space-x-1">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;