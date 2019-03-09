import { GET_DATA, SET_DATA } from "../actionTypes/types";

export const getUsers = (value, limit = 20, offset = 0, loadtype = false) => {
  return (dispatch, getState) => {
    fetch(
      `http://localhost:3020/restaurants?name=${value}&limit=${limit}&offset=${offset}`
    )
      .then(res => res.json())
      .then(data => {
        if (loadtype) {
          dispatch({ type: SET_DATA, payload: data });
        } else {
          dispatch({ type: GET_DATA, payload: data });
        }
      });
  };
};
