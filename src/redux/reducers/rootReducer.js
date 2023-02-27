import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import productReducer from "./productReducer";

const rooReducer = combineReducers({
    product:productReducer,
    filter:filterReducer,
})
export default rooReducer;