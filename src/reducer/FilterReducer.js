const FilterReducer = (state, action) => {
  switch (action.type) {
    // --------Load Filter Products Starts Here ------------------
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    //--------Set Grid View Starts Here--------------------------
    case "SET_GRID_VIEW": {
      return {
        ...state,
        grid_view: true,
      };
    }

    // --------Set List View Starts Here------------------------------
    case "SET_LIST_VIEW": {
      return {
        ...state,
        grid_view: false,
      };
    }

    // --------Sort Products Starts Here--------------------------
    case "SORT_PRODUCTS":
      let sortedProducts = [];

      //action.payload contains the data which is selected for example 'a-z' or 'z-a'
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
          sortedProducts = state.filter_products.slice().sort((a, b) => {
            return parseFloat(a.price) - parseFloat(b.price);
          });
          break;

        case "Highest To Lowest":
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
    // ------------ Sort Products Ends Here ----------------------

    // ------------Update Filter Value Starts Here----------------------
    case "UPADATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    // -----------Filter Products Starts Here-------------------------
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProducts = [...all_products];
      const { category, company, text } = state.filters;
      if (text) {
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.name.toLowerCase().includes(text);
        });
      }

      if (category) {
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.category === category;
        });
      }

      if (category === "All") {
        return {
          ...state,
          filter_products: all_products,
        };
      }

      if (company) {
        tempFilterProducts = tempFilterProducts.filter((currElem) => {
          return currElem.company === company;
        });
      }

      return {
        ...state,
        filter_products: tempFilterProducts,
      };

    default:
      return state;
  }
};
export default FilterReducer;
