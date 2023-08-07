import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleLogin(ev) {
    ev.preventDefault();
    
    // Hash the password on the client-side (you may need to use a more secure hashing library)
    const hashedPassword = hashPassword(password);

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({ username, password
          // : hashedPassword 
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setRedirect(true);
      } else {
        console.error('Error during login');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle other errors, e.g., show a generic error message
    }
  }

  // Replace this function with a more secure hashing function
  function hashPassword(password) {
    // Example: Using a simple hashing method for demonstration purposes only
    return password.split('').reverse().join('');
  }

  if(redirect){
    return <Navigate to={'/'} />
  } 
  // else{
  //   alert("wrong credentials")
  // }

  return (
    <div>
      <form className='login' onSubmit={handleLogin}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
