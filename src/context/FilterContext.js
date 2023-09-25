import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/FilterReducer";
import { AppContext } from "./Productcontex";
const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
};
const FilterContextProvider = (props) => {
  const { products } = useContext(AppContext);
  //   console.log(products)
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider value={{ ...state }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
export { FilterContext };
