import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import CartContextProvider from "./context and reducers/context/CartContext";
import AppProvider from "./context and reducers/context/AppProvider";
import FilterContextProvider from "./context and reducers/context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clintID = process.env.REACT_APP_CLINT_ID;
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clintID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);
