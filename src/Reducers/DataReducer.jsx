export const DataReducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_CATEGORY_DATA":
      return { ...state, categories: [...action.payload] };

    case "SET_PRODUCT_DATA":
      return { ...state, books: [...action.payload] };

    case "SET_INITIAL_PRODUCT_DATA":
      return { ...state, initialBooks: [...action.payload] };

    case "SEARCH":
      const searchData = state.books.filter((book) =>
        book.title.toLowerCase().includes(action.payload.toLowerCase())
      );

      if (searchData.length > 0) {
        return { ...state, searchResults: [...searchData], noDataFound: false };
      } else {
        return { ...state, noDataFound: true };
      }
    case "RESET_SEARCH":
      return {
        ...state,
        searchResults: [],
        books: [...state.initialBooks],
      };
    case "ADD_TO_CART":
      return {
        ...state,
        inCart: { ...state.inCart, [action.payload_id]: true },
        noDataFound: false,
      };

    case "GET_CART_DATA":
      return { ...state, cart: action.payload };

    case "REMOVE_FROM_CART":
      const removeFromCart = state.cart.filter(
        (book) => book._id !== action.payload
      );
      return {
        ...state,
        inCart: { ...state.inCart, [action.payload_id]: false },
        cart: [...removeFromCart],
        noDataFound: false,
      };

    case "INCREASE_CART_QUANTITY":
      return { ...state, cartProductCount: state.cartProductCount + 1 };
    case "DECREASE_CART_QUANTITY":
      return { ...state, cartProductCount: state.cartProductCount - 1 };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        inWishlist: { ...state.inWishlist, [action.payload_id]: true },
        noDataFound: false,
      };

    case "GET_WISHLIST_DATA":
      return { ...state, wishlist: [...action.payload] };

    case "REMOVE_FROM_WISHLIST":
      const removeFromWishlist = state.wishlist.filter(
        (book) => book._id !== action.payload
      );
      return {
        ...state,
        inWishlist: { ...state.inWishlist, [action.payload_id]: false },
        wishlist: [...removeFromWishlist],
        noDataFound: false,
      };
    case "RESET":
      return { ...state, searchResults: [], noDataFound: false };
    case "TOGGLE_PROFILE":
      return { ...state, toggleProfile: !state.toggleProfile };

    case "PRICE_lOW_TO_HIGH":
      if (action.payload) {
        const books =
          state.searchResults.length > 0 ? state.searchResults : state.books;
        const sortedData = books.sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
        return {
          ...state,
          books: [...sortedData],
        };
      }
      break;

    case "PRICE_HIGH_TO_LOW":
      if (action.payload) {
        const books =
          state.searchResults.length > 0 ? state.searchResults : state.books;
        const sortedData = books.sort(
          (a, b) => Number(b.price) - Number(a.price)
        );
        return {
          ...state,
          books: [...sortedData],
        };
      }
      break;

    case "CATEGORY_CHECKBOX":
      if (action.payload) {
        const books =
          state.searchResults.length > 0 ? state.searchResults : state.books;
        const filteredCategory = books.filter(
          (book) => book.categoryName === action.value
        );

        if (state.searchResults.length > 0) {
          return {
            ...state,
            searchResults: [...filteredCategory],
          };
        } else {
          return {
            ...state,
            books: [...filteredCategory],
          };
        }
      } else {
        if (state.searchResults.length > 0) {
          return { ...state, searchResults: [...state.initialBooks] };
        } else {
          return {
            ...state,
            books: [...state.initialBooks],
          };
        }
      }

    case "RESET_FILTERS":
      return { ...state, books: [...state.initialBooks] };

    case "LOGIN":
      return { ...state, isLoggedIn: !state.isLoggedIn };
    case "LOGOUT":
      return { ...state, isLoggedIn: !state.isLoggedIn };

    case "LOGIN_CREDS":
      return {
        ...state,
        loginCreds: {
          email: action.payload_email,
          password: action.payload_password,
        },
      };

    case "SIGNUP_CREDS":
      return {
        ...state,
        signupCreds: { ...action.payload },
      };

    case "SIGNUP_USER":
      return { ...state, signupUserCreds: { ...action.payload } };

    case "TEST_LOGIN":
      return {
        ...state,
        loginCreds: { email: "amulyachahal@gmail.com", password: "123456" },
      };

    case "RESET_USER":
      return { ...state, cart: [], wishlist: [] };

    default:
      return { state };
  }
};
