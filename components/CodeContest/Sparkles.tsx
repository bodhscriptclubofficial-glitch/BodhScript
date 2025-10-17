import { motion } from 'motion/react';

export function Sparkles() {
  const sparkles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((_, i) => {
        const size = Math.random() * 4 + 2;
        const delay = Math.random() * 3;
        const duration = Math.random() * 2 + 1;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: size + 'px',
              height: size + 'px',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-yellow-300">
              <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}
