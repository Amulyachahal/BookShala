import Button from "@mui/material/Button";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../Contexts/BookContext";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const { dispatch } = useContext(BookContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState({});
  const navigate = useNavigate();
  const loginCreds = { email: email, password: password };

  const postLoginCreds = async () => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",

        body: JSON.stringify(loginCreds),
      });

      const data = await response.json();

      // console.log(data);

      setResponseData(data);
    } catch (error) {
      console.error(error);
    }
  };
  postLoginCreds();

  // useEffect(() => {
  //   postLoginCreds();
  // }, []);

  const loginHandeler = () => {
    // postLoginCreds();
    setTimeout(() => {
      if (responseData.foundUser) {
        dispatch({ type: "LOGIN" });
        navigate("/");
      }
      if (responseData.errors) {
        alert(`${responseData.errors[0]}`);
      }
    }, 1000);

    // if (responseData.foundUser) {
    // }
    // if (responseData.error) {
    //   alert(`${responseData.errors[0]}`);
    // }

    // console.log(userToken);
  };

  const testLoginHandeler = (e) => {
    dispatch({ type: "TEST_LOGIN" });
    // console.log(localStorage.getItem("encodedToken"));
    postLoginCreds();
    dispatch({ type: "LOGIN" });
  };

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
          <Button onClick={(e) => testLoginHandeler(e)} variant="contained">
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
