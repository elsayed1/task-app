import axios from "axios";
import {
  GET_FAKE_ANNOUNCEMENT,
  GET_FAKE_QUIZZES,
  GET_ANNOUNCEMENT,
  GET_QUIZZES,
  GET_ERROR
} from "./types";
// fake dummy data
import { comments, quizzes } from "../data/announcements";
// get fake announcements
export const getFakeAnnouncements = () => dispatch => {
  dispatch({
    type: GET_FAKE_ANNOUNCEMENT,
    payload: comments
  });
};
//get fake quizzes
export const getFakeQuizzes = () => dispatch => {
  dispatch({
    type: GET_FAKE_QUIZZES,
    payload: quizzes
  });
};
// service to get data from fake api
export const announcementService = () => dispatch => {
  axios
    .get("http://test.coligolms.com/api/announcement")
    .then(res => {
      dispatch({
        type: GET_ANNOUNCEMENT,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: null
      });
    });
};
// service to get data from fake api
export const quizzesService = () => dispatch => {
  axios
    .get("http://test.coligolms.com/api/quiz")
    .then(res => {
      dispatch({
        type: GET_QUIZZES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: null
      });
    });
};
