import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../../Contexts/BookContext";
import LandingPageImage from "../../Images/Landing_Page/landingPageImage.jpg";

import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import Button from "@mui/material/Button";
import landingbgimage from "../../Images/BackgroundImage/landingbgimage.jpg";

const Home = () => {
  const { state, dispatch } = useContext(BookContext);
  console.log(state.cart);

  return (
    <>
      <div style={{ backgroundImage: `url(${landingbgimage})` }}>
        <NavBar />
        <div>
          <div>
            <img
              style={{
                border: "solid 1px white",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
              }}
              src={LandingPageImage}
              alt="landingPageImage"
            />
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
              {state.categories.map(
                ({ _id, categoryName, description, image }, index) => (
                  <NavLink to={`/category/${categoryName}`} key={index}>
                    <li
                      key={index}
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
                      <img src={image} alt="fiction" />
                      <h3>{categoryName}</h3>
                      <p>{description}</p>
                    </li>
                  </NavLink>
                )
              )}
            </ul>
          </div>
        </div>
        <Footer />
      </div>{" "}
    </>
  );
};
export default Home;
