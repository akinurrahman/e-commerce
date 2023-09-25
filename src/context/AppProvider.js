import reducer from "../reducer/AppReducer";
import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

// initial state for useReducer
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};
// Actions
const actions = {
  SET_LOADING: "SET_LOADING",
  SET_API_DATA: "SET_API_DATA",
  API_ERROR: "API_ERROR",
  SET_SINGLE_LOADING: "SET_SINGLE_LOADING",
  SET_SINGLE_PRODUCT: "SET_SINGLE_PRODUCT",
  SET_SINGLE_ERROR: "SET_SINGLE_ERROR",
};
const AppProvider = (props) => {
  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: actions.SET_LOADING });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: actions.SET_API_DATA, payload: products });
    } catch (error) {
      dispatch({ type: actions.API_ERROR });
    }
  };

  //  2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: actions.SET_SINGLE_LOADING });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: actions.SET_SINGLE_PRODUCT, payload: singleProduct });
    } catch (error) {
      dispatch({ type: actions.SET_SINGLE_ERROR });
    }
  };

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
export { AppContext, actions };
