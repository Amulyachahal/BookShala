import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";

const NoDataFound = () => {
  const { dispatch } = useContext(BookContext);
  return (
    <>
      <NavBar />
      <h1>Sorry, Products are not available for chosen category.</h1>{" "}
      <NavLink to="/allproducts">
        <p onClick={() => dispatch({ type: "RESET" })}>Browse Books</p>
      </NavLink>
    </>
  );
};
export default NoDataFound;
