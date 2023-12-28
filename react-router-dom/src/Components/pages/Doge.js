import React from 'react'
import{useNavigate } from 'react-router-dom'

const Doge = () => {
    let navigate =  useNavigate();
    function redirectPageHandler(){
        navigate('/')
    }
  return (
    <div>
        <h1>Woof Woof</h1>
        <button onClick={redirectPageHandler}>Main Page</button>
        
    </div>
  )
}

export default Doge
