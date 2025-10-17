import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect, ReactNode } from 'react';

interface ParallaxLayerProps {
  children: ReactNode;
  depth?: number;
  className?: string;
}

export function ParallaxLayer({ children, depth = 0.5, className = '' }: ParallaxLayerProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useTransform(mouseX, [-window.innerWidth / 2, window.innerWidth / 2], [-20 * depth, 20 * depth]);
  const y = useTransform(mouseY, [-window.innerHeight / 2, window.innerHeight / 2], [-20 * depth, 20 * depth]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
