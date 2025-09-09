import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const headlineWords = ["Design", "Transform", "Accelerate"];
const headlineVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: i => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.25 + i * 0.16,
      type: "spring",
      stiffness: 260,
      damping: 26,
    },
  }),
};

export default function HeroSection() {
  const { darkTheme } = useTheme();
  
  return (
    <section className={`relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-6 py-0 ${darkTheme ? 'bg-black' : 'bg-white'} overflow-hidden transition-colors duration-300`}>
      {/* Animated Gradient Orb */}
      <motion.div
        className="absolute left-[10%] top-[15%] w-[320px] h-[320px] rounded-full bg-gradient-to-br from-purple-300 to-blue-300 filter blur-2xl z-0"
        initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
        animate={{ opacity: 0.22, scale: 0.93, x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      {/* Animated floating particles */}
      {[...Array(5)].map((_, idx) => (
        <motion.div
          key={idx}
          className="absolute w-2 h-2 rounded-full bg-indigo-400"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -20, 0],
            x: [0, (idx - 2) * 40, 0]
          }}
          style={{
            left: `${22 + idx * 10}%`,
            top: `${45 + idx * 3}%`,
            zIndex: 1,
          }}
          transition={{ repeat: Infinity, duration: 7 + idx * 2, ease: "easeInOut" }}
        />
      ))}
      {/* Left Side: Logo Animation */}
    
<motion.div
  initial={{ opacity: 0, scale: 0.93, x: -60, rotate: -10 }}
  animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  whileHover={{ scale: 1.025, y: -6 }}
  className="w-full md:w-2/5 flex justify-center items-center relative z-10"
>
  <motion.img
    src= {`${!darkTheme ? "hero.png" : "hero-tp.png"}`}
    alt="Logo"
    className="w-[520px] h-[300px] object-contain shadow-md rounded-lg"
    initial={{ opacity: 0, scale: 0.90 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.06, rotate: 2 }}
    transition={{ delay: 0.3, duration: 1.0, type: "spring", stiffness: 110 }}
  />
</motion.div>

      {/* Right Side: Content */}
      <div className="w-full md:w-3/5 flex flex-col items-start pl-0 md:pl-10 mt-16 md:mt-0 relative z-10">
        <div className="mb-2">
        {headlineWords.map((word, i) => (
  <motion.div key={word} className="overflow-hidden">
    <motion.h1
      custom={i}
      variants={headlineVariants}
      initial="hidden"
      animate="visible"
      className={`text-5xl md:text-7xl font-black ${darkTheme ? 'text-white' : 'text-black'} leading-none mb-2 transition-colors duration-300`}
      style={{ fontFamily: "sans-serif" }}
    >
      {word}
     
    </motion.h1>
  </motion.div>
))}

        </div>
        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, type: "spring", stiffness: 160, damping: 21 }}
          className={`mt-7 text-xl md:text-2xl font-medium ${darkTheme ? 'text-white' : 'text-black'} transition-colors duration-300`}
          style={{ fontFamily: "sans-serif" }}
        >
          Redefining user experiences through <br />
          Behavioural Science & AI
        </motion.p>
        {/* Tagline/Detail */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.56 }}
          className={`mt-3 text-md md:text-lg ${darkTheme ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}
        >
          Trusted by <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              repeat: Infinity, repeatType: "reverse", duration: 1.2,
            }}
            className="font-bold text-indigo-500"
          >100+</motion.span>
          &nbsp;leading brands.
        </motion.div>
        {/* CTA Button with animation */}
        <motion.button
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, type: "spring", stiffness: 200 }}
          whileHover={{
            scale: 1.065,
            rotate: [-1, 2, -2, 1, 0],
            boxShadow: "0 8px 32px -4px rgba(56,66,230,0.08)"
          }}
          whileTap={{ scale: 0.97 }}
          className={`mt-10 px-7 py-3 ${darkTheme ? 'bg-white hover:bg-gray-200 text-black' : 'bg-black hover:bg-gray-800 text-white'} rounded-full text-lg font-semibold shadow hover:shadow-md transition-all`}
        >
          Explore More
        </motion.button>
      </div>
    </section>
  );
}
