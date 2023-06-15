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
      console.log(response);
      const data = await response.json();
      // console.log(data);

      dispatch({ type: "GET_CART_DATA", payload: data.cart });
      // console.log(state.cart);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWishlistData = async () => {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "GET",
        headers: { authorization: userToken },
      });
      const data = await response.json();
      console.log(data);
      dispatch({ type: "GET_WISHLIST_DATA", payload: data.wishlist });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategoriesData();
    fetchBooksData();
  }, []);

  return (
    <BookContext.Provider
      value={{ state, dispatch, fetchCartData, fetchWishlistData }}
    >
      {children}
    </BookContext.Provider>
  );
};
