export const GET_ALBUMS = "GET_ALBUMS";

export const getSongs = () => {
  return async (dispatch, useState) => {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen");
    if (response.ok) {
      let data = await response.json();
      let albumsArray = data.data;
      dispatch({
        type: GET_ALBUMS,
        payload: albumsArray,
      });
      console.log(data.data);
    }
  };
};
