import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { albumReducer } from "../reducers/albumReducer";

const bigReducer = combineReducers({
  albums: albumReducer,
  //   artists: artistReducer,
});
const store = configureStore({
  reducer: bigReducer,
});

export default store;
