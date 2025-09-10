import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const brands = [
  { name: "bmw", src: "/logos/bmw.png", darkSrc: "/logos/bmw-tp.png" },
  { name: "Star", src: "/logos/star.png", darkSrc: "/logos/star-tp.png" },
  { name: "sony", src: "/logos/sony.png", darkSrc: "/logos/sony-tp.png" },
  { name: "Indium", src: "/logos/indium.png", darkSrc: "/logos/indium-tp.png" },
  { name: "Kimiric", src: "/logos/kimirica.png", darkSrc: "/logos/kimirica-tp.png" },
  { name: "TATA", src: "/logos/tata.png", darkSrc: "/logos/tata-tp.png" },
  { name: "Kpit", src: "/logos/kpit.png", darkSrc: "/logos/kpit-tp.png" },
  { name: "Choice", src: "/logos/choice.png", darkSrc: "/logos/choice-tp.png" },
  { name: "Eton", src: "/logos/eton.png", darkSrc: "/logos/eton-tp.png" },
];

export default function TrustedBrands() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const { darkTheme } = useTheme();

  // Start or stop animation based on hover
  React.useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        },
      });
    }
  }, [isHovered, controls]);

  return (
    <section
      className={`w-full ${darkTheme ? "bg-black" : "bg-white"} py-4 px-4 sm:px-6 md:px-10 overflow-hidden transition-colors duration-300`}
    >
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-4 md:gap-6">
        {/* Left Text */}
        <div
          className={`flex-shrink-0 ${
            darkTheme ? "text-white" : "text-black"
          } text-lg md:text-xl font-light pr-0 md:pr-6 transition-colors duration-300 text-center md:text-left w-full md:w-auto`}
        >
          Your trusted UI/UX design agency.
        </div>

        {/* Divider */}
        <div
          className={`h-12 w-[1px] ${darkTheme ? "bg-white" : "bg-black"} mx-4 hidden md:block transition-colors duration-300`}
        />

        {/* Scrolling Logos */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8 sm:gap-12 items-center whitespace-nowrap"
            animate={controls}
          >
            {[...brands, ...brands].map((brand, index) => (
              <motion.img
                key={index}
                src={darkTheme ? brand.darkSrc : brand.src}
                alt={brand.name}
                className="h-8 sm:h-10 w-auto object-contain cursor-pointer"
                whileHover={{ scale: 1.3 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
