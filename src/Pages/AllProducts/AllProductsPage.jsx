import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";

const AllProductsPage = () => {
  const { state, dispatch } = useContext(BookContext);
  const books =
    state.searchResults.length > 0 ? state.searchResults : state.books;

  return (
    <>
      <NavBar />
      <h1>All Books</h1>
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
              onClick={(event) =>
                dispatch({
                  type: "CATEGORY_CHECKBOX",
                  payload: event.target.checked,
                  value: event.target.value,
                })
              }
            />
            <label>Fiction</label>
            <input
              type="checkbox"
              name="horror"
              value="horror"
              onClick={(event) =>
                dispatch({
                  type: "CATEGORY_CHECKBOX",
                  payload: event.target.checked,
                  value: event.target.value,
                })
              }
            />
            <label>Horror</label>
            <input
              type="checkbox"
              name="non-fiction"
              value="non-fiction"
              onClick={(event) =>
                dispatch({
                  type: "CATEGORY_CHECKBOX",
                  payload: event.target.checked,
                  value: event.target.value,
                })
              }
            />
            <label>Non-fiction</label>
          </div>
        </fieldset>
        <Button variant="contained" onClick={() => window.location.reload()}>
          Clear Filters
        </Button>
      </div>
      <div>
        <ul>
          {books.map(
            ({ author, categoryName, id, price, title, _id }, index) => (
              <li key={index}>
                <NavLink to={`/productpage/${id}`}>
                  <div>{title}</div>
                  <div>{author}</div>
                  <div>{price}</div>
                </NavLink>
                <div>
                  {state.inCart[id] ? (
                    <NavLink to="/cart">
                      <Button variant="outlined">Go to Cart</Button>
                    </NavLink>
                  ) : (
                    <Button
                      variant="outlined"
                      onClick={() => {
                        dispatch({ type: "ADD_TO_CART", payload: id });
                      }}
                    >
                      ADD TO CART
                    </Button>
                  )}
                  {state.inWishlist[id] ? (
                    <NavLink to="/wishlist">
                      <Button variant="outlined">GO TO WISHLIST</Button>
                    </NavLink>
                  ) : (
                    <Button
                      variant="outlined"
                      onClick={() =>
                        dispatch({ type: "ADD_TO_WISHLIST", payload: id })
                      }
                    >
                      ADD TO WISHLIST
                    </Button>
                  )}
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};
export default AllProductsPage;
