import { combineReducers } from "redux";
// import types from "./phonebook-types";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions";

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const contacts = [...state, payload];
    // localStorage.setItem("contacts", JSON.stringify(contacts));
    return contacts;
  },
  [actions.deleteContact]: (state, { payload }) => {
    const contacts = state.filter(({ id }) => id !== payload);
    // localStorage.setItem("contacts", JSON.stringify([...contacts]));
    return [...contacts];
  },

  // [actions.getContacts]: () => {
  //   const contacts = JSON.parse(localStorage.getItem("contacts"));
  //   return [...contacts];
  // },
});
const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
