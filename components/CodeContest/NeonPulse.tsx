import { motion } from 'motion/react';

export function NeonPulse() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Vertical neon pulses */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-1 h-full"
          style={{
            left: `${(i + 1) * 18}%`,
            background: 'linear-gradient(180deg, transparent 0%, #a855f7 50%, transparent 100%)',
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Horizontal neon pulses */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-1 w-full"
          style={{
            top: `${(i + 1) * 18}%`,
            background: 'linear-gradient(90deg, transparent 0%, #ec4899 50%, transparent 100%)',
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scaleX: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4 + 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
