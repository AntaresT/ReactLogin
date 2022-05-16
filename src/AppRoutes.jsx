import React, { useContext } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

import { AuthProvider, AuthContext } from './service/auth';

const AppRoutes = () => {

  const Private = ({children}) => {
    const { authenticated, loading } = useContext(AuthContext)


    if(loading){
      return <h3>Carregando</h3>
    }

    if(!authenticated){
      return <Navigate to='/login' />
    }

    return children
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path='/login' element={
            <Login />
          } />

        <Route exact path='/' element={
            <Private> 
              <Home />
            </Private> 
          } />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes;
