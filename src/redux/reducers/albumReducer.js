import { ADD_ICON, GET_ALBUMS } from "../actions";

const initialState = {
  content: [],
  isLiked: false,
};

export const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        content: action.payload,
      };

    // case ADD_ICON:
    //   return {
    //     ...state,

    //     isLiked: action.payload,
    //   };
    default:
      return state;
  }
};
