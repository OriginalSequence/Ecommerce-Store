// src/components/CartDrawer.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, getCartTotal, getCartItemCount } = useCart();

  const drawerClasses = `
    fixed top-0 right-0 h-full w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 bg-black text-white 
    shadow-xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out 
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
  `;

  const overlayClasses = `
    fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out
    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `;

  return (
    <>
      {isOpen && <div className={overlayClasses} onClick={onClose}></div>}
      
      <div 
        className={drawerClasses}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 border-b border-gray-800">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-2xl font-bold text-white">Your Cart</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-center text-gray-400 p-4">Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div 
              className={`flex-grow ${cartItems.length > 2 ? 'overflow-y-auto' : ''}`}
              style={{ maxHeight: cartItems.length > 2 ? 'calc(100vh - 250px)' : 'auto' }}
            >
              {cartItems.map(item => (
                <div key={item.id} className="flex items-start p-4 border-b border-gray-800 relative">
                  <div className="bg-gray-800 rounded-lg p-2 mr-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 sm:w-20 sm:h-20 object-contain bg-white rounded-lg"/>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-bold text-white line-clamp-2 pr-6">{item.title}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        className="text-gray-400 hover:text-white absolute top-4 right-4"
                        aria-label="Remove item"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                    
                    <p className="text-gray-400 text-sm mt-1">${item.price.toFixed(2)}</p>
                    
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center border border-gray-700 rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                          className="px-2 sm:px-3 py-1 text-gray-300 hover:bg-gray-800 rounded-l-md"
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="px-2 sm:px-3 py-1 text-center w-8 sm:w-10">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                          className="px-2 sm:px-3 py-1 text-gray-300 hover:bg-gray-800 rounded-r-md"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-bold text-white">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-shrink-0 border-t border-gray-800">
              <div className="p-3 sm:p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-base sm:text-lg font-bold text-white">Total</span>
                  <span className="text-lg sm:text-xl font-bold text-white">${getCartTotal().toFixed(2)}</span>
                </div>
              
                <button 
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-400 text-white font-bold py-3 sm:py-4 px-4 transition duration-300 hover:from-purple-700 hover:to-cyan-500 mb-3"
                >
                  Checkout
                </button>
                
                <button 
                  onClick={onClose}
                  className="w-full border border-white text-white font-bold py-3 sm:py-4 px-4 transition duration-300 hover:bg-gray-900 mb-2"
                >
                  Continue Shopping
                </button>
                
                <div className="text-center">
                  <button 
                    onClick={clearCart} 
                    className="text-gray-400 hover:text-white text-sm py-1"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;