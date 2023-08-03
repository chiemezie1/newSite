import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout/> }>
        <Route exact path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="Login" element={ <Login/> } />
        <Route path="Register" element={ <Register/> } />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
