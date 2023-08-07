import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
  
    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        
        body: JSON.stringify({
          username: username,
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        }),
      });
  
      if (response.ok) {
        // Registration was successful (status code 200 or 204)
        alert("You have successfully registered!");
      } else if (response.status === 400) {
        // Bad Request - The server couldn't understand the request.
        // This may occur if the data sent to the server is invalid.
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      } else {
        // Other non-successful status codes (e.g., 404, 500, etc.)
        // Handle other potential error cases here
        alert("Registration failed: An unknown error occurred.");
      }
    } catch (error) {
      // Network error or other unexpected issues
      console.error("Error during registration:", error);
      alert("Registration failed: An unexpected error occurred.");
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
