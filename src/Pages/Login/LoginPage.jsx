import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const { state, dispatch } = useContext(BookContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState({});
  const [loginAttempted, setLoginAttempted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const loginCreds = { email: email, password: password };

  const testLoginCreds = {
    email: "amulyachahal@gmail.com",
    password: "123456",
  };

  const postLoginCreds = async (creds) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(creds),
      });

      const data = await response.json();

      setResponseData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const loginHandeler = () => {
    setLoginAttempted(true);
    postLoginCreds(loginCreds);
  };

  const testLoginHandeler = () => {
    dispatch({
      type: "SIGNUP_USER",
      payload: {
        email: "amulyachahal@gmail.com",
        password: "123456",
        firstName: "Amulya",
        lastName: "Chahal",
      },
    });
    setTimeout(() => {
      setLoginAttempted(true);
    }, 0);
    postLoginCreds(testLoginCreds);
  };

  useEffect(() => {
    if (loginAttempted && responseData.foundUser) {
      localStorage.setItem("encodedToken", responseData.encodedToken);
      // navigate(location?.state?.from?.pathname);
      navigate("/");
      dispatch({ type: "LOGIN" });
    }

    if (loginAttempted && responseData.errors) {
      alert(`${responseData.errors[0]}`);
    }
  }, [loginAttempted, responseData]);

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <Button variant="contained" onClick={loginHandeler}>
            Login
          </Button>
          <p></p>
          <Button onClick={testLoginHandeler} variant="contained">
            Login with Test credentials
          </Button>{" "}
          <p></p>
          <Button onClick={() => navigate("/signup")} variant="contained">
            create new account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
