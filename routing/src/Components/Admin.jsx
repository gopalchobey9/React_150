import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>
      <Link to='/products'>
        products
      </Link>
     
    </div>
  )
}

export default Admin