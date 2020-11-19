import { combineReducers } from "redux";
import todos from "./todos";
import authReducer from "./authReducer";
import signupReducer from "../actions/signupReducer"
import userReducer from "./userReducer";
export default combineReducers({
  todos,
  userAuth: authReducer,
  signup:signupReducer,
  userData: userReducer
});