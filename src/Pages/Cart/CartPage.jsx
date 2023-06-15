import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";

const CartPage = () => {
  const { state, dispatch, fetchCartData } = useContext(BookContext);
  // fetchCartData();

  useEffect(() => {
    fetchCartData();
  }, []);
  console.log(state.cart);

  const userToken = localStorage.getItem("encodedToken");

  const deleteCartData = async (productId) => {
    try {
      const response = await fetch(`/api/user/cart/${productId}`, {
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
        <h1>My Cart ({state.cart.length})</h1>
      </div>
      <div>
        <ul>
          {state.cart.map((book, index) => (
            <li key={index}>
              <div>{book.title}</div>
              <div>{book.author}</div>
              <div>{book.price}</div>
              <div>
                <Button
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
                    onClick={() =>
                      dispatch({ type: "ADD_TO_WISHLIST", payload: book._id })
                    }
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
            <div>
              <h3>PRICE DETAILS</h3>
            </div>
            <div>
              {/* <div>
              Price:{" "}
              {state.cart.reduce((acc, curr) => (acc += Number(curr.price)), 0)}
            </div> */}
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
                  <Button variant="contained">PLACE ORDER</Button>
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default CartPage;
