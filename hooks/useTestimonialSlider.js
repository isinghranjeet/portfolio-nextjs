import { useState, useEffect, useCallback } from 'react';

const useTestimonialSlider = (
  testimonials = [],
  autoPlay = true,
  intervalDuration = 5000,
  options = {}
) => {
  const { loop = true, onSlideChange = null, pauseOnHover = true, keyboardNavigation = true } = options;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= testimonials.length) return loop ? 0 : prevIndex;
      return newIndex;
    });
  }, [testimonials.length, loop]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) return loop ? testimonials.length - 1 : 0;
      return newIndex;
    });
  }, [testimonials.length, loop]);

  const goToSlide = (index) => {
    if (index >= 0 && index < testimonials.length) {
      setActiveIndex(index);
    }
  };

  // AutoPlay effect
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(nextSlide, intervalDuration);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused, autoPlay, intervalDuration]);

  // Slide change callback
  useEffect(() => {
    if (onSlideChange) onSlideChange(activeIndex);
  }, [activeIndex, onSlideChange]);

  // Pause on hover
  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };
  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!keyboardNavigation) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyboardNavigation, nextSlide, prevSlide]);

  return {
    activeIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    pauseSlider: () => setIsPaused(true),
    resumeSlider: () => setIsPaused(false),
    isPaused,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useTestimonialSlider;
