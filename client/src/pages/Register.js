
import React from 'react';

function Register() {
  return (
    <div>
      <form action='' method='post'>
        <input type='text' name= 'fristname' placeholder='Fristname' />
        <input type='text' name='lastname' placeholder='Lastname' />
        <input type='text' name='username' placeholder='Username' />
        <input type='password' name='password' placeholder='Password' />

        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default Register;