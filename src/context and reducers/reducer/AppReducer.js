const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      // Set loading state to true
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      // Filter featured products from the API data
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      // Update the state with API data and featured products
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      // Set error state to true and loading state to false in case of API error
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      // Set loading state for a single product to true
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      // Update state with single product data and set loading state to false
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      // Set error state to true and loading state for a single product to false in case of an error
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default AppReducer;
