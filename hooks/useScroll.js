import { useState, useEffect } from 'react';

const useScroll = ({
  threshold = 100,           // custom scroll threshold
  onThresholdCross = null,   // optional callback when threshold is crossed
  throttleDelay = 100        // throttle delay in ms
} = {}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null); // "up" or "down"

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect direction
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');

      // Update scrollY state
      setScrollY(currentScrollY);

      // Check threshold
      const scrolledPast = currentScrollY > threshold;
      if (scrolledPast !== isScrolled) {
        setIsScrolled(scrolledPast);
        if (onThresholdCross) onThresholdCross(scrolledPast); // call callback
      }

      lastScrollY = currentScrollY;
    };

    const throttledScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, throttleDelay);
      }
    };

    // Initial scroll position
    handleScroll();

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [isScrolled, threshold, onThresholdCross, throttleDelay]);

  return { scrollY, isScrolled, scrollDirection };
};

export default useScroll;
