import React, { useReducer } from "react";
import { DataReducer } from "../Reducers/DataReducer";

import { createContext, useEffect } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, {
    categories: [],
    books: [],
    initialBooks: [],
    searchResults: [],
    cart: [],
    cartProductCount: 1,
    wishlist: [],
    inCart: {},
    inWishlist: {},
    toggleProfile: true,
    cartCount: 0,
    wishlistCount: 0,
    noDataFound: false,
    isLoggedIn: false,
    loginCreds: {},
    signupCreds: {},
    signupUserCreds: {},
  });

  const fetchCategoriesData = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      dispatch({ type: "SET_INITIAL_CATEGORY_DATA", payload: data.categories });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBooksData = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      //   console.log(data);
      dispatch({ type: "SET_INITIAL_PRODUCT_DATA", payload: data.products });
      dispatch({ type: "SET_PRODUCT_DATA", payload: data.products });
    } catch (error) {
      console.error(error);
    }
  };

  const userToken = localStorage.getItem("encodedToken");

  const fetchCartData = async () => {
    try {
      const response = await fetch("/api/user/cart", {
        method: "GET",
        headers: { authorization: userToken },
      });
      const data = await response.json();
      dispatch({ type: "ADD_TO_CART", payload: data.cart });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategoriesData();
    fetchBooksData();
    fetchCartData();
  }, []);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};
