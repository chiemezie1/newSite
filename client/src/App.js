import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout/> }>
        <Route exact path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="register" element={ <Register/> } />
        <Route path="createPost" element={ <CreatePost/> } />

      </Route>
      </Routes>
    </div>
  );
}

export default App;
