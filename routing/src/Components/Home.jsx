import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home page</h1>
        <Link to='/admin'>Admin</Link>
    </div>
  )
}

export default Home