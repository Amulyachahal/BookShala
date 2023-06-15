import React, { useContext, useEffect } from "react";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";

const WishListPage = () => {
  const {
    state,
    dispatch,
    postAddToCartData,
    fetchWishlistData,
    deleteWishlistData,
  } = useContext(BookContext);
  const wishlistCount = state.wishlist.length;

  useEffect(() => {
    fetchWishlistData();
  }, []);

  return (
    <>
      <NavBar />
      <div>
        <h1>My WishList: ({wishlistCount})</h1>
      </div>
      <div>
        <ul>
          {state.wishlist.map((book, index) => (
            <li key={index}>
              <div>{book.title}</div>
              <div>{book.author}</div>
              <div>{book.price}</div>
              <div>
                {state.inCart[book._id] ? (
                  <Button variant="outlined" disabled>
                    Added to Cart
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={() => postAddToCartData(book)}
                  >
                    ADD TO CART
                  </Button>
                )}
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: book._id,
                    });
                    deleteWishlistData(book._id);
                  }}
                >
                  REMOVE FROM WISHLIST
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default WishListPage;
