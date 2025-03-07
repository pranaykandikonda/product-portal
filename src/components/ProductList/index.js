import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({
    searchTerm: '',
    store: '',
  })

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://apis.ccbp.in/products')
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      const data = await response.json()
      setProducts(data)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const handleSearch = e => {
    setFilters({
      ...filters,
      searchTerm: e.target.value,
    })
  }

  const handleStoreFilter = e => {
    setFilters({
      ...filters,
      store: e.target.value,
    })
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(filters.searchTerm.toLowerCase())
    const matchesStore = !filters.store || product.store === filters.store
    return matchesSearch && matchesStore
  })

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="product-list">
      <div className="product-list-header">
        <h1>Products</h1>
        <Link to="/products/new" className="btn btn-primary">
          Add New Product
        </Link>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={filters.searchTerm}
          onChange={handleSearch}
          className="search-input"
        />

        <select
          value={filters.store}
          onChange={handleStoreFilter}
          className="store-filter"
        >
          <option value="">All Stores</option>
          {/* Add store options dynamically */}
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-store">Store: {product.store}</p>
            <div className="product-actions">
              <Link to={`/products/${product.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          No products found matching your criteria.
        </div>
      )}
    </div>
  )
}

export default ProductList
