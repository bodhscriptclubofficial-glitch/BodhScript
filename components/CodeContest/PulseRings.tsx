import { motion } from 'motion/react';

export function PulseRings() {
  const rings = Array.from({ length: 5 });

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {rings.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-purple-500/20"
          style={{
            width: 200 + i * 150 + 'px',
            height: 200 + i * 150 + 'px',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
