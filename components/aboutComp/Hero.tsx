"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white text-center">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Animated Heading */}
      <motion.h1
        className="text-6xl font-bold z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to{" "}
        <span className="text-blue-500">
          <Typewriter words={["BodhScript Club 🚀"]} loop={true} />
        </span>
      </motion.h1>

      {/* Subtitle with Fade-in Delay */}
      <motion.p
        className="text-lg text-gray-300 mt-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A community of passionate developers, innovators, and problem solvers!
      </motion.p>
    </div>
  );
};

export default Hero;
