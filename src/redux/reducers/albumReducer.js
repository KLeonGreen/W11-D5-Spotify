import { GET_ALBUMS } from "../actions";

const initialState = {
  contents: [],
};

export const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        contents: action.paylaod,
      };
    default:
      return state;
  }
};
