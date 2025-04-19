import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from './context/CartContext'
import Home from './pages/Home'
import Shop from './pages/Shop'
import CartDrawer from './components/CartDrawer'
import NavbarBackground from './components/NavbarBackground'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { getCartItemCount } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="relative bg-gray-900/80 backdrop-blur-sm p-3 sm:p-4 text-white flex justify-between items-center shadow-lg sticky top-0 z-30 overflow-hidden">
        {/* Polymorphic background for navbar */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <NavbarBackground />
        </div>
        
        {/* Navbar content with enhanced animations */}
        <div className="flex items-center space-x-3 sm:space-x-6 relative z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-cyan-400 hover:to-purple-400 transition duration-500">
              Project Store
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-4"> 
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link to="/" className="hover:text-cyan-400 transition duration-300 relative group" onClick={closeMobileMenu}>
                Home
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"
                  layoutId="navbarUnderline"
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link to="/shop" className="hover:text-cyan-400 transition duration-300 relative group" onClick={closeMobileMenu}>
                Shop
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"
                  layoutId="navbarUnderline"
                />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center relative z-10">
          <motion.button 
            onClick={toggleCart} 
            className="relative mr-3 sm:mr-4 text-gray-300 hover:text-white transition duration-300 p-2"
            aria-label="Open cart"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          > 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {getCartItemCount() > 0 && (
              <motion.span 
                className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                {getCartItemCount()}
              </motion.span>
            )}
          </motion.button>
          <motion.button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-gray-300 hover:text-white ml-2 sm:ml-4 p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </motion.button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-gray-900/90 backdrop-blur-sm text-white p-4 absolute top-14 sm:top-16 left-0 right-0 z-20 shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        > 
          <div className="absolute inset-0 z-0 opacity-50">
            <NavbarBackground />
          </div>
          <div className="relative z-10">
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link to="/" className="block py-3 px-2 text-center text-lg hover:text-cyan-400 hover:bg-gray-800/50 rounded transition duration-300" onClick={closeMobileMenu}>Home</Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link to="/shop" className="block py-3 px-2 text-center text-lg hover:text-cyan-400 hover:bg-gray-800/50 rounded transition duration-300" onClick={closeMobileMenu}>Shop</Link>
            </motion.div>
          </div>
        </motion.div>
      )}

      <main className="p-4 md:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>

      <CartDrawer isOpen={isCartOpen} onClose={toggleCart} />
      </main>
    </div>
  )
}

export default App
