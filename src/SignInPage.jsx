import React, { useState } from "react";

const SignInPage = (props) => {
  const { handleIsLoginStatus, formDataBase, setFormDataBase } = props;

  const initialState = {
    userName: "",
    userEmail: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };
  const [userDate, setUserData] = useState(initialState);
  const [validatePassword, setValidatePassword] = useState({});
  const [isError, setIsError] = useState(false);

  const handleUserInputFn = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userDate, [name]: value });
    // console.log(name);
    // console.log(value);
  };
  const handleFormSubmitFn = (e) => {
    e.preventDefault();
    console.log(userDate);

    setValidatePassword(validatePasswordFn(userDate));
    // if (!isError) {
    //   setUserData(initialState);
    //   setFormDataBase([...formDataBase, userDate]);
    //   handleIsLoginStatus();
    // }
  };
  const validatePasswordFn = (date) => {
    let errObj = {};
    if (userDate.password !== userDate.confirmPassword) {
      errObj.password = "Password not matching";
      //   setIsError(true);
    } else {
      setFormDataBase([...formDataBase, userDate]);
      handleIsLoginStatus();
    }
    return errObj;
  };
  return (
    <div>
      <h1>SignIn Page</h1>
      <div>
        <form onSubmit={handleFormSubmitFn}>
          <input
            type="text"
            placeholder="UserName"
            name="userName"
            value={userDate.userName}
            onChange={handleUserInputFn}
          />{" "}
          <br />
          <input
            type="email"
            placeholder="Email"
            name="userEmail"
            value={userDate.userEmail}
            onChange={handleUserInputFn}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={userDate.phone}
            onChange={handleUserInputFn}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={userDate.password}
            onChange={handleUserInputFn}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleUserInputFn}
            value={userDate.confirmPassword}
          />{" "}
          <br />
          <p>{validatePassword && validatePassword.password}</p>
          <button>Sign In</button>
          <div>
            <p>Already having account login </p>
            <button onClick={handleIsLoginStatus}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
