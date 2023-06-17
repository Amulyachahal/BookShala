import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import landingbgimage from "../../Images/BackgroundImage/landingbgimage.jpg";

const AllProductsPage = () => {
  const {
    state,
    dispatch,
    postAddToCartData,
    postAddToWishListData,
  } = useContext(BookContext);

  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const books =
    state.searchResults.length > 0 ? state.searchResults : state.books;

  const handleCategoryCheckbox = (event) => {
    const { value, checked } = event.target;
    const updatedCategories = checked
      ? [...selectedCategories, value]
      : selectedCategories.filter((category) => category !== value);

    setSelectedCategories(updatedCategories);
    dispatch({
      type: "CATEGORY_CHECKBOX",
      payload: updatedCategories.length > 0,
      value: updatedCategories,
    });
  };

  const handleClearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
    setSelectedCategories([]);
  };

  // const handleCheckboxChange = (event) => {
  //   const category = event.target.value;
  //   if (event.target.checked) {
  //     setSelectedCategories([...selectedCategories, category]);
  //   } else {
  //     setSelectedCategories(selectedCategories.filter((c) => c !== category));
  //   }
  // };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${landingbgimage})`,
          marginTop: "-1.35rem",
        }}
      >
        <NavBar />

        <h1 style={{ fontStyle: "italic", color: "#ededed" }}>All Books</h1>
        <div
          style={{
            display: "inline-block",
            backgroundColor: "#ededed",
            padding: "1rem",
            borderRadius: "10px",
          }}
        >
          <div>
            <fieldset>
              <legend>Sort By </legend>
              <div>
                <input
                  name="sortPrice"
                  type="radio"
                  onChange={(event) =>
                    dispatch({
                      type: "PRICE_lOW_TO_HIGH",
                      payload: event.target.checked,
                    })
                  }
                />
                <label>price - low to high</label>
                <input
                  name="sortPrice"
                  type="radio"
                  onChange={(event) =>
                    dispatch({
                      type: "PRICE_HIGH_TO_LOW",
                      payload: event.target.checked,
                    })
                  }
                />{" "}
                <label>price - high to low</label>
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <legend>Filters </legend>
              <div>
                <input
                  type="checkbox"
                  value="fiction"
                  name="fiction"
                  onClick={handleCategoryCheckbox}
                  checked={selectedCategories.includes("fiction")}
                />
                <label>Fiction</label>
                <input
                  type="checkbox"
                  name="horror"
                  value="horror"
                  onClick={handleCategoryCheckbox}
                  checked={selectedCategories.includes("horror")}
                />
                <label>Horror</label>
                <input
                  type="checkbox"
                  name="non-fiction"
                  value="non-fiction"
                  onClick={handleCategoryCheckbox}
                  checked={selectedCategories.includes("non-fiction")}
                />
                <label>Non-fiction</label>
              </div>
            </fieldset>
          </div>
          <Button
            variant="contained"
            style={{ margin: "0.5rem" }}
            size="small"
            onClick={handleClearFilters}
          >
            Clear Filters
          </Button>
          <Button
            variant="contained"
            style={{ margin: "0.5rem" }}
            size="small"
            onClick={() => {
              dispatch({ type: "RESET_SEARCH" });
              navigate("/");
            }}
          >
            Back
          </Button>
        </div>
        <div>
          <ul>
            {books.map((book, index) => {
              const {
                author,
                categoryName,
                id,
                price,
                title,
                _id,
                image,
              } = book;
              return (
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
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={`/productpage/${_id}`}
                  >
                    <img src={image} />
                    <div>{title}</div>
                    <div>{author}</div>
                    <div>{price}</div>
                  </NavLink>
                  <div>
                    {state.inCart[_id] ? (
                      <NavLink to="/cart">
                        <Button style={{ margin: "0.5rem" }} variant="outlined">
                          Go to Cart
                        </Button>
                      </NavLink>
                    ) : (
                      <Button
                        style={{ margin: "0.5rem" }}
                        variant="outlined"
                        onClick={() => {
                          state.isLoggedIn
                            ? postAddToCartData(book)
                            : navigate("/login");
                        }}
                      >
                        ADD TO CART
                      </Button>
                    )}
                    {state.inWishlist[_id] ? (
                      <NavLink to="/wishlist">
                        <Button variant="outlined">GO TO WISHLIST</Button>
                      </NavLink>
                    ) : (
                      <Button
                        variant="outlined"
                        onClick={() => {
                          state.isLoggedIn
                            ? postAddToWishListData(book)
                            : navigate("/login");
                        }}
                      >
                        ADD TO WISHLIST
                      </Button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default AllProductsPage;
