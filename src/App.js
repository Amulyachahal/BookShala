import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/LandingPage/HomePage";
import Mockman from "mockman-js";
import AllProductsPage from "./Pages/AllProducts/AllProductsPage";
import CartPage from "./Pages/Cart/CartPage";
import WishListPage from "./Pages/WishList/WishListPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import CategoryDescriptionPage from "./Pages/CategoryDescription/CategoryDescriptionPage";
import BookDescriptionPage from "./Pages/BookDescription/BookDescriptionPage";
import NoDataFound from "./Pages/Error/NoDataFoundPage";
import SignupPage from "./Pages/Signup/SignupPage";
import LoginPage from "./Pages/Login/LoginPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import RequiresAuth from "./Auth/RequiresAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <CartPage />
            </RequiresAuth>
          }
        />
        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <WishListPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/userprofile"
          element={
            <RequiresAuth>
              <UserProfilePage />
            </RequiresAuth>
          }
        />
        <Route
          path="/category/:categoryId"
          element={<CategoryDescriptionPage />}
        />
        <Route path="/allProducts" element={<AllProductsPage />} />
        <Route path="/nodatafound" element={<NoDataFound />} />
        <Route
          path="/productpage/:productId"
          element={<BookDescriptionPage />}
        />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
