import { motion } from 'motion/react';

export function LightBeams() {
  const beams = Array.from({ length: 6 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {beams.map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 w-1 h-full origin-top"
          style={{
            left: `${(i + 1) * 15}%`,
            background: `linear-gradient(180deg, 
              rgba(168, 85, 247, 0) 0%,
              rgba(168, 85, 247, ${0.3 + i * 0.1}) 50%,
              rgba(168, 85, 247, 0) 100%)`,
            transform: `rotate(${i * 10}deg)`,
            filter: 'blur(2px)',
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
