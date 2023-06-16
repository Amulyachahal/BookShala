import React, { useContext } from "react";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import generalbgimage from "../../Images/BackgroundImage/generalbgimage.jpg";
import Footer from "../../Components/Footer";

const CheckoutPage = () => {
  const { state } = useContext(BookContext);
  console.log(state.cart);
  return (
    <>
      <NavBar />
      <div style={{ backgroundImage: `url(${generalbgimage})` }}>
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
          }}
        >
          <div>
            <div>
              <h3>Amulya Chahal</h3>
              <p>Lane C, Koregaon Park, Pune</p>
            </div>
          </div>
          <Button variant="outlined">Add Address</Button>
        </div>
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
          }}
        >
          <h3 style={{ marginBottom: "-0.5px" }}>ORDER SUMMARY: </h3>
          <div>
            DELIVERY CHARGES: <span style={{ color: "green" }}>FREE</span>{" "}
          </div>
          <div>
            TOTAL AMOUNT:{" "}
            <strong style={{ color: "green" }}>
              {" "}
              {state.cart.reduce((acc, curr) => (acc += Number(curr.price)), 0)}
            </strong>{" "}
          </div>
          <div>
            <Button
              onClick={() => window.location.reload()}
              style={{ margin: "0.5rem" }}
              variant="outlined"
            >
              <NavLink style={{ textDecoration: "none" }} to="/order">
                CHECK OUT
              </NavLink>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default CheckoutPage;
