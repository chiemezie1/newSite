import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    const respones = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      }),
    });

    if (respones.status === 200 || 204) {
      alert("You Successful registered");
      
    } else {
      alert("Registration failed");
    }

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
          name="firstname"
          placeholder="FirstName"
          value={firstname}
          onChange={(ev) => setFirstname(ev.target.value)}
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
