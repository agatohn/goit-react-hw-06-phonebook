// import types from "./phonebook-types";
import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("phonebook/add", (input) => ({
  payload: {
    id: uuidv4(),
    name: input.name,
    number: input.number,
  },
}));
const getContacts = createAction("phonebook/get");
const deleteContact = createAction("phonebook/delete");
const changeFilter = createAction("phonebook/changeFilter");

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { addContact, deleteContact, changeFilter, getContacts };
