import { motion } from 'motion/react';

export function FloatingCubes() {
  const cubes = Array.from({ length: 12 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {cubes.map((_, i) => {
        const size = 30 + Math.random() * 40;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const delay = Math.random() * 3;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: startX + '%',
              top: startY + '%',
              width: size + 'px',
              height: size + 'px',
              perspective: '1000px',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay,
              ease: "linear"
            }}
          >
            <div 
              className="w-full h-full border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
              style={{
                transform: 'rotateX(45deg) rotateY(45deg)',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
