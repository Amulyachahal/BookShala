import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { BookContext } from "../../Contexts/BookContext";
import LandingPageImage2 from "../../Images/Landing_Page/landingPageImage2.jpg";

import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import Button from "@mui/material/Button";
import landingbgimage from "../../Images/BackgroundImage/landingbgimage.jpg";

const Home = () => {
  const { state, dispatch } = useContext(BookContext);
  const navigate = useNavigate();
  console.log(state.categories);

  return (
    <>
      <div style={{ backgroundImage: `url(${landingbgimage})` }}>
        <NavBar />
        <div>
          <div>
            <img
              style={{
                border: "solid 1px #2a9dbc",
                width: "25rem",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                borderTopLeftRadius: "160px",
              }}
              src={LandingPageImage2}
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
            <h2 style={{ color: "white" }}>Categories</h2>
          </div>
          <div>
            <ul>
              {state.categories.map(
                ({ _id, categoryName, description, image }, index) => (
                  <div
                    style={{ display: "inline-block" }}
                    onClick={() => {
                      dispatch({
                        type: "SEARCH_CATEGORY",
                        payload: categoryName,
                      });
                      navigate("/allproducts");
                    }}
                    key={index}
                  >
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
                        cursor: "pointer",
                      }}
                    >
                      <img src={image} alt="fiction" />
                      <h3>{categoryName}</h3>
                      <p>{description}</p>
                    </li>
                  </div>
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
