import { motion } from 'motion/react';

export function EnergyField() {
  const particles = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => {
        const delay = Math.random() * 5;
        const duration = 8 + Math.random() * 7;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: startX + '%',
              top: startY + '%',
              background: `radial-gradient(circle, 
                ${i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#ec4899' : '#3b82f6'} 0%, 
                transparent 70%)`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#ec4899' : '#3b82f6'}`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 400],
              y: [0, (Math.random() - 0.5) * 400],
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
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
