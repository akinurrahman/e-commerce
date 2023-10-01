const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Destructure action payload for easier access
      let { id, color, quantity, product } = action.payload;

      // Check if the product already exists in the cart
      let existingProduct = state.cart.find(
        (currElem) => currElem.id === id + color
      );

      if (existingProduct) {
        // If the product exists, update its quantity
        let updatedProduct = state.cart.map((currElem) => {
          if (currElem.id === id + color) {
            // Calculate new quantity, ensuring it doesn't exceed the maximum stock
            let newQuantity = currElem.quantity + quantity;
            if (newQuantity >= currElem.max) {
              newQuantity = currElem.max;
            }

            return {
              ...currElem,
              quantity: newQuantity,
            };
          } else {
            return currElem;
          }
        });

        // Return updated state with the modified cart
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        // If the product is not in the cart, add it
        let cartProduct = {
          id: id + color,
          name: product.name,
          color,
          quantity,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };

        // Return updated state with the new product added to the cart
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "REMOVE_ITEM":
      // Remove the item from the cart based on its ID
      let updatedCart = state.cart.filter((currElem) => {
        return action.payload !== currElem.id;
      });

      // Return updated state with the item removed from the cart
      return {
        ...state,
        cart: [...updatedCart],
      };

    case "CLEAR_ALL_CART":
      // Clear the entire cart
      return {
        ...state,
        cart: [],
      };

    case "SET_INCREMENT":
      // Increment the quantity of a specific item in the cart
      let updatedProduct = state.cart.map((currElem) => {
        if (currElem.id === action.payload) {
          // Calculate new quantity, ensuring it doesn't exceed the maximum stock
          let newQuantity = currElem.quantity + 1;
          if (newQuantity >= currElem.max) {
            newQuantity = currElem.max;
          }

          return {
            ...currElem,
            quantity: newQuantity,
          };
        } else {
          return currElem;
        }
      });

      // Return updated state with the modified cart
      return {
        ...state,
        cart: updatedProduct,
      };

    case "SET_DECREMENT":
      // Decrement the quantity of a specific item in the cart
      let updatedProductDecrement = state.cart.map((currElem) => {
        if (currElem.id === action.payload) {
          // Calculate new quantity, ensuring it doesn't go below 1
          let newQuantity = currElem.quantity - 1;
          if (newQuantity < 1) {
            newQuantity = 1;
          }

          return {
            ...currElem,
            quantity: newQuantity,
          };
        } else {
          return currElem;
        }
      });

      // Return updated state with the modified cart
      return {
        ...state,
        cart: updatedProductDecrement,
      };

    case "CART_TOTAL_QUANTITY":
      // Calculate the total quantity of items in the cart
      let updatedItemValue = state.cart.reduce((inititalVal, currElem) => {
        let { quantity } = currElem;
        inititalVal = inititalVal + quantity;
        return inititalVal;
      }, 0);

      // Return updated state with the total quantity of items in the cart
      return {
        ...state,
        total_quantity: updatedItemValue,
      };

    case "CART_SUB_TOTAL":
      // Calculate the total Amount of items in the cart
      let updatedItemAmount = state.cart.reduce((initialVal, currElem) => {
        let { price, quantity } = currElem;
        initialVal = initialVal + price * quantity;
        return initialVal;
      }, 0);

      // Return updated state with the total amount of items in the cart
      return {
        ...state,
        sub_total: updatedItemAmount,
        total_price: updatedItemAmount + state.shipping_charge,
      };
    default:
      return state;
  }
};

export default CartReducer;
