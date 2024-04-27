import React, { useContext } from 'react'
import { myContext } from './Context'

const Home = () => {
   const {logout}= useContext(myContext)
  return (
    <div>
        <h2>Home</h2>
        <button onClick={logout}>logout</button>
    </div>
  )
}

export default Home