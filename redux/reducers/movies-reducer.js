import { LIST_MOVIES_COMPLETED, LIST_MOVIES_LOADING, ADD_MOVIE_PAGE } from '../actions/movies-actions';

const initialState = {
  loading: true,
  movies: [],
  error: null,
  currentPage: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_MOVIES_COMPLETED:
      return {
        ...state,
        movies: action.movies,
        loading: false,
      };
    case LIST_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_MOVIE_PAGE:
      return {
        ...state,
        movies: [...state.movies, action.movies],
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};
