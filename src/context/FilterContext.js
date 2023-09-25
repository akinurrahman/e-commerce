import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/FilterReducer";
import { AppContext } from "./AppProvider";
const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
};
const FilterContextProvider = (props) => {
  const { products } = useContext(AppContext);
  //   console.log(products)
  const [state, dispatch] = useReducer(reducer, initialState);


  // to set grid view
  const setGridView=()=>{
    return dispatch({type:"SET_GRID_VIEW"})
  }

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider value={{ ...state,setGridView }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
export { FilterContext };
