import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Quote from '../Quote/Quote';
const AllQuotes = () => {

  let dummyQuotes =[];

  let [quotes,setQuotes] =  useState(dummyQuotes);

  async  function getQuotes(){
    // let res = await axios.get('http://localhost:8080/allquotes');
    // setQuotes(res.data);
    try {
      let res = await axios.get('http://localhost:8080/allquotes');
      // Log the response to inspect its structure
      console.log(res.data);
      setQuotes(res.data);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
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
         author ={quote.author}
         text ={quote.text} />
      })}
    </ul>


    </div>
  )
}

export default AllQuotes