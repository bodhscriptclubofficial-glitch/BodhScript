import { motion } from 'motion/react';

export function QuantumField() {
  const nodes = Array.from({ length: 25 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
      <svg className="w-full h-full">
        <defs>
          <radialGradient id="node-gradient">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connection lines */}
        {nodes.map((_, i) => {
          const x1 = (i % 5) * 20 + 10;
          const y1 = Math.floor(i / 5) * 20 + 10;
          
          return nodes.slice(i + 1).map((_, j) => {
            const actualJ = i + j + 1;
            const x2 = (actualJ % 5) * 20 + 10;
            const y2 = Math.floor(actualJ / 5) * 20 + 10;
            const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            
            if (distance < 30) {
              return (
                <motion.line
                  key={`${i}-${actualJ}`}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="#a855f7"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: (i + actualJ) * 0.1,
                    ease: "easeInOut"
                  }}
                />
              );
            }
            return null;
          });
        })}

        {/* Nodes */}
        {nodes.map((_, i) => {
          const x = (i % 5) * 20 + 10;
          const y = Math.floor(i / 5) * 20 + 10;
          
          return (
            <motion.circle
              key={i}
              cx={`${x}%`}
              cy={`${y}%`}
              r="4"
              fill="url(#node-gradient)"
              animate={{
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
