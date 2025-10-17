import { motion } from 'motion/react';

export function RippleEffect() {
  const ripples = Array.from({ length: 8 });

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {ripples.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-purple-500/30"
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={{
            width: ['0px', '1000px'],
            height: ['0px', '1000px'],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}
