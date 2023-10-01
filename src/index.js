import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import FilterContextProvider from "./context/FilterContext";

import CartContextProvider from "./context and reducers/context/CartContext";
import AppProvider from "./context and reducers/context/AppProvider";
import FilterContextProvider from "./context and reducers/context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <FilterContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </FilterContextProvider>
  </AppProvider>
);
