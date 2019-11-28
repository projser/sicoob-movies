import API_URL from '../../settings';

export const LIST_MOVIES_LOADING = 'LIST_MOVIES_LOADING';
export const GET_MOVIES_LOADING = 'GET_MOVIES_LOADING';
export const GET_MOVIE = 'GET_MOVIE';
export const MOVIES_LOADING_NEW_PAGE = 'MOVIES_LOADING_NEW_PAGE';
export const LIST_MOVIES_COMPLETED = 'LIST_MOVIES_COMPLETED';
export const LIST_MOVIES_ERROR = 'LIST_MOVIES_ERROR';
export const ADD_MOVIE_PAGE = 'ADD_MOVIE_PAGE';

export const listMoviesLoading = () => ({
  type: LIST_MOVIES_LOADING,
});

export const getMoviesLoading = () => ({
  type: GET_MOVIES_LOADING,
});

export const listMoviesNewPage = () => ({
  type: MOVIES_LOADING_NEW_PAGE,
});

export const listCompleted = (movies) => ({
  type: LIST_MOVIES_COMPLETED,
  movies,
});

export const addNewMovies = (currentPage, movies) => ({
  type: ADD_MOVIE_PAGE,
  movies,
  currentPage,
});

export const getMovieAction = (movie) => ({
  type: GET_MOVIE,
  movie,
});

export const listMovies = () => async (dispatch) => {
  dispatch(listMoviesLoading());
  const response = await fetch(
    `${API_URL}movies?page=1`,
  );
  const result = await response.json();
  dispatch(listCompleted(result.results));
};

export const addMovies = (oldPage) => async (dispatch) => {
  dispatch(listMoviesNewPage());
  const page = oldPage + 1;
  const response = await fetch(
    `${API_URL}movies?page=${page}`,
  );
  const result = await response.json();
  dispatch(addNewMovies(page, result.results));
};
