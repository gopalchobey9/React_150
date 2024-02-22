import React, { useState } from 'react';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function formHandler(e){
    e.preventDefault();
  }
  

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={formHandler}>
        <label>
          Email:
          <input type="email" value ={email}  />
          </label>
          <br />
          <br />
        <label>
          Password:
          <input type="password"  value ={password} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
