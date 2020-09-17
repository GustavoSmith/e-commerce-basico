import { combineReducers } from "redux";
import ArticuloReducer from "./ArticuloReducer";

const reducers = combineReducers({
 articulos : ArticuloReducer
});
export default reducers;