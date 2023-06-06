import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../../Contexts/BookContext";
import LandingPageImage from "../../Images/Landing_Page/landingPageImage.jpg";

import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import Button from "@mui/material/Button";

const Home = () => {
  const { state, dispatch } = useContext(BookContext);

  return (
    <>
      <NavBar />
      <div>
        <img src={LandingPageImage} alt="landingPageImage" />
        <div>
          <NavLink
            onClick={() => dispatch({ type: "RESET_SEARCH" })}
            to="/allproducts"
          >
            {" "}
            <Button variant="contained">Browse Books</Button>
          </NavLink>
        </div>
      </div>
      <div>
        <h2>Categories</h2>
        <p>Book Categories</p>
      </div>
      <div>
        <ul>
          {state.categories.map(({ _id, categoryName, description }, index) => (
            <NavLink to={`/category/${categoryName}`} key={index}>
              <li key={index}>
                <h3>{categoryName}</h3>
                <p>{description}</p>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};
export default Home;
