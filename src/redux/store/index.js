import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { albumReducer } from "../reducers/albumReducer";
import { likedReducer } from "../reducers/likedReducer";
import { selectedReducer } from "../reducers/selectedReducer";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const bigReducer = combineReducers({
  albums: albumReducer,
  selected: selectedReducer,
  liked: likedReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
