import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userDetails => {
        setUserInfo(userDetails);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }


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
