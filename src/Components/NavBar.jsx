import React, { useContext } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { BookContext } from "../Contexts/BookContext";
import styles from "./NavBar.module.css";
import Button from "@mui/material/Button";

const NavBar = () => {
  const { state, dispatch } = useContext(BookContext);
  const navigate = useNavigate();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div>
            <Button
              onClick={() => {
                dispatch({ type: "LOGIN" });
                navigate("/login");
              }}
              size="small"
              variant="contained"
            >
              {state.isLoggedIn ? "Log Out" : "Log In"}
            </Button>{" "}
            <NavLink to="/">
              <h1
                className={styles.navbarTitle}
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
          onClick={() => dispatch({ type: "RESET" })}
          to="/wishlist"
          className={styles.navbarLink}
        >
          WishList ({state.wishlistCount})
        </NavLink>{" "}
        ||{" "}
        <NavLink
          onClick={() => dispatch({ type: "RESET" })}
          to="/cart"
          className={styles.navbarLink}
        >
          Cart ({state.cartCount})
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
