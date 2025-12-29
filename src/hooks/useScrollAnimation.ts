import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1, delayAfterLoading = false) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If delayAfterLoading is true, wait for initial loading to complete
    if (delayAfterLoading) {
      const loadingDelay = setTimeout(() => {
        startObserver();
      }, 2500); // Wait for loading animation to complete
      
      return () => clearTimeout(loadingDelay);
    } else {
      startObserver();
    }

    function startObserver() {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [threshold, delayAfterLoading]);

  return { ref, isVisible };
};