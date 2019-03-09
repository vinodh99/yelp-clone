import { GET_DATA, SET_DATA } from "../actionTypes/types";

const initialState = { data: [] };

const yelpReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case SET_DATA:
      return {
        ...state,
        data: [...state.data, ...action.payload]
      };
    default:
      return state;
  }
};
export default yelpReducer;
