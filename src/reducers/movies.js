import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR
} from "../actions/types";

const initialState = {
  isLoading: false,
  movies: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_START:
      return { ...state, isLoading: true };
    case GET_MOVIES_SUCCESS:
      return { ...state, movies: action.data, isLoading: false };
    case GET_MOVIES_ERROR:
      return { ...state, isLoading: true };

    default:
      return state;
  }
}
