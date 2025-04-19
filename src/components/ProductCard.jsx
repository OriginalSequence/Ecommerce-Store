import React, { useState } from 'react'

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };
  
  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };
  
  const renderRating = (rating) => {
    if (!rating) return null;
    return (
      <div className="flex items-center">
        <span className="text-yellow-400 mr-1">★</span>
        <span className="font-medium">{rating.rate.toFixed(1)}</span>
        <span className="text-gray-400 ml-1">({rating.count})</span>
      </div>
    );
  };

  return (
    <div 
      key={product.id} 
      className="border border-gray-700 rounded-lg shadow-lg bg-black text-white flex flex-col hover:shadow-purple-500/50 transition-shadow duration-300 h-full overflow-hidden"
    >
      <div className="p-4 flex-grow flex flex-col">
        <div className="bg-white p-4 rounded-lg mb-4 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-40 w-full object-contain"
            loading="lazy"
          />
        </div>
        
        <div className="mb-2">
          {product.rating && (
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                {renderRating(product.rating)}
              </div>
              <span className="text-xs text-gray-400">{product.category}</span>
            </div>
          )}
        </div>
        
        <h2 className="text-xl font-bold mb-2 line-clamp-2">{product.title}</h2>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto">
          <p className="text-2xl font-bold mb-3">${product.price.toFixed(2)}</p>
          
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Quantity</span>
              <div className="flex items-center border border-gray-700 rounded-md">
                <button 
                  onClick={decrementQuantity}
                  className="px-3 py-1 text-gray-300 hover:bg-gray-800 rounded-l-md"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-3 py-1 text-center w-10">{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  className="px-3 py-1 text-gray-300 hover:bg-gray-800 rounded-r-md"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={handleAddToCart} 
        className="bg-gradient-to-r from-purple-600 to-cyan-400 text-white font-bold py-4 px-4 w-full transition duration-300 hover:from-purple-700 hover:to-cyan-500"
        aria-label="Add to cart"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard