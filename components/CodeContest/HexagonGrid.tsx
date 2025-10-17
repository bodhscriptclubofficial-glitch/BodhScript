import { motion } from 'motion/react';

export function HexagonGrid() {
  const hexagons = Array.from({ length: 40 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      <div className="relative w-full h-full">
        {hexagons.map((_, i) => {
          const row = Math.floor(i / 8);
          const col = i % 8;
          const x = col * 120 + (row % 2) * 60;
          const y = row * 100;
          
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: x + 'px',
                top: y + 'px',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [0.8, 1, 0.8],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            >
              <svg width="60" height="60" viewBox="0 0 100 100">
                <polygon
                  points="50 1 95 25 95 75 50 99 5 75 5 25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-purple-500"
                />
                <polygon
                  points="50 15 80 30 80 70 50 85 20 70 20 30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-pink-500"
                />
              </svg>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
