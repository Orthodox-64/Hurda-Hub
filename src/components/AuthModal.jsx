import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

const AuthModal = ({ onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { signIn, signUp } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (isSignIn) {
        const { error } = await signIn(formData.email, formData.password)
        if (error) throw error
      } else {
        const { error } = await signUp(formData.email, formData.password, {
          full_name: formData.fullName,
          phone: formData.phone
        })
        if (error) throw error
      }
      onClose()
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50
  }

  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    width: '100%',
    maxWidth: '28rem'
  }

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  }

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  }

  const closeButtonStyle = {
    color: '#6b7280',
    background: 'none',
    border: 'none',
    fontSize: '1.25rem',
    cursor: 'pointer',
    transition: 'color 0.3s'
  }

  const closeButtonHoverStyle = {
    color: '#374151'
  }

  const errorStyle = {
    backgroundColor: '#fef2f2',
    border: '1px solid #fecaca',
    color: '#b91c1c',
    padding: '0.75rem 1rem',
    borderRadius: '0.25rem',
    marginBottom: '1rem'
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column'
  }

  const inputGroupStyle = {
    marginBottom: '1rem'
  }

  const labelStyle = {
    display: 'block',
    color: '#374151',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  }

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    transition: 'border-color 0.3s'
  }

  const inputFocusStyle = {
    outline: 'none',
    borderColor: '#16a34a'
  }

  const submitButtonStyle = {
    width: '100%',
    backgroundColor: '#16a34a',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginBottom: '1rem'
  }

  const submitButtonHoverStyle = {
    backgroundColor: '#15803d'
  }

  const submitButtonDisabledStyle = {
    opacity: 0.5,
    cursor: 'not-allowed'
  }

  const toggleButtonStyle = {
    color: '#16a34a',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    width: '100%',
    transition: 'color 0.3s'
  }

  const toggleButtonHoverStyle = {
    color: '#15803d'
  }

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </h2>
          <button
            onClick={onClose}
            style={closeButtonStyle}
            onMouseEnter={(e) => e.target.style.color = closeButtonHoverStyle.color}
            onMouseLeave={(e) => e.target.style.color = closeButtonStyle.color}
          >
            ✕
          </button>
        </div>

        {error && (
          <div style={errorStyle}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={formStyle}>
          {!isSignIn && (
            <>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
                  onBlur={(e) => e.target.style.borderColor = inputStyle.borderColor}
                  required
                />
              </div>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
                  onBlur={(e) => e.target.style.borderColor = inputStyle.borderColor}
                  required
                />
              </div>
            </>
          )}

          <div style={inputGroupStyle}>
            <label style={labelStyle}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
              onBlur={(e) => e.target.style.borderColor = inputStyle.borderColor}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
              onBlur={(e) => e.target.style.borderColor = inputStyle.borderColor}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...submitButtonStyle,
              ...(loading ? submitButtonDisabledStyle : {})
            }}
            onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = submitButtonHoverStyle.backgroundColor)}
            onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = submitButtonStyle.backgroundColor)}
          >
            {loading ? 'Loading...' : (isSignIn ? 'Sign In' : 'Sign Up')}
          </button>
        </form>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            style={toggleButtonStyle}
            onMouseEnter={(e) => e.target.style.color = toggleButtonHoverStyle.color}
            onMouseLeave={(e) => e.target.style.color = toggleButtonStyle.color}
          >
            {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthModal