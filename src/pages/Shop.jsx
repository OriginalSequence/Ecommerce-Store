import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setProducts(data)
      } catch (e) {
        setError(e.message)
        console.error("Failed to fetch products:", e)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <div className="text-center text-white py-10">Loading products...</div>
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">Error loading products: {error}</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-white">Shop All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default Shop