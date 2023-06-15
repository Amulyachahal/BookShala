import React, { useContext, useEffect } from "react";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";

const WishListPage = () => {
  const { state, dispatch, fetchWishlistData } = useContext(BookContext);
  const wishlistCount = state.wishlist.length;

  useEffect(() => {
    fetchWishlistData();
  }, []);

  const userToken = localStorage.getItem("encodedToken");

  const deleteWishlistData = async (productId) => {
    try {
      const response = await fetch(`/api/user/wishlist/${productId}`, {
        method: "DELETE",
        headers: { authorization: userToken },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

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
              <div>{/* <button>ADD TO CART</button> */}</div>
              <div>
                {state.inCart[book._id] ? (
                  <Button variant="outlined" disabled>
                    Added to Cart
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: book._id })
                    }
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
