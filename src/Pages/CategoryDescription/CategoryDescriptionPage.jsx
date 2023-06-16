import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { BookContext } from "../../Contexts/BookContext";
import Button from "@mui/material/Button";

const CategoryDescriptionPage = () => {
  const { state, postAddToCartData, postAddToWishListData } = useContext(
    BookContext
  );
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const filteredCategory = state.books.filter(
    (book) => book.categoryName === categoryId
  );

  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: "#ededed" }}>
        <h1>{categoryId.toLocaleUpperCase()}</h1>

        <div>
          <ul>
            {filteredCategory.map((book, index) => {
              const {
                author,
                categoryName,
                id,
                price,
                title,
                _id,
                image,
              } = book;
              return (
                <li
                  key={index}
                  style={{
                    border: "solid 1px white",
                    maxWidth: "15rem",
                    margin: "1rem",
                    padding: "0.5rem",
                    display: "inline-block",
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                  }}
                >
                  <NavLink to={`/productpage/${_id}`}>
                    <img src={image} />
                    <div>{title}</div>
                    <div>{author}</div>
                    <div>{price}</div>
                  </NavLink>
                  <div>
                    {state.inCart[_id] ? (
                      <NavLink to="/cart">
                        <Button style={{ margin: "0.5rem" }} variant="outlined">
                          Go to Cart
                        </Button>
                      </NavLink>
                    ) : (
                      <Button
                        style={{ margin: "0.5rem" }}
                        variant="outlined"
                        onClick={() => {
                          state.isLoggedIn
                            ? postAddToCartData(book)
                            : navigate("/login");
                        }}
                      >
                        ADD TO CART
                      </Button>
                    )}
                    {state.inWishlist[_id] ? (
                      <NavLink to="/wishlist">
                        <Button variant="outlined">GO TO WISHLIST</Button>
                      </NavLink>
                    ) : (
                      <Button
                        variant="outlined"
                        onClick={() => {
                          state.isLoggedIn
                            ? postAddToWishListData(book)
                            : navigate("/login");
                        }}
                      >
                        ADD TO WISHLIST
                      </Button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default CategoryDescriptionPage;
