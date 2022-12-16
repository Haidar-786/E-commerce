const userSate = {
  users: null,
};

const userReducer = (state = userSate, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        users: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        users: null,
      };
    default:
      return state;
  }
};

export default userReducer;
