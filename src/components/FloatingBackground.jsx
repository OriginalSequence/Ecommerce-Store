import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingBackground = () => {
  const [morphState, setMorphState] = useState(0);
  const [morphSecondaryState, setMorphSecondaryState] = useState(2);
  const [morphTertiaryState, setMorphTertiaryState] = useState(4);

  const backgroundShapes = [
    "M 0 0 C 50 20 70 0 100 0 L 100 100 C 70 100 30 80 0 100 Z",
    "M 0 0 C 40 40 60 40 100 0 L 100 100 C 60 60 40 60 0 100 Z",
    "M 0 0 C 20 20 80 20 100 0 L 100 100 C 80 80 20 80 0 100 Z",
    "M 0 0 C 30 0 70 30 100 0 L 100 100 C 70 70 30 100 0 100 Z",
    "M 0 20 C 20 0 40 0 60 20 C 80 40 100 40 100 70 L 100 100 C 60 100 40 80 0 100 Z",
    "M 0 0 C 30 20 40 50 30 70 C 20 90 0 100 0 100 L 100 100 C 100 70 80 50 100 30 C 120 10 100 0 100 0 Z",
    "M 0 0 Q 50 30 100 0 L 100 100 Q 50 70 0 100 Z",
    "M 0 30 Q 30 0 50 30 Q 70 60 100 30 L 100 100 Q 70 70 50 100 Q 30 70 0 100 Z"
  ];

  const secondaryShapes = [
    "M 100 0 C 80 30 70 50 80 70 C 90 90 100 100 100 100 L 0 100 C 0 70 20 50 0 30 C -20 10 0 0 0 0 Z",
    "M 0 0 Q 20 50 0 100 L 100 100 Q 80 50 100 0 Z",
    "M 20 0 Q 50 20 80 0 L 100 100 Q 50 80 0 100 L 0 0 Q 10 20 20 0 Z",
    "M 0 0 C 20 10 30 30 20 50 C 10 70 0 80 0 100 L 100 100 C 80 80 70 60 80 40 C 90 20 100 10 100 0 Z",
    "M 0 0 L 100 0 C 90 30 80 50 90 70 C 100 90 100 100 100 100 L 0 100 C 0 70 10 50 0 30 Z"
  ];

  const tertiaryShapes = [
    "M 0 0 L 100 0 L 100 100 C 75 85 50 100 25 85 C 0 70 0 100 0 100 Z",
    "M 0 0 C 25 15 50 0 75 15 C 100 30 100 0 100 0 L 100 100 L 0 100 Z",
    "M 0 0 L 100 0 C 100 25 75 25 75 50 C 75 75 100 75 100 100 L 0 100 C 0 75 25 75 25 50 C 25 25 0 25 0 0 Z",
    "M 0 0 C 33 33 66 0 100 0 L 100 100 C 66 100 33 66 0 100 Z",
    "M 0 0 L 100 0 L 100 100 C 80 90 60 100 40 90 C 20 80 0 90 0 100 Z"
  ];

  useEffect(() => {
    const primaryMorphInterval = setInterval(() => {
      setMorphState((prev) => (prev + 1) % backgroundShapes.length);
    }, 8000);
    const secondaryMorphInterval = setInterval(() => {
      setMorphSecondaryState((prev) => (prev + 1) % secondaryShapes.length);
    }, 12000);
    const tertiaryMorphInterval = setInterval(() => {
      setMorphTertiaryState((prev) => (prev + 1) % tertiaryShapes.length);
    }, 15000);
    return () => {
      clearInterval(primaryMorphInterval);
      clearInterval(secondaryMorphInterval);
      clearInterval(tertiaryMorphInterval);
    };
  }, [backgroundShapes.length, secondaryShapes.length, tertiaryShapes.length]);

  const gradients = useMemo(() => ({
    purple: {
      id: "gradientPurple",
      colors: [
        { offset: "0%", color: "#9333ea" },
        { offset: "100%", color: "#4f46e5" }
      ]
    },
    cyan: {
      id: "gradientCyan",
      colors: [
        { offset: "0%", color: "#0891b2" },
        { offset: "100%", color: "#0ea5e9" }
      ]
    },
    amber: {
      id: "gradientAmber",
      colors: [
        { offset: "0%", color: "#f59e0b" },
        { offset: "100%", color: "#d97706" }
      ]
    },
    rose: {
      id: "gradientRose",
      colors: [
        { offset: "0%", color: "#e11d48" },
        { offset: "100%", color: "#be123c" }
      ]
    }
  }), []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-0 right-0 w-3/4 h-3/4 opacity-20"
          animate={{
            filter: ["blur(40px)", "blur(60px)", "blur(40px)"],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.svg 
            viewBox="0 0 100 100" 
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <motion.path
              d={backgroundShapes[morphState]}
              fill="url(#gradientPurple)"
              animate={{ d: backgroundShapes[(morphState + 1) % backgroundShapes.length] }}
              transition={{ duration: 8, ease: "easeInOut" }}
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
          className="absolute bottom-0 left-0 w-3/4 h-3/4 opacity-20"
          animate={{
            filter: ["blur(60px)", "blur(40px)", "blur(60px)"],
            rotate: [0, -3, 0, 3, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.svg 
            viewBox="0 0 100 100" 
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <motion.path
              d={secondaryShapes[morphSecondaryState]}
              fill="url(#gradientCyan)"
              animate={{ d: secondaryShapes[(morphSecondaryState + 1) % secondaryShapes.length] }}
              transition={{ duration: 12, ease: "easeInOut" }}
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
        <motion.div 
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 opacity-15"
          animate={{
            filter: ["blur(50px)", "blur(70px)", "blur(50px)"],
            scale: [1, 1.05, 1],
            rotate: [0, 10, 0, -10, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.svg 
            viewBox="0 0 100 100" 
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <motion.path
              d={tertiaryShapes[morphTertiaryState]}
              fill="url(#gradientAmber)"
              animate={{ d: tertiaryShapes[(morphTertiaryState + 1) % tertiaryShapes.length] }}
              transition={{ duration: 15, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id={gradients.amber.id} x1="0%" y1="0%" x2="100%" y2="100%">
                {gradients.amber.colors.map((stop, i) => (
                  <stop key={i} offset={stop.offset} stopColor={stop.color} />
                ))}
              </linearGradient>
            </defs>
          </motion.svg>
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/3 w-2/3 h-2/3 opacity-15"
          animate={{
            filter: ["blur(45px)", "blur(65px)", "blur(45px)"],
            scale: [1, 0.95, 1],
            rotate: [0, -8, 0, 8, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.svg 
            viewBox="0 0 100 100" 
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <motion.path
              d={backgroundShapes[(morphState + 4) % backgroundShapes.length]}
              fill="url(#gradientRose)"
              animate={{ d: backgroundShapes[(morphState + 5) % backgroundShapes.length] }}
              transition={{ duration: 10, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id={gradients.rose.id} x1="0%" y1="0%" x2="100%" y2="100%">
                {gradients.rose.colors.map((stop, i) => (
                  <stop key={i} offset={stop.offset} stopColor={stop.color} />
                ))}
              </linearGradient>
            </defs>
          </motion.svg>
        </motion.div>
      </div>
    </div>
  );
};

export default FloatingBackground;