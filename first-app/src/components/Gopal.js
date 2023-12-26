import React from 'react'

let arr2 = ["😅","🌞","😁","😶‍🌫️","☀️","❤️"]
let todo =["day1","day2","day3","day4","day5","day6"]

let val =Math.floor(Math.random()*6)
const Gopal = () => {
  return (
    <div>
        <h1>{arr2[val]}</h1>
       {
         (val===3)? <img src="https://www.shutterstock.com/shutterstock/photos/2275269793/display_1500/stock-vector-google-popular-realistic-social-media-logotype-editorial-illustration-eps-2275269793.jpg" alt="" />:"nahi aai image"
       }
        {
            todo.map((item,index)=>{
            return <li key={index}>My task is this {item}& position is {index}</li>
        })}
    </div>
  )
}

export default Gopal