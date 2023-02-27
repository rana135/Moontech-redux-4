import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import rooReducer from "./reducers/rootReducer";
import cartCounter from "./middleware/cartCounter";
import thunk from "redux-thunk";

const store = createStore(rooReducer, composeWithDevTools(applyMiddleware(cartCounter,thunk,logger)));

export default store;
