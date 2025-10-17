import { motion } from 'motion/react';

interface SlideNavigationProps {
  totalSlides: number;
  currentSlide: number;
  onNavigate: (index: number) => void;
}

export function SlideNavigation({ totalSlides, currentSlide, onNavigate }: SlideNavigationProps) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => onNavigate(index)}
          className={`h-3 rounded-full transition-all duration-300 ${
            index === currentSlide
              ? 'w-12 bg-gradient-to-r from-purple-500 to-pink-500'
              : 'w-3 bg-gray-600 hover:bg-gray-400'
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
