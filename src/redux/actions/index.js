export const GET_ALBUMS = "GET_ALBUMS";
export const SET_SELECTED = "SET_SELECTED";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const HEART_COLOR = "HEART_COLOR";
export const LIKE_SONG = "LIKE_SONG";

export const getSongs = (search) => {
  return async (dispatch, useState) => {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`);
    if (response.ok) {
      let data = await response.json();
      let albumsArray = data.data;
      dispatch({
        type: GET_ALBUMS,
        payload: albumsArray,
      });
      // dispatch({
      //   type: ADD_ICON,
      //   payload: true,
      // });

      //console.log(data.data);
    }
  };
};

export const setSelected = (song, status) => {
  return async (dispatch, getState) => {
    dispatch({
      type: SET_SELECTED,
      payload: song,
    });
    dispatch({
      type: HEART_COLOR,
      payload: true,
    });
    console.log(status);
  };
};

export const addTofavorites = (clicked) => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_FAVORITES,
      payload: clicked,
    });
    dispatch({
      type: HEART_COLOR,
      payload: true,
    });
    dispatch({
      type: LIKE_SONG,
      payload: true,
    });

    //console.log(clicked);
  };
};
