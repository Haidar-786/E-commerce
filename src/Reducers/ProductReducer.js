const productState = {
  products: [],
};

const productReducer = (state = productState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        product: action.payload,
      };
    case "SELECTED_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
