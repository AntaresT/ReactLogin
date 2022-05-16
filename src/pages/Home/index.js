import React, {useContext} from 'react'

import { AuthContext } from '../../service/auth';

const Home = () => {
  const { authenticated, logout } = useContext(AuthContext) 

  const handleLogout = () => {
    logout();
  }

  return ( 
    <>
      <h2>Home</h2>
      <p>{String(authenticated)}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Home;