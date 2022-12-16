const initialState = {
  carts: [],
  cost: "",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const productIndex = state.carts.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex >= 0) {
        state.carts[productIndex].quantity += 1;
      } else {
        const tempCart = { ...action.payload, quantity: 1 };
        return {
          ...state,
          carts: [...state.carts, tempCart],
        };
      }
    case "REMOVE_FROM_CART":
      const removeItem = state.carts.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        carts: removeItem,
      };
    case "DELETE_CART":
      return {
        ...state,
        carts: [],
      };
    case "INCREMENT_ITEM":
      const incrementItem = state.carts.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.carts[incrementItem].quantity >= 0) {
        state.carts[incrementItem].quantity += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      }

    case "DECREMENT_ITEM":
      const itemDecrement = state.carts.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.carts[itemDecrement].quantity >= 1) {
        state.carts[itemDecrement].quantity -= 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      }
    case "ITEM_COST":
      return {
        ...state,
        cost: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
