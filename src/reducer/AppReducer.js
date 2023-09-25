import { actions } from "../context/AppProvider";
const AppReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case actions.SET_API_DATA:
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case actions.API_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actions.SET_SINGLE_LOADING:
      return {
        ...state,
        isSingleLoading: true,
      };

    case actions.SET_SINGLE_PRODUCT:
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case actions.SET_SINGLE_ERROR:
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
