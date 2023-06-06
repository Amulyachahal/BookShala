import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";

const CategoryDescriptionPage = () => {
  const { state, dispatch } = useContext(BookContext);
  const { categoryId } = useParams();
  //   console.log(state.books);

  const filteredCategory = state.books.filter(
    (book) => book.categoryName === categoryId
  );

  // console.log(filterCategory);
  return (
    <>
      <NavBar />
      <div>
        <h1>{categoryId.toLocaleUpperCase()}</h1>

        <div>
          <ul>
            {filteredCategory.map(
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
      </div>
    </>
  );
};
export default CategoryDescriptionPage;
