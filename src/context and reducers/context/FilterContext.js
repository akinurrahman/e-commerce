import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/FilterReducer";
import { AppContext } from "./AppProvider";
const FilterContext = createContext();

// Initial state for useReducer
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  filters: {
    text: "",
    category: "All",
    company: "All",
    color: "All",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};
const FilterContextProvider = (props) => {
  const { products } = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  // Function to set list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // Function to handle product sorting
  const handleSorting = (e) => {
    const eventValue = e.target.value;
    dispatch({ type: "SORT_PRODUCTS", payload: eventValue });
  };

  // Function to clear all filters
  const clearFilters = () => {
    dispatch({ type: "CLEAR_ALL_FILTER" });
  };

  // Function to update filter values
  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: "UPADATE_FILTER_VALUE", payload: { name, value } });
  };

  // Effect to filter and sort products based on state changes
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCT" });
  }, [products, state.filters]);

  // Effect to load all the products
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        handleSorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
export { FilterContext };
