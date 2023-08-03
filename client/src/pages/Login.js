
import React from 'react';

function Login() {
  return (
    <div>
      <form className='login' action='' method='post'>
        <input type='text' name='username' placeholder='Username' />
        <input type='password' name='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;