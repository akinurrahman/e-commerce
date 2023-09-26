import React, { useContext } from "react";
import GridView from "../components/GridView";
import ListView from "../components/ListView";
import { FilterContext } from "../context/FilterContext";
const ProductList = () => {
  const { filter_products, grid_view } = useContext(FilterContext);
  if (grid_view === true) {
    return <GridView products={filter_products} />;
  } else {
    return <ListView products={filter_products} />;
  }
};

export default ProductList;
