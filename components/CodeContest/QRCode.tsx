import { motion } from "motion/react";

export function QRCode() {
  return (
    <motion.div 
      className="bg-white p-6 rounded-2xl shadow-2xl"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* QR Code Placeholder - Replace with actual QR code image */}
      <motion.div 
        className="w-64 h-64 bg-gray-100 border-4 border-gray-300 rounded-lg flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {/* Placeholder content - remove when adding real QR code */}
        <div className="text-center text-gray-500">
          <div className="text-6xl mb-2">📱</div>
          <div className="text-sm">QR Code</div>
          <div className="text-xs"><img src="./images/CodeClashQr.jpg"></img></div>
        </div>
        
        {/* Animated border effect */}
        <motion.div
          className="absolute inset-0 border-2 border-cyan-400 rounded-lg"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1.5,
          }}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="text-center mt-4 text-black"
      >
        <p className="text-lg font-medium">Scan to Register</p>
        <p className="text-sm text-gray-600 mt-1">CodeClash 2025</p>
      </motion.div>
    </motion.div>
  );
}