import React, { useContext, useState } from "react";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";

const UserProfilePage = () => {
  const { state, dispatch } = useContext(BookContext);
  const [showAddModal, setShowAddModal] = useState(false);
  const [inputAddress, setInputAddress] = useState({
    house: "",
    street: "",
    city: "",
    pincode: "",
    country: "",
  });
  console.log(state.signupUserCreds);
  // const addAddressHandeler = () => {
  //   state.addAddress.add
  //     ? showAddModal(true)
  //     : dispatch({ type: "ADD_ADDRESS" }) && showAddModal(false);
  // };
  return (
    <div style={{ backgroundColor: "#ededed" }}>
      <NavBar />
      <div style={{ backgroundColor: "#ededed" }}>
        <h1>{state.signupUserCreds.firstName} Profile </h1>
        <div>
          <div
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#2196f3",
              padding: "0.3rem 0.3rem",
              borderRadius: "5px",
              cursor: "pointer",
              maxWidth: "10rem",
              margin: "0 auto",
            }}
            onClick={() => dispatch({ type: "TOGGLE_PROFILE" })}
          >
            Profile/Addressbook
          </div>
        </div>
        <div
          style={{
            border: "solid 1px white",
            maxWidth: "20rem",
            margin: "1rem",
            padding: "0.5rem",
            display: "inline-block",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          {state.toggleProfile ? (
            <div style={{ textAlign: "left" }}>
              <h3>Profile Details</h3>
              <div>
                Full Name:{" "}
                <strong>
                  {state.signupUserCreds.firstName +
                    " " +
                    state.signupUserCreds.lastName}
                </strong>
              </div>
              <div>
                Email: <strong>{state.signupUserCreds.email}</strong>
              </div>
            </div>
          ) : (
            <div>
              {/* <Button
                variant="contained"
                size="small"
                onClick={addAddressHandeler}
              >
                Add Address
              </Button> */}
              <h3>My Addresses:</h3>
              <ul style={{ textAlign: "left" }}>
                {state.addresses.address.map(
                  ({ house, street, city, pincode, country }, index) => (
                    <li key={index} style={{ listStyle: "none" }}>
                      <p>
                        House no: <strong>{house}</strong>
                      </p>
                      <p>
                        Street: <strong>{street}</strong>
                      </p>
                      <p>
                        City: <strong>{city}</strong>
                      </p>
                      <p>
                        Pincode: <strong>{pincode}</strong>
                      </p>
                      <p>
                        Country: <strong>{country}</strong>
                      </p>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default UserProfilePage;
