import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedInReducer from "./isLoggedIn";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedInReducer
});

export default allReducers