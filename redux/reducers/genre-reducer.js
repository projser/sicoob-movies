import { LIST_GENRES_LOADING, LIST_GENRES_COMPLETE } from '../actions/genre-actions';

const initialState = {
  loading: true,
  genres: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_GENRES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LIST_GENRES_COMPLETE:
      return {
        ...state,
        loading: false,
        genres: action.genres,
      };
    default:
      return state;
  }
};
