import Button from "@mui/material/Button";
import React, { useState } from "react";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginCreds = { email: email, password: password };

  const postLoginCreds = async () => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",

        body: JSON.stringify(loginCreds),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    postLoginCreds();
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
          <Button onClick={(e) => handleSubmit(e)} variant="contained">
            Login
          </Button>{" "}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
