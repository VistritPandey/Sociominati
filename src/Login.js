import React from "react";
import "./Login.css";
import { provider, auth } from "./Firebase";
import { Button } from "@material-ui/core";
import logo from "./Logo.jpg";

function Login() {
  const signIn = (e) => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <img src={logo} alt="" />
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
