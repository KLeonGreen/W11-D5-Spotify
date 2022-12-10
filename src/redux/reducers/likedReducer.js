import { ADD_FAVORITES } from "../actions";

const initialState = {
  content: [],
};

export const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        //content: [...state.content, action.payload],
        content: [...new Set([...state.content, action.payload])],
      };

    default:
      return state;
  }
};
