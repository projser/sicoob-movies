import { LIST_MOVIES_COMPLETED, LIST_MOVIES_LOADING, ADD_MOVIE_PAGE, MOVIES_LOADING_NEW_PAGE } from '../actions/movies-actions';

const initialState = {
  loading: true,
  loadingNewPage: false,
  movies: [],
  error: null,
  currentPage: 1,
  shouldAddState: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_MOVIES_COMPLETED:
      return {
        ...state,
        movies: action.movies,
        loading: false,
        shouldAddState: true,
      };
    case LIST_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
        shouldAddState: false,
      };
    case ADD_MOVIE_PAGE:
      return {
        ...state,
        movies: [...state.movies, ...action.movies],
        currentPage: action.currentPage,
        loadingNewPage: true,
      };
    case MOVIES_LOADING_NEW_PAGE:
      return {
        ...state,
        loadingNewPage: true,
      };
    default:
      return state;
  }
};
