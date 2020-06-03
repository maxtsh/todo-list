import { combineReducers } from "redux";

import todoReducer from "./todoReducers";

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
