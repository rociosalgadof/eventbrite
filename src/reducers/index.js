import { combineReducers } from "redux";
import events from "./events";
import venues from "./venues";

export default combineReducers({
  events: events,
  venues: venues,
});
