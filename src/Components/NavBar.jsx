import React, { useContext, useEffect } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { BookContext } from "../Contexts/BookContext";
import styles from "./NavBar.module.css";
import Button from "@mui/material/Button";
import landingbgimage from "../Images/BackgroundImage/landingbgimage.jpg";
import "./Navbar.css";

const NavBar = () => {
  const { state, dispatch, fetchCartData, fetchWishlistData } = useContext(
    BookContext
  );
  const navigate = useNavigate();
  const logoutHandeler = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
    localStorage.clear();
  };

  const userToken = localStorage.getItem("encodedToken");

  useEffect(() => {
    if (userToken) {
      fetchCartData();
      fetchWishlistData();
    }
  }, []);

  return (
    <>
      <nav
        className={styles.navbar}
        style={{ backgroundImage: `url(${landingbgimage})` }}
      >
        <div
          className={styles.navbarContainer}
          style={{
            backgroundImage: `url(${landingbgimage})`,
            border: "solid 1px white",
            maxWidth: "30rem",
            margin: "1rem",
            padding: "0.5rem",
            display: "inline-block",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            backgroundColor: "#ededed",
            padding: "1.5rem 0rem",
          }}
        >
          <div>
            {state.isLoggedIn ? (
              <Button size="small" variant="contained" onClick={logoutHandeler}>
                Logout
              </Button>
            ) : (
              <Button
                onClick={() => {
                  navigate("/login");
                }}
                size="small"
                variant="contained"
              >
                Login{" "}
              </Button>
            )}{" "}
            <NavLink style={{ textDecoration: "none" }} to="/">
              <h1
                style={{ fontStyle: "italic", color: "#2196f3" }}
                onClick={() => dispatch({ type: "RESET" })}
              >
                BookShala
              </h1>
            </NavLink>
          </div>
          <input
            style={{ margin: "24px auto", maxWidth: "20rem" }}
            onChange={(event) => {
              dispatch({ type: "SEARCH", payload: event.target.value });
            }}
            type="text"
            placeholder="Search your favorite book"
            className={styles.navbarInput}
          />
          {state.noDataFound ? (
            <Navigate to="/nodatafound" />
          ) : (
            <NavLink to="/allproducts">
              <Button
                style={{ margin: "0.5rem" }}
                size="small"
                variant="contained"
                className={styles.navbarButton}
              >
                Search
              </Button>
            </NavLink>
          )}
          <NavLink
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#2196f3",
              padding: "0.3rem 0.3rem",
              borderRadius: "5px",
            }}
            onClick={() => {
              dispatch({ type: "RESET_SEARCH" });
            }}
            to="/"
            className={styles.navbarLink}
          >
            Home
          </NavLink>{" "}
          ||{" "}
          <NavLink
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#2196f3",
              padding: "0.3rem 0.3rem",
              borderRadius: "5px",
            }}
            to="/wishlist"
            className={styles.navbarLink}
          >
            WishList ({state.wishlist.length})
          </NavLink>{" "}
          ||{" "}
          <NavLink
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#2196f3",
              padding: "0.3rem 0.3rem",
              borderRadius: "5px",
            }}
            to="/cart"
            className={styles.navbarLink}
          >
            Cart ({state.cart.length})
          </NavLink>{" "}
          ||{" "}
          <NavLink
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#2196f3",
              padding: "0.3rem 0.3rem",
              borderRadius: "5px",
            }}
            onClick={() => dispatch({ type: "RESET" })}
            to="/userprofile"
            className={styles.navbarLink}
          >
            User Profile
          </NavLink>{" "}
        </div>{" "}
      </nav>
    </>
  );
};

export default NavBar;
