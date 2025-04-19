import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FloatingBackground from '../components/FloatingBackground'

function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <section 
        className="relative text-center py-16 sm:py-24 px-4 rounded-lg overflow-hidden bg-gradient-to-br from-purple-900 via-gray-900 to-cyan-900 shadow-xl min-h-[70vh] flex items-center justify-center"
      >
        <FloatingBackground />
        
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-900/80 to-transparent z-[5]"></div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mb-6 relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="absolute -inset-6 sm:-inset-8 rounded-full opacity-30 blur-xl z-0"
              animate={{ 
                background: [
                  'radial-gradient(circle, rgba(124,58,237,0.5) 0%, rgba(8,145,178,0.2) 100%)',
                  'radial-gradient(circle, rgba(8,145,178,0.5) 0%, rgba(124,58,237,0.2) 100%)',
                  'radial-gradient(circle, rgba(124,58,237,0.5) 0%, rgba(8,145,178,0.2) 100%)'
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 relative z-10"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                textShadow: [
                  '0 0 8px rgba(124,58,237,0.3)',
                  '0 0 12px rgba(8,145,178,0.3)',
                  '0 0 8px rgba(124,58,237,0.3)'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Welcome to Project Store
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover the future of E-commerce. Exclusive products, unbeatable prices.
          </motion.p>
          
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="absolute -inset-1 rounded-full blur-sm opacity-70"
              animate={{ 
                background: [
                  'linear-gradient(90deg, rgba(124,58,237,0.8) 0%, rgba(8,145,178,0.8) 100%)',
                  'linear-gradient(90deg, rgba(8,145,178,0.8) 0%, rgba(124,58,237,0.8) 100%)',
                  'linear-gradient(90deg, rgba(124,58,237,0.8) 0%, rgba(8,145,178,0.8) 100%)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <Link 
              to="/shop"
              className="relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 sm:px-10 rounded-full shadow-lg transition duration-300 inline-block"
            >
              Shop Now
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-10 sm:py-16 px-4">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: '200% 200%' }}
        >
          The Project Store Difference
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          <motion.div 
            className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700 hover:border-yellow-500 transition duration-300 h-full flex flex-col relative overflow-hidden"
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4)" }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-lg z-0 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="mb-3 sm:mb-4 text-yellow-400 relative z-10 w-16 h-16 mx-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <motion.path 
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white relative z-10">Top-Rated Products</h3>
            <p className="text-gray-400 text-sm sm:text-base flex-grow relative z-10">Our collection features only the most highly rated and reviewed gadgets, trusted by tech enthusiasts and everyday users alike. Shop with confidence knowing you’re getting the best.</p>
            <motion.button 
              className="mt-4 text-sm text-yellow-400 hover:text-yellow-300 transition duration-300 relative z-10 group flex items-center justify-center"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              See customer favorites
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700 hover:border-purple-500 transition duration-300 h-full flex flex-col relative overflow-hidden"
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4)" }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            custom={1}
          >
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-br from-purple-500/20 to-transparent rounded-lg z-0 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="mb-3 sm:mb-4 text-purple-400 relative z-10 w-16 h-16 mx-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <motion.path 
                  d="M4 12C4 7.03 7.03 4 12 4s8 3.03 8 8-3.03 8-8 8-8-3.03-8-8zm2 0c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6-6 2.69-6 6zm3-1h6v2H9v-2z" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white relative z-10">Sleek & Intuitive Design</h3>
            <p className="text-gray-400 text-sm sm:text-base flex-grow relative z-10">Enjoy a modern, clutter-free shopping experience. Our interface is designed for effortless browsing, so you can find what you need without distractions.</p>
            <motion.button 
              className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition duration-300 relative z-10 group flex items-center justify-center"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Explore the UI
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700 hover:border-cyan-500 transition duration-300 h-full flex flex-col relative overflow-hidden"
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4)" }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            custom={2}
          >
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-lg z-0 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="mb-3 sm:mb-4 text-cyan-400 relative z-10 w-16 h-16 mx-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <motion.path 
                  d="M7 18c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H7zm0-2h10V8H7v8zm2-6h6v2H9v-2z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white relative z-10">Lightning-Fast Checkout</h3>
            <p className="text-gray-400 text-sm sm:text-base flex-grow relative z-10">From cart to confirmation in seconds. Our streamlined checkout is built for speed, so you can complete your purchase and get back to what matters most.</p>
            <motion.button 
              className="mt-4 text-sm text-cyan-400 hover:text-cyan-300 transition duration-300 relative z-10 group flex items-center justify-center"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Experience quick checkout
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="relative text-center py-10 sm:py-16 px-4 bg-gray-800 rounded-lg shadow-inner overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 opacity-20 overflow-hidden"
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
              d="M 0 20 C 20 0 40 0 60 20 C 80 40 100 40 100 70 L 100 100 C 60 100 40 80 0 100 Z"
              fill="url(#exploreGradientPurple)"
              animate={{ 
                d: [
                  "M 0 20 C 20 0 40 0 60 20 C 80 40 100 40 100 70 L 100 100 C 60 100 40 80 0 100 Z",
                  "M 0 0 C 30 20 40 50 30 70 C 20 90 0 100 0 100 L 100 100 C 100 70 80 50 100 30 C 120 10 100 0 100 0 Z",
                  "M 0 20 C 20 0 40 0 60 20 C 80 40 100 40 100 70 L 100 100 C 60 100 40 80 0 100 Z"
                ]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="exploreGradientPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
          </motion.svg>
        </motion.div>

        <motion.div 
          className="absolute inset-0 z-0 opacity-15"
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
              d="M 0 0 Q 50 30 100 0 L 100 100 Q 50 70 0 100 Z"
              fill="url(#exploreGradientCyan)"
              animate={{ 
                d: [
                  "M 0 0 Q 50 30 100 0 L 100 100 Q 50 70 0 100 Z",
                  "M 0 30 Q 30 0 50 30 Q 70 60 100 30 L 100 100 Q 70 70 50 100 Q 30 70 0 100 Z",
                  "M 0 0 Q 50 30 100 0 L 100 100 Q 50 70 0 100 Z"
                ]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="exploreGradientCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
          </motion.svg>
        </motion.div>

        <div className="relative z-10">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Ready to Explore?
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Browse our full collection and find your product.
          </motion.p>
          
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="absolute -inset-1 rounded-full blur-sm opacity-70"
              animate={{ 
                background: [
                  'linear-gradient(90deg, rgba(8,145,178,0.8) 0%, rgba(124,58,237,0.8) 100%)',
                  'linear-gradient(90deg, rgba(8,145,178,0.8) 0%, rgba(124,58,237,0.8) 100%)',
                  'linear-gradient(90deg, rgba(8,145,178,0.8) 0%, rgba(124,58,237,0.8) 100%)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <Link 
              to="/shop"
              className="relative bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg transition duration-300 inline-block"
            >
              Visit the Shop
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home