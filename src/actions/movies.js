import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR
} from "./types";

export const onGetMoviesStart = () => ({ type: GET_MOVIES_START });
export const onGetMoviesSuccess = data => ({ type: GET_MOVIES_SUCCESS, data });
export const onGetMoviesError = error => ({ type: GET_MOVIES_ERROR, error });

export const getMovies = () => dispatch => {
  dispatch(onGetMoviesStart());
  dispatch(onGetMoviesSuccess());
  dispatch(onGetMoviesError());
};
