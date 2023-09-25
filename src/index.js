import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppProvider from "./context/productcontex";
import FilterContextProvider from "./context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </AppProvider>
);
