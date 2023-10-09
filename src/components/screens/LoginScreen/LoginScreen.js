import React, { useEffect } from "react";
import "../LoginScreen/LoginScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="logo"
        />
        <button onClick={handleLogin}>Login with google</button>
        <p>This Project is made using Youtube Data Api</p>
      </div>
    </div>
  );
};

export default LoginScreen;
