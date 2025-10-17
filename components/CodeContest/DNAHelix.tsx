import { motion } from 'motion/react';

export function DNAHelix() {
  const helixPoints = Array.from({ length: 30 });

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-30">
      <div className="relative w-full h-full">
        {helixPoints.map((_, i) => {
          const angle = (i / helixPoints.length) * Math.PI * 4;
          const y = (i / helixPoints.length) * 100;
          
          return (
            <div key={i}>
              {/* Left strand */}
              <motion.div
                className="absolute w-3 h-3 bg-purple-500 rounded-full"
                style={{
                  left: '40%',
                  top: y + '%',
                  boxShadow: '0 0 10px #a855f7',
                }}
                animate={{
                  x: Math.cos(angle) * 100,
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
              
              {/* Right strand */}
              <motion.div
                className="absolute w-3 h-3 bg-pink-500 rounded-full"
                style={{
                  left: '60%',
                  top: y + '%',
                  boxShadow: '0 0 10px #ec4899',
                }}
                animate={{
                  x: Math.cos(angle + Math.PI) * 100,
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
              
              {/* Connecting line */}
              {i % 3 === 0 && (
                <motion.div
                  className="absolute h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                  style={{
                    left: '50%',
                    top: y + '%',
                    transformOrigin: 'center',
                  }}
                  animate={{
                    width: [0, 200, 0],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
