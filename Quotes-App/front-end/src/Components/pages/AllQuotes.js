import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Quote from '../Quote/Quote';
const AllQuotes = () => {

  let dummyQuotes =[];

  let [quotes,setQuotes] =  useState(dummyQuotes);

  async  function getQuotes(){

   
   
      let res = await axios.get('http://localhost:8080/allquotes');
      setQuotes(res.data);
  }



    useEffect(()=>{
      getQuotes();
    },[]);
  return (
    <div>
    <h1>All Quotes</h1>
    <ul>
     { 
      quotes.map((quote,index)=>{
         return <Quote
         key={index}
         autohr ={quote.author}
         text ={quote.text} />
      })}
    </ul>


    </div>
  )
}

export default AllQuotes