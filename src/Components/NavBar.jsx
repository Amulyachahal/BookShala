import React, { useContext, useEffect } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { BookContext } from "../Contexts/BookContext";
import styles from "./NavBar.module.css";
import Button from "@mui/material/Button";

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

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
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
            <NavLink to="/">
              <h1
                style={{ fontStyle: "italic", textDecoration: "none" }}
                onClick={() => dispatch({ type: "RESET" })}
              >
                BookShala
              </h1>
            </NavLink>
          </div>

          <input
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
                size="small"
                variant="contained"
                className={styles.navbarButton}
              >
                Search
              </Button>
            </NavLink>
          )}
        </div>
        <NavLink
          onClick={() => {
            dispatch({ type: "RESET" });
            fetchWishlistData();
          }}
          to="/wishlist"
          className={styles.navbarLink}
        >
          WishList ({state.wishlist.length})
        </NavLink>{" "}
        ||{" "}
        <NavLink
          onClick={() => {
            fetchCartData();
          }}
          to="/cart"
          className={styles.navbarLink}
        >
          Cart ({state.cart.length})
        </NavLink>{" "}
        ||{" "}
        <NavLink
          onClick={() => dispatch({ type: "RESET" })}
          to="/userprofile"
          className={styles.navbarLink}
        >
          User Profile
        </NavLink>{" "}
      </nav>
    </>
  );
};

export default NavBar;
