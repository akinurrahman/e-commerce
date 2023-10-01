import { createContext, useEffect, useReducer } from "react";
import CartReducer from "../reducer/CartReducer";
const CartContext = createContext();

// Function to retrieve cart data from local storage
const getLocalCartData = () => {
  let localCartData = localStorage.getItem("Shoppy cart items");
  if (localCartData === null) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

// Initial state for the cart context
const initialState = {
  cart: getLocalCartData(),
  total_quantity: 0,
  sub_total: 0,
  shipping_charge: 0,
  total_price: 0,
};
const CartContextProvider = (props) => {
  // Use reducer to manage state
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // Function to add an item to the cart
  const AddToCart = (id, color, quantity, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, quantity, product },
    });
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // Function to clear the entire cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_ALL_CART" });
  };

  // Function to increment the quantity of a cart item
  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // Function to decrement the quantity of a cart item
  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  useEffect(() => {
    // Dispatch the action to calculate the total quantity
    dispatch({ type: "CART_TOTAL_QUANTITY" });

    // Dispatch the action to calculate the subtotal
    dispatch({ type: "CART_SUB_TOTAL" });

    // Store the updated cart state in local storage
    localStorage.setItem("Shoppy cart items", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        AddToCart,
        removeItem,
        clearCart,
        setIncrement,
        setDecrement,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
export { CartContext };
