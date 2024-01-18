import { combineReducers } from "redux";
import modalReducer from "./module/modalReducer";

const rootReducer = combineReducers({
  modalReducer,
});
export default rootReducer;
