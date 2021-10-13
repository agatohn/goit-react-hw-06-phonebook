import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";

import phonebookReducer from "./phonebook/phonebook-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const rootReducer = combineReducers({
//   phonebook: phonebookReducer,
// });
// const persistedReducer = persistReducer(phonebookPersistConfig, rootReducer);
const phonebookPersistConfig = {
  key: "phonebook",
  storage,
};

export const store = configureStore({
  reducer: {
    phonebook: persistReducer(phonebookPersistConfig, phonebookReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
