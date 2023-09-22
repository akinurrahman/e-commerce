const ProductReducer = (state, action) => {
    switch (action.type) {
      // When loading data, set isLoading to true
      case "LOADING_TRUE":
        return {
          ...state,
          isLoading: true,
        };
  
      // When API data is received, update the state with products
      case "API_DATA":
        // Filter featured products from the received data
        const featuredData = action.payload.filter((currElem) => {
          return currElem.featured === true;
        });
  
        return {
          ...state,
          isLoading: false,
          products: action.payload,
          featuredProducts: featuredData,
        };
  
      // When an API error occurs, set isError to true
      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
  
      // Default case: return the current state unchanged
      default:
        return state;
    }
  };
  
  export default ProductReducer;
  