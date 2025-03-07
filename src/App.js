import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import ProductForm from './components/ProductForm'
import Login from './components/Login'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [user, setUser] = React.useState(null)

  const handleLogin = userData => {
    setIsAuthenticated(true)
    setUser(userData)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <Router>
      <div className="app">
        <Navbar
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
          user={user}
        />
        <main className="main-content">
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/"
              element={
                isAuthenticated ? <ProductList /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/products/new"
              element={
                isAuthenticated ? <ProductForm /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/products/:id"
              element={
                isAuthenticated ? <ProductDetail /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
