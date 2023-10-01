import reducer from "../reducer/AppReducer";
import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

// Initial state for useReducer
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = (props) => {
  // Use useReducer to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to fetch products from the API
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // Function to fetch a single product from the API
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  // Fetch products from the API when the component mounts
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export { AppContext };
