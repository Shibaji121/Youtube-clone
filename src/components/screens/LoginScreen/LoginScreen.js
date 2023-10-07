import React from "react";
import "../LoginScreen/LoginScreen.css";

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="logo"
        />
        <button>Login with google</button>
        <p>This Project is made using Youtube Data Api</p>
      </div>
    </div>
  );
};

export default LoginScreen;
