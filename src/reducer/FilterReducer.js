const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW": {
      return {
        ...state,
        grid_view: true,
      };
    }
    case "SET_LIST_VIEW": {
      return {
        ...state,
        grid_view: false,
      };
    }

    case "SORT_PRODUCTS":
      let sortedProducts = [];

      if (action.payload === "a-z") {
        // Sort products alphabetically from A to Z
        sortedProducts = state.filter_products.slice().sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (action.payload === "z-a") {
        // Sort products alphabetically from Z to A
        sortedProducts = state.filter_products.slice().sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      } else if (action.payload === "Lowest To Highest") {
        sortedProducts = state.filter_products.slice().sort((a, b) => {
          return parseFloat(a.price) - parseFloat(b.price);
        });
      } else if (action.payload === "Highest To Lowest") {
        sortedProducts = state.filter_products.slice().sort((a, b) => {
          return parseFloat(b.price) - parseFloat(a.price);
        });
      } else {
        // No sorting is applied, so use all products in their original order
        sortedProducts = state.all_products.slice();
      }

      return {
        ...state,
        filter_products: sortedProducts,
        selected_value: action.payload,
      };

    default:
      return state;
  }
};
export default FilterReducer;
