import postReducer from "./post";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  post: postReducer,
});

export default allReducers;
