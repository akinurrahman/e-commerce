import axios from "axios";
import React, { createContext, useEffect, useReducer, useContext } from "react";
import ProductReducer from "../reducer/ProductReducer";

// Create a React context to provide state to components
const AppContext = createContext();

// Define the API URL
const API = `https://api.pujakaitem.com/api/products`;

// Define the initial state for the application
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
};

const AppState = (props) => {
  // Use a reducer to manage state transitions
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  // Define a function to fetch products from the API
  const getProducts = async (url) => {
    // Set loading state to true
    dispatch({ type: "LOADING_TRUE" });

    try {
      // Make an HTTP GET request using Axios
      const res = await axios.get(url);

      // Extract products from the response data
      const products = await res.data;

      // Update the state with the fetched products
      dispatch({ type: "API_DATA", payload: products });
    } catch (error) {
      // Handle API errors by setting isError state
      dispatch({ type: "API_ERROR" });
    }
  };

  // Use useEffect to fetch products when the component mounts
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    // Provide the state to child components using the context
    <AppContext.Provider value={{ ...state }}>
      {props.children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppState, AppContext, useProductContext };
