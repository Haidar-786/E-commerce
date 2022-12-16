export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};
export const deleteCart = (item) => {
    return {
      type: "DELETE_CART",
      payload: item,
    };
  };
export const incrementItem = (item) => {
  return {
    type: "INCREMENT_ITEM",
    payload: item,
  };
};

export const decrementItem = (item) => {
  return {
    type: "DECREMENT_ITEM",
    payload: item,
  };
};

export const registerUser = (user) => {
  return {
    type: "REGISTER",
    payload: user,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

export const getProducts = (items) => {
  return {
    type: "GET_PRODUCTS",
    payload: items,
  };
};

export const selectedProduct = (item) => {
  return {
    type: "SELECTED_PRODUCT",
    payload: item,
  };
};

export const itemCost = (item) => {
  return {
    type: "ITEM_COST",
    payload: item,
  };
};

export const categories =(item)=>{
  return {
    type: "CATEGORIES",
    payload: item
  }
}
