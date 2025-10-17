import { motion } from 'motion/react';

export function CosmicDust() {
  const dustParticles = Array.from({ length: 100 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dustParticles.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 5 + Math.random() * 10;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: size + 'px',
              height: size + 'px',
              left: startX + '%',
              top: startY + '%',
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.5)',
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
}
