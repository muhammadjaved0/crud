import  postReducer from "./post";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    post : postReducer,
    isLogged : loggedReducer
});

export default allReducers;