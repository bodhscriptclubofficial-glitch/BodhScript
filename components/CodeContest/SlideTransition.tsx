import { motion, AnimatePresence } from "motion/react";
import { ReactNode } from "react";

interface SlideTransitionProps {
  children: ReactNode;
  slideKey: number;
  direction: number;
}

export function SlideTransition({ children, slideKey, direction }: SlideTransitionProps) {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        key={slideKey}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.4 },
          scale: { duration: 0.4 },
          rotateY: { duration: 0.6 },
        }}
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}