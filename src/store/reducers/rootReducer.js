import { combineReducers } from "redux";
import yelpReducer from "./yelpReducer";

const rootReducer = combineReducers({
  yelp: yelpReducer
});

export default rootReducer;
