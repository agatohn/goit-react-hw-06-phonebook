import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import counterReducer from "./counter/counter-reducer";
import phonebookReducer from "./phonebook/phonebook-reducer";

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
