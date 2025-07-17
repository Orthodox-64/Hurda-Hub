import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'
import Cart from './Cart'
import AuthModal from './AuthModal'

const Header = () => {
  const { user, signOut } = useAuth()
  const { getTotalItems } = useCart()
  const [showCart, setShowCart] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)

  const handleSignOut = async () => {
    await signOut()
  }

  const headerStyle = {
    backgroundColor: '#166534',
    color: 'white',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem'
  }

  const flexStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  }

  const navStyle = {
    display: 'flex',
    gap: '1.5rem'
  }

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s',
    cursor: 'pointer'
  }

  const navLinkHoverStyle = {
    color: '#bbf7d0'
  }

  const actionsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }

  const cartButtonStyle = {
    position: 'relative',
    backgroundColor: '#15803d',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }

  const cartButtonHoverStyle = {
    backgroundColor: '#16a34a'
  }

  const userInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }

  const welcomeTextStyle = {
    fontSize: '0.875rem'
  }

  const signOutButtonStyle = {
    backgroundColor: '#dc2626',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }

  const signOutButtonHoverStyle = {
    backgroundColor: '#b91c1c'
  }

  const signInButtonStyle = {
    backgroundColor: '#16a34a',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }

  const signInButtonHoverStyle = {
    backgroundColor: '#15803d'
  }

  const mobileNavStyle = {
    display: 'none'
  }

  const responsiveStyle = `
    @media (max-width: 768px) {
      .desktop-nav {
        display: none !important;
      }
    }
  `

  return (
    <>
      <style>{responsiveStyle}</style>
      <header style={headerStyle}>
        <div style={containerStyle}>
          <div style={flexStyle}>
            <div style={logoStyle}>
              <h1 style={titleStyle}>🌿 Organic Hurda Hub</h1>
            </div>
            
            <nav style={navStyle} className="desktop-nav">
              <a 
                href="#fine-grained" 
                style={navLinkStyle}
                onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Fine Grained Hurda
              </a>
              <a 
                href="#bulk-hurda" 
                style={navLinkStyle}
                onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Bulk Hurda
              </a>
              <a 
                href="#about" 
                style={navLinkStyle}
                onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                About
              </a>
            </nav>

            <div style={actionsStyle}>
              <button
                onClick={() => setShowCart(true)}
                style={cartButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = cartButtonHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = cartButtonStyle.backgroundColor}
              >
                🛒 Cart ({getTotalItems()})
              </button>

              {user ? (
                <div style={userInfoStyle}>
                  <span style={welcomeTextStyle}>Welcome, {user.email}</span>
                  <button
                    onClick={handleSignOut}
                    style={signOutButtonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = signOutButtonHoverStyle.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = signOutButtonStyle.backgroundColor}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  style={signInButtonStyle}
                  onMouseEnter={(e) => e.target.style.backgroundColor = signInButtonHoverStyle.backgroundColor}
                  onMouseLeave={(e) => e.target.style.backgroundColor = signInButtonStyle.backgroundColor}
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {showCart && <Cart onClose={() => setShowCart(false)} />}
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  )
}

export default Header