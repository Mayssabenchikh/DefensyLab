import React from "react";
import logo from "./1630550388753-removebg-preview.png";
import "./login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="img">
        <img src={logo} id="img" />
      </div>
      <h1 className="label">User Login</h1>
      <form className="login_form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
