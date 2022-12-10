import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { albumReducer } from "../reducers/albumReducer";
import { likedReducer } from "../reducers/likedReducer";
import { selectedReducer } from "../reducers/selectedReducer";

const bigReducer = combineReducers({
  albums: albumReducer,
  selected: selectedReducer,
  liked: likedReducer,
});
const store = configureStore({
  reducer: bigReducer,
});

export default store;
