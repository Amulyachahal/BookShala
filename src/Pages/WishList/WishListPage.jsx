import React, { useContext, useEffect } from "react";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";
import generalbgimage from "../../Images/BackgroundImage/generalbgimage.jpg";

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
    <div style={{ backgroundImage: `url(${generalbgimage})` }}>
      <NavBar />
      <div>
        <div>
          <h1
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
            My WishList: ({wishlistCount})
          </h1>
        </div>
        <div>
          <ul>
            {state.wishlist.map((book, index) => (
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
                <img src={book.image} />
                <div>{book.title}</div>
                <div>{book.author}</div>
                <div>{book.price}</div>
                <div>
                  {state.inCart[book._id] ? (
                    <Button
                      style={{ margin: "0.5rem" }}
                      variant="outlined"
                      disabled
                    >
                      Added to Cart
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      style={{ margin: "0.5rem" }}
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
      </div>
    </div>
  );
};
export default WishListPage;
