import React, { useContext } from "react";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";

const CheckoutPage = () => {
  const { state } = useContext(BookContext);
  console.log(state.cart);
  return (
    <>
      <NavBar />
      <div>
        <div>
          <div>
            <h3>Amulya Chahal</h3>
            <p>amulya's address is displayed here</p>
          </div>
        </div>
        <div>
          <button>Add Address</button>
        </div>
        <div>
          <h3>ORDER SUMMARY</h3>
          <div>PRICE: </div>
          <div>DELIVERY CHARGES: </div>
          <div>
            <strong>
              TOTAL AMOUNT:{" "}
              {state.cart.reduce((acc, curr) => (acc += Number(curr.price)), 0)}
            </strong>{" "}
          </div>
          <div>
            <button>CHECK OUT</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckoutPage;
