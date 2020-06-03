import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const intialState = {};
const store = createStore(rootReducer, intialState, composeWithDevTools());

export default store;
