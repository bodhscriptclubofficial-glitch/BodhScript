import { motion } from 'motion/react';

export function MeteorShower() {
  const meteors = Array.from({ length: 15 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {meteors.map((_, i) => {
        const startX = Math.random() * 100;
        const startY = -10;
        const delay = Math.random() * 5;
        const duration = 1 + Math.random() * 2;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: startX + '%',
              top: startY + '%',
            }}
            initial={{ opacity: 0 }}
            animate={{
              x: -300,
              y: 500,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear"
            }}
          >
            <div className="relative">
              {/* Meteor head */}
              <div className="w-2 h-2 bg-white rounded-full" 
                   style={{ boxShadow: '0 0 20px #fff, 0 0 40px #a855f7' }} />
              
              {/* Meteor tail */}
              <motion.div
                className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-white via-purple-400 to-transparent"
                style={{
                  width: '80px',
                  transformOrigin: 'left',
                  transform: 'rotate(45deg)',
                }}
                animate={{
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
