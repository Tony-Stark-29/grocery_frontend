import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { GroceryContextProvider } from "./contexts/Grocery.js";
import { UserContextProvider } from "./contexts/User.js";
import { CartContextProvider } from "./contexts/Cart.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GroceryContextProvider>
        <UserContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </UserContextProvider>
      </GroceryContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
