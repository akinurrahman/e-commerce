import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/FilterReducer";
import { AppContext } from "./AppProvider";
const FilterContext = createContext();

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

  // to set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  // to set List view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // handleSorting
  const handleSorting = (e) => {
    const eventValue = e.target.value;
    dispatch({ type: "SORT_PRODUCTS", payload: eventValue });
  };

  // updateFilterValue
  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: "UPADATE_FILTER_VALUE", payload: { name, value } });
  };

  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCT" });
  }, [products, state.filters]);

  // to load all the products
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
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
export { FilterContext };
