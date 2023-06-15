import React, { useContext, useState } from "react";
import styles from "./SignupPage.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../Contexts/BookContext";

const SignupPage = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(BookContext);
  const [responseData, setResponseData] = useState({});

  const signupCreds = {
    email: email,
    password: password,
    firstName: fName,
    lastName: lName,
  };

  const postSignupCreds = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",

        body: JSON.stringify(signupCreds),
      });
      const data = await response.json();
      console.log(data.encodedToken);
      setResponseData(data);
      if (data.encodedToken) {
        // navigate("/login");
        console.log(data);
        dispatch({ type: "SIGNUP_USER", payload: data.createdUser });
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const handleSubmit = (e) => {
    postSignupCreds();

    setTimeout(() => {
      if (responseData.createdUser) {
        navigate("/login");
      }
      if (responseData.errors) {
        alert(`${responseData.errors[0]}`);
      }
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <h2>Sign Up</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="fname"
            name="name"
            onChange={(e) => setFName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Last Name:</label>
          <input
            type="text"
            id="lname"
            name="name"
            onChange={(e) => setLName(e.target.value)}
          />
        </div>
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
            Sign Up
          </Button>
          <p></p>
          <Button onClick={(e) => navigate("/login")} variant="contained">
            already have an account ? login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
