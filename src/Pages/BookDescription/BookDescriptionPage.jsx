import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const BookDescriptionPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { state, postAddToCartData, postAddToWishListData } = useContext(
    BookContext
  );

  const bookDetail = state.books.find((book) => book._id === productId);
  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: "#ededed" }}>
        <div
          style={{
            border: "solid 1px white",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            maxWidth: "15rem",
            margin: "1rem",
            padding: "0.5rem",
            display: "inline-block",
            backgroundColor: "#fff",
          }}
        >
          <img src={bookDetail.image} />
          <div>Author : {bookDetail.author}</div>
          <div>Category: {bookDetail.categoryName}</div>
          <div>
            {state.inCart[bookDetail._id] ? (
              <Button style={{ margin: "0.5rem" }} variant="outlined" disabled>
                Added to Cart
              </Button>
            ) : (
              <Button
                style={{ margin: "0.5rem" }}
                variant="outlined"
                onClick={
                  state.isLoggedIn
                    ? () => postAddToCartData(bookDetail)
                    : navigate("/login")
                }
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
                onClick={
                  state.isLoggedIn
                    ? () => postAddToWishListData(bookDetail)
                    : navigate("/login")
                }
              >
                Add to Wishlist
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default BookDescriptionPage;
