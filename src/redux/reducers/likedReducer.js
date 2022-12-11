import { ADD_FAVORITES, ADD_ICON, HEART_COLOR, LIKE_SONG } from "../actions";

const initialState = {
  content: [],
  //isLiked: false,
  heartColor: false,
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
    case LIKE_SONG:
      return {
        ...state,

        isLiked: action.payload,
      };

    case HEART_COLOR:
      return {
        ...state,
        heartColor: action.payload,
      };

    default:
      return state;
  }
};
