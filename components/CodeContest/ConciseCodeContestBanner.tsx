import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { QRCodeGenerator } from './QRCodeGenerator';
import { Code, Calendar, Trophy } from 'lucide-react';

interface ConciseCodeContestBannerProps {
  qrCodeUrl?: string;
  contestName?: string;
  date?: string;
  prize?: string;
}

export function ConciseCodeContestBanner({ 
  qrCodeUrl = "https://contest.example.com/register",
  contestName = "CodeMaster 2025",
  date = "March 15-16, 2025",
  prize = "$50,000 Prize Pool"
}: ConciseCodeContestBannerProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [qrSize, setQrSize] = useState(140);
  
  // Typewriter effect
  useEffect(() => {
    if (currentIndex < contestName.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + contestName[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, contestName]);

  // Responsive QR size
  useEffect(() => {
    const updateQRSize = () => {
      setQrSize(window.innerWidth >= 768 ? 140 : 120);
    };
    
    updateQRSize();
    window.addEventListener('resize', updateQRSize);
    return () => window.removeEventListener('resize', updateQRSize);
  }, []);

  return (
    <motion.div 
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-xl shadow-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10zm10 10c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Minimal floating elements */}
      <motion.div
        className="absolute top-6 right-6 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-6 left-6 w-3 h-3 bg-yellow-400 rounded-full opacity-50"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />

      <div className="relative px-6 py-8 md:px-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          
          {/* Main Content */}
          <div className="flex-1 text-white text-center md:text-left">
            {/* Header with icon */}
            <motion.div 
              className="flex items-center justify-center md:justify-start gap-3 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div 
                className="p-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <motion.h1 
                  className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                  style={{ backgroundSize: "200% 200%" }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-cyan-400"
                  >
                    |
                  </motion.span>
                </motion.h1>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl text-blue-200 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Ultimate Programming Challenge
            </motion.p>

            {/* Contest Details */}
            <motion.div 
              className="space-y-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {[
                { icon: Calendar, text: date, color: "text-cyan-400" },
                { icon: Trophy, text: prize, color: "text-yellow-400" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center md:justify-start gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-blue-100">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              <motion.div 
                className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-medium">🚀 Register Now</span>
              </motion.div>
            </motion.div>
          </div>

          {/* QR Code Section */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <div className="text-center">
              <motion.h3 
                className="text-lg md:text-xl text-white mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.6 }}
              >
                Scan to Register
              </motion.h3>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.6, type: "spring" }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
                }}
                className="mb-3"
              >
                <QRCodeGenerator 
                  value={qrCodeUrl} 
                  size={qrSize} 
                  className="transition-transform duration-300" 
                />
              </motion.div>
              
              <motion.p 
                className="text-blue-200 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8, duration: 0.6 }}
              >
                Quick registration
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Bottom info */}
        <motion.div 
          className="mt-8 pt-6 border-t border-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Registration Open</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span>Early Bird Discount</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>Live Streaming</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle decorative gradients */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-xl" />
    </motion.div>
  );
}