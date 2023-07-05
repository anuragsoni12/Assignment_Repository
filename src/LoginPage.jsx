import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const { handleIsLoginStatus, setMessage } = props;
  let dataBase = JSON.parse(localStorage.getItem("formDataBase"));
  const initialState = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialState);

  const handleLoginFormInputFn = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmitFn = (e) => {
    e.preventDefault();
    console.log("db", typeof dataBase);

    dataBase.map((item) => {
      if (
        loginData.email === item.userEmail &&
        loginData.password === item.password
      ) {
        setMessage("Dashboard");
        // console.log("Error");
        navigate("/dashboard");
        setLoginSuccess(true);
        setLoginData(initialState);
      }
      console.log("db item", item.userEmail);
    });

    // console.log(localStorage.getItem("formDataBase"));
    // console.log(loginData);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <input
          type="email"
          value={loginData.email}
          name="email"
          placeholder="Email"
          onChange={handleLoginFormInputFn}
        />{" "}
        <br />
        <input
          type="text"
          name="password"
          value={loginData.password}
          placeholder="Password"
          onChange={handleLoginFormInputFn}
        />{" "}
        <br />
        <button onClick={handleSubmitFn}>Login</button>
        <div>
          <p>Don't have an account Sign in</p>
          <button onClick={handleIsLoginStatus}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
