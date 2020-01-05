import { GET_FAKE_QUIZZES } from "../actions/types";

const initialState = {
  quizzes: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FAKE_QUIZZES:
      return {
        ...state,
        quizzes: action.payload
      };
    default:
      return state;
  }
};
