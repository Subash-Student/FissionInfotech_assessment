import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

// Brand logos (replace with actual paths or URLs)
const brands = [
  { name: "bmw", src: "/logos/bmw.png" },
  { name: "Star", src: "/logos/star.png" },
  { name: "sony", src: "/logos/sony.png" },
  { name: "Indium", src: "/logos/indium.png" },
  { name: "Kimiric", src: "/logos/kimirica.png" },
  { name: "TATA", src: "/logos/tata.png" },
  { name: "Kpit", src: "/logos/kpit.png" },
  { name: "Choice", src: "/logos/choice.png" },
  { name: "Eton", src: "/logos/eton.png" },
];

export default function TrustedBrands() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

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
    <section className="w-full bg-white py-4 px-6 overflow-hidden">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Text */}
        <div className="flex-shrink-0 text-black text-xl md:text-2xl font-light pr-6">
          Your trusted UI/UX design agency.
        </div>

        {/* Divider */}
        <div className="h-12 w-[1px] bg-black mx-4 hidden md:block" />

        {/* Scrolling Logos */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={controls}
          >
            {[...brands, ...brands].map((brand, index) => (
              <motion.img
                key={index}
                src={brand.src}
                alt={brand.name}
                className="h-10 w-auto object-contain cursor-pointer"
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