import { motion } from 'motion/react';

export function ParticleExplosion() {
  const particles = Array.from({ length: 60 });

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {particles.map((_, i) => {
        const angle = (i / particles.length) * Math.PI * 2;
        const distance = 150 + Math.random() * 200;
        const size = 2 + Math.random() * 4;
        const color = i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#ec4899' : '#3b82f6';
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size + 'px',
              height: size + 'px',
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}`,
            }}
            animate={{
              x: [0, Math.cos(angle) * distance, 0],
              y: [0, Math.sin(angle) * distance, 0],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.02,
              ease: "easeOut"
            }}
          />
        );
      })}
    </div>
  );
}
