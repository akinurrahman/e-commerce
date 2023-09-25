import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FilterContextProvider from "./context/FilterContext";
import AppProvider from "./context/Productcontex";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </AppProvider>
);
