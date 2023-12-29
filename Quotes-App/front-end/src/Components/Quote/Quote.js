import React from 'react'
// import styles from './Quote.module.css'


const Quote = (props) => {
  return (
    <li>
        <span >

            <p>{props.text}</p>
            <h3>{props.author}</h3>
        </span>
        <button> view full Quote</button>
    </li>
  )
}

export default Quote