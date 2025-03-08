<<<<<<< HEAD
import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

function Navbar({isAuthenticated, onLogout, user}) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Product Management
        </Link>

        <div className="navbar-menu">
          {isAuthenticated ? (
            <>
              <Link to="/" className="navbar-link">
                Products
              </Link>
              <Link to="/products/new" className="navbar-link">
                Add Product
              </Link>
              <div className="navbar-user">
                <span>Welcome, {user?.storeName}</span>
                <button onClick={onLogout} className="btn btn-logout">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
=======
import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

function Navbar({isAuthenticated, onLogout, user}) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Product Management
        </Link>

        <div className="navbar-menu">
          {isAuthenticated ? (
            <>
              <Link to="/" className="navbar-link">
                Products
              </Link>
              <Link to="/products/new" className="navbar-link">
                Add Product
              </Link>
              <div className="navbar-user">
                <span>Welcome, {user?.storeName}</span>
                <button onClick={onLogout} className="btn btn-logout">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
>>>>>>> Initial commit
