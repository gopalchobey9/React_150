import React, { useRef } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from "./NewQuotes.module.css"

const NewQuotes = () => {
 let navigate = useNavigate();
 const  authornameRef = useRef();
 const contentRef = useRef();

 async function submitHandler(e){
    e.preventDefault();
    const author = authornameRef.current.value;
    const text  =contentRef.current.value;
    await axios.post("http://localhost:8080/addquotes" , {author,text})
    navigate('/')
  }

  return (

    // <form onSubmit={submitHandler} >
    //   <label htmlFor="author">Author</label>
    //   <input type="text" name='author' id='author' placeholder='Author Name' ref={authornameRef}/>

    //   <label htmlFor="quote">Quote</label>
    //   <textarea name="quote" id="quote" cols="10" rows="5" placeholder='qrite your quote  here ' ref={contentRef}></textarea>
    //   <button>Add Quote</button>
    // </form>

    <form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="author name" ref={authornameRef}  />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Quote</Form.Label>
        <Form.Control type="text-area" placeholder="quote" ref={contentRef}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
    )
}

export default NewQuotes