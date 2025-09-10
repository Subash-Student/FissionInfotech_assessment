import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../context/ThemeContext";

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

const dropdownVariants = { /* same as before */ };
const dropdownItemVariants = { /* same as before */ };

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkTheme, toggleTheme } = useTheme();

  // Mobile dropdown logic
  const handleMobileMenuItemClick = (title) => {
    if (["Services", "About"].includes(title)) {
      setActiveMenu(activeMenu === title ? null : title);
    } else {
      setActiveMenu(null);
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.div className="relative w-full z-50 border-b border-gray-300 bg-white text-black transition-colors duration-300">
      <nav className="flex items-center px-4 sm:px-6 md:px-10 py-4 max-w-screen-xl mx-auto">
        {/* Logo (left) */}
        <motion.img
          src="logo_img.png"
          alt="Leo9 Logo"
          className="w-14 h-12 object-contain cursor-pointer select-none flex-shrink-0"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        />

        {/* Desktop Menu (middle) */}
        <ul className="hidden sm:flex flex-row gap-6 font-semibold text-lg flex-1 justify-center">
          {["Work", "Services", "Clients", "About", "Knowledge"].map((title) => {
            const showDropdownDot = ["Services", "About"].includes(title);
            const active = activeMenu === title;
            return (
              <motion.li
                key={title}
                className={`cursor-pointer flex items-center gap-1 hover:text-pink-500 select-none transition-colors ${
                  active ? "text-pink-500 font-extrabold underline underline-offset-4" : ""
                }`}
                onMouseEnter={() => showDropdownDot ? setActiveMenu(title) : setActiveMenu(null)}
                onMouseLeave={() => setActiveMenu(null)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {showDropdownDot && (
                  <span className={`w-3 h-3 rounded-full ${active ? "bg-pink-500" : "bg-black"}`} />
                )}
                {title}
              </motion.li>
            );
          })}
        </ul>

        {/* Contact Button (center on mobile, center of navbar on desktop) */}
        <div className="flex flex-1 justify-center sm:justify-center">
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#7c3aed",
              boxShadow: "0 4px 15px rgba(124,58,237,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-5 py-3 rounded-md font-bold text-base sm:text-xl select-none bg-black text-white transition-colors duration-300 mx-auto"
          >
            Contact
          </motion.button>
        </div>

        {/* Theme Toggle (always visible) & Hamburger Icon (far right on mobile) */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <motion.button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="p-2 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
            whileHover={{ rotate: 20, scale: 1.2 }}
            whileTap={{ rotate: 0, scale: 0.9 }}
            title={darkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkTheme ? <MoonIcon className="text-black w-6 h-6" /> : <SunIcon className="text-yellow-500 w-6 h-6" />}
          </motion.button>
          {/* Hamburger Icon */}
          <button
            className="sm:hidden p-2 rounded focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => {
              setMobileMenuOpen(!isMobileMenuOpen);
              setActiveMenu(null);
            }}
          >
            {isMobileMenuOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>
      </nav>

      {/* Desktop Dropdown */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            layout
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-10 pb-8 backdrop-blur-md bg-white/80 transition-colors duration-300 max-w-screen-xl mx-auto"
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
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgb(124 58 237 / 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`${item.color} w-full sm:w-72 lg:w-80 py-4 px-6 rounded-lg shadow-md select-none flex flex-col justify-center`}
                >
                  <h3 className="text-xl sm:text-2xl font-extrabold">{item.label}</h3>
                  <p className="text-sm sm:text-base font-medium mt-1">{item.desc}</p>
                  <motion.span
                    className="block mt-2 text-lg sm:text-xl font-bold"
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

      {/* Mobile Menu with Dropdowns */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="sm:hidden flex flex-col gap-1 font-semibold text-base bg-white p-4 border-t shadow transition-all"
          >
            {["Work", "Services", "Clients", "About", "Knowledge"].map((title) => {
              const showDropdownDot = ["Services", "About"].includes(title);
              return (
                <li key={title} className="w-full">
                  <button
                    className="flex items-center w-full py-2 px-2 rounded-lg hover:bg-pink-100 transition-colors justify-center"
                    onClick={() => handleMobileMenuItemClick(title)}
                  >
                    {showDropdownDot && (
                      <span className="w-3 h-3 rounded-full bg-black mr-2" aria-hidden="true" />
                    )}
                    {title}
                  </button>
                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {activeMenu === title &&
                      menuItems.find((menu) => menu.title === title) && (
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          className="flex flex-col gap-2 py-2"
                        >
                          {menuItems
                            .find((menu) => menu.title === title)
                            .items.map((item, i) => (
                              <motion.div
                                key={i}
                                variants={dropdownItemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.96 }}
                                transition={{ delay: i * 0.08 }}
                                className={`${item.color} cursor-pointer transition-all py-3 px-3 rounded-lg shadow select-none flex flex-col justify-center mb-2`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <h3 className="text-base font-extrabold">{item.label}</h3>
                                <p className="text-xs font-medium mt-0.5">{item.desc}</p>
                                <span className="text-lg font-bold mt-1">→</span>
                              </motion.div>
                            ))}
                        </motion.div>
                      )}
                  </AnimatePresence>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
