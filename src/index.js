import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import CartContextProvider from "./context and reducers/context/CartContext";
import AppProvider from "./context and reducers/context/AppProvider";
import FilterContextProvider from "./context and reducers/context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-c03rfjum8rdua2ff.us.auth0.com"
    clientId="2ISzTxX2ZZdeJCImrkdeATMIXKV8AnUE"
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
