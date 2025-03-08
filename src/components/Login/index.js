<<<<<<< HEAD
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

function Login({onLogin}) {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    storeName: '',
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')

    try {
      const endpoint = isLoginMode
        ? 'https://apis.ccbp.in/login'
        : 'https://apis.ccbp.in/register'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(await response.text())
      }

      const userData = await response.json()
      onLogin(userData)
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isLoginMode ? 'Login' : 'Register'}</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {!isLoginMode && (
            <div className="form-group">
              <label>Store Name</label>
              <input
                type="text"
                name="storeName"
                value={formData.storeName}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            {isLoginMode ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="login-footer">
          <button
            className="btn-link"
            onClick={() => setIsLoginMode(!isLoginMode)}
          >
            {isLoginMode
              ? 'Need an account? Register'
              : 'Have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
=======
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

function Login({onLogin}) {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    storeName: '',
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')

    try {
      const endpoint = isLoginMode
        ? 'https://apis.ccbp.in/login'
        : 'https://apis.ccbp.in/register'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(await response.text())
      }

      const userData = await response.json()
      onLogin(userData)
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isLoginMode ? 'Login' : 'Register'}</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {!isLoginMode && (
            <div className="form-group">
              <label>Store Name</label>
              <input
                type="text"
                name="storeName"
                value={formData.storeName}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            {isLoginMode ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="login-footer">
          <button
            className="btn-link"
            onClick={() => setIsLoginMode(!isLoginMode)}
          >
            {isLoginMode
              ? 'Need an account? Register'
              : 'Have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
>>>>>>> Initial commit
