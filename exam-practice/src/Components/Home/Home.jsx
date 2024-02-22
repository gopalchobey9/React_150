import React from 'react'
import { Link } from 'react-router-dom'
import FormData from '../FormData/FormData'
import "./Home.css"
const Home = () => {
  return (
    <div>
        <nav className='nav'><Link to="/signin">Signin    </Link>
        <Link to="/">Home</Link></nav>
        <h1>THIS IS A HOME PAGE</h1> 
        <FormData/>
        </div>

  )
}

export default Home