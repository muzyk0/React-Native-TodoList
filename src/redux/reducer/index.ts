import { combineReducers } from "redux";
import toDoReducer from "./TodoReducer";

const rootReducer = combineReducers({
    toDoReducer: toDoReducer,
});

export default rootReducer;
