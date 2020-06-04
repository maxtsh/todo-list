import { combineReducers } from "redux";

import todoReducer from "./todoReducers";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
