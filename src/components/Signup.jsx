import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <form>
        <h1 id="login-header">Welcome</h1>
        <label for="mail">Email:</label> <br />
        <input type="email" id="email" name="mail" /> <br />
        <label for="pword">Password:</label> <br />
        <input type="password" id="pword" name="pword" /> <br />
        <br />
        <Link id="gotosignup" to="/">
          Login
        </Link>
      </form>
    </div>
  );
};

export default Signup;
