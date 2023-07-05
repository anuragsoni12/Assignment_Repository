import React, { useEffect, useState } from "react";
import SignInPage from "./SignInPage";
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";
const Authentication = () => {
  let initialFormDataBase;

  if (localStorage.getItem("formDataBase") === null) {
    initialFormDataBase = [];
  } else {
    initialFormDataBase = JSON.parse(localStorage.getItem("formDataBase"));
  }
  const [formDataBase, setFormDataBase] = useState(initialFormDataBase);
  //----- for handling login status
  const [islogin, setIsLogin] = useState(false);

  const handleIsLoginStatus = () => {
    setIsLogin(!islogin);
  };

  useEffect(() => {
    localStorage.setItem("formDataBase", JSON.stringify(formDataBase));
  }, [formDataBase]);
  //----- for handling login status
  console.log(formDataBase);
  const [message, setMessage] = useState("");
  return (
    <>
      {message && message}
      <div>
        {islogin ? (
          <SignInPage
            handleIsLoginStatus={handleIsLoginStatus}
            setFormDataBase={setFormDataBase}
            formDataBase={formDataBase}
          />
        ) : (
          <LoginPage
            handleIsLoginStatus={handleIsLoginStatus}
            setMessage={setMessage}
          />
        )}
      </div>
    </>
  );
};

export default Authentication;
