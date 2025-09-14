import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { QRCodeGenerator } from './QRCodeGenerator';
import { Code, Trophy, Calendar, Users, Zap, Star } from 'lucide-react';

interface CodeContestBannerProps {
  qrCodeUrl?: string;
  contestName?: string;
  date?: string;
  location?: string;
}

export function CodeContestBanner({ 
  qrCodeUrl = "https://contest.example.com/register",
  contestName = "CodeMaster 2025",
  date = "March 15-16, 2025",
  location = "Tech Convention Center"
}: CodeContestBannerProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [qrSize, setQrSize] = useState(200);
  
  // Start animations after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Set responsive QR code size
  useEffect(() => {
    const updateQRSize = () => {
      if (window.innerWidth >= 640) {
        setQrSize(200);
      } else {
        setQrSize(160);
      }
    };
    
    updateQRSize();
    window.addEventListener('resize', updateQRSize);
    return () => window.removeEventListener('resize', updateQRSize);
  }, []);
  
  // Typewriter effect for contest name
  useEffect(() => {
    if (animationStarted && currentIndex < contestName.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + contestName[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, contestName, animationStarted]);

  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: -200,
      rotateY: -45
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { 
        duration: 1.2, 
        ease: "easeOut",
        type: "spring",
        damping: 25
      }
    }
  };

  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: 200,
      rotateY: 45,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: "easeOut",
        type: "spring",
        damping: 25
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-xl shadow-2xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0-20c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </motion.div>

      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-16 sm:top-20 left-8 sm:left-20 w-4 h-4 sm:w-6 sm:h-6"
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ 
          scale: 1, 
          rotate: 0, 
          opacity: 0.8,
          y: [-10, 10, -10],
          rotate: [0, 360]
        }}
        transition={{
          scale: { delay: 1, duration: 0.8 },
          opacity: { delay: 1, duration: 0.8 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
          rotate: { duration: 8, repeat: Infinity, ease: "linear", delay: 2 }
        }}
      >
        <Star className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 drop-shadow-lg" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 sm:top-40 right-16 sm:right-32 w-4 h-4 sm:w-5 sm:h-5"
        initial={{ scale: 0, x: 100, opacity: 0 }}
        animate={{ 
          scale: 1, 
          x: 0, 
          opacity: 0.7,
          y: [-15, 15, -15],
          rotate: [0, -180, 0]
        }}
        transition={{
          scale: { delay: 1.5, duration: 0.8 },
          x: { delay: 1.5, duration: 0.8 },
          opacity: { delay: 1.5, duration: 0.8 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 },
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }
        }}
      >
        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 drop-shadow-lg" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-24 sm:bottom-32 left-8 sm:left-16 w-5 h-5 sm:w-7 sm:h-7"
        initial={{ scale: 0, y: 100, opacity: 0 }}
        animate={{ 
          scale: 1, 
          y: 0, 
          opacity: 0.6,
          y: [-12, 12, -12],
          rotate: [0, 180, 360]
        }}
        transition={{
          scale: { delay: 2, duration: 0.8 },
          y: { delay: 2, duration: 0.8 },
          opacity: { delay: 2, duration: 0.8 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
          rotate: { duration: 10, repeat: Infinity, ease: "linear", delay: 3 }
        }}
      >
        <Star className="w-5 h-5 sm:w-7 sm:h-7 text-purple-400 drop-shadow-lg" />
      </motion.div>

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/3 right-8 sm:right-16 w-3 h-3 sm:w-4 sm:h-4"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1, 1.2, 1], 
          opacity: [0, 0.5, 0.8, 0.5],
          x: [-20, 20, -20],
          y: [-10, 10, -10]
        }}
        transition={{
          scale: { delay: 3, duration: 1 },
          opacity: { delay: 3, duration: 1 },
          x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3.5 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3.5 }
        }}
      >
        <Code className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 drop-shadow-lg" />
      </motion.div>

      <div className="relative px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-16 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-16">
          
          {/* Left Side - Main Content */}
          <motion.div 
            className="flex-1 text-white text-center lg:text-left"
            variants={slideInLeft}
          >
            {/* Header */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6"
              variants={itemVariants}
            >
              <motion.div 
                className="p-2 sm:p-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{
                  scale: 1,
                  rotate: [0, 360, 720],
                  boxShadow: [
                    "0 0 0 rgba(34, 211, 238, 0)",
                    "0 0 20px rgba(34, 211, 238, 0.6)",
                    "0 0 0 rgba(34, 211, 238, 0)"
                  ]
                }}
                transition={{
                  scale: { duration: 0.8, delay: 0.5 },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: "0 0 30px rgba(34, 211, 238, 0.8)"
                }}
              >
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <div className="relative">
                <motion.h1 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight"
                  initial={{ scale: 0, y: -50 }}
                  animate={{
                    scale: 1,
                    y: 0,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    textShadow: [
                      "0 0 0 rgba(34, 211, 238, 0)",
                      "0 0 20px rgba(34, 211, 238, 0.5)",
                      "0 0 0 rgba(34, 211, 238, 0)"
                    ]
                  }}
                  transition={{
                    scale: { duration: 0.8, delay: 0.8, type: "spring", damping: 15 },
                    y: { duration: 0.8, delay: 0.8, type: "spring", damping: 15 },
                    backgroundPosition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{
                    backgroundSize: "300% 300%"
                  }}
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 30px rgba(34, 211, 238, 0.8)"
                  }}
                >
                  {displayText}
                  {animationStarted && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-cyan-400"
                      style={{ textShadow: "0 0 10px rgba(34, 211, 238, 0.8)" }}
                    >
                      |
                    </motion.span>
                  )}
                </motion.h1>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              variants={itemVariants}
              className="mb-6 sm:mb-8"
            >
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-blue-200 leading-relaxed px-2 sm:px-0"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.5, duration: 1, type: "spring" }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2, duration: 0.8, type: "spring" }}
                >
                  The Ultimate
                </motion.span>{" "}
                <motion.span
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0,
                    textShadow: [
                      "0 0 0 rgba(251, 191, 36, 0)",
                      "0 0 15px rgba(251, 191, 36, 0.6)",
                      "0 0 0 rgba(251, 191, 36, 0)"
                    ]
                  }}
                  transition={{ 
                    delay: 2.5, 
                    duration: 1, 
                    type: "spring",
                    damping: 15,
                    textShadow: { duration: 2, repeat: Infinity }
                  }}
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 20px rgba(251, 191, 36, 0.8)"
                  }}
                >
                  Programming Challenge
                </motion.span>
              </motion.p>
            </motion.div>

            {/* Contest Details */}
            <motion.div 
              className="space-y-3 sm:space-y-4 mb-6 sm:mb-8"
              variants={itemVariants}
            >
              {[
                { icon: Calendar, text: date, color: "text-cyan-400", delay: 3.5 },
                { icon: Users, text: location, color: "text-cyan-400", delay: 4 },
                { icon: Trophy, text: "$50,000 Prize Pool", color: "text-yellow-400", delay: 4.5 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center lg:justify-start gap-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.delay, duration: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: item.delay + 1,
                      ease: "easeInOut" 
                    }}
                  >
                    <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color}`} />
                  </motion.div>
                  <motion.span 
                    className="text-base sm:text-lg text-blue-100"
                    whileHover={{ color: "#ffffff" }}
                  >
                    {item.text}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <motion.p 
                className="text-base sm:text-lg text-blue-200 px-2 sm:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 0.8 }}
              >
                Join hundreds of developers in this epic coding battle!
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5.5, duration: 0.8 }}
              >
                <motion.div 
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full cursor-pointer relative overflow-hidden w-full sm:w-auto text-center"
                  initial={{ opacity: 0, x: -100, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    scale: [0.8, 1.1, 1],
                    boxShadow: [
                      "0 0 0 rgba(16, 185, 129, 0)",
                      "0 10px 30px rgba(16, 185, 129, 0.4)",
                      "0 5px 15px rgba(16, 185, 129, 0.2)"
                    ]
                  }}
                  transition={{ 
                    delay: 4.5, 
                    duration: 1.2,
                    type: "spring",
                    boxShadow: { duration: 2, repeat: Infinity }
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 15px 35px rgba(16, 185, 129, 0.5)",
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                  <span className="text-white relative z-10 text-sm sm:text-base">✨ Individual & Team Categories</span>
                </motion.div>
                <motion.div 
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full cursor-pointer relative overflow-hidden w-full sm:w-auto text-center"
                  initial={{ opacity: 0, x: 100, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    scale: [0.8, 1.1, 1],
                    boxShadow: [
                      "0 0 0 rgba(249, 115, 22, 0)",
                      "0 10px 30px rgba(249, 115, 22, 0.4)",
                      "0 5px 15px rgba(249, 115, 22, 0.2)"
                    ]
                  }}
                  transition={{ 
                    delay: 5, 
                    duration: 1.2,
                    type: "spring",
                    boxShadow: { duration: 2, repeat: Infinity, delay: 1 }
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 15px 35px rgba(249, 115, 22, 0.5)",
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      delay: 1
                    }}
                  />
                  <span className="text-white relative z-10 text-sm sm:text-base">🚀 24-Hour Challenge</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - QR Code Section */}
          <motion.div 
            className="flex-shrink-0 w-full lg:w-auto flex justify-center"
            variants={slideInRight}
          >
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                Scan to Register
              </motion.h3>
              
              <motion.div
                initial={{ 
                  opacity: 0, 
                  scale: 0.3, 
                  rotateY: 180,
                  z: -100
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotateY: 0,
                  z: 0,
                  boxShadow: [
                    "0 0 0 rgba(255, 255, 255, 0)",
                    "0 10px 30px rgba(255, 255, 255, 0.2)",
                    "0 20px 60px rgba(255, 255, 255, 0.1)",
                    "0 10px 30px rgba(255, 255, 255, 0.2)"
                  ]
                }}
                transition={{ 
                  delay: 1.8, 
                  duration: 1.5, 
                  type: "spring",
                  damping: 20,
                  boxShadow: { duration: 3, repeat: Infinity }
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  rotateX: 10,
                  boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)",
                  z: 50
                }}
                className="mb-4 perspective-1000"
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <QRCodeGenerator 
                  value={qrCodeUrl} 
                  size={qrSize} 
                  className="transition-all duration-500" 
                />
              </motion.div>
              
              <motion.p 
                className="text-blue-200 text-sm max-w-48 px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.6 }}
              >
                Quick registration via QR code
              </motion.p>
              
              <motion.div 
                className="mt-3 sm:mt-4 px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 0.6 }}
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderColor: "rgba(255, 255, 255, 0.4)"
                }}
              >
                <motion.span 
                  className="text-white text-xs sm:text-sm"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(255, 255, 255, 0)",
                      "0 0 10px rgba(255, 255, 255, 0.5)",
                      "0 0 0px rgba(255, 255, 255, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  contest.example.com
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - Additional Info */}
        <motion.div 
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6, duration: 0.8 }}
        >
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-blue-200"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 6.5
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {[
              { color: "bg-green-400", text: "Registration Open", animate: true },
              { color: "bg-yellow-400", text: "Early Bird Discount", animate: false },
              { color: "bg-blue-400", text: "Live Streaming", animate: false }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.div 
                  className={`w-2 h-2 ${item.color} rounded-full ${item.animate ? 'animate-pulse' : ''}`}
                  animate={item.animate ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  } : {}}
                  transition={item.animate ? {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  } : {}}
                />
                <motion.span
                  whileHover={{ color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                >
                  {item.text}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Additional floating orbs */}
      <motion.div 
        className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl"
        animate={{
          scale: [0.8, 1.1, 0.8],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.div>
  );
}