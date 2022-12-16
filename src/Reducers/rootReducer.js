import { combineReducers } from "redux";

import cartReducer from "./CartReducer";
import userReducer from "./UserReducer";
import productReducer from "./ProductReducer";
// import categoryReducer from "./CategoryReducer";

const rootReducer = combineReducers({
     cartReducer,
     userReducer,
     productReducer,
     // categoryReducer,
});

export default rootReducer;