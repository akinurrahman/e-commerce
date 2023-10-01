const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      // Load all products and initialize filter options
      let priceArr = action.payload.map((currPrice) => currPrice.price);
      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice: maxPrice,
          price: maxPrice,
        },
      };

    // Set grid view
    case "SET_GRID_VIEW": {
      return {
        ...state,
        grid_view: true,
      };
    }

    // Set List view
    case "SET_LIST_VIEW": {
      return {
        ...state,
        grid_view: false,
      };
    }

    // Sort products based on the selected option
    case "SORT_PRODUCTS":
      let sortedProducts = [];

      switch (action.payload) {
        case "a-z":
          // Sort products alphabetically from A to Z
          sortedProducts = state.filter_products.slice().sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          break;

        case "z-a":
          // Sort products alphabetically from Z to A
          sortedProducts = state.filter_products.slice().sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          break;

        case "Lowest To Highest":
          // Sort products by price from lowest to highest
          sortedProducts = state.filter_products.slice().sort((a, b) => {
            return parseFloat(a.price) - parseFloat(b.price);
          });
          break;

        case "Highest To Lowest":
          // Sort products by price from highest to lowest
          sortedProducts = state.filter_products.slice().sort((a, b) => {
            return parseFloat(b.price) - parseFloat(a.price);
          });
          break;

        default:
          // No sorting is applied, so use all products in their original order
          sortedProducts = state.all_products.slice();
          break;
      }

      return {
        ...state,
        filter_products: sortedProducts,
      };

    // Update filter values based on user input
    case "UPADATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    // Filter products based on filter criteria
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProducts = [...all_products];
      const { category, company, text, color, price } = state.filters;
      if (text) {
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "All") {
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.category === category;
        });
      }

      if (company !== "All") {
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.company === company;
        });
      }
      if (color !== "All") {
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.colors.includes(color);
        });
      }

      if (price) {
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.price <= price;
        });
      }

      return {
        ...state,
        filter_products: tempFilterProducts,
      };

    // Clear all filters and reset to default values
    case "CLEAR_ALL_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          category: "All",
          company: "All",
          color: "All",
          price: state.filters.maxPrice,
        },
      };

    default:
      return state;
  }
};
export default FilterReducer;
