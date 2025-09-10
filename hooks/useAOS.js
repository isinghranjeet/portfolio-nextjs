import { useEffect } from 'react';

const useAOS = (options = {}) => {
  useEffect(() => {
    let AOSInstance;

    const initAOS = async () => {
      if (typeof window !== 'undefined') {
        try {
          const AOS = (await import('aos')).default;
          AOSInstance = AOS;

          AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            ...options, // merge custom options
          });

          // Refresh on init
          AOS.refresh();
        } catch (error) {
          console.error('AOS failed to load:', error);
        }
      }
    };

    initAOS();

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && AOSInstance) {
        AOSInstance.refreshHard(); // hard refresh on unmount
      }
    };
  }, [options]); // re-run if options change
};

export default useAOS;
