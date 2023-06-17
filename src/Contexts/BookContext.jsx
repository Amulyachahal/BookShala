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
    addresses: {
      add: false,
      address: [
        {
          house: "33-A, Ragvillas Society",
          street: "Lane C",
          city: "KoregaonPark, Pune",
          pincode: "411014",
          country: "India",
        },
      ],
    },
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

      dispatch({ type: "GET_CART_DATA", payload: data.cart });
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
      dispatch({ type: "GET_WISHLIST_DATA", payload: data.wishlist });
    } catch (error) {
      console.error(error);
    }
  };

  const postAddToCartData = async (book) => {
    const product = { product: { ...book } };
    try {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: { authorization: userToken },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      dispatch({
        type: "ADD_TO_CART",
        payload_id: book._id,
      });
      fetchCartData();
    } catch (error) {
      console.error(error);
    }
  };
  const postAddToWishListData = async (book) => {
    const product = { product: { ...book } };

    try {
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: { authorization: userToken },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      dispatch({ type: "ADD_TO_WISHLIST", payload_id: book._id });
      fetchWishlistData();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCartData = async (productId) => {
    try {
      const response = await fetch(`/api/user/cart/${productId}`, {
        method: "DELETE",
        headers: { authorization: userToken },
      });
      dispatch({ type: "REMOVE_FROM_CART", payload_id: productId });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteWishlistData = async (productId) => {
    try {
      const response = await fetch(`/api/user/wishlist/${productId}`, {
        method: "DELETE",
        headers: { authorization: userToken },
      });
      const data = await response.json();
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload_id: productId });
      console.log(data);
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
      value={{
        state,
        dispatch,
        postAddToCartData,
        fetchCartData,
        postAddToWishListData,
        fetchWishlistData,
        deleteCartData,
        deleteWishlistData,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
