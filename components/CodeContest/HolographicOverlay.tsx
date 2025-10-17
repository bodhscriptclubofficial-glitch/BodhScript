import { motion } from 'motion/react';

export function HolographicOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Scanning lines */}
      <motion.div
        className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
        animate={{
          y: ['0%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.3) 25%, rgba(0, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.3) 75%, rgba(0, 255, 255, 0.3) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.3) 25%, rgba(0, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.3) 75%, rgba(0, 255, 255, 0.3) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Holographic noise */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-purple-500/5"
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
