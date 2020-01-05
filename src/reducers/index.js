import { combineReducers } from "redux";

import announcementReducer from "./announcementReducer";
import quizzesReducer from "./quizzesReducer";
export default combineReducers({
  announcements: announcementReducer,
  quizzes: quizzesReducer
});
