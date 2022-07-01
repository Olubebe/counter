import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h1 id="login-header">Welcome</h1>
      <label for="email">Email:</label> <br />
      <input type="email" id="email" name="email" /> <br />
      <label for="pword">Password:</label> <br />
      <input type="password" id="pword" name="pword" /> <br />
      <br />
      <Link id="gotosignup" to="/signup">
        Sign Up
      </Link>
    </div>
  );
};

export default Login;
