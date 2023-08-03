import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
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
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
