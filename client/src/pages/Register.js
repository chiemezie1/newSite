import React, { useState } from "react";

function Register() {
  
  const [username, setUsername] = useState("");
  const [fristname, setFristname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function register(ev) {
    ev.preventDefault();
    await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        fristname: fristname,
        lastname: lastname,
        email: email,
        password: password,
      }),
    });
  }

  return (
    <div>
      <form className="register" onSubmit={register}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="text"
          name="fristname"
          placeholder="FristName"
          value={fristname}
          onChange={(ev) => setFristname(ev.target.value)}
        />
        <input
          type="text"
          name="lastname"
          placeholder="LastName"
          value={lastname}
          onChange={(ev) => setLastname(ev.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
