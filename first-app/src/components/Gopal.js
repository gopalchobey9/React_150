import React from 'react'

let arr2 = ["😅","🌞","😁","😶‍🌫️","☀️","❤️"]
let todo =["day1","day2","day3","day4","day5","day6"]

let val =Math.floor(Math.random()*6)
const Gopal = () => {
  return (
    <div>
        <h1>{arr2[val]}</h1>
        {
            todo.map((item,index)=>{
            return <li key={index}>My task is this {item}& position is {index}</li>
        })}
    </div>
  )
}

export default Gopal