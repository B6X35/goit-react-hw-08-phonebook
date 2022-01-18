import { configureStore, combineReducers } from "@reduxjs/toolkit";
import phoneReducer from "./phonebook/phoneReducer";
import filterReducer from "./filter/filterReducer";
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
import authReducer from "./authorization/authSlice";

const authConfigPersist = {
  key: "token",
  version: 1,
  storage,
  whitelist: ['token']
}

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const rootReducer = combineReducers({
  auth: persistReducer(authConfigPersist, authReducer),
  contacts: phoneReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default store;