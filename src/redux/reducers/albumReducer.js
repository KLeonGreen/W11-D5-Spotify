import { GET_ALBUMS } from "../actions";

const initialState = {
  content: [],
};

export const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
