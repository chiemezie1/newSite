
import React from 'react';

function Register() {
  return (
    <div>
      <form className='register' action='' method='post'>
      <input type='text' name='username' placeholder='Username' />
        <input type='text' name= 'fristname' placeholder='FristName' />
        <input type='text' name='lastname' placeholder='LastName' />
       <input type='email' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />

        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default Register;