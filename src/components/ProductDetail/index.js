<<<<<<< HEAD
import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import './index.css'

function ProductDetail() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchProduct()
  }, [id])

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://apis.ccbp.in/products/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch product')
      }
      const data = await response.json()
      setProduct(data)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return
    }

    try {
      const response = await fetch(`https://apis.ccbp.in/products/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete product')
      }
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">{error}</div>
  if (!product) return <div className="not-found">Product not found</div>

  return (
    <div className="product-detail">
      <div className="product-detail-header">
        <h1>{product.name}</h1>
        <div className="actions">
          <button
            onClick={() => navigate(`/products/${id}/edit`)}
            className="btn btn-primary"
          >
            Edit
          </button>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="info-group">
          <label>Description</label>
          <p>{product.description}</p>
        </div>

        <div className="info-group">
          <label>Price</label>
          <p>${product.price}</p>
        </div>

        <div className="info-group">
          <label>Store</label>
          <p>{product.store}</p>
        </div>

        <div className="info-group">
          <label>Created At</label>
          <p>{new Date(product.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
=======
import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import './index.css'

function ProductDetail() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchProduct()
  }, [id])

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://apis.ccbp.in/products/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch product')
      }
      const data = await response.json()
      setProduct(data)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return
    }

    try {
      const response = await fetch(`https://apis.ccbp.in/products/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete product')
      }
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">{error}</div>
  if (!product) return <div className="not-found">Product not found</div>

  return (
    <div className="product-detail">
      <div className="product-detail-header">
        <h1>{product.name}</h1>
        <div className="actions">
          <button
            onClick={() => navigate(`/products/${id}/edit`)}
            className="btn btn-primary"
          >
            Edit
          </button>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="info-group">
          <label>Description</label>
          <p>{product.description}</p>
        </div>

        <div className="info-group">
          <label>Price</label>
          <p>${product.price}</p>
        </div>

        <div className="info-group">
          <label>Store</label>
          <p>{product.store}</p>
        </div>

        <div className="info-group">
          <label>Created At</label>
          <p>{new Date(product.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
>>>>>>> Initial commit
