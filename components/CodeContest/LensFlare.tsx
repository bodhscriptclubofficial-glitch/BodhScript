import { motion } from 'motion/react';

export function LensFlare() {
  const flares = [
    { size: 200, color: 'bg-purple-400', opacity: 0.3, x: '30%', y: '20%' },
    { size: 150, color: 'bg-pink-400', opacity: 0.2, x: '70%', y: '60%' },
    { size: 100, color: 'bg-blue-400', opacity: 0.25, x: '50%', y: '40%' },
    { size: 120, color: 'bg-cyan-400', opacity: 0.2, x: '80%', y: '30%' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {flares.map((flare, i) => (
        <motion.div
          key={i}
          className={`absolute ${flare.color} rounded-full filter blur-3xl`}
          style={{
            width: flare.size + 'px',
            height: flare.size + 'px',
            left: flare.x,
            top: flare.y,
            opacity: flare.opacity,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [flare.opacity, flare.opacity * 1.5, flare.opacity],
            x: [0, Math.sin(i) * 20, 0],
            y: [0, Math.cos(i) * 20, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Central bright spot */}
      <motion.div
        className="absolute w-32 h-32 bg-white rounded-full filter blur-2xl"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [0, 1.5, 0],
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
