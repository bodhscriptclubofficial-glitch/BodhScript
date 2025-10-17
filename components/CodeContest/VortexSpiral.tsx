import { motion } from 'motion/react';

export function VortexSpiral() {
  const spiralPoints = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-30">
      {spiralPoints.map((_, i) => {
        const angle = (i / spiralPoints.length) * Math.PI * 8;
        const radius = (i / spiralPoints.length) * 400;
        const size = 2 + (i / spiralPoints.length) * 4;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
            style={{
              width: size + 'px',
              height: size + 'px',
              boxShadow: '0 0 10px rgba(168, 85, 247, 0.8)',
            }}
            animate={{
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius,
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "linear"
            }}
          />
        );
      })}
    </div>
  );
}
