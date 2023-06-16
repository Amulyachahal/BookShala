import React, { useContext } from "react";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import generalbgimage from "../../Images/BackgroundImage/generalbgimage.jpg";

const Ordered = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div
        style={{
          border: "solid 1px white",
          maxWidth: "15rem",
          margin: "1rem",
          padding: "0.5rem",
          display: "inline-block",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          backgroundColor: "#fff",
          backgroundImage: `url(${generalbgimage})`,
          color: "white",
        }}
      >
        <h3>Congratulations, Your order is successfully placed</h3>
        <Button variant="contained" size="small">
          <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
            Return Home
          </NavLink>
        </Button>
      </div>
    </>
  );
};
export default Ordered;
