import { combineReducers } from "redux";
import modalReducer from "./module/modalReducer";
import authReducer from "./module/authReducer";

const rootReducer = combineReducers({
  modalReducer,
  authReducer,
});
export default rootReducer;
