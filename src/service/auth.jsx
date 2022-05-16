import React, { useState, createContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const recoverUser = localStorage.getItem('user')
    if (recoverUser) {
      setUser(JSON.parse(recoverUser))
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    console.log('login no app routes', { email, password})

    const loggedUser = {
      id:"123",
      email
    }

    localStorage.setItem("user", JSON.stringify(loggedUser))

    if (password === '123'){
      setUser({id: 123, email})
      navigate('/')
    }
  }
  
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    navigate('/login')
    console.log('logout')
  }

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}