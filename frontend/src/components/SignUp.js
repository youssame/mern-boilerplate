import React, { useState } from 'react';
import Default from '../controllers/DefaultController';

function SignUp() {
  const [ username, setUsername ] = useState("")
  const signUpAction = () => {
     let result = Default.signUp(username)
  }
  return (
    <div className="App">
        {username}<br></br>
        <input type="text" onChange={ (e) => setUsername(e.target.value)} placeholder="Username" />
        <button onClick={ signUpAction }>Create your username</button>  
    </div>
  );
}

export default SignUp;
