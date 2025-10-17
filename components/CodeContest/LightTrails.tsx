import { motion } from 'motion/react';

export function LightTrails() {
  const trails = Array.from({ length: 8 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {trails.map((_, i) => {
        const isHorizontal = i % 2 === 0;
        const position = (i / trails.length) * 100;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={isHorizontal ? {
              top: position + '%',
              left: '-100%',
              width: '300px',
              height: '2px',
            } : {
              left: position + '%',
              top: '-100%',
              width: '2px',
              height: '300px',
            }}
            animate={isHorizontal ? {
              left: ['0%', '100%'],
            } : {
              top: ['0%', '100%'],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          >
            <div 
              className={`w-full h-full ${
                i % 3 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-b'
              } from-transparent via-purple-400 to-transparent`}
              style={{
                boxShadow: `0 0 20px ${i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#ec4899' : '#3b82f6'}`,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
