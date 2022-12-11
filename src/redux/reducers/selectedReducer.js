import { HEART_COLOR, SET_ICON, SET_SELECTED } from "../actions";

const initialState = {
  content: {
    artist: {
      name: "Artist",
    },
    album: {
      title: "Default Title",
      cover_medium: "https://cdn.dribbble.com/users/702789/screenshots/16900790/media/628a8bb9f58f4feaea51367fc58b32a3.png?compress=1&resize=400x300&vertical=top",
    },
  },
  heartColor: false,
};

export const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED:
      return {
        ...state,
        content: action.payload,
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
