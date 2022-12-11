export const GET_ALBUMS = "GET_ALBUMS";
export const SET_SELECTED = "SET_SELECTED";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const SET_ICON = "SET_ICON";

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

      //console.log(data.data);
    }
  };
};

export const setSelected = (song) => {
  return async (dispatch, getState) => {
    dispatch({
      type: SET_SELECTED,
      payload: song,
    });
    dispatch({
      type: SET_ICON,
      payload: false,
    });
  };
};

export const addTofavorites = (clicked) => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_FAVORITES,
      payload: clicked,
    });
    dispatch({
      type: SET_ICON,
      payload: true,
    });

    //console.log(clicked);
  };
};
