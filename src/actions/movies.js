import axios from "axios";

import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR
} from "./types";

const { REACT_APP_OMDB_URL } = process.env;

export const onGetMoviesStart = () => ({ type: GET_MOVIES_START });
export const onGetMoviesSuccess = data => ({ type: GET_MOVIES_SUCCESS, data });
export const onGetMoviesError = error => ({ type: GET_MOVIES_ERROR, error });

export const getMovies = () => dispatch => {
  dispatch(onGetMoviesStart());

  const search = "Star";
  const url = `${REACT_APP_OMDB_URL}&s=${search}`;

  axios(url)
    .then(({ data: { Search: movies } }) => {
      return dispatch(onGetMoviesSuccess(movies));
    })
    .catch(error => dispatch(onGetMoviesError()));
};
