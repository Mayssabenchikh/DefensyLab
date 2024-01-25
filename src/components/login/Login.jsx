import React from "react";
import logo from "../../assets/logodef.png";
import "./login.css";

const Login = () => {
  return (
    <div className="page">
      <div className="container_login">
        <div className="img">
          <img src={logo} id="img" />
        </div>
        <h1 className="label">User Login</h1>
        <form className="login_form" action="/">
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
