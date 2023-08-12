import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userDetails => {
        setUsername(userDetails.username);
      });
    });
  }, []);

  // function logout() {
  //   fetch('http://localhost:4000/logout', {
  //     credentials: 'include',
  //     method: 'POST',
  //   });
  //   setUsername(null);
  // }


  return (
    <navbar>
      <div className="navbar">
        <div className="contenerlogo">
          <img
            classNameName="logo"
            onClick={() => (window.location.href = "/")}
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="navLinks">
          {username && (
            <>
              <Link to="/createPost">Create Post</Link>
              <Link to="/logout">Log out</Link>
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
