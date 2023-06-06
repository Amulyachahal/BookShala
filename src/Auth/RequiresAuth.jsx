import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router";
import { BookContext } from "../Contexts/BookContext";

const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const { state } = useContext(BookContext);
  return state.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
export default RequiresAuth;
