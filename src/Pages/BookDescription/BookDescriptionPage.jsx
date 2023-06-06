import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";

const BookDescriptionPage = () => {
  const { productId } = useParams();
  const { state, dispatch } = useContext(BookContext);
  const bookDetail = state.books.find((book) => book.id === productId);
  console.log(bookDetail);
  // author category name id price title
  return (
    <>
      <NavBar />
      <div>
        <div>Author : {bookDetail.author}</div>
        <div>Category: {bookDetail.categoryName}</div>
        <div>
          {state.inCart[bookDetail.id] ? (
            <Button variant="outlined" disabled>
              Added to Cart
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: bookDetail.id })
              }
            >
              Add to Cart
            </Button>
          )}
        </div>
        <div>
          {state.inWishlist[bookDetail.id] ? (
            <Button variant="outlined" disabled>
              Added to Wishlist
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: bookDetail.id,
                })
              }
            >
              Add to Wishlist
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
export default BookDescriptionPage;
