import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

// Assume a context is setup elsewhere in your app like:
// const ThemeContext = React.createContext({ isDarkMode: false, setIsDarkMode: () => {} });
import { ThemeContext } from "./ThemeContext"; // adjust path accordingly

const menuItems = [
  {
    title: "Services",
    items: [
      { label: "Design.", desc: "Handcraft the user experience.", color: "bg-pink-100" },
      { label: "Technology.", desc: "Leverage the power of code.", color: "bg-indigo-100" },
      { label: "Marketing.", desc: "Creative strategies for brands.", color: "bg-purple-100" },
    ],
  },
  {
    title: "About",
    items: [
      { label: "About Us.", desc: "We are super-efficient yet humble to serve you!", color: "bg-pink-100" },
      { label: "Team.", desc: "We are proud of our experienced and accomplished team!", color: "bg-indigo-100" },
      { label: "Career.", desc: "Can you offer such experience?", color: "bg-purple-100" },
    ],
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, when: "afterChildren" },
  },
};

const dropdownItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export default function Navbar() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [activeMenu, setActiveMenu] = useState(null);

  const hasDropdown = !!activeMenu;

  return (
    <motion.div
      animate={{ height: hasDropdown ? "auto" : "auto" }}
      transition={{ duration: 0.3 }}
      className={`relative w-full z-50 border-b ${
        isDarkMode ? "border-white/20 bg-gray-900 text-white" : "border-gray-300 bg-white text-black"
      }`}
    >
      {/* NAVBAR */}
      <nav className="flex justify-evenly items-center px-10 py-4">
        {/* Logo */}
        <motion.img
          src="logo_img.png" // Replace with your actual logo path
          alt="Leo9 Logo"
          className="w-15 h-12 object-contain cursor-pointer select-none"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        />

        {/* Menu */}
        <ul className="flex gap-6 font-semibold text-lg relative">
          {["Work", "Services", "Clients", "About", "Knowledge"].map((title) => {
            const showDot = ["Services", "About"].includes(title);
            const active = activeMenu === title;
            return (
              <motion.li
                key={title}
                className={`cursor-pointer select-none transition-colors flex items-center hover:text-pink-500 ${
                  active ? "text-pink-500 font-extrabold underline underline-offset-4" : ""
                }`}
                onMouseEnter={() => {
                  if (showDot) setActiveMenu(title);
                  else setActiveMenu(null);
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Small Dot Instead of Dropdown Icon */}
                {showDot && (
                  <span
                    className={`w-2 h-2 rounded-full mr-2 ${
                      isDarkMode ? "bg-white" : "bg-black"
                    }`}
                  ></span>
                )}
                {title}
              </motion.li>
            );
          })}
        </ul>

        {/* Theme Toggle + Contact Button */}
        <div className="flex items-center gap-4">
          <motion.button
            aria-label="Toggle theme"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
            whileHover={{ rotate: 20, scale: 1.2 }}
            whileTap={{ rotate: 0, scale: 0.9 }}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              <MoonIcon className="text-white w-6 h-6" />
            ) : (
              <SunIcon className="text-gray-700 w-6 h-6" />
            )}
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: isDarkMode ? "#a78bfa" : "#7c3aed",
              boxShadow: "0 4px 15px rgba(124, 58, 237, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`px-5 py-3 rounded-md font-bold text-xl select-none ${
              isDarkMode ? "bg-purple-700 text-white" : "bg-black text-white"
            }`}
          >
            Contact
          </motion.button>
        </div>
      </nav>

      {/* DROPDOWN INSIDE NAVBAR */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            layout
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`flex justify-center gap-6 px-10 pb-8 backdrop-blur-md ${
              isDarkMode ? "bg-gray-800/90" : "bg-white/80"
            }`}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {menuItems
              .find((menu) => menu.title === activeMenu)
              ?.items.map((item, i) => (
                <motion.div
                  key={i}
                  variants={dropdownItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: isDarkMode
                      ? "0 10px 20px rgba(255 255 255 / 0.4)"
                      : "0 10px 20px rgb(124 58 237 / 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`${item.color} cursor-pointer transition-all w-80 py-4 px-6 rounded-lg shadow-md select-none flex flex-col justify-center`}
                >
                  <h3 className="text-2xl font-extrabold">{item.label}</h3>
                  <p className="text-base font-medium mt-1">{item.desc}</p>
                  <motion.span
                    className="block mt-2 text-xl font-bold"
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
