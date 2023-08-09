import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userDetails) => {
        setUsername(userDetails.username);
      });
    });
  }, []);

  // useEffect(() => {
  //   // Get the token from cookies
  //   const cookies = document.cookie.split(';');
  //   let token = '';
  //   cookies.forEach(cookie => {
  //     const [name, value] = cookie.trim().split('=');
  //     if (name === 'token') {
  //       token = value;
  //     }
  //   });
  
  //   // Make the profile request with the token in headers
  //   fetch("http://localhost:4000/profile", {
  //     credentials: "include",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }).then((response) => {
  //     response.json().then((userDetails) => {
  //       setUsername(userDetails.username);
  //     });
  //   });
  // }, []);
  


  return (
    <navbar>
      <div className="navbar">
        <div className="contenerlogo">
          <img
            className="logo"
            onClick={() => (window.location.href = "/")}
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="navLinks">
          {username && (
            <>
              <Link to="/create">Create Post</Link>
            </>
          )}
          {!username && (
            <>
              <Link to="/about">About</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
