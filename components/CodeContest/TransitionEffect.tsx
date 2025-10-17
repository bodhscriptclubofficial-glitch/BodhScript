import { motion } from 'motion/react';

interface TransitionEffectProps {
  isActive: boolean;
}

export function TransitionEffect({ isActive }: TransitionEffectProps) {
  if (!isActive) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      {/* Wipe effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      
      {/* Particles burst */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          style={{
            left: '50%',
            top: '50%',
          }}
          initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
          animate={{
            scale: [0, 1, 0],
            x: Math.cos(i * (360 / 30) * Math.PI / 180) * 300,
            y: Math.sin(i * (360 / 30) * Math.PI / 180) * 300,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}
