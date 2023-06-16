import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";
import landingbgimage from "../../Images/BackgroundImage/landingbgimage.jpg";

const CartPage = () => {
  const {
    state,
    dispatch,
    postAddToWishListData,
    fetchCartData,
    deleteCartData,
  } = useContext(BookContext);

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <div style={{ backgroundImage: `url(${landingbgimage})` }}>
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
            My Cart ({state.cart.length})
          </h1>
        </div>
        <div>
          <ul>
            {state.cart.map((book, index) => (
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
                  <Button
                    style={{ margin: "0.5rem" }}
                    variant="outlined"
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_CART", payload: book._id });
                      deleteCartData(book._id);
                    }}
                  >
                    REMOVE FROM CART
                  </Button>
                </div>
                <div>
                  {state.inWishlist[book._id] ? (
                    <Button variant="outlined" disabled>
                      Added to Wishlist
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      onClick={() => postAddToWishListData(book)}
                    >
                      ADD TO WISHLIST
                    </Button>
                  )}
                </div>
                <div>
                  <Button
                    variant="text"
                    onClick={() =>
                      dispatch({
                        type: "INCREASE_CART_QUANTITY",
                        payload: book._id,
                      })
                    }
                  >
                    +
                  </Button>
                  {state.cartProductCount <= 1 ? (
                    <Button variant="text" disabled>
                      -
                    </Button>
                  ) : (
                    <Button
                      variant="text"
                      onClick={() =>
                        dispatch({
                          type: "DECREASE_CART_QUANTITY",
                          payload: book._id,
                        })
                      }
                    >
                      -
                    </Button>
                  )}
                </div>
                <div>{state.cartProductCount}</div>
              </li>
            ))}
          </ul>
          {state.cart.length > 0 ? (
            <div>
              <div
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
                <div>
                  <h3>PRICE DETAILS</h3>
                </div>
                <div>
                  <div>Delivery Charges: FREE</div>
                  <div>
                    <strong>
                      TotalAmount: INR{" "}
                      {state.cart.reduce(
                        (acc, curr) => (acc += Number(curr.price)),
                        0
                      )}
                    </strong>
                  </div>
                  <div>
                    <NavLink to="/checkout">
                      <Button style={{ margin: "0.5rem" }} variant="contained">
                        PLACE ORDER
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default CartPage;
