import { ADD_FAVORITES, ADD_ICON } from "../actions";

const initialState = {
  content: [],
  isLiked: false,
};

export const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        //content: [...state.content, action.payload],
        // let content2 = [...new Set([...state.content, action.payload])],
        content: [...state.content, action.payload].filter((elem, index) => [...state.content, action.payload].indexOf(elem) === index),
      };
    case ADD_ICON:
      return {
        ...state,

        isLiked: action.payload,
      };

    default:
      return state;
  }
};
