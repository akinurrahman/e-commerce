import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/FilterReducer";
import { AppContext } from "./AppProvider";
const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  selected_value : ""
};
const FilterContextProvider = (props) => {
  const { products } = useContext(AppContext);
  //   console.log(products)
  const [state, dispatch] = useReducer(reducer, initialState);

  // to set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  // to set List view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // handleSorting 
  const handleSorting  =(e)=>{
    const eventValue = e.target.value
    dispatch({type:"SORT_PRODUCTS", payload: eventValue})
  }

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView,handleSorting }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
export { FilterContext };
