import React, { useContext, useState } from "react";
import styles from "./SignupPage.module.css";
import Button from "@mui/material/Button";
import { BookContext } from "../../Contexts/BookContext";

const SignupPage = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    dispatch({
      type: "",
      payload_fname: fName,
      payload_lname: lName,
      payload_email: email,
      payload_password: password,
    });
  };

  console.log(state.signupCreds);

  return (
    <div className={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setFName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Last Name:</label>
          <input
            type="text"
            id="name"
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
          <Button variant="contained">Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
