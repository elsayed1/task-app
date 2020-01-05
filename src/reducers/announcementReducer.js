import { GET_FAKE_ANNOUNCEMENT } from "../actions/types";

const initialState = {
  announcements: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FAKE_ANNOUNCEMENT:
      return {
        ...state,
        announcements: action.payload
      };
    default:
      return state;
  }
};
