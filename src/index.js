import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { BookProvider } from "./Contexts/BookContext";

// Call make Server
makeServer();

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <BookProvider>
//         <App />
//       </BookProvider>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <BookProvider>
        <App />
      </BookProvider>
    </Router>
  </React.StrictMode>
);
