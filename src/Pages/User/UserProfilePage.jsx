import React, { useContext } from "react";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";

const UserProfilePage = () => {
  const { state, dispatch } = useContext(BookContext);
  return (
    <>
      <NavBar />
      <h1>This is User Profile Page</h1>
      <div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => dispatch({ type: "TOGGLE_PROFILE" })}
        >
          Profile/Addressbook
        </div>
      </div>
      <div>
        {state.toggleProfile ? (
          <div>
            <h3>Profile Details</h3>
            <div>Full Name: {}</div>
            <div>Email: {}</div>
          </div>
        ) : (
          <div>
            <h3>My Addresses</h3>
            <h2>{}</h2>
            <p>{}</p>
          </div>
        )}
      </div>
    </>
  );
};
export default UserProfilePage;
