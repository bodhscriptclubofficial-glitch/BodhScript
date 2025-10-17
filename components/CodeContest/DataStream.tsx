import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function DataStream() {
  const streams = Array.from({ length: 6 });
  const [dataStrings] = useState(() => 
    Array.from({ length: 6 }, () => 
      Array.from({ length: 20 }, () => 
        Math.random() > 0.5 ? '1' : '0'
      ).join('')
    )
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
      {streams.map((_, i) => {
        const xPos = (i + 1) * 15;
        
        return (
          <motion.div
            key={i}
            className="absolute text-xs font-mono"
            style={{
              left: xPos + '%',
              top: '-20%',
            }}
            animate={{
              y: ['0%', '120%'],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear"
            }}
          >
            <div className="flex flex-col gap-1">
              {dataStrings[i].split('').map((char, j) => (
                <motion.span
                  key={j}
                  className={`${
                    char === '1' ? 'text-purple-400' : 'text-pink-400'
                  }`}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: j * 0.1,
                  }}
                  style={{
                    textShadow: char === '1' 
                      ? '0 0 10px #a855f7' 
                      : '0 0 10px #ec4899',
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
