import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface CodeBlockProps {
  code: string;
  animate?: boolean;
}

export function CodeBlock({ code, animate = false }: CodeBlockProps) {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!animate) {
      setDisplayedCode(code);
      return;
    }

    if (currentIndex < code.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(code.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, code, animate]);

  useEffect(() => {
    if (animate) {
      setDisplayedCode("");
      setCurrentIndex(0);
    }
  }, [animate]);

  return (
    <motion.div
      className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <pre className="text-green-400 whitespace-pre-wrap">
        {displayedCode}
        {animate && currentIndex < code.length && (
          <motion.span
            className="inline-block w-2 h-5 bg-green-400 ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </pre>
    </motion.div>
  );
}