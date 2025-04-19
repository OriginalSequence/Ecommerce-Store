import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const NavbarBackground = () => {
  const [morphState, setMorphState] = useState(0);
  const [morphSecondaryState, setMorphSecondaryState] = useState(2);

  const navbarShapes = [
    "M 0 0 C 20 10 40 0 60 10 C 80 20 100 10 100 0 L 100 100 L 0 100 Z",
    "M 0 0 C 30 15 50 5 70 15 C 90 25 100 15 100 0 L 100 100 L 0 100 Z",
    "M 0 0 C 25 20 45 0 65 20 C 85 40 100 20 100 0 L 100 100 L 0 100 Z",
    "M 0 0 C 15 5 35 15 55 5 C 75 -5 95 5 100 0 L 100 100 L 0 100 Z",
    "M 0 0 C 10 8 30 -8 50 8 C 70 24 90 -8 100 0 L 100 100 L 0 100 Z",
  ];
  
  const secondaryShapes = [
    "M 0 0 L 100 0 C 90 10 80 5 70 10 C 60 15 50 5 40 10 C 30 15 20 5 10 10 C 0 15 0 0 0 0 Z",
    "M 0 0 L 100 0 C 85 15 75 5 65 15 C 55 25 45 15 35 25 C 25 35 15 25 0 15 L 0 0 Z",
    "M 0 0 L 100 0 L 100 20 C 80 15 60 25 40 15 C 20 5 0 15 0 20 L 0 0 Z",
    "M 0 0 L 100 0 L 100 30 C 75 20 50 40 25 20 C 0 0 0 30 0 30 L 0 0 Z",
    "M 0 0 L 100 0 L 100 25 C 90 15 70 35 50 15 C 30 -5 10 15 0 25 L 0 0 Z",
  ];

  useEffect(() => {
    const primaryMorphInterval = setInterval(() => {
      setMorphState((prev) => (prev + 1) % navbarShapes.length);
    }, 10000);
    
    const secondaryMorphInterval = setInterval(() => {
      setMorphSecondaryState((prev) => (prev + 1) % secondaryShapes.length);
    }, 15000);

    return () => {
      clearInterval(primaryMorphInterval);
      clearInterval(secondaryMorphInterval);
    };
  }, [navbarShapes.length, secondaryShapes.length]);
  
  const gradients = useMemo(() => ({
    purple: {
      id: "navGradientPurple",
      colors: [
        { offset: "0%", color: "#9333ea" },
        { offset: "100%", color: "#4f46e5" }
      ]
    },
    cyan: {
      id: "navGradientCyan",
      colors: [
        { offset: "0%", color: "#0891b2" },
        { offset: "100%", color: "#0ea5e9" }
      ]
    }
  }), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-20"
        animate={{
          filter: ["blur(20px)", "blur(30px)", "blur(20px)"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d={navbarShapes[morphState]}
            fill="url(#navGradientPurple)"
            animate={{ d: navbarShapes[(morphState + 1) % navbarShapes.length] }}
            transition={{ duration: 10, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id={gradients.purple.id} x1="0%" y1="0%" x2="100%" y2="100%">
              {gradients.purple.colors.map((stop, i) => (
                <stop key={i} offset={stop.offset} stopColor={stop.color} />
              ))}
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>

      <motion.div 
        className="absolute bottom-0 left-0 w-full h-full opacity-15"
        animate={{
          filter: ["blur(25px)", "blur(35px)", "blur(25px)"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d={secondaryShapes[morphSecondaryState]}
            fill="url(#navGradientCyan)"
            animate={{ d: secondaryShapes[(morphSecondaryState + 1) % secondaryShapes.length] }}
            transition={{ duration: 15, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id={gradients.cyan.id} x1="0%" y1="0%" x2="100%" y2="100%">
              {gradients.cyan.colors.map((stop, i) => (
                <stop key={i} offset={stop.offset} stopColor={stop.color} />
              ))}
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default NavbarBackground;