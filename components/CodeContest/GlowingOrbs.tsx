import { motion } from 'motion/react';

export function GlowingOrbs() {
  const orbs = [
    { color: 'bg-purple-500', size: 'w-64 h-64', x: '20%', y: '30%' },
    { color: 'bg-pink-500', size: 'w-80 h-80', x: '70%', y: '60%' },
    { color: 'bg-blue-500', size: 'w-72 h-72', x: '50%', y: '20%' },
    { color: 'bg-green-500', size: 'w-56 h-56', x: '80%', y: '80%' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute ${orb.size} ${orb.color} rounded-full filter blur-3xl opacity-20`}
          style={{
            left: orb.x,
            top: orb.y,
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
