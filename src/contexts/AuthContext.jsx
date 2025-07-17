import React, { createContext, useContext, useState, useEffect } from 'react'
import { apiClient } from '../lib/api'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on app start
    const checkAuth = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const response = await apiClient.getCurrentUser()
          setUser(response.user)
        } catch (error) {
          console.error('Auth check failed:', error)
          localStorage.removeItem('token')
        }
      }
      setLoading(false)
    }

    checkAuth()
  }, [])

  const signUp = async (email, password, userData) => {
    try {
      const response = await apiClient.register({
        fullName: userData.full_name,
        email,
        password,
        phone: userData.phone
      })
      setUser(response.user)
      return { data: response, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  const signIn = async (email, password) => {
    try {
      const response = await apiClient.login({
        email,
        password
      })
      setUser(response.user)
      return { data: response, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  const signOut = async () => {
    try {
      apiClient.logout()
      setUser(null)
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  const value = {
    user,
    signUp,
    signIn,
    signOut,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}