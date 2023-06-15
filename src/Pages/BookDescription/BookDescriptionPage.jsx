import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";

const BookDescriptionPage = () => {
  const { productId } = useParams();
  const { state, postAddToCartData, postAddToWishListData } = useContext(
    BookContext
  );
  const bookDetail = state.books.find((book) => book._id === productId);
  return (
    <>
      <NavBar />
      <div>
        <div>Author : {bookDetail.author}</div>
        <div>Category: {bookDetail.categoryName}</div>
        <div>
          {state.inCart[bookDetail._id] ? (
            <Button variant="outlined" disabled>
              Added to Cart
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => postAddToCartData(bookDetail)}
            >
              Add to Cart
            </Button>
          )}
        </div>
        <div>
          {state.inWishlist[bookDetail._id] ? (
            <Button variant="outlined" disabled>
              Added to Wishlist
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => postAddToWishListData(bookDetail)}
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
