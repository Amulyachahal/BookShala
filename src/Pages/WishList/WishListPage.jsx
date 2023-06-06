import React, { useContext } from "react";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";

const WishListPage = () => {
  const { state, dispatch } = useContext(BookContext);
  const wishlistCount = state.wishlist.length;

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
                {state.inCart[book.id] ? (
                  <Button variant="outlined" disabled>
                    Added to Cart
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: book.id })
                    }
                  >
                    ADD TO CART
                  </Button>
                )}
                <Button
                  variant="outlined"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: book.id })
                  }
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
